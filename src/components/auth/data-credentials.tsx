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
import { AtSign, CheckCircle, Key, Loader2, User } from "lucide-react";
import { type useForm } from "react-hook-form";

function DataCredentials({
  form,
  isLogin = false,
}: {
  form: ReturnType<typeof useForm<any>>;
  isLogin?: boolean;
}) {
  return (
    <>
      <div className="bg-angled-lines min-h-45 space-y-2 rounded-md">
        {!isLogin && (
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
        )}

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

        {isLogin && (
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
        )}
      </div>
      <Button
        className="w-full"
        type="submit"
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting ? (
          <Loader2 className="animate-spin" />
        ) : (
          <>
            Proceed
            <CheckCircle className="size-4!" />
          </>
        )}
      </Button>
    </>
  );
}

export default DataCredentials;
