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

type CommentFormProps = {
  targetId: number;
  targetType: "course" | "post";
};

type PropsWithVisibility = CommentFormProps & {
  showForm?: boolean;
  setShowForm?: (value: boolean) => void;
};

export const CommentForm = ({
  targetId,
  targetType,
  setShowForm,
  showForm = true,
}: PropsWithVisibility) => {
  const user = useCurrentUser();
  const FormSchema = CreateCommentSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onSubmit",
    defaultValues: {
      targetId: targetId,
      targetType,
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
  if (!showForm) return null;
  return (
    <div className="w-full">
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          {/*FIX bug user if not log in*/}
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
              size="sm"
            >
              {form.formState.isSubmitting ? <Loader /> : "ارسال نظر"}
            </Button>{" "}
            {setShowForm && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowForm?.(!showForm)}
              >
                لغو
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};