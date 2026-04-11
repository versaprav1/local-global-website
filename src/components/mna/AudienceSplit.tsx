import { SectionShell } from "./SectionShell";
import { mnaAudience } from "./content";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, LineChart } from "lucide-react";

export function AudienceSplit() {
  return (
    <SectionShell className="py-20">
      <div className="mb-12 text-center">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          {mnaAudience.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-stone-600 dark:text-stone-400">
          {mnaAudience.subtitle}
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="border-stone-200 dark:border-stone-800">
          <CardContent className="p-8">
            <Building2 className="mb-4 h-8 w-8 text-stone-700 dark:text-stone-300" />
            <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
              {mnaAudience.sellers.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              {mnaAudience.sellers.description}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-stone-700 dark:text-stone-300">
              {mnaAudience.sellers.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-stone-400">—</span>
                  {b}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="border-stone-200 dark:border-stone-800">
          <CardContent className="p-8">
            <LineChart className="mb-4 h-8 w-8 text-stone-700 dark:text-stone-300" />
            <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
              {mnaAudience.buyers.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              {mnaAudience.buyers.description}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-stone-700 dark:text-stone-300">
              {mnaAudience.buyers.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-stone-400">—</span>
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
