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
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Loader from "@/components/common/Loader";
import { CreateCommentSchema } from "@/schema/create-comment.schema";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { createComment } from "@/actions/comments/create-comment.action";

type CommentFormProps =
  | { courseId: number; postId?: never }
  | { postId: number; courseId?: never };

export const CommentForm = ({ courseId, postId }: CommentFormProps) => {
  const user = useCurrentUser();
  const FormSchema = CreateCommentSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onSubmit",
    defaultValues: {
      courseId,
      postId,
      parentId: undefined,
      content: "",
      authorId: Number(user?.id),
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    await createComment(data).then((response) => {
      if (response.error) {
        toast.error(response.error);
      }
      if (response.success) {
        toast.success(response.success);
        form.reset();
      }
    });
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex items-center gap-1.5">
            <Avatar>
              <AvatarImage src={user?.image} />
              <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <p className="text-sm font-normal">{user?.name}</p>
          </div>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel></FormLabel>
                <FormControl>
                  <Textarea
                    className="leading-6 min-h-48"
                    {...field}
                    placeholder="نظر خود را بنویسید ..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <Button
              // disabled={!form.formState.isValid}
              type="submit"
            >
              {form.formState.isSubmitting ? <Loader /> : "ارسال نظر"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};