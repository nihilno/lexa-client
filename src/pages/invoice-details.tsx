import BackButton from "@/components/buttons/back-button";
import InvoiceActions from "@/components/invoices/invoice-actions";
import InvoiceDetailed from "@/components/invoices/invoice-detailed";

function InvoiceDetails() {
  return (
    <main className="space-y-12">
      <div className="grid grid-cols-[min-content_1fr] items-center gap-8">
        <BackButton />
        <InvoiceActions />
      </div>
      <InvoiceDetailed />
    </main>
  );
}

export default InvoiceDetails;
