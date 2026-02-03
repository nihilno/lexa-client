import type { PAYMENT_TERMS } from "@/constants";
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
    type: "Insert" | "Edit";
    icon?: React.ReactNode;
  };

  type AddItemProps = {
    form: ReturnType<typeof useForm<FormSchemaType>>;
    index: number;
    remove: (index: number) => void;
  };

  type Payment = (typeof PAYMENT_TERMS)[keyof typeof PAYMENT_TERMS];
}

export {};
