"use client";

import React from "react";
import { useTheme } from "@/context/ThemeProvider";
import { themes } from "@/constants/themes";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";

const Theme = ({ className }: { className?: string }) => {
  const { mode, setMode } = useTheme();

  return (
    <Menubar asChild className={`relative border-none shadow-none p-2 `}>
      <MenubarMenu>
        <MenubarTrigger asChild className={`${className} `}>
          <Button variant="ghost" className="cursor-pointer">
            {mode === "light" ? (
              <IconSun width={20} height={20} className="fill-yellow-500" />
            ) : (
              <IconMoon width={20} height={20} className="fill-white" />
            )}
          </Button>
        </MenubarTrigger>
        <MenubarContent>
          {themes.map((item) => (
            <MenubarItem
              key={item.value}
              className="flex items-center gap-4 px-2.5 py-2 cursor-pointer
                         focus:bg-brand-700/10 text-dark300_light950"
              onClick={() => {
                setMode(item.value);
                if (item.value !== "system") {
                  localStorage.theme = item.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
            >
              <p
                className={`body-semibold  ${
                  mode === item.value ? "text-brand-500" : ""
                }`}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;

function IconSun(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7.2 0.8C7.2 0.358203 7.5582 0 8 0C8.4418 0 8.8 0.358203 8.8 0.8V1.6C8.8 2.0418 8.4418 2.4 8 2.4C7.5582 2.4 7.2 2.0418 7.2 1.6V0.8Z" />
      <path d="M12 8C12 10.2092 10.2092 12 8 12C5.79082 12 4 10.2092 4 8C4 5.79082 5.79082 4 8 4C10.2092 4 12 5.79082 12 8Z" />
      <path d="M8 13.6C7.5582 13.6 7.2 13.9582 7.2 14.4V15.2C7.2 15.6418 7.5582 16 8 16C8.4418 16 8.8 15.6418 8.8 15.2V14.4C8.8 13.9582 8.4418 13.6 8 13.6Z" />
      <path d="M2.34316 3.47451C2.03066 3.16201 2.03066 2.65557 2.34316 2.34307C2.65557 2.03066 3.16211 2.03066 3.47451 2.34307L4.04014 2.90879C4.35264 3.22119 4.35264 3.72773 4.04014 4.04014C3.72773 4.35254 3.22119 4.35254 2.90879 4.04014L2.34316 3.47451Z" />
      <path d="M11.9598 11.9598C11.6474 12.2722 11.6474 12.7787 11.9598 13.0911L12.5255 13.6568C12.8379 13.9692 13.3444 13.9692 13.6568 13.6568C13.9692 13.3444 13.9692 12.8379 13.6568 12.5255L13.0911 11.9598C12.7787 11.6474 12.2722 11.6474 11.9598 11.9598Z" />
      <path d="M0.8 8.8C0.358203 8.8 0 8.4418 0 8C0 7.5582 0.358203 7.2 0.8 7.2H1.6C2.0418 7.2 2.4 7.5582 2.4 8C2.4 8.4418 2.0418 8.8 1.6 8.8H0.8Z" />
      <path d="M13.6 8C13.6 8.4418 13.9582 8.8 14.4 8.8H15.2C15.6418 8.8 16 8.4418 16 8C16 7.5582 15.6418 7.2 15.2 7.2H14.4C13.9582 7.2 13.6 7.5582 13.6 8Z" />
      <path d="M2.99863 13.2408C2.66025 13.5248 2.15557 13.4807 1.87158 13.1423C1.5876 12.8038 1.63174 12.2992 1.97021 12.0151L2.58301 11.501C2.92148 11.217 3.42607 11.2611 3.71016 11.5995C3.99414 11.938 3.95 12.4426 3.61152 12.7267L2.99863 13.2408Z" />
      <path d="M12.2898 4.40029C12.5738 4.73877 13.0784 4.78291 13.4169 4.49893L14.0297 3.98467C14.3682 3.70068 14.4123 3.19609 14.1283 2.85762C13.8443 2.51914 13.3397 2.475 13.0013 2.75908L12.3884 3.27324C12.05 3.55723 12.0059 4.06191 12.2898 4.40029Z" />
    </svg>
  );
}

function IconMoon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10.6834 10.6829C13.4171 7.94926 13.4171 3.51707 10.6834 0.783419C10.4027 0.502702 10.5805 -0.0138667 10.9755 0.0255724C13.1923 0.24689 15.3492 1.20659 17.0474 2.90474C20.9526 6.80997 20.9526 13.1416 17.0474 17.0469C13.1421 20.9521 6.81046 20.9521 2.90523 17.0469C1.20708 15.3487 0.247378 13.1918 0.0260606 10.975C-0.0133784 10.58 0.50319 10.4022 0.783907 10.6829C3.51756 13.4166 7.94975 13.4166 10.6834 10.6829Z" />
    </svg>
  );
}