import type { PAYMENT_TERMS } from "@/constants";
import type { FormSchemaType } from "@/lib/schema";
import type { LucideIcon } from "lucide-react";

declare global {
  type LinkItemType = {
    label: string;
    href: string;
    icon: LucideIcon;
    description?: string;
  };

  type DialogButtonProps = {
    id?: string;
    title?: string;
    subtitle?: string;
    icon?: React.ReactNode;
  };

  type CTAButtonProps = {
    label: string;
    icon?: React.ReactNode;
    href?: string;
  };

  type FormDrawerProps = {
    id?: string;
    type: "Insert" | "Edit";
    invoice?: InvoiceWithItems;
    label?: string;
  };

  type AddItemProps = {
    form: ReturnType<typeof useForm<FormSchemaType>>;
    index: number;
    remove: (index: number) => void;
    fields: {
      name: string;
      quantity: number;
      price: number;
      id: string;
    }[];
  };

  type Payment = (typeof PAYMENT_TERMS)[keyof typeof PAYMENT_TERMS];
}

export {};
