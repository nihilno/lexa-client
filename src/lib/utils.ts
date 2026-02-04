import { PAYMENT_TERMS } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { FormSchemaType } from "./schema";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDefaultValues(
  type: "Insert" | "Edit",
  invoice?: InvoiceWithItems,
) {
  if (type === "Insert" || !invoice)
    return {
      fromStreet: "",
      fromCity: "",
      fromPostCode: "",
      fromCountry: "",
      toName: "",
      toEmail: "",
      toStreet: "",
      toCity: "",
      toPostCode: "",
      toCountry: "",
      paymentTerms: "Net 1",
      projectDescription: "",
      issueDate: new Date(),
      items: [{ name: "", quantity: 1, price: 0 }],
    } as FormSchemaType;

  return {
    fromStreet: invoice?.fromStreet ?? "",
    fromCity: invoice?.fromCity ?? "",
    fromPostCode: invoice?.fromPostCode ?? "",
    fromCountry: invoice?.fromCountry ?? "",
    toName: invoice?.toName ?? "",
    toEmail: invoice?.toEmail ?? "",
    toStreet: invoice?.toStreet ?? "",
    toCity: invoice?.toCity ?? "",
    toPostCode: invoice?.toPostCode ?? "",
    toCountry: invoice?.toCountry ?? "",
    projectDescription: invoice?.projectDescription ?? "",
    issueDate: invoice?.issueDate ? new Date(invoice.issueDate) : new Date(),
    paymentTerms: PAYMENT_TERMS.includes(invoice?.paymentTerms as any)
      ? (invoice!.paymentTerms as FormSchemaType["paymentTerms"])
      : "Net 1",
    items: invoice?.items?.map((i) => ({
      name: i.name,
      quantity: i.quantity,
      price: i.price,
    })) ?? [{ name: "", quantity: 1, price: 0 }],
  } as FormSchemaType;
}
