"use client";
import { NewCourseSchema } from "@/schema/newCourse.schema";
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
import { createCourse } from "@/lib/actions/createCourse.action";
import { useRouter } from "next/navigation";

import Loader from "@/components/common/Loader";
import { useToast } from "@/hooks/use-toast";
import Editor from "@/components/Editor/Editor";

const NewCoursePage = () => {
  const { toast } = useToast();
  const router = useRouter();

  const FormSchema = NewCourseSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
    defaultValues: {
      slug: "",
      title: "",
      imageUrl: "",
      description: "",
      content: "",
      status: "ONGOING",
      level: "BEGINNER",
      price: "",
      instructorId: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      console.log(data);
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
        toast({
          title: course.error,
          variant: "destructive",
        });
      } else {
        console.log("success");
        router.push("/dashboard/admin/courses");
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
                    نام دوره
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
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                    توضیحات
                  </FormLabel>
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
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                    قیمت
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
              name="level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                    سطح دوره
                  </FormLabel>
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
                  <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                    وضعیت دوره
                  </FormLabel>
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
                          {CourseStatusValue.map((status) => (
                            <SelectItem key={status.value} value={status.value}>
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
            {/*TODO: Make this A Select witch fetch the instructors*/}
            <FormField
              control={form.control}
              name="instructorId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                    ایدی مدرس
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

export default NewCoursePage;
