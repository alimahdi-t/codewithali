import { CreateCourseSchema } from "@/schema/createCourse.schema";
import { z } from "zod";

export const EditCourseSchema = CreateCourseSchema.extend({
  id: z.number(),
});
