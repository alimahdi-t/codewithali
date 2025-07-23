import { z } from "zod";

export const SearchFormSchema = z.object({
  searchQuery: z.string(),
});