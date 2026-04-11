import { SectionShell } from "./SectionShell";
import { mnaSecurity } from "./content";

export function SecuritySection() {
  return (
    <SectionShell className="border-t border-stone-200 bg-stone-100/50 py-20 dark:border-stone-800 dark:bg-stone-900/30">
      <div className="mb-12 max-w-2xl">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          {mnaSecurity.title}
        </h2>
        <p className="mt-3 text-stone-600 dark:text-stone-400">{mnaSecurity.subtitle}</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {mnaSecurity.points.map((p) => (
          <div key={p.title} className="rounded-lg border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-950">
            <h3 className="font-semibold text-stone-900 dark:text-stone-50">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{p.body}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
