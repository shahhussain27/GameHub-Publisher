import { authOptions } from "@/lib/utils/authOptions";
import NextAuth from "next-auth";

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
