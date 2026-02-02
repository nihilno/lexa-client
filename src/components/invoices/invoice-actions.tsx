import DialogButton from "@/components/buttons/dialog-button";
import { FormDrawer } from "@/components/form/form-drawer";
import { Badge } from "@/components/ui/badge";
import { Clock, Trash2 } from "lucide-react";

function InvoiceActions() {
  return (
    <div className="bg-card/75 flex w-full flex-col items-center justify-between rounded-xl border border-dashed p-2 sm:flex-row md:flex-row">
      <div className="pb-2 sm:pb-0">
        <Badge className="h-10 animate-pulse px-3 text-sm sm:text-base">
          <Clock className="size-5! sm:size-6!" />
          Pending
        </Badge>
      </div>
      <div className="space-y-2 space-x-4 border-t border-dashed pt-4 sm:border-0 sm:pt-0">
        <DialogButton
          title="Mark as Paid"
          subtitle="This action will mark this payment status as paid"
        />

        <FormDrawer title="Edit" />

        <DialogButton
          title="Delete"
          subtitle="This will permanently delete this invoice from our servers"
          icon={<Trash2 className="size-5" />}
        />
      </div>
    </div>
  );
}

export default InvoiceActions;
