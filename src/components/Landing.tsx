import React from "react";
import logoW from "../../public/assets/gamehubW.png";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#020D1A] text-white">
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center p-8 gap-12">
        <div className="w-full max-w-md lg:w-1/2">
          <svg viewBox="0 0 200 200" className="w-full h-auto">
            <rect
              x="40"
              y="40"
              width="120"
              height="120"
              fill="#1A1A2E"
              className="animate-pulse"
            />
            <rect x="50" y="50" width="100" height="80" fill="#4A90E2" />
            <circle
              cx="160"
              cy="150"
              r="20"
              fill="#50E3C2"
              className="animate-bounce "
            />
            <path d="M30 170 L50 130 L70 170 Z" fill="#FF00FF" />
            <path d="M130 30 L150 10 L170 30 Z" fill="#50E3C2" />
            <path d="M10 70 L30 50 L50 70 Z" fill="#FF00FF" />
          </svg>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <Image
            width={60}
            height={60}
            src={logoW}
            alt="Logo"
            priority
            className="w-24 h-24 mb-8"
            style={{ width: "auto", height: "auto" }}
          />

          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Now open to all developers and publishers
          </h1>
          <p className="text-lg mb-8 text-gray-300">
            Start distributing PC & Mobile games on the GameHub Store with our
            new self-service publishing tools.
          </p>
          <Link href={"/auth/signin"}>
            <button className="bg-white text-[#0E0E1E] hover:bg-gray-200 font-bold py-2.5 px-6 rounded">
              SIGN UP TODAY
            </button>
          </Link>
        </div>
      </div>
      <footer className="text-center p-4 text-sm text-gray-500">
        © 2024 GameHub, Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default Landing;
