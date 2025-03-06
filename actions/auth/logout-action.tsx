"use server";

import { signOut } from "@/auth";

export const logOut = async () => {
  // Some server actions
  try {
    await signOut();
  } catch (error) {
    throw error;
  }
};