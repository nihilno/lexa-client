import { Badge } from "@/components/ui/badge";
import { Clock, Trash2 } from "lucide-react";
import DialogButton from "../buttons/dialog-button";
import { FormDrawer } from "../form/form-drawer";

function InvoiceActions() {
  return (
    <div className="bg-card/75 flex w-full items-center justify-between rounded-xl border border-dashed p-2">
      <Badge className="h-10 animate-pulse px-3 text-base">
        {/* pending: clock, paid: checkcircle, draft: hourglass  */}
        <Clock className="size-6!" />
        Pending
      </Badge>
      <div className="space-x-4">
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
