import Image from "next/image";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function GoogleSigninButton() {
  // const { data: session } = useSession();

  return (
    <>
      {/* {session} */}
      <button
        className="rounded-lg bg-white border border-stroke  p-[15px] font-medium hover:bg-opacity-50 dark:border-dark-3 dark:hover:bg-opacity-95"
        onClick={() => signIn("google")}
      >
        <Image
          src={"../assets/google.svg"}
          alt="google"
          width={40}
          height={40}
          loading="lazy"
        />
      </button>
      <button
        className="rounded-lg bg-[#7289da] border border-stroke p-[15px] font-medium hover:bg-opacity-50 dark:border-dark-3 dark:hover:bg-opacity-95"
        onClick={() => signIn("discord")}
      >
        <Image
          src={
            "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6918e57475a843f59f_icon_clyde_black_RGB.svg"
          }
          alt="discord"
          width={40}
          height={40}
          className="invert"
          loading="lazy"
        />
      </button>
      <button
        className="rounded-lg border border-stroke bg-dark-2 p-[15px] font-medium hover:bg-opacity-50 dark:border-dark-3  dark:hover:bg-opacity-95"
        onClick={() => signIn("github")}
      >
        <Image
          src={"../assets/github.svg"}
          alt="github"
          width={40}
          height={40}
          loading="lazy"
        />
      </button>
      <button
        className="rounded-lg border border-stroke bg-blue-600  p-[15px] font-medium hover:bg-opacity-50  dark:border-dark-3 dark:hover:bg-opacity-95"
        onClick={() => signIn("facebook")}
      >
        <Image
          src={"/assets/facebook.png"}
          alt="facebook"
          width={40}
          height={40}
          className=""
          loading="lazy"
        />
      </button>
      <button
        className="rounded-lg border border-stroke bg-gray-2 p-[15px] font-medium hover:bg-opacity-50 dark:border-dark-3  dark:hover:bg-opacity-95"
        onClick={() => signIn("twitch")}
      >
        <Image
          src={"https://www.vectorlogo.zone/logos/twitch/twitch-icon.svg"}
          alt="twitch"
          width={40}
          height={40}
          loading="lazy"
        />
      </button>
    </>
  );
}
