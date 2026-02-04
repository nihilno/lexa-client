import { Form } from "@/components/ui/form";
import { authClient } from "@/lib/auth";
import { AuthSchema, type AuthSchemaType } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import DataCredentials from "./data-credentials";

function AuthForm() {
  const form = useForm<AuthSchemaType>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      name: "Maciej",
      email: "maciej@example.com",
      password: "siema123",
      rememberMe: false,
    },
  });

  async function handleSubmit(formData: AuthSchemaType) {
    console.log(formData);
    const { error } = await authClient.signUp.email({
      email: formData.email ?? "maciej.polowy1@gmail.com",
      password: formData.password ?? "MyP@ssw0rd!",
      name: formData.name ?? "Maciej Polowy",
    });
    toast.success(error?.message);
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

export default AuthForm;
