import prisma from "@/lib/prisma";

export const getUserByEmail = async (email: string) => {
  try {
    return await prisma.user.findUnique({
      where: { email },
    });
  } catch {
    return null;
  }
};

export const getUserById = async (id: number) => {
  try {
    return await prisma.user.findUnique({
      where: { id },
    });
  } catch {
    return null;
  }
};