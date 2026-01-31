import CTAButton from "@/components/buttons/cta-button";
import EmptyFallback from "@/components/global/empty-content";
import InvoicesContainer from "@/components/invoices/invoices-container";
import { LayersPlus } from "lucide-react";

function Dashboard() {
  const isEmpty = false;
  if (isEmpty)
    return (
      <div className="center absolute">
        <EmptyFallback />
      </div>
    );

  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-center text-4xl font-extralight">
          Welcome back, Maciej. Your latest invoices are ready.
        </h1>
        <div className="mt-12 mb-4 flex w-full items-center justify-between">
          <p>There are 7 total invoices</p>
          <CTAButton
            label="New Invoice"
            icon={<LayersPlus className="size-5" />}
          />
        </div>
        <InvoicesContainer />
      </div>
    </div>
  );
}

export default Dashboard;
