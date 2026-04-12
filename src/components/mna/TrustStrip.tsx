import { SectionShell } from "./SectionShell";
import { mnaTrustItems } from "./content";

export function TrustStrip() {
  return (
    <SectionShell className="border-b border-border bg-card py-12">
      <div className="grid gap-8 md:grid-cols-3">
        {mnaTrustItems.map((item) => (
          <div key={item.label}>
            <p className="text-sm font-semibold text-foreground">{item.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
