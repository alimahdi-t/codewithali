"use client";
import { useFormStatus } from "@/hooks/use-form-status";
import { SignInSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginForm = () => {
  const { success, setSuccess, error, setError } = useFormStatus();

  const FormSchema = SignInSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    // const response = await authorize({});
  };

  return <div>Login Form</div>;
};