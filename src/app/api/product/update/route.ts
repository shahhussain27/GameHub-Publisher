import type { NextApiResponse, NextApiRequest } from "next";
import { getServerSession } from "next-auth/next";
import { GET as handler } from "../../auth/[...nextauth]/route";
import { connectToDB } from "@/lib/mongoDB/mongoose";
import Product from "@/lib/models/Product";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

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

export async function PUT(req: any, res: NextApiResponse) {
  try {
    const productData = await req.formData();

    const id = productData.get("id") as String;
    const productImage = productData.get("productImage");
    const productImageKey = productData.get("productImageKey");
    const productName = productData.get("productName") as String;
    const productPrice = productData.get("productPrice") as String;
    const productPublisher = productData.get("productPublisher") as String;
    const productDeveloper = productData.get("productDeveloper") as String;
    const productPlatform = productData.get("productPlatform") as String;


    const session: UserSession | null = await getServerSession(handler);

    if (!session) {
      return new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
      });
    }
    await connectToDB();

    const updateData: any = {};

    if (productImage) {
      if (productImageKey) {
        await s3.send(new DeleteObjectCommand({ Bucket, Key: productImageKey }));
      }

      const Body = (await productImage.arrayBuffer()) as Buffer;
      s3.send(new PutObjectCommand({ Bucket, Key: productImage.name, Body }));

      const command = new GetObjectCommand({ Bucket, Key: productImage.name });
      const src = await getSignedUrl(s3, command, { expiresIn: 3600 });

      updateData.productImage = src;
      updateData.productImageKey = productImage.name;
    }
    if (productName) updateData.productName = productName;
    if (productPrice) updateData.productPrice = productPrice;
    if (productPublisher) updateData.productPublisher = productPublisher;
    if (productDeveloper) updateData.productDeveloper = productDeveloper;
    if (productPlatform) updateData.productPlatform = productPlatform;

    let updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: updateData,
      },
      { new: true, runValidators: true }
    ).exec();

    if (!updatedProduct) {
      return new Response(JSON.stringify({ message: "Not Found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "product updated", data: updatedProduct }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
