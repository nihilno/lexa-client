export function formatId(id: string): string {
  return `#${id.slice(0, 6).toUpperCase()}`;
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
}

export async function handleResponseError(response: Response) {
  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.message || "Failed to fetch invoice by ID");
  }
  return response.json();
}
