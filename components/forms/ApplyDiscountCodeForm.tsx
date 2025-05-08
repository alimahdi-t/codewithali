import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ApplyDiscountCodeSchema } from "@/schema/apply-discount-code.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/common/Loader";
import { useTransition } from "react";
import { applyDiscountCodeAction } from "@/actions/discount-codes/applyDiscountCode";
import { toast } from "sonner";

export const ApplyDiscountCodeForm = () => {
  const [isPending, startTransition] = useTransition();
  const FormSchema = ApplyDiscountCodeSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onSubmit",
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data);

    startTransition(() => {
      // simulate API call
      applyDiscountCodeAction(data).then((response) => {
        if (response.error) {
          form.setError("code", {
            type: "manual",
            message: response.error,
          });
        }

        if (response.success) {
          form.reset();
          toast.success(response.success);
          // You could show a toast or update state with discount info
        }
      });
    });
  };

  return (
    <div className="flex justify-center">
      <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="w-full flex gap-2 items-center mt-2">
                      <Input
                        type="text"
                        placeholder="مثلاً: SUMMER2025"
                        className="leading-6"
                        {...field}
                      />
                      <Button
                        disabled={!form.formState.isValid}
                        type="submit"
                        className="flex justify-self-end"
                      >
                        {isPending ? <Loader /> : "ثبت"}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};