import {
  useDeleteInvoice,
  useMarkInvoiceAsPaid,
} from "@/api/invoices/mutations";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, CircleCheck, XCircle } from "lucide-react";
import { toast } from "sonner";

function DialogButton({ title, subtitle, icon, id }: DialogButtonProps) {
  const { mutate: markAsPaid, isPending } = useMarkInvoiceAsPaid();
  const { mutate: deleteInvoice, isPending: isDeleting } = useDeleteInvoice();

  function handleConfirm() {
    if (!id) {
      toast.error("Missing invoice ID");
      return;
    }

    if (title === "Delete") {
      deleteInvoice(id);
      return;
    }

    markAsPaid(id);
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          type="button"
          size="lg"
          className="dark:bg-foreground/6 dark:text-foreground dark:hover:bg-foreground/10 focus:ring-foreground/20 bg-foreground/80 w-full rounded-full backdrop-blur-2xl focus:ring-2 sm:w-auto dark:outline"
          aria-label={title}
        >
          {icon ?? <CircleCheck className="size-5" />} {title ?? "Proceed"}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Do you wish to proceed?{subtitle && <>&nbsp;{subtitle}.</>}
          </AlertDialogDescription>{" "}
        </AlertDialogHeader>
        <AlertDialogFooter className="border-t border-dashed pt-4">
          <AlertDialogCancel>
            <XCircle /> Cancel
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant={title === "Delete" ? "destructive" : "default"}
              onClick={handleConfirm}
              disabled={isPending || isDeleting}
            >
              <CheckCircle />
              Continue
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DialogButton;
