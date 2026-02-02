declare global {
  type Invoice = {
    totalPayment: number;
    id: string;
    description: string;
    senderName: string;
    senderEmail: string;
    senderStreet: string;
    senderCity: string;
    senderPostalCode: string;
    senderCountry: string;
    recipientName: string;
    recipientEmail: string;
    recipientStreet: string;
    recipientCity: string;
    recipientPostalCode: string;
    recipientCountry: string;
    createdAt: Date;
    updatedAt: Date;
    paymentDue: Date;
    status: "Draft" | "Pending" | "Paid";
    userId: string;
  };

  type Item = {
    id: string;
    name: string;
    quantity: number;
    price: number;
    invoiceId: string;
  };

  type InvoiceWithItems = {
    totalPayment: number;
    items: Item[];
    id: string;
    description: string;
    senderName: string;
    senderEmail: string;
    senderStreet: string;
    senderCity: string;
    senderPostalCode: string;
    senderCountry: string;
    recipientName: string;
    recipientEmail: string;
    recipientStreet: string;
    recipientCity: string;
    recipientPostalCode: string;
    recipientCountry: string;
    createdAt: Date;
    updatedAt: Date;
    paymentDue: Date;
    status: "Draft" | "Pending" | "Paid";
    userId: string;
  };
}
export {};
