import type { FormSchemaType } from "@/lib/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";

async function markAsPaid(id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/invoices/${id}/pay`,
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

async function deleteInvoice(id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/invoices/${id}`,
    { method: "DELETE" },
  );

  if (!response.ok) {
    throw new Error("Failed to delete invoice");
  }

  const data: { invoice: Invoice } = await response.json();
  return data.invoice;
}

async function createInvoice(formData: FormSchemaType) {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/invoices`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to create new invoice");
  }

  const data: { invoice: InvoiceWithItems } = await response.json();
  return data.invoice;
}

async function editInvoice(formData: FormSchemaType, id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/invoices/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to edit invoice");
  }

  const data: { invoice: InvoiceWithItems } = await response.json();
  return data.invoice;
}

// Hooks
export function useMarkInvoiceAsPaid() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: markAsPaid,
    onSuccess: (updatedInvoice) => {
      toast.success("Invoice was marked as paid successfully");
      queryClient.invalidateQueries({
        queryKey: ["invoice", updatedInvoice.id],
      });

      queryClient.invalidateQueries({ queryKey: ["invoices"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

export function useDeleteInvoice() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: deleteInvoice,
    onSuccess: (deletedInvoice) => {
      toast.success("Invoice was successfully deleted.");
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      queryClient.invalidateQueries({
        queryKey: ["invoice", deletedInvoice.id],
      });
      navigate("/", { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

export function useCreateInvoice() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createInvoice,
    onSuccess: (createdInvoice) => {
      toast.success(
        `Invoice: ${createdInvoice.projectDescription} was created successfully.`,
      );
      navigate("/", {
        replace: true,
      });
      queryClient.invalidateQueries({
        queryKey: ["invoices"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

export function useEditInvoice(id: string) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (formData: FormSchemaType) => editInvoice(formData, id),
    onSuccess: (updatedInvoice) => {
      queryClient.invalidateQueries({
        queryKey: ["invoices"],
      });
      queryClient.invalidateQueries({
        queryKey: ["invoice", updatedInvoice.id],
      });
      toast.success(
        `Invoice: ${updatedInvoice.projectDescription} was updated successfully.`,
      );
      navigate("/", {
        replace: true,
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
