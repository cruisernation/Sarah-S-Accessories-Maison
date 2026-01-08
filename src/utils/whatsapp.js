import { formatCurrency } from "./formatCurrency";

export function generateWhatsAppLink(cart) {
  const number = process.env.REACT_APP_WHATSAPP_NUMBER;

  const items = cart
    .map(
      i =>
        `- ${i.name} x${i.qty} – ${formatCurrency(i.price * i.qty)}`
    )
    .join("\n");

  const total = cart.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  const message = `
Hello Sarah’s Accessories 👋

I’d like to order:
${items}

Total: ${formatCurrency(total)}

Please confirm availability.
`;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
