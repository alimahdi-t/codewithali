"use client";

import {
  Card,
  CardContent,
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
}

export const CardWrapper = ({
  backButtonHref,
  backButtonLabel,
  headerLabel,
  children,
  showSocial,
  showLogo,
}: CardWrapperProps) => {
  return (
    <Card className="w-[420px] shadow-md">
      <CardHeader className="text-center font-semibold text-xl flex flex-col justify-center items-center gap-y-4">
        {showLogo && <Logo />}
        {headerLabel}
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