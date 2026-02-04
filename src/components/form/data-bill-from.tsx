import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FormSchemaType } from "@/lib/schema";
import { Building2, Globe, Hash, MapPin } from "lucide-react";
import type { useForm } from "react-hook-form";

function DataBillFrom({
  form,
}: {
  form: ReturnType<typeof useForm<FormSchemaType>>;
}) {
  return (
    <>
      <Label className="mb-4 text-base">Bill From</Label>
      <FormField
        name="fromStreet"
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
                  placeholder="19 Union Terrance"
                  className="hover:border-foreground/25 pl-10 text-xs transition sm:text-sm!"
                />
                <div className="bg-foreground/10 absolute top-1/2 left-0 grid h-full w-8 -translate-y-1/2 place-items-center">
                  <MapPin className="size-4" aria-hidden="true" />
                </div>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <FormField
          name="fromCity"
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
                    placeholder="London"
                    className="hover:border-foreground/25 pl-10 text-xs transition sm:text-sm!"
                  />
                  <div className="bg-foreground/10 absolute top-1/2 left-0 grid h-full w-8 -translate-y-1/2 place-items-center">
                    <Building2 className="size-4" aria-hidden="true" />
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="fromPostCode"
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
                    placeholder="E1 8QS"
                    className="hover:border-foreground/25 pl-10 text-xs transition sm:text-sm!"
                  />
                  <div className="bg-foreground/10 absolute top-1/2 left-0 grid h-full w-8 -translate-y-1/2 place-items-center">
                    <Hash className="size-4" aria-hidden="true" />
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="fromCountry"
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
                    <Globe className="size-4" aria-hidden="true" />
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

export default DataBillFrom;
