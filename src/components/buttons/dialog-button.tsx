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

function DialogButton({ title, subtitle, icon }: DialogButtonProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          type="button"
          size="lg"
          className="dark:bg-foreground/6 dark:text-foreground dark:hover:bg-foreground/10 focus:ring-foreground/20 bg-foreground/80 w-full rounded-full backdrop-blur-2xl focus:ring-2 md:w-auto dark:outline"
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
          <AlertDialogAction>
            <CheckCircle />
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DialogButton;
