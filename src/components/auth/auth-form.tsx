import { Form } from "@/components/ui/form";
import { authClient } from "@/lib/auth";
import type { LoginSchemaType, RegisterSchemaType } from "@/lib/schema";
import { LoginSchema, RegisterSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { toast } from "sonner";
import DataCredentials from "./data-credentials";

export function RegisterForm() {
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "Maciej",
      email: "maciej.polowy1@gmail.com",
      password: "test123123",
    },
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/invoices";

  async function handleSubmit(formData: RegisterSchemaType) {
    try {
      const { error, data } = await authClient.signUp.email({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      if (error) {
        toast.error(error.message || "Something went wrong during Sign up.");
        return;
      }

      toast.success(
        `Hello ${data.user.name || "there"}, your account has been created!`,
        {
          duration: 7000,
        },
      );
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Sign up error:", error);
      toast.error("An unexpected error occurred during Sign up.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-2">
        <p className="text-muted-foreground text-start text-xs">
          To create an account, please provide your name as you would like it to
          appear on your profile.
        </p>
        <DataCredentials form={form} />
      </form>
    </Form>
  );
}

export function LoginForm() {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "maciej.polowy1@gmail.com",
      password: "test123123",
      rememberMe: true,
    },
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/invoices";

  async function handleSubmit(formData: LoginSchemaType) {
    try {
      const { error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe,
      });
      if (error) {
        toast.error(error.message || "Something went wrong during Sign in.");
        return;
      }

      navigate(from, { replace: true });
    } catch (error) {
      console.error("Sign in error:", error);
      toast.error("An unexpected error occurred during sign in.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-2">
        <p className="text-muted-foreground text-start text-xs">
          To access your account, please enter the email and password you used
          during registration.
        </p>

        <DataCredentials form={form} isLogin={true} />
      </form>
    </Form>
  );
}
