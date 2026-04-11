import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { mnaHero } from "./content";
import { SectionShell } from "./SectionShell";
import { ArrowRight, Lock } from "lucide-react";

export function Hero() {
  return (
    <SectionShell
      className="border-b border-stone-200/80 bg-gradient-to-b from-stone-50 to-stone-100/80 pb-20 pt-28 dark:border-stone-800 dark:from-stone-950 dark:to-stone-900"
    >
      <div className="max-w-3xl">
        <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-stone-500 dark:text-stone-400">
          <Lock className="h-3.5 w-3.5" aria-hidden />
          {mnaHero.eyebrow}
        </p>
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1] dark:text-stone-50">
          {mnaHero.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-300">
          {mnaHero.subtitle}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            asChild
            size="lg"
            className="bg-stone-900 text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white"
          >
            <a href={mnaHero.primaryHref}>
              {mnaHero.primaryCta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-stone-300 bg-white/60 dark:border-stone-600 dark:bg-transparent">
            <Link to={mnaHero.secondaryHref}>{mnaHero.secondaryCta}</Link>
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
