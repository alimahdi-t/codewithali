"use client";

import { z } from "zod";
import { CreatePostSchema, EditPostSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPostAction } from "@/actions/posts/create-post.action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Tag } from "@/prisma/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import RichTextEditor from "@/components/RichTextEditor/RichTextEditor";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MultiSelect } from "@/components/MultiSelect";
import { Button } from "@/components/ui/button";
import Loader from "@/components/common/Loader";
import { updatePost } from "@/actions/updatePost.action";
import { toast } from "sonner";

interface PostFormProps {
  initialData?: z.infer<typeof EditPostSchema>; // For edit mode: data for pre-filling the form when editing an existing post
  type: "edit" | "new"; // Defines the form mode: "edit" for editing, "new" for creating a new post
  role: "admin" | "writer"; // Role of the user: "admin" can choose a writer, "writer" is auto-set
  path: string; // Path to navigate after form submission (e.g., home or course list)
}

export default function PostForm({
  type,
  initialData,
  role,
  path,
}: PostFormProps) {
  const router = useRouter();
  const [tags, setTags] = useState<Tag[]>([]);

  const FormSchema = type === "edit" ? EditPostSchema : CreatePostSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
    defaultValues: initialData || {
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

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    if (type === "edit") {
      if (!initialData?.id) {
        toast.error("خطا: شناسه مقاله نامعتبر است");
        return;
      }
      const response = await updatePost({
        id: initialData?.id,
        title: data.title,
        slug: data.slug,
        imageUrl: data.imageUrl,
        content: data.content,
        authorId: parseInt(data.authorId),
        readingTime: parseInt(data.readingTime),
        isEditorPick: data.isEditorPick,
        tags: data.tags,
      });

      if ("error" in response) {
        toast.error("response.error");
      } else {
        toast.success("پست با موفقیت ویرایش شد");
        router.push(path);
      }
    } else {
      try {
        // TODO: Remember to add a select component to show only the authors, and the user will be able to select between them
        const response = await createPostAction({
          title: data.title,
          slug: data.slug,
          imageUrl: data.imageUrl,
          content: data.content,
          authorId: parseInt(data.authorId),
          readingTime: parseInt(data.readingTime),
          isEditorPick: data.isEditorPick,
          tags: data.tags,
        });

        if ("error" in response) {
          toast.error(response.error);
        } else {
          toast.success("پست با موفقیت ایجاد شد");
          router.push(path);
        }
      } catch (error) {
        {
          console.log(error);
        }
      }
    }
  };

  // const handleInputKeyDown = (
  //   e: React.KeyboardEvent<HTMLInputElement>,
  //   field: any,
  // ) => {
  //   if (e.key === "Enter" && field.name === "tags") {
  //     e.preventDefault();
  //     const tagInput = e.target as HTMLInputElement;
  //     const tagValue = tagInput.value;
  //     console.log(tagValue);
  //     if (tagValue !== "") {
  //       if (tagValue.length > 15) {
  //         return form.setError("tags", {
  //           type: "required",
  //           message: "tags must be less than 15 characters",
  //         });
  //       }
  //       if (!field.value.includes(tagValue as never)) {
  //         form.setValue("tags", [...field.value, tagValue]);
  //         tagInput.value = "";
  //         form.clearErrors("tags");
  //       } else {
  //         form.trigger();
  //       }
  //     }
  //     console.log(form.getValues("tags"));
  //   }
  // };
  //
  // const handleTagRemove = (tag: string, field: any) => {
  //   const newTags = field.value.filter((t: string) => t !== tag);
  //   form.setValue("tags", newTags);
  // };

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
                  <FormLabel>عنوان</FormLabel>
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
                  <FormLabel>Slug</FormLabel>
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
                  <FormLabel>محتوا</FormLabel>
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
                  <FormLabel>لینک تصویر</FormLabel>
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
                    <FormLabel>زمان مورد نیاز برای مطالعه</FormLabel>
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
                    <FormLabel>منتخب سردبیر</FormLabel>
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
              {/*Todo: If writer, id will set automatically */}
              {role === "admin" && (
                <FormField
                  control={form.control}
                  name="authorId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ایدی نویسنده</FormLabel>
                      <FormControl>
                        <Input type="text" className="leading-6" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>انتخاب برچسپ‌ها</FormLabel>
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
                      maxCount={1}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/*<FormField*/}
            {/*  control={form.control}*/}
            {/*  name="tags"*/}
            {/*  render={({ field }) => (*/}
            {/*    <FormItem>*/}
            {/*      <FormLabel className="block text-sm font-medium leading-6 text-gray-900">*/}
            {/*        انتخاب برچسپ‌ها*/}
            {/*      </FormLabel>*/}
            {/*      <FormControl>*/}
            {/*        <Input*/}
            {/*          disabled={field.value && field.value.length >= 3}*/}
            {/*          className="leading-6"*/}
            {/*          placeholder="Add tags..."*/}
            {/*          onKeyDown={(e) => handleInputKeyDown(e, field)}*/}
            {/*        />*/}
            {/*      </FormControl>*/}

            {/*      {field.value && field.value.length > 0 && (*/}
            {/*        <div className="flex flex-start gap-1.5 mt-2.5 text-light-500">*/}
            {/*          {field.value.map((tag: any) => (*/}
            {/*            <Badge*/}
            {/*              key={tag}*/}
            {/*              className="px-4 py-1.5 flex gap-1 items-center"*/}
            {/*              onClick={() => handleTagRemove(tag, field)}*/}
            {/*            >*/}
            {/*              <span>{tag}</span>*/}
            {/*              <XCircle className="w-4 h-4 cursor-pointer object-contain invert-0 dark:invert" />*/}
            {/*            </Badge>*/}
            {/*          ))}*/}
            {/*        </div>*/}
            {/*      )}*/}

            {/*      <FormMessage />*/}
            {/*    </FormItem>*/}
            {/*  )}*/}
            {/*/>*/}

            <div>
              <Button
                disabled={!form.formState.isValid}
                type="submit"
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm
                  text-white bg-brand-500 hover:bg-brand-600
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
              >
                {form.formState.isSubmitting ? (
                  <Loader />
                ) : type === "edit" ? (
                  "ویرایش"
                ) : (
                  "افزودن"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}