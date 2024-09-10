"use client";
import Link from "next/link";
import React from "react";
import SigninButtons from "../SigninButtons";
import SigninWithPassword from "../SigninWithPassword";

export default function Signin() {
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center">
        <SigninButtons />
      </div>
      {/* google*,github*,xboxX,steamX, twitch* */}

      <div className="my-6 flex items-center justify-center">
        <span className="block w-full bg-stroke dark:bg-dark-3/40"></span>
        <div className="block w-full min-w-fit bg-white px-3 text-center font-medium rounded-xl dark:bg-gray-dark/40">
          Or sign in with email
        </div>
        <span className="block h-px w-full bg-stroke dark:bg-dark-3/40"></span>
      </div>

      <div>
        <SigninWithPassword />
      </div>

      <div className="mt-6 text-center">
        <p>
          Don’t have any account?{" "}
          <Link href="/auth/signup" className="text-primary">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}
