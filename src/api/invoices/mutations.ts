import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

async function markAsPaid(id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/invoices/${id}`,
    {
      method: "PATCH",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to mark invoice as paid");
  }

  const data: { invoice: Invoice } = await response.json();
  return data.invoice;
}

export function useMarkInvoiceAsPaid() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: markAsPaid,
    onSuccess: (updatedInvoice: Invoice) => {
      toast.success("Invoice was marked as paid successfully");
      queryClient.invalidateQueries({
        queryKey: ["invoice", updatedInvoice.id],
      });
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
    },
    onError: () => {
      toast.error("Failed to mark invoice as paid");
    },
  });
}
