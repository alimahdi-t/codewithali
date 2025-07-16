"use client";
import React from "react";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  subTitle?: string;
  children?: React.ReactNode;
}

export const SectionBlock = ({ title, subTitle, children }: Props) => {
  return (
    <section className="my-24">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-1.5">
          <span className="w-1.5 h-6 bg-brand-500 rounded-lg py-2 relative mb-1"></span>
          <h3 className="font-semibold text-xl leading-7">{title}</h3>
        </div>
        {subTitle && <p className="text-gray-500 text-sm mt-1">{subTitle}</p>}
        <Button
          variant="ghost"
          className="text-sm font-semibold text-muted-foreground"
        >
          مشاهده همه
        </Button>
      </div>
      <div className="mt-4">
        <div className="grid gap-4 grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {children}
          {children}
          {children}
        </div>
      </div>
    </section>
  );
};