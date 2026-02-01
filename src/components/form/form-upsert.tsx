import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PAYMENT_TERMS } from "@/constants";
import { type FormSchemaType } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Building2,
  CheckSquare,
  ChevronDownIcon,
  Clock,
  CreditCard,
  EllipsisIcon,
  FileText,
  Globe,
  Hash,
  List,
  Mail,
  MapPin,
  PlusIcon,
  User,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
function FormUpsert({
  form,
}: {
  form: ReturnType<typeof useForm<FormSchemaType>>;
}) {
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
                  className="hover:border-foreground/25 pl-10 transition"
                />
                <div className="bg-foreground/10 absolute top-1/2 left-0 grid h-full w-8 -translate-y-1/2 place-items-center">
                  <MapPin className="size-4" />
                </div>
              </div>
            </FormControl>
          </FormItem>
        )}
      />

      <div className="grid grid-cols-3 gap-4">
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
                    className="hover:border-foreground/25 pl-10 transition"
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
                    className="hover:border-foreground/25 pl-10 transition"
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
                    className="hover:border-foreground/25 pl-10 transition"
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
                  className="hover:border-foreground/25 pl-10 transition"
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
                  className="hover:border-foreground/25 pl-10 transition"
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
                  className="hover:border-foreground/25 pl-10 transition"
                />
                <div className="bg-foreground/10 absolute top-1/2 left-0 grid h-full w-8 -translate-y-1/2 place-items-center">
                  <MapPin className="size-4" />
                </div>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
      <div className="grid grid-cols-3 gap-4">
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
                    className="hover:border-foreground/25 pl-10 transition"
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
                    className="hover:border-foreground/25 pl-10 transition"
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
                    className="hover:border-foreground/25 pl-10 transition"
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
                        "w-full justify-between text-left font-normal",
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
                <SelectTrigger className="relative w-full pl-10">
                  <SelectValue placeholder="Net 1" />
                  <div className="bg-foreground/10 absolute top-1/2 left-0 grid h-full w-8 -translate-y-1/2 place-items-center">
                    <Clock className="size-4" />
                  </div>
                </SelectTrigger>
                <FormControl>
                  <SelectContent>
                    {PAYMENT_TERMS.map((term) => (
                      <SelectItem key={term} value={term}>
                        {term}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </FormControl>
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
                  className="hover:border-foreground/25 pl-10 transition"
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
            <TableHead className="text-muted-foreground text-sm">
              <div className="flex items-center gap-1">
                <CheckSquare className="size-4" />
                Total
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground flex w-full text-sm">
              <div className="ml-auto flex items-center gap-1">
                <EllipsisIcon className="size-4" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* <TableRow className="text-foreground/90">
              <TableCell>Banner Design</TableCell>
              <TableCell>1</TableCell>
              <TableCell>$156.00</TableCell>
              <TableCell className="text-right">$156.00</TableCell>
            </TableRow>
            <TableRow className="text-foreground/90">
              <TableCell>Email Design</TableCell>
              <TableCell>2</TableCell>
              <TableCell>$200.00</TableCell>
              <TableCell className="text-right">$400.00</TableCell>
            </TableRow> */}
        </TableBody>
        <TableFooter>
          {/* <TableRow className="font-bold">
              <TableCell colSpan={3}>Amount due</TableCell>
              <TableCell className="text-right">$556.00</TableCell>
            </TableRow> */}
          <TableCell colSpan={5}>
            <Button className="w-full border" type="button" variant="outline">
              <PlusIcon />
            </Button>
          </TableCell>
        </TableFooter>
      </Table>
    </div>
  );
}

export default FormUpsert;
