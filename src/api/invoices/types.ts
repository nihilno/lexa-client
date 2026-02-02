declare global {
  type Invoice = {
    number: number;
    id: string;
    description: string;
    senderName: string;
    senderAddress: string;
    senderCity: string;
    senderPostalCode: string;
    senderCountry: string;
    recipientName: string;
    recipientAddress: string;
    recipientCity: string;
    recipientPostalCode: string;
    recipientCountry: string;
    createdAt: Date;
    updatedAt: Date;
    paymentDue: Date;
    totalPayment: number;
    status: "DRAFT" | "PENDING" | "PAID";
    userId: string;
  };
}

export {};
