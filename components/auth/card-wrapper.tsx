"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";
import { Logo } from "@/components/Logo";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  showLogo?: boolean;
  description?: string;
}

export const CardWrapper = ({
  backButtonHref,
  backButtonLabel,
  headerLabel,
  children,
  showSocial,
  showLogo,
  description,
}: CardWrapperProps) => {
  return (
    <Card className="w-[420px] shadow-md dark:border-none dark:shadow-none max-sm:w-full max-sm:px-8">
      <CardHeader className="text-center font-semibold text-xl flex flex-col justify-center items-center gap-y-4 dark:text-white">
        {showLogo && <Logo />}
        {headerLabel}
        {description && (
          <CardDescription className="text-center font-normal text-sm mx-4 mb-6 text-gray-500">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
};