import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Signin from "@/components/Auth/Signin";
import ThreeDScene from "@/components/ThreeDScene";

export const metadata: Metadata = {
  title: "GameHub Sign In",
  description: "This is Next.js Login Page NextAdmin Dashboard Kit",
};

const SignIn: React.FC = () => {
  return (
    <>
      <main style={{ position: "relative", height: "100vh" }}>
        <ThreeDScene />
        <div
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="p-12 max-sm:p-0">
            <div className="flex items-center justify-center ">
              <div className="w-full xl:w-1/2 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark/40 dark:shadow-card">
                <div className="w-full p-4 sm:p-12.5 xl:p-15">
                  <Link className="flex justify-center mb-12" href="/">
                    <Image
                      className="dark:invert"
                      src={"/assets/gamehubB.png"}
                      alt="Logo"
                      width={80}
                      height={40}
                    />
                  </Link>
                  <Signin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignIn;
