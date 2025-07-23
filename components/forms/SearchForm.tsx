"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SearchFormSchema } from "@/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const SearchForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof SearchFormSchema>>({
    resolver: zodResolver(SearchFormSchema),
    mode: "onChange",
    defaultValues: { searchQuery: "" },
  });

  const onSubmit = (data: z.infer<typeof SearchFormSchema>) => {
    startTransition(() => {
      const query = data.searchQuery.trim();
      const searchParam = query
        ? `?searchQuery=${encodeURIComponent(query)}`
        : "";
      router.push(`/blog${searchParam}`);
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex justify-center items-center background-dark900_light50 rounded-lg shadow-lg border-dark800_light200 dark:shadow-none dark:hover:border-brand-900 p-4"
      >
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <input
                  {...field}
                  type="text"
                  minLength={1}
                  maxLength={100}
                  placeholder="جستجو بین مقالات"
                  className="w-full border-none outline-none placeholder:text-gray-600"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type="submit">
          <HiMagnifyingGlass
            className={`w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer transition hover:scale-110 ${
              isPending && "animate-spin"
            }`}
          />
        </button>
      </form>
    </Form>
  );
};