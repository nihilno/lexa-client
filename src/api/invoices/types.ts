declare global {
  type Invoice = {
    totalPayment: number;
    id: string;
    projectDescription: string;
    fromName: string;
    fromEmail: string;
    fromStreet: string;
    fromCity: string;
    fromPostCode: string;
    fromCountry: string;
    toName: string;
    toEmail: string;
    toStreet: string;
    toCity: string;
    toPostCode: string;
    toCountry: string;
    createdAt: Date;
    updatedAt: Date;
    paymentDue: Date;
    issueDate: Date;
    paymentTerms: string;
    status: "Draft" | "Pending" | "Paid";
    userId: string;
  };

  type Item = {
    id: string;
    name: string;
    quantity: number;
    price: number;
  };

  type InvoiceWithItems = Invoice & { items: Item[] };
}
export {};
