import type { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import { connectToDB } from "@/lib/mongoDB/mongoose";
import DevUser from "@/lib/models/DevUser";


export async function POST(req: any, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { name, email, password } = await req.json();
      await connectToDB();

      const existingUser = await DevUser.findOne({ email });
      if (existingUser) {
        return new Response(
          JSON.stringify({ message: "User already exists" }),
          {
            status: 409,
          }
        );
      }

      const hashedPassword = await hash(password, 12);

      await DevUser.create({
        name,
        email,
        password: hashedPassword,
      });

      return new Response(JSON.stringify({ message: "User created" }), {
        status: 200,
      });
    } catch (error) {
      console.error(error);
      return new Response(
        JSON.stringify({ message: "Internal Server Error" }),
        {
          status: 500,
        }
      );
    }
  } else {
    return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
      status: 405,
    });
  }
}
