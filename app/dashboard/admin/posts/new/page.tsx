"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Editor from "@/components/Editor/Editor";
import { Button } from "@/components/ui/button";
import Loader from "@/components/common/Loader";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { CreatePostSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPost } from "@/lib/actions/createPost";

const NewPostPage = () => {
  const { toast } = useToast();
  const router = useRouter();

  const FormSchema = CreatePostSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
    defaultValues: {
      title: "",
      slug: "",
      imageUrl: "",
      content: "",
      tags: [],
      authorId: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    try {
      // TODO: Remember to add a select component to show only the authors, and the user will be able to select between them
      const response = await createPost({
        title: data.title,
        slug: data.slug,
        imageUrl: data.imageUrl,
        content: data.content,
        authorId: parseInt(data.authorId),
      });

      if ("error" in response) {
        toast({
          title: response.error,
          variant: "destructive",
        });
      } else {
        toast({
          title: "پست با موفقیت ایجاد شد",
          variant: "success",
        });
        router.push("/dashboard/admin/posts");
      }
    } catch (error) {
      {
        console.log(error);
      }
    }
  };
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl px-4">
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                    عنوان
                  </FormLabel>
                  <FormControl>
                    <Input type="text" className="leading-6" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                    Slug
                  </FormLabel>
                  <FormControl>
                    <Input type="text" className="leading-6" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                    محتوا
                  </FormLabel>
                  <FormControl>
                    <Editor field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                    لینک تصویر
                  </FormLabel>
                  <FormControl>
                    <Input type="text" className="leading-6" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/*  TODO: Add functionality for tags*/}
            {/*<FormField*/}
            {/*  control={form.control}*/}
            {/*  name="title"*/}
            {/*  render={({ field }) => (*/}
            {/*    <FormItem>*/}
            {/*      <FormLabel className="block text-sm font-medium leading-6 text-gray-900">*/}
            {/*        برچسپ*/}
            {/*      </FormLabel>*/}
            {/*      <FormControl>*/}
            {/*        <Input type="text" className="leading-6" {...field} />*/}
            {/*      </FormControl>*/}
            {/*      <FormMessage />*/}
            {/*    </FormItem>*/}
            {/*  )}*/}
            {/*/>*/}

            {/*TODO: Make this A Select witch fetch the instructors*/}
            <FormField
              control={form.control}
              name="authorId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                    ایدی نویسنده
                  </FormLabel>
                  <FormControl>
                    <Input type="text" className="leading-6" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <Button
                disabled={!form.formState.isValid}
                type="submit"
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm
                  text-white bg-brand-500 hover:bg-brand-600
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
              >
                {form.formState.isSubmitting ? <Loader /> : "افزودن"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default NewPostPage;
