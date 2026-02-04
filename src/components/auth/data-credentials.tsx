import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import type { AuthSchemaType } from "@/lib/schema";
import { cn } from "@/lib/utils";
import {
  AtSign,
  CheckCircle,
  ChevronRight,
  ChevronsRight,
  Key,
  User,
} from "lucide-react";
import { useWatch, type useForm } from "react-hook-form";

function DataCredentials({
  form,
}: {
  form: ReturnType<typeof useForm<AuthSchemaType>>;
}) {
  const name = useWatch({ control: form.control, name: "name" });
  const email = useWatch({ control: form.control, name: "email" }).trim();
  const password = useWatch({ control: form.control, name: "password" }).trim();
  const step = !name ? 0 : !email ? 1 : !password ? 2 : 3;

  const message =
    step === 0
      ? "Fill out your name."
      : step === 1
        ? "Now, your email."
        : step === 2
          ? "Create a password."
          : "All set! Submit.";

  const Icon =
    step === 0
      ? ChevronRight
      : step === 1
        ? ChevronsRight
        : step === 2
          ? Key
          : CheckCircle;

  return (
    <div className="bg-angled-lines space-y-2 rounded-md">
      <FormField
        name="name"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <InputGroup className="hover:border-muted-foreground/60 transition">
                <InputGroupInput
                  placeholder="Tell us your name."
                  type="text"
                  {...field}
                  autoComplete="off"
                />
                <InputGroupAddon>
                  <User />
                </InputGroupAddon>
              </InputGroup>
            </FormControl>
          </FormItem>
        )}
      />

      <div
        className={cn(
          "scale-0 opacity-0",
          step > 0 && "slow scale-100 opacity-100",
        )}
      >
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputGroup className="hover:border-muted-foreground/60 transition">
                  <InputGroupInput
                    placeholder="example@example.com"
                    type="email"
                    {...field}
                    autoComplete="off"
                  />
                  <InputGroupAddon>
                    <AtSign />
                  </InputGroupAddon>
                </InputGroup>
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <div
        className={cn(
          "scale-0 opacity-0",
          step > 1 && "slow scale-100 opacity-100",
        )}
      >
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputGroup className="hover:border-muted-foreground/60 transition">
                  <InputGroupInput
                    placeholder="Enter your password."
                    type="password"
                    {...field}
                    autoComplete="off"
                  />
                  <InputGroupAddon>
                    <Key />
                  </InputGroupAddon>
                </InputGroup>
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <FormField
        name="rememberMe"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FieldLabel>
              <Field orientation="horizontal">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="transition"
                  />
                </FormControl>
                <FieldContent>
                  <FieldTitle>Remember me?</FieldTitle>
                  <FieldDescription>
                    Keep me logged in on this device.
                  </FieldDescription>
                </FieldContent>
              </Field>
            </FieldLabel>
          </FormItem>
        )}
      />

      <Button
        className="w-full"
        type={step < 3 ? "button" : "submit"}
        disabled={step < 3}
      >
        {message}
        <Icon className="size-4!" />
      </Button>
    </div>
  );
}

export default DataCredentials;
