import { DefaultSession } from "next-auth";
import { Role } from "@prisma/client";

export type ExtendedUser = DefaultSession["user"] & {
  role: Role;
  image: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}