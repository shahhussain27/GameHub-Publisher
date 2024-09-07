"use client"
import React from "react";
import SigninButtons from "../SigninButtons";
import Link from "next/link";
import SignupWithPassword from "../SignupWithPassword";

const Signup = () => {
  return (
    <>
      {" "}
      <div className="flex flex-wrap gap-4 justify-center">
        <SigninButtons />
      </div>
      <div className="my-6 flex items-center justify-center">
        <span className="block h-px w-full bg-stroke dark:bg-dark-3/40"></span>
        <div className="block w-full min-w-fit rounded-xl bg-white px-3 text-center font-medium dark:bg-gray-dark/40">
          Or sign up with email
        </div>
        <span className="block h-px w-full bg-stroke dark:bg-dark-3/40"></span>
      </div>
      <div>
        <SignupWithPassword />
      </div>
      <div className="mt-6 text-center">
        <p>
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-primary">
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
