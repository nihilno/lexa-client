import { useSingleInvoice } from "@/api/invoices/queries";
import DialogButton from "@/components/buttons/dialog-button";
import { FormDrawer } from "@/components/form/form-drawer";
import { Trash2 } from "lucide-react";
import Status from "./status";

function InvoiceActions({
  id,
  status,
}: {
  id: string;
  status: Invoice["status"];
}) {
  const { data: invoice } = useSingleInvoice(id);

  return (
    <div className="bg-card/75 flex w-full flex-col items-center justify-between rounded-xl border border-dashed p-2 sm:flex-row md:flex-row">
      <div className="pb-2 sm:pb-0">
        <Status status={status} size="lg" />
      </div>
      <div className="flex space-y-2 space-x-4 border-t border-dashed pt-4 sm:border-0 sm:pt-0">
        {status !== "Paid" && (
          <DialogButton
            id={id}
            title="Mark as Paid"
            subtitle="This action will mark this payment status as paid"
          />
        )}
        <FormDrawer type="Edit" invoice={invoice} id={id} />

        <DialogButton
          id={id}
          title="Delete"
          subtitle="This will permanently delete this invoice from our servers"
          icon={<Trash2 className="size-5" />}
        />
      </div>
    </div>
  );
}

export default InvoiceActions;
