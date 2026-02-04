import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FormSchemaType } from "@/lib/schema";
import { Building2, Globe, Hash, Mail, MapPin, User } from "lucide-react";
import type { useForm } from "react-hook-form";

function DataBillTo({
  form,
}: {
  form: ReturnType<typeof useForm<FormSchemaType>>;
}) {
  return (
    <>
      <Label className="mt-8 mb-4 text-base">Bill To</Label>
      <FormField
        name="toName"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-muted-foreground text-xs">
              Client's Name
            </FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  {...field}
                  placeholder="John Doe"
                  className="hover:border-foreground/25 pl-10 text-xs transition sm:text-sm!"
                />
                <div className="bg-foreground/10 absolute top-1/2 left-0 grid h-full w-8 -translate-y-1/2 place-items-center">
                  <User className="size-4" />
                </div>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="toEmail"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-muted-foreground text-xs">
              Client's Email
            </FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  {...field}
                  placeholder="john.doe@example.com"
                  className="hover:border-foreground/25 pl-10 text-xs transition sm:text-sm!"
                />
                <div className="bg-foreground/10 absolute top-1/2 left-0 grid h-full w-8 -translate-y-1/2 place-items-center">
                  <Mail className="size-4" />
                </div>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="toStreet"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-muted-foreground text-xs">
              Street Address
            </FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  {...field}
                  placeholder="84 Church Way"
                  className="hover:border-foreground/25 pl-10 text-xs transition sm:text-sm!"
                />
                <div className="bg-foreground/10 absolute top-1/2 left-0 grid h-full w-8 -translate-y-1/2 place-items-center">
                  <MapPin className="size-4" />
                </div>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <FormField
          name="toCity"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground text-xs">
                City
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    placeholder="Bradford"
                    className="hover:border-foreground/25 pl-10 text-xs transition sm:text-sm!"
                  />
                  <div className="bg-foreground/10 absolute top-1/2 left-0 grid h-full w-8 -translate-y-1/2 place-items-center">
                    <Building2 className="size-4" />
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="toPostCode"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground text-xs">
                Post Code
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    placeholder="BD1 4JP"
                    className="hover:border-foreground/25 pl-10 text-xs transition sm:text-sm!"
                  />
                  <div className="bg-foreground/10 absolute top-1/2 left-0 grid h-full w-8 -translate-y-1/2 place-items-center">
                    <Hash className="size-4" />
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="toCountry"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground text-xs">
                Country
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    placeholder="United Kingdom"
                    className="hover:border-foreground/25 pl-10 text-xs transition sm:text-sm!"
                  />
                  <div className="bg-foreground/10 absolute top-1/2 left-0 grid h-full w-8 -translate-y-1/2 place-items-center">
                    <Globe className="size-4" />
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </>
  );
}

export default DataBillTo;
