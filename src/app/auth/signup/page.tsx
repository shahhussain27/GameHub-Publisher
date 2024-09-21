import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Signup from "@/components/Auth/Signup";
import ThreeDScene from "@/components/ThreeDScene";

export const metadata: Metadata = {
  title: "GameHub Sign Up",
  description: "This is Next.js Sign Up Page NextAdmin Dashboard Kit",
};
const SignUp: React.FC = () => {
  return (
    <>
      <main
        style={{ position: "relative", height: "100vh", }}
      >
        <ThreeDScene />
        <div
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="p-12 max-sm:p-0">
            <div className="flex items-center justify-center ">
              <div className="w-full xl:w-1/2 rounded-[10px] bg-white/60 shadow-1 dark:bg-gray-dark/40 dark:shadow-card">
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
                  <Signup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
