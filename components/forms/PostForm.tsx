"use client";

import { z } from "zod";
import { CreatePostSchema, EditPostSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPostAction } from "@/actions/posts/create-post.action";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
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
import { updatePost } from "@/actions/updatePost.action";
import { toast } from "sonner";
import { useCurrentUser } from "@/hooks/use-current-user";
import { SubmitButton } from "@/components/forms/SubmitButton";

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
  const { user } = useCurrentUser();
  const [isPending, startTransition] = useTransition();

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
      authorId: user?.id,
      readingTime: "",
      isEditorPick: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    startTransition(() => {
      if (type === "edit") {
        if (!initialData?.id) {
          toast.error("خطا: شناسه مقاله نامعتبر است");
          return;
        }
        updatePost({
          id: initialData?.id,
          title: data.title,
          slug: data.slug,
          imageUrl: data.imageUrl,
          content: data.content,
          authorId: parseInt(data.authorId),
          readingTime: parseInt(data.readingTime),
          isEditorPick: data.isEditorPick,
          tags: data.tags,
        }).then((response) => {
          if (response.error) {
            toast.error(response.error);
          } else if (response.success) {
            toast.success(response.success);
            router.push(path);
          }
        });
      } else {
        // TODO: Remember to add a select component to show only the authors, and the user will be able to select between them
        createPostAction({
          title: data.title,
          slug: data.slug,
          imageUrl: data.imageUrl,
          content: data.content,
          authorId: parseInt(data.authorId),
          readingTime: parseInt(data.readingTime),
          isEditorPick: data.isEditorPick,
          tags: data.tags,
        }).then((response) => {
          if (response.error) {
            toast.error(response.error);
          } else if (response.success) {
            toast.success(response.success);
            router.push(path);
          }
        });
      }
    });
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
  if (!user) {
    return null;
  }
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
                        <Input
                          disabled={true}
                          type="text"
                          className="leading-6"
                          {...field}
                        />
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
              <SubmitButton
                pending={isPending}
                label={type === "edit" ? "ویرایش" : "افزودن"}
              />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}