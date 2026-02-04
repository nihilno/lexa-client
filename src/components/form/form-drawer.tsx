import { useCreateInvoice, useEditInvoice } from "@/api/invoices/mutations";
import FormUpsert from "@/components/form/form-upsert";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Form } from "@/components/ui/form";
import { FormSchema, type FormSchemaType } from "@/lib/schema";
import { getDefaultValues } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Edit2, Eraser, FilePlus, XCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function FormDrawer({ type, invoice, id }: FormDrawerProps) {
  const isInsert = type === "Insert";
  const defaultValues = getDefaultValues(type, invoice);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues,
    mode: "onBlur",
  });

  const { mutate: createInvoice, isPending: isCreating } = useCreateInvoice();
  const { mutate: editInvoice, isPending: isEditing } = useEditInvoice(id!);

  function onSubmit(formData: FormSchemaType) {
    if (isCreating || isEditing) {
      toast.loading("Please wait for the current operation to finish.", {
        id: "invoice-action-in-progress",
      });
      return;
    }

    if (type === "Insert") createInvoice(formData);
    if (type === "Edit" && invoice?.id) editInvoice(formData);
  }

  return (
    <Drawer direction={isInsert ? "left" : "right"} handleOnly={true}>
      <DrawerTrigger asChild disabled={isCreating || isEditing}>
        <Button
          type="button"
          size="lg"
          className="dark:bg-foreground/6 dark:text-foreground dark:hover:bg-foreground/10 focus:ring-foreground/20 bg-foreground/80 w-full rounded-full backdrop-blur-2xl focus:ring-2 sm:w-auto dark:outline"
          aria-label={isInsert ? "New Invoice" : "Edit Invoice"}
        >
          {isInsert ? (
            <FilePlus className="size-5" />
          ) : (
            <Edit2 className="size-5" />
          )}
          {isInsert ? "New Invoice" : "Edit Invoice"}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="bg-angled-lines border-b shadow">
          <DrawerTitle className="flex items-center gap-2">
            {isInsert ? <FilePlus /> : <Edit2 />}
            {isInsert ? "New Invoice" : "Edit Invoice"}
          </DrawerTitle>
          <DrawerDescription>
            {isInsert
              ? "Create a new invoice using the form below."
              : "Edit the invoice using the form below."}
          </DrawerDescription>
        </DrawerHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="no-scrollbar mt-4 overflow-y-auto bg-[radial-gradient(25%_256px_at_50%_50%,theme(backgroundColor.white/10%),transparent)] py-4"
          >
            <FormUpsert form={form} />

            <DrawerFooter className="bg-angled-lines mt-4 border-t pt-4">
              <Button type="submit" disabled={isCreating || isEditing}>
                <CheckCircle />
                Submit
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
              >
                <Eraser />
                Clear
              </Button>
              <DrawerClose asChild>
                <Button variant="outline">
                  <XCircle />
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </Form>
      </DrawerContent>
    </Drawer>
  );
}
