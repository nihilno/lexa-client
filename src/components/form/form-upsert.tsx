import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { type FormSchemaType } from "@/lib/schema";
import { CreditCard, EllipsisIcon, FileText, List, Plus } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import AddItem from "../invoices/add-item";
import DataBillFrom from "./data-bill-from";
import DataBillTo from "./data-bill-to";
import DataProjectDetails from "./data-project-details";

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
      <DataBillFrom form={form} />
      <DataBillTo form={form} />
      <DataProjectDetails form={form} />

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
