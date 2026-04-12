import { SectionShell } from "./SectionShell";
import { mnaSecurity } from "./content";

export function SecuritySection() {
  return (
    <SectionShell className="border-t border-border bg-muted/25 py-20">
      <div className="mb-12 max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">{mnaSecurity.title}</h2>
        <p className="mt-3 text-muted-foreground">{mnaSecurity.subtitle}</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {mnaSecurity.points.map((p) => (
          <div
            key={p.title}
            className="feature-card rounded-xl border border-border/50 bg-card p-6"
          >
            <h3 className="font-semibold text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
