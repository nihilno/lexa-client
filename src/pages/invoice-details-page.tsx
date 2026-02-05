import { useSingleInvoice } from "@/api/invoices/queries";
import BackButton from "@/components/buttons/back-button";
import EmptyFallback from "@/components/global/empty-content";
import Error from "@/components/global/error";
import Loader from "@/components/global/loader";
import InvoiceActions from "@/components/invoices/invoice-actions";
import InvoiceDetailed from "@/components/invoices/invoice-detailed";
import { useParams } from "react-router";

function InvoiceDetails() {
  const { id } = useParams();
  const { data: invoice, isPending, isError } = useSingleInvoice(id!);

  if (isPending) return <Loader />;
  if (isError) return <Error />;

  if (!invoice)
    return (
      <div className="center absolute">
        <EmptyFallback />
      </div>
    );
  return (
    <section className="mt-24 space-y-12">
      <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[min-content_1fr]">
        <BackButton />
        {id && <InvoiceActions id={id} status={invoice.status} />}
      </div>
      <InvoiceDetailed invoice={invoice} />
    </section>
  );
}

export default InvoiceDetails;
