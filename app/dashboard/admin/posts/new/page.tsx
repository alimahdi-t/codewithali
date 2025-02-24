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
import { Button } from "@/components/ui/button";
import Loader from "@/components/common/Loader";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { CreatePostSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPost } from "@/lib/actions/createPost";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Tag } from "@prisma/client";
import { MultiSelect } from "@/components/MultiSelect";
import RichTextEditor from "@/components/RichTextEditor/RichTextEditor";

const NewPostPage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [tags, setTags] = useState<Tag[]>([]);
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
      readingTime: "",
      isEditorPick: false,
    },
  });

  useEffect(() => {
    fetch("/api/tags")
      .then((res) => res.json())
      .then((data) => {
        setTags(data);
        // Todo: ADD error handling and loading
      });
  }, []);

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
        readingTime: parseInt(data.readingTime),
        isEditorPick: false,
        tags: data.tags,
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
                    <RichTextEditor
                      content={field.value}
                      onChangeAction={field.onChange}
                      charCounterMode={"textSize"}
                      charLimit={10000}
                    />
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
              <FormField
                control={form.control}
                name="readingTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                      زمان مورد نیاز برای مطالعه
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
                name="isEditorPick"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                      منتخب سردبیر
                    </FormLabel>
                    <FormControl>
                      <Select
                        dir="rtl"
                        onValueChange={(value) =>
                          field.onChange(value === "true")
                        }
                        value={field.value?.toString()}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="منتخب سردبیر" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>منتخب سردبیر</SelectLabel>
                            <SelectItem value={"true"}>بله</SelectItem>
                            <SelectItem value={"false"}>خیر</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
            </div>

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                    انتخاب برچسپ‌ها
                  </FormLabel>
                  <FormControl>
                    <MultiSelect
                      options={tags.map((tag) => ({
                        label: tag.name,
                        value: tag.id.toString(),
                      }))}
                      onValueChange={(values) =>
                        field.onChange(values.map((v) => parseInt(v)))
                      }
                      defaultValue={field.value?.map((v) => v.toString())}
                      placeholder="انتخاب برپسپ"
                      variant="inverted"
                      animation={2}
                      maxCount={3}
                    />
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
