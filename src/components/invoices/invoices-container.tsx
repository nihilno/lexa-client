import InvoiceCard from "./invoice-card";

function InvoicesContainer() {
  return (
    <section className="space-y-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <InvoiceCard key={index} />
      ))}
    </section>
  );
}

export default InvoicesContainer;
