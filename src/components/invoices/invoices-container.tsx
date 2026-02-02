import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronsUpDown } from "lucide-react";
import InvoiceCard from "./invoice-card";
import InvoiceFilters from "./invoice-filters";

function InvoicesContainer({ invoices }: { invoices: Invoice[] }) {
  return (
    <>
      <section>
        <ScrollArea className="h-120">
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <InvoiceCard key={invoice.id} invoice={invoice} />
            ))}
          </div>
        </ScrollArea>

        <InvoiceFilters />
      </section>
    </>
  );
}

export default InvoicesContainer;
