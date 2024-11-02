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

const uploadFile = async (file: any) => {
  const Body = (await file.arrayBuffer()) as Buffer;
  s3.send(new PutObjectCommand({ Bucket, Key: file.name, Body }));
  const src = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${file.name.replace(/ /g, "+")}`;
  return src;
};

export async function PUT(req: any, res: NextApiResponse) {
  try {
    const productData = await req.formData();
    const id = productData.get("id") as String;
    const productImage = productData.get("productImage") as File | null;
    const productImageKey = productData.get("productImageKey");
    const productName = productData.get("productName");
    const productPrice = productData.get("productPrice");
    const productPublisher = productData.get("productPublisher");
    const productDeveloper = productData.get("productDeveloper");
    const productPlatform = productData.get("productPlatform");
    const frontPoster = productData.get("frontPoster") as File | null;
    const frontPosterKey = productData.get("frontPosterKey");
    const backPoster = productData.get("backPoster") as File | null;
    const backPosterKey = productData.get("backPosterKey");
    const title = productData.get("title");
    const productCarouselImages = productData.getAll("productCarouselImages");
    const deleteIndex = productData.get("deleteIndex");
    const productFile = productData.get("productFile") as File | null;
    const productFileURLKey = productData.get("productFileURLKey");

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

    const updateData: any = {};

    if (productImage && productImage instanceof File) {
      if (productImageKey) {
        await s3.send(
          new DeleteObjectCommand({ Bucket, Key: productImageKey })
        );
      }

      let src = await uploadFile(productImage);
      updateData.productImage = src;
      updateData.productImageKey = productImage.name;
    }
    if (productName && productName !== "undefined") {
      updateData.productName = productName;
    }

    if (productPrice && productPrice !== "undefined") {
      console.log("error occur", productPrice);
      updateData.productPrice = Number(productPrice);
    }
    if (productPublisher && productPublisher !== "undefined") {
      updateData.productPublisher = productPublisher;
    }
    if (productDeveloper && productDeveloper !== "undefined") {
      updateData.productDeveloper = productDeveloper;
    }
    if (productPlatform && productPlatform !== "undefined") {
      updateData.productPlatform = productPlatform;
    }
    if (frontPoster && frontPoster instanceof File) {
      if (frontPosterKey) {
        await s3.send(new DeleteObjectCommand({ Bucket, Key: frontPosterKey }));
      }

      let src = await uploadFile(frontPoster);

      updateData.productFrontPoster = src;
      updateData.productFrontPosterKey = frontPoster.name;
    }
    if (backPoster && backPoster instanceof File) {
      if (backPosterKey) {
        await s3.send(new DeleteObjectCommand({ Bucket, Key: backPosterKey }));
      }

      let src = await uploadFile(backPoster);
      updateData.productBackPoster = src;
      updateData.productBackPosterKey = backPoster.name;
    }
    if (title && title !== "undefined") {
      updateData.productTitle = title;
    }

    if (
      (productCarouselImages[0] !== "null" &&
        productCarouselImages.length > 0) ||
      deleteIndex.length > 0
    ) {
      let carouselImages = product.productCarouselImages || [];

      for (let i = 0; i <= carouselImages.length; i++) {
        // pending: for loop not run properly
        if (deleteIndex.includes(i)) {
          await s3.send(
            new DeleteObjectCommand({
              Bucket,
              Key: (product.productCarouselImages[i] as { fileUrlKey: string })
                .fileUrlKey,
            })
          );

          carouselImages = carouselImages.filter((p, index) => index !== i);
        }
      }

      for (let i = 0; i < productCarouselImages.length; i++) {
        if (
          productCarouselImages[i] &&
          productCarouselImages[i] instanceof File
        ) {
          let src = await uploadFile(productCarouselImages[i]);
          carouselImages.push({
            fileUrl: src,
            fileUrlKey: productCarouselImages[i].name,
          });
        }
      }

      updateData.productCarouselImages = carouselImages;
    }

    if (productFile && productFile instanceof File) {
      if (productFileURLKey) {
        await s3.send(
          new DeleteObjectCommand({ Bucket, Key: productFileURLKey })
        );
      }

      let src = await uploadFile(productFile);
      updateData.productFileURL = src;
      updateData.productFileURLKey = productFile.name;
      updateData.productFileName = productFile.name;
      updateData.productFileSize = productFile.size;
      updateData.productFileType = productFile.type;
    }

    let updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: updateData,
      },
      { new: true, runValidators: true }
    ).exec();

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
