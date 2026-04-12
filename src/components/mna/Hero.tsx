import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { mnaHero } from "./content";
import { ArrowRight, Lock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative scroll-mt-24 overflow-hidden border-b border-border pb-20 pt-28 editorial-section">
      <div className="pointer-events-none absolute inset-0 gradient-bg opacity-80" />
      <div className="pointer-events-none absolute top-20 right-[8%] h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-[5%] h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <p className="tag-primary mb-6 inline-flex items-center gap-2 uppercase tracking-wider">
            <Lock className="h-3.5 w-3.5" aria-hidden />
            {mnaHero.eyebrow}
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {mnaHero.title}
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{mnaHero.subtitle}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="btn-primary rounded-lg text-base">
              <a href={mnaHero.primaryHref}>
                {mnaHero.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-lg border-primary/25 bg-background/80 hover:bg-muted/50">
              <Link to={mnaHero.secondaryHref}>{mnaHero.secondaryCta}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
