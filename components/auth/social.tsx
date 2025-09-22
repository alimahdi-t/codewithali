"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";

export const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };

  return (
    <div className="flex flex-col items-center w-full gap-2">
      <Button
        variant="outline"
        size="lg"
        className="cursor-pointer w-full"
        onClick={() => onClick("google")}
      >
        <span className="text-xs flex items-center gap-1">
          <FcGoogle className="w-6 h-6" />
          ورود با Google
        </span>
      </Button>
      {/*<Button*/}
      {/*  variant="outline"*/}
      {/*  size="lg"*/}
      {/*  className="cursor-pointer w-full flex justify-center items-center gap-2"*/}
      {/*  onClick={() => onClick("github")}*/}
      {/*>*/}
      {/*  <span className="text-xs flex items-center gap-1">*/}
      {/*    <FaGithub className="w-6 h-6" />*/}
      {/*    ورود با Github*/}
      {/*  </span>*/}
      {/*</Button>*/}
    </div>
  );
};