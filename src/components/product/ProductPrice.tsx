import { cn } from "@/lib/utils";
import type { PriceType, Currency } from "@/domain/product/product.types";
import { getPriceDisplay } from "@/lib/format/price";

interface ProductPriceProps {
  priceType: PriceType;
  price?: number;
  currency?: Currency;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ProductPrice({
  priceType,
  price,
  currency = "INR",
  size = "md",
  className,
}: ProductPriceProps) {
  const display = getPriceDisplay(priceType, price, currency);
  const isContactPrice =
    priceType === "CONTACT_FOR_PRICE" || priceType === "ON_REQUEST";

  return (
    <span
      className={cn(
        "font-semibold",
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-xl",
        isContactPrice
          ? "text-[var(--color-muted)]"
          : "text-[var(--color-primary)]",
        className
      )}
    >
      {priceType === "STARTING_FROM" && price !== undefined && (
        <span className="text-xs font-normal text-[var(--color-muted)] mr-1">
          From
        </span>
      )}
      {display.replace(/^From /, "")}
    </span>
  );
}
