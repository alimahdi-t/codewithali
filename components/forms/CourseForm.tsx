"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CourseLevels, CourseStatusValue } from "@/constants";
import { useRouter } from "next/navigation";
import Loader from "@/components/common/Loader";
import RichTextEditor from "@/components/RichTextEditor/RichTextEditor";
import { createCourse } from "@/actions/courses/create-course.action";
import { CreateCourseSchema, EditCourseSchema } from "@/schema";
import { editCourse } from "@/actions/courses/edit-course.action";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { User } from "@/prisma/client";
import { useCurrentUser } from "@/hooks/use-current-user";

interface CourseFormProps {
  initialData?: z.infer<typeof EditCourseSchema>; // For edit mode: data for pre-filling the form when editing an existing course
  type: "edit" | "new"; // Defines the form mode: "edit" for editing, "new" for creating a new course
  role: "admin" | "instructor"; // Role of the user: "admin" can choose an instructor, "instructor" is auto-set
  path: string; // Path to navigate after form submission (e.g., home or course list)
}

const CourseForm = ({ initialData, type, path, role }: CourseFormProps) => {
  const router = useRouter();
  const [instructors, setInstructors] = useState<undefined | User[]>();
  const currentUser = useCurrentUser();

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
        console.log(data);
      });
  }, []);

  const FormSchema = type === "edit" ? EditCourseSchema : CreateCourseSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
    defaultValues: initialData || {
      slug: "",
      title: "",
      imageUrl: "",
      description: "",
      content: "",
      status: "ONGOING",
      level: "BEGINNER",
      price: "",
      instructorId: currentUser?.id,
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    if (type === "edit") {
      try {
        if (!initialData?.id) {
          toast.error("خطا: شناسه دوره نامعتبر است");
          return;
        }
        await editCourse({
          id: initialData.id,
          title: data.title,
          slug: data.slug,
          description: data.description,
          content: data.content,
          imageUrl: data.imageUrl,
          status: data.status,
          level: data.level,
          price: parseInt(data.price),
          instructorId: parseInt(data.instructorId),
        });
        toast.success("دوره با موفقیت ایجاد شد");
        router.push(path);
      } catch (error) {
        toast.error("خطا در ویرایش دوره");
      }
      console.log(data);
    } else {
      try {
        const course = await createCourse({
          title: data.title,
          slug: data.slug,
          description: data.description,
          content: data.content,
          imageUrl: data.imageUrl,
          status: data.status,
          level: data.level,
          price: parseInt(data.price),
          instructorId: parseInt(data.instructorId),
        });

        if (course?.error) {
          toast.error(course.error);
        } else {
          toast.success("دوره با موفقیت ایجاد شد");
          router.push(path);
        }
      } catch (error) {
        toast.error("خطا در ایجاد دوره");
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
                  <FormLabel>نام دوره</FormLabel>
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
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>توضیحات</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
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
                      charLimit={20000}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
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
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>قیمت</FormLabel>
                    <FormControl>
                      <Input type="text" className="leading-6" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>سطح دوره</FormLabel>
                    <FormControl>
                      <Select
                        dir="rtl"
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="سطح دوره" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>سطح دوره</SelectLabel>
                            {CourseLevels.map((level) => (
                              <SelectItem key={level.value} value={level.value}>
                                {level.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>وضعیت دوره</FormLabel>
                    <FormControl>
                      <Select
                        dir="rtl"
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="وضعیت دوره" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel> وضعیت دوره</SelectLabel>
                            {CourseStatusValue.map((status) => (
                              <SelectItem
                                key={status.value}
                                value={status.value}
                              >
                                {status.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {role === "admin" && (
              <FormField
                control={form.control}
                name="instructorId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>انتخاب مدرس</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) =>
                          form.setValue("instructorId", value)
                        }
                        defaultValue={currentUser?.id as string}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="انتخاب مدرس" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {instructors?.map((instructor) => (
                              <SelectItem
                                key={instructor.id}
                                value={instructor.id.toString()}
                              >
                                {instructor.firstName.concat(
                                  " ",
                                  instructor.lastName,
                                )}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <div>
              <Button disabled={!form.formState.isValid} type="submit">
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
};

export default CourseForm;