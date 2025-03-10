import { CreateCourseSchema } from "@/schema/create-course.schema";
import { z } from "zod";

export const EditCourseSchema = CreateCourseSchema.extend({
  id: z.number(),
});