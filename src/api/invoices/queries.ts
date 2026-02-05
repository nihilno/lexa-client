import useUserId from "@/hooks/use-user-id";
import { useQuery } from "@tanstack/react-query";
import { handleResponseError } from "./utils";

async function getInvoices() {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/invoices`, {
    credentials: "include",
  });
  const invoices: Invoice[] = await handleResponseError(response);
  return invoices;
}

async function getInvoiceById(id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/invoices/${id}`,
    {
      credentials: "include",
    },
  );

  const invoice: InvoiceWithItems = await handleResponseError(response);
  return invoice;
}

// Hooks
export function useInvoices() {
  const userId = useUserId();

  return useQuery({
    queryKey: ["invoices", userId],
    queryFn: getInvoices,
    enabled: !!userId,
  });
}

export function useSingleInvoice(id: string) {
  const userId = useUserId();

  return useQuery({
    queryKey: ["invoice", id, userId],
    queryFn: () => getInvoiceById(id),
    enabled: !!id && !!userId,
  });
}
