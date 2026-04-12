import { SectionShell } from "./SectionShell";
import { mnaAudience } from "./content";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, LineChart } from "lucide-react";

export function AudienceSplit() {
  return (
    <SectionShell className="py-20">
      <div className="mb-12 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">{mnaAudience.title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{mnaAudience.subtitle}</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="feature-card border-secondary/20">
          <CardContent className="p-8">
            <Building2 className="mb-4 h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">{mnaAudience.sellers.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {mnaAudience.sellers.description}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/90">
              {mnaAudience.sellers.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-primary">—</span>
                  {b}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="feature-card border-primary/15">
          <CardContent className="p-8">
            <LineChart className="mb-4 h-8 w-8 text-accent" />
            <h3 className="text-xl font-semibold text-foreground">{mnaAudience.buyers.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {mnaAudience.buyers.description}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/90">
              {mnaAudience.buyers.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-accent">—</span>
                  {b}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
