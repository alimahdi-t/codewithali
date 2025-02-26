import { NewCourseSchema } from "@/schema/newCourse.schema";
import { z } from "zod";

export const EditCourseSchema = NewCourseSchema.extend({
  id: z.number(),
});
