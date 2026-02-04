import { useQuery } from "@tanstack/react-query";
import { handleResponseError } from "./utils";

async function getInvoices() {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/invoices`);
  const invoices: Invoice[] = await handleResponseError(response);
  return invoices;
}

async function getInvoiceById(id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/invoices/${id}`,
  );

  const invoice: InvoiceWithItems = await handleResponseError(response);
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
