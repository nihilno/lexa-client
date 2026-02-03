import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PAYMENT_TERMS } from "@/constants";
import { type FormSchemaType } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Building2,
  ChevronDownIcon,
  CreditCard,
  EllipsisIcon,
  FileText,
  Globe,
  Hash,
  List,
  Mail,
  MapPin,
  Plus,
  User,
} from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import AddItem from "../invoices/add-item";

function FormUpsert({
  form,
}: {
  form: ReturnType<typeof useForm<FormSchemaType>>;
}) {
  const { fields, remove, append } = useFieldArray({
    control: form.control,
    name: "items",
  });

  return (
    <div className="space-y-3 px-4">
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
                  <MapPin className="size-4" />
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
                    <Building2 className="size-4" />
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
                    <Hash className="size-4" />
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
                    <Globe className="size-4" />
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </div>
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
      <Label className="mt-8 mb-4 text-base">Item List</Label>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-muted-foreground text-sm">
              <div className="flex items-center gap-1">
                <FileText className="size-4" />
                Item Name
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground text-sm">
              <div className="flex items-center gap-1">
                <List className="size-4" />
                Qty.
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground text-sm">
              <div className="flex items-center gap-1">
                <CreditCard className="size-4" />
                Price
              </div>
            </TableHead>

            <TableHead className="text-muted-foreground flex w-full text-sm">
              <div className="ml-auto flex items-center gap-1">
                <EllipsisIcon className="size-4" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
      </Table>
      {fields.map((field, index) => (
        <AddItem
          key={field.id}
          form={form}
          index={index}
          remove={remove}
          fields={fields}
        />
      ))}
      <Button
        variant="outline"
        type="button"
        className="mt-4 w-full"
        onClick={() => append({ name: "", quantity: 1, price: 0 })}
        aria-label="Add item"
      >
        <Plus className="mr-2 h-4 w-4" />
        Add Item
      </Button>
    </div>
  );
}

export default FormUpsert;
