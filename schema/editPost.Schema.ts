import { z } from "zod";
import { CreatePostSchema } from "@/schema";

export const EditPostSchema = CreatePostSchema.extend({
  id: z.number(),
});
