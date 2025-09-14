"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

type Props = {
  message: string;
  variant?: "error" | "success" | "info";
};

export const ClientToastWrapper = ({ message, variant = "info" }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Avoid hydration double-call by waiting for client-side mount
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && message) {
      if (variant === "error") toast.error(message);
      else if (variant === "success") toast.success(message);
      else toast(message);
    }
  }, [mounted, message, variant]);

  return null;
};