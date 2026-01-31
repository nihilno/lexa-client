import CTAButton from "@/components/buttons/cta-button";
import { Badge } from "@/components/ui/badge";
import { CircleCheck, Clock, Edit2, Trash2 } from "lucide-react";

function InvoiceActions() {
  return (
    <div className="bg-card/75 flex w-full items-center justify-between rounded-xl border border-dashed p-2">
      <Badge className="h-10 animate-pulse px-3 text-base">
        {/* pending: clock, paid: checkcircle, draft: hourglass  */}
        <Clock className="size-6!" />
        Pending
      </Badge>
      <div className="space-x-4">
        <CTAButton
          label="Mark as Paid"
          icon={<CircleCheck className="size-5" />}
        />
        <CTAButton label="Edit" icon={<Edit2 className="size-5" />} />
        <CTAButton label="Delete" icon={<Trash2 className="size-5" />} />
      </div>
    </div>
  );
}

export default InvoiceActions;
