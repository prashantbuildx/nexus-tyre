// Phone and maps URL utilities

/**
 * Build a tel: URL for calling
 * @param phone - Phone number (any format)
 */
export function buildTelUrl(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

/**
 * Build mailto URL
 */
export function buildMailtoUrl(email: string, subject?: string): string {
  if (subject) {
    return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  }
  return `mailto:${email}`;
}

/**
 * Checks whether a contact value is configured (non-empty)
 */
export function isConfigured(value: string | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0;
}
