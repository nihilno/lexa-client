import useUserId from "@/hooks/use-user-id";
import type { FormSchemaType } from "@/lib/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { handleResponseError } from "./utils";

async function markAsPaid(id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/invoices/${id}/pay`,
    {
      method: "PATCH",
      credentials: "include",
    },
  );

  const { invoice }: { invoice: Invoice } = await handleResponseError(response);
  return invoice;
}

async function deleteInvoice(id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/invoices/${id}`,
    { method: "DELETE", credentials: "include" },
  );

  const { invoice }: { invoice: Invoice } = await handleResponseError(response);
  return invoice;
}

async function createInvoice(formData: FormSchemaType) {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/invoices`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
    credentials: "include",
  });

  const { invoice }: { invoice: InvoiceWithItems } =
    await handleResponseError(response);
  return invoice;
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
      credentials: "include",
    },
  );

  const { invoice }: { invoice: InvoiceWithItems } =
    await handleResponseError(response);
  return invoice;
}

// Hooks
export function useMarkInvoiceAsPaid() {
  const queryClient = useQueryClient();
  const userId = useUserId();

  return useMutation({
    mutationKey: ["mark-as-paid"],
    mutationFn: markAsPaid,
    onSuccess: (updatedInvoice) => {
      queryClient.setQueryData(
        ["invoice", updatedInvoice.id, userId],
        updatedInvoice,
      );
      queryClient.setQueryData(
        ["invoices", userId],
        (old: Invoice[] | undefined) =>
          old?.map((invoice) =>
            invoice.id === updatedInvoice.id ? updatedInvoice : invoice,
          ),
      );
      toast.success("Invoice was marked as paid successfully.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

export function useDeleteInvoice() {
  const queryClient = useQueryClient();
  const userId = useUserId();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["delete-invoice"],
    mutationFn: deleteInvoice,
    onSuccess: (deletedInvoice) => {
      queryClient.removeQueries({
        queryKey: ["invoice", deletedInvoice.id, userId],
      });
      queryClient.setQueryData(
        ["invoices", userId],
        (old: Invoice[] | undefined) =>
          old?.filter((invoice) => invoice.id !== deletedInvoice.id),
      );

      toast.success("Invoice was successfully deleted.");
      navigate("/invoices", { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

export function useCreateInvoice() {
  const queryClient = useQueryClient();
  const userId = useUserId();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["create-invoice"],
    mutationFn: createInvoice,
    onSuccess: (createdInvoice) => {
      queryClient.invalidateQueries({
        queryKey: ["invoices", userId],
      });
      toast.success(
        `Invoice: ${createdInvoice.projectDescription} was created successfully.`,
      );
      navigate("/invoices", {
        replace: true,
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

export function useEditInvoice(id: string) {
  const queryClient = useQueryClient();
  const userId = useUserId();

  return useMutation({
    mutationKey: ["edit-invoice"],
    mutationFn: (formData: FormSchemaType) => editInvoice(formData, id),
    onSuccess: (updatedInvoice) => {
      queryClient.setQueryData(
        ["invoice", updatedInvoice.id, userId],
        updatedInvoice,
      );
      queryClient.setQueryData(
        ["invoices", userId],
        (old: InvoiceWithItems[] | undefined) =>
          old?.map((invoice) =>
            invoice.id === updatedInvoice.id ? updatedInvoice : invoice,
          ),
      );

      toast.success(
        `Invoice: ${updatedInvoice.projectDescription} was updated successfully.`,
      );
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
