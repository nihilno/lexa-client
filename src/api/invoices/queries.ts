import { useQuery } from "@tanstack/react-query";

export async function getInvoices() {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/invoices`);
  if (!response.ok) {
    throw new Error("Failed to fetch invoices");
  }
  const invoices: Invoice[] = await response.json();
  return invoices;
}

export function useInvoices() {
  return useQuery({
    queryKey: ["invoices"],
    queryFn: getInvoices,
  });
}
