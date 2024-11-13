import { NextApiRequest, NextApiResponse } from "next";
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

export async function GET(req: any, res: NextApiResponse) {
  try {
    const session: UserSession | null = await getServerSession(handler);

    if (!session) {
      return new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
      });
    }

    await connectToDB();

    let paymentSum = 0;
    let downloadCount = 0;

    let products = await Product.find({ userEmail: session.user.email }).sort({
      createdAt: -1,
    });

    if (!products) {
      return new Response(JSON.stringify({ message: "Not Found" }), {
        status: 404,
      });
    }

    products.forEach((product) => {
      if (product.productTotalDownloads) {
        downloadCount += Number(product.productTotalDownloads);
      }
      if (product.productTotalRevenueAmount) {
        paymentSum += Number(product.productTotalRevenueAmount);
      }
    });

    return new Response(
      JSON.stringify({
        data: products,
        totalDownloads: downloadCount,
        totalRevenueAmount: paymentSum,
      }),
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
