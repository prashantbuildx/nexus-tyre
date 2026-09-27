// WhatsApp URL utilities

/**
 * Build a WhatsApp chat URL with pre-filled message
 * @param phone - Phone number without + or spaces (e.g. "919876543210")
 * @param message - Pre-filled message text
 */
export function buildWhatsAppUrl(phone: string, message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

/**
 * Generate a product enquiry message for WhatsApp
 */
export function buildProductEnquiryMessage(
  productName: string,
  categoryName: string
): string {
  return `Hello Nexus Tyre,

I am interested in:
${productName}

Product category:
${categoryName}

Please share availability and current price.`;
}

/**
 * Generate a general enquiry message
 */
export function buildGeneralEnquiryMessage(): string {
  return `Hello Nexus Tyre,

I would like to enquire about your products.

Please share more information.`;
}
