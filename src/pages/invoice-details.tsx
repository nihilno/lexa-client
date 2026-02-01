import BackButton from "@/components/buttons/back-button";
import InvoiceActions from "@/components/invoices/invoice-actions";
import InvoiceDetailed from "@/components/invoices/invoice-detailed";

function InvoiceDetails() {
  return (
    <section className="space-y-12">
      <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[min-content_1fr]">
        <BackButton />
        <InvoiceActions />
      </div>
      <InvoiceDetailed />
    </section>
  );
}

export default InvoiceDetails;
