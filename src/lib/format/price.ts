// Price formatting utilities — Indian numbering format

import type { PriceType, Currency } from "@/domain/product/product.types";

const CURRENCY_SYMBOL: Record<Currency, string> = {
  INR: "₹",
};

/**
 * Format a number using Indian number system (lakhs, crores)
 * e.g. 125000 → "1,25,000"
 */
export function formatIndianNumber(value: number): string {
  const str = Math.floor(value).toString();
  if (str.length <= 3) return str;

  const lastThree = str.slice(-3);
  const rest = str.slice(0, -3);
  const formatted = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return `${formatted},${lastThree}`;
}

/**
 * Format a price value with currency symbol
 * e.g. 125000 → "₹1,25,000"
 */
export function formatPrice(
  price: number,
  currency: Currency = "INR"
): string {
  const symbol = CURRENCY_SYMBOL[currency];
  return `${symbol}${formatIndianNumber(price)}`;
}

/**
 * Get display string for a product price based on priceType
 */
export function getPriceDisplay(
  priceType: PriceType,
  price?: number,
  currency: Currency = "INR"
): string {
  switch (priceType) {
    case "FIXED":
      return price !== undefined ? formatPrice(price, currency) : "Price on request";
    case "STARTING_FROM":
      return price !== undefined
        ? `From ${formatPrice(price, currency)}`
        : "Price on request";
    case "ON_REQUEST":
      return "Price on request";
    case "CONTACT_FOR_PRICE":
      return "Contact for price";
    default:
      return "Contact for price";
  }
}

/**
 * Returns true if the price type indicates a numeric price exists
 */
export function hasNumericPrice(priceType: PriceType): boolean {
  return priceType === "FIXED" || priceType === "STARTING_FROM";
}
