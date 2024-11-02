import type { NextApiResponse, NextApiRequest } from "next";
import { getServerSession } from "next-auth/next";
import { GET as handler } from "../../auth/[...nextauth]/route";
import { connectToDB } from "@/lib/mongoDB/mongoose";
import Product from "@/lib/models/Product";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

interface UserSession {
  user: {
    name: string;
    email: string;
  };
}

const Bucket = process.env.AWS_S3_BUCKET_NAME;
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

export async function DELETE(req: any, res: NextApiResponse) {
  try {
    const { id } = await req.json();
    const session: UserSession | null = await getServerSession(handler);

    if (!session) {
      return new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
      });
    }
    await connectToDB();

    const product = await Product.findById(id);

    if (!product) {
      return new Response(JSON.stringify({ message: "Not Found" }), {
        status: 404,
      });
    }

    if (product.productImageKey) {
      await s3.send(
        new DeleteObjectCommand({ Bucket, Key: product.productImageKey })
      );
    }
    if (product.productFrontPoster) {
      await s3.send(
        new DeleteObjectCommand({ Bucket, Key: product.productFrontPoster })
      );
    }
    if (product.productBackPoster) {
      await s3.send(
        new DeleteObjectCommand({ Bucket, Key: product.productBackPoster })
      );
    }
    if (product.productFileURLKey) {
      await s3.send(
        new DeleteObjectCommand({ Bucket, Key: product.productFileURLKey })
      );
    }

    if (product.productCarouselImages.length > 0) {
      for (let i = 0; i <= product.productCarouselImages.length - 1; i++) {
        await s3.send(
          new DeleteObjectCommand({
            Bucket,
            Key: (product.productCarouselImages[i] as any).fileUrlKey,
          })
        );
      }
    }

    await product.deleteOne();

    return new Response(JSON.stringify({ message: "product deleted" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
