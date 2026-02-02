import { useInvoices } from "@/api/invoices/queries";
import CTAButton from "@/components/buttons/cta-button";
import EmptyFallback from "@/components/global/empty-content";
import InvoicesContainer from "@/components/invoices/invoices-container";
import { Badge } from "@/components/ui/badge";
import { LayersPlus, Loader2 } from "lucide-react";

function Dashboard() {
  const { data: invoices, isPending, error } = useInvoices();
  const isEmpty = !invoices || invoices.length === 0;

  if (isPending)
    return (
      <div className="center absolute">
        <Loader2 className="animate-spin" />
      </div>
    );

  if (error) return <div>Error</div>;

  if (isEmpty)
    return (
      <div className="center absolute">
        <EmptyFallback />
      </div>
    );

  return (
    <div className="space-y-16">
      <h1 className="text-center text-3xl font-extralight sm:text-4xl">
        Welcome back, Maciej. <br /> Your latest invoices are ready.
      </h1>

      <div className="mb-4 flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
        <Badge className="text-xs sm:text-base">
          There are {invoices.length}{" "}
          <span className="hidden sm:inline">total</span> invoices
        </Badge>

        <CTAButton
          label="New Invoice"
          icon={<LayersPlus className="size-5" />}
        />
      </div>

      <div className="pb-8">
        <InvoicesContainer invoices={invoices} />
      </div>
    </div>
  );
}

export default Dashboard;
