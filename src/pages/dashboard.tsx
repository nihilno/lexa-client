import CTAButton from "@/components/buttons/cta-button";
import InvoicesContainer from "@/components/invoices/invoices-container";

function Dashboard() {
  return (
    <div className="space-y-16">
      <div className="space-y-8">
        <h1 className="text-center text-4xl font-light">
          Your latest invoices
        </h1>
        <InvoicesContainer />
      </div>

      <div className="flex w-full items-center justify-between">
        <p>There are 7 total invoices</p>
        <CTAButton />
      </div>
    </div>
  );
}

export default Dashboard;
