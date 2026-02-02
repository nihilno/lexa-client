import { useQuery } from "@tanstack/react-query";

async function getInvoices() {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/invoices`);
  if (!response.ok) {
    throw new Error("Failed to fetch invoices");
  }
  const invoices: Invoice[] = await response.json();
  return invoices;
}

async function getInvoiceById(id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/invoices/${id}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch invoice by ID");
  }
  const invoice: InvoiceWithItems = await response.json();
  return invoice;
}

// Hooks
export function useInvoices() {
  return useQuery({
    queryKey: ["invoices"],
    queryFn: getInvoices,
  });
}

export function useSingleInvoice(id: string) {
  return useQuery({
    queryKey: ["invoice", id],
    queryFn: () => getInvoiceById(id),
    enabled: !!id,
  });
}
