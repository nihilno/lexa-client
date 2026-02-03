import { useInvoices } from "@/api/invoices/queries";
import { FormDrawer } from "@/components/form/form-drawer";
import EmptyFallback from "@/components/global/empty-content";
import Loader from "@/components/global/loader";
import InvoicesContainer from "@/components/invoices/invoices-container";
import { Badge } from "@/components/ui/badge";
import { ChevronsUpDown } from "lucide-react";

function Dashboard() {
  const { data: invoices, isPending, isError } = useInvoices();
  const isEmpty = !invoices || invoices.length === 0;

  if (isPending) return <Loader />;
  if (isError || isEmpty)
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

      <section className="md:grid md:grid-cols-[1fr_min-content] md:gap-4">
        <div>
          <div className="mb-4 flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
            <Badge className="text-xs sm:text-base">
              There are {invoices.length}{" "}
              <span className="hidden sm:inline">total</span> invoices
            </Badge>

            <FormDrawer type="Insert" />
          </div>

          <div className="pb-8">
            <InvoicesContainer invoices={invoices} />
          </div>
        </div>

        <ChevronsUpDown className="-mt-16 animate-pulse place-self-center" />
      </section>
    </div>
  );
}

export default Dashboard;
