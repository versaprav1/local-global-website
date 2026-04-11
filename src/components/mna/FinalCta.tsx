import { Button } from "@/components/ui/button";
import { SectionShell } from "./SectionShell";
import { mnaFinalCta } from "./content";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <SectionShell className="border-t border-stone-200 bg-stone-900 py-20 text-stone-50 dark:border-stone-800">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl font-semibold tracking-tight">{mnaFinalCta.title}</h2>
        <p className="mt-4 text-stone-300">{mnaFinalCta.subtitle}</p>
        <Button
          asChild
          size="lg"
          className="mt-10 bg-white text-stone-900 hover:bg-stone-100"
        >
          <a href={mnaFinalCta.href}>
            {mnaFinalCta.button}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </SectionShell>
  );
}
