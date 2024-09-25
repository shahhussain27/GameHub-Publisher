import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import { connectToDB } from "@/lib/mongoDB/mongoose";
import Product from "@/lib/models/Product";

interface UserSession {
  user: {
    name: string;
    email: string;
  };
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session: UserSession | null = await getServerSession(authOptions);

    if (!session) {
      return new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
      });
    }

    await connectToDB();

    let products = await Product.find({ userEmail: session.user.email });
    if (!products) {
      return new Response(JSON.stringify({ message: "Not Found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify({ data: products }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
