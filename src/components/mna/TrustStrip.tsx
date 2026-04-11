import { SectionShell } from "./SectionShell";
import { mnaTrustItems } from "./content";

export function TrustStrip() {
  return (
    <SectionShell className="border-b border-stone-200 bg-white py-12 dark:border-stone-800 dark:bg-stone-950">
      <div className="grid gap-8 md:grid-cols-3">
        {mnaTrustItems.map((item) => (
          <div key={item.label}>
            <p className="text-sm font-semibold text-stone-900 dark:text-stone-50">{item.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
