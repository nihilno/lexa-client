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
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Edit2, Eraser, FilePlus, XCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function FormDrawer({ title, icon }: FormDrawerProps) {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fromStreet: "",
      fromCity: "",
      fromPostCode: "",
      fromCountry: "",

      toName: "",
      toEmail: "",
      toStreet: "",
      toCity: "",
      toPostCode: "",
      toCountry: "",

      issueDate: undefined,
      paymentTerms: "Net 1",
      projectDescription: "",
      items: [] as FormSchemaType["items"],
    },
    mode: "onBlur",
  });

  function onSubmit(formData: FormSchemaType) {
    console.log(formData);
    toast.success("Form submitted");
    // issue date to iso stting
  }

  return (
    <Drawer direction="left" handleOnly={true}>
      <DrawerTrigger asChild>
        <Button
          type="button"
          size="lg"
          className="dark:bg-foreground/6 dark:text-foreground dark:hover:bg-foreground/10 focus:ring-foreground/20 bg-foreground/80 w-full rounded-full backdrop-blur-2xl focus:ring-2 md:w-auto dark:outline"
          aria-label={title ?? "Open Form"}
        >
          {icon ?? <Edit2 className="size-5" />} {title ?? "Open Form"}{" "}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="bg-angled-lines border-b shadow">
          <DrawerTitle className="flex items-center gap-2">
            <FilePlus />
            New Invoice
          </DrawerTitle>
          <DrawerDescription>
            Create a new invoice using the form below.
          </DrawerDescription>
        </DrawerHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="no-scrollbar mt-4 overflow-y-auto bg-[radial-gradient(25%_256px_at_50%_50%,theme(backgroundColor.white/10%),transparent)] py-4"
          >
            <FormUpsert form={form} />

            <DrawerFooter className="bg-angled-lines mt-4 border-t pt-4">
              <Button type="submit">
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
