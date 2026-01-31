import CTAButton from "@/components/buttons/cta-button";
import InvoicesContainer from "@/components/invoices/invoices-container";
import { LayersPlus } from "lucide-react";

function Dashboard() {
  return (
    <div className="space-y-16">
      <div className="space-y-12">
        <h1 className="text-center text-4xl font-extralight">
          Welcome back, Maciej. Your latest invoices are ready.
        </h1>
        <InvoicesContainer />
      </div>

      <div className="flex w-full items-center justify-between">
        <p>There are 7 total invoices</p>
        <CTAButton
          label="New Invoice"
          icon={<LayersPlus className="size-5" />}
          href="/invoice"
        />
      </div>
    </div>
  );
}

export default Dashboard;
