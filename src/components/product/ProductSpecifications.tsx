import type { Specification } from "@/domain/product/product.types";
import { cn } from "@/lib/utils";

interface ProductSpecificationsProps {
  specifications: Specification[];
  className?: string;
}

function groupSpecifications(
  specs: Specification[]
): Map<string, Specification[]> {
  const groups = new Map<string, Specification[]>();

  for (const spec of specs) {
    const group = spec.group ?? "Specifications";
    if (!groups.has(group)) {
      groups.set(group, []);
    }
    groups.get(group)!.push(spec);
  }

  return groups;
}

export function ProductSpecifications({
  specifications,
  className,
}: ProductSpecificationsProps) {
  if (specifications.length === 0) return null;

  const groups = groupSpecifications(specifications);
  const entries = Array.from(groups.entries());

  return (
    <div className={cn("space-y-6", className)}>
      {entries.map(([groupName, specs]) => (
        <div key={groupName}>
          {entries.length > 1 && (
            <h4 className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-3">
              {groupName}
            </h4>
          )}
          <dl className="grid grid-cols-1 gap-0 border border-[var(--color-border)] rounded-xl overflow-hidden">
            {specs.map((spec, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col sm:flex-row",
                  index % 2 === 0
                    ? "bg-[var(--color-surface)]"
                    : "bg-[var(--color-surface-2)]"
                )}
              >
                <dt className="text-sm font-medium text-[var(--color-muted)] px-4 py-3 sm:w-44 sm:flex-shrink-0 border-b sm:border-b-0 sm:border-r border-[var(--color-border)]">
                  {spec.label}
                </dt>
                <dd className="text-sm text-[var(--color-text)] px-4 py-3 flex-1">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}
