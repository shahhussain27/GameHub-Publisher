import type { NextApiResponse, NextApiRequest } from "next";
import { getServerSession } from "next-auth/next";
import { GET as handler } from "../../auth/[...nextauth]/route";
import { connectToDB } from "@/lib/mongoDB/mongoose";
import Product from "@/lib/models/Product";

interface UserSession {
  user: {
    name: string;
    email: string;
  };
}

export async function POST(req: any, res: NextApiResponse) {
  try {
    const { productName } = await req.json();

    const session: UserSession | null = await getServerSession(handler);

    if (!session) {
      return new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
      });
    }
    await connectToDB();

    if (!productName) {
      return new Response(JSON.stringify({ message: "Bad Request" }), {
        status: 400,
      });
    }

    const product = await Product.create({
      userEmail: session.user.email,
      productName: productName,
      productPublisher: session.user.name,
      productDeveloper: session.user.name,
      productPrice: 0,
      productPlatform: "Windows",
      productImage: null,
      productImageKey: null,
      productGameEngine: undefined,
      productPoster: null,
      productPosterKey: null,
      productBackPoster: null,
      productBackPosterKey: null,
      productTitle: undefined,
      productFile: null,
      productCarouselImages: [],
      storyHeading: undefined,
      storyContext: undefined,
    });

    return new Response(
      JSON.stringify({ message: "product created", data: product }),
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
