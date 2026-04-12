import { Button } from "@/components/ui/button";
import { mnaFinalCta } from "./content";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="relative scroll-mt-24 overflow-hidden border-t border-primary/20 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent opacity-[0.97]" />
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-secondary/30 blur-3xl" />

      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground">
            {mnaFinalCta.title}
          </h2>
          <p className="mt-4 text-primary-foreground/90">{mnaFinalCta.subtitle}</p>
          <Button
            asChild
            size="lg"
            className="mt-10 rounded-lg border-0 bg-background text-foreground shadow-lg hover:bg-background/95"
          >
            <a href={mnaFinalCta.href}>
              {mnaFinalCta.button}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
