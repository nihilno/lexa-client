import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PAYMENT_TERMS } from "@/constants";
import type { FormSchemaType } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ChevronDownIcon, FileText } from "lucide-react";
import type { useForm } from "react-hook-form";

function DataProjectDetails({
  form,
}: {
  form: ReturnType<typeof useForm<FormSchemaType>>;
}) {
  return (
    <>
      <div className="mt-12 grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="issueDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-muted-foreground text-xs">
                Issue Date
              </FormLabel>

              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-between text-left text-xs font-normal sm:text-sm!",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value ? format(field.value, "PPP") : "Pick a date"}
                      <ChevronDownIcon className="h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>

                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(date) => field.onChange(date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
        <FormField
          name="paymentTerms"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground text-xs">
                Payment Terms
              </FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="relative w-full text-xs sm:text-sm!">
                    <SelectValue placeholder="Net 1" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {PAYMENT_TERMS.map((term) => (
                    <SelectItem key={term} value={term}>
                      {term}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      </div>
      <FormField
        name="projectDescription"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-muted-foreground text-xs">
              Project Description
            </FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  {...field}
                  placeholder="Graphic Design Service"
                  className="hover:border-foreground/25 pl-10 text-xs transition sm:text-sm!"
                />
                <div className="bg-foreground/10 absolute top-1/2 left-0 grid h-full w-8 -translate-y-1/2 place-items-center">
                  <FileText className="size-4" />
                </div>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
}

export default DataProjectDetails;
