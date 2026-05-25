import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { mnaHero } from "./content";
import { ArrowRight, Lock, Building2, LineChart } from "lucide-react";

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
        </div>

        {/* Split path CTAs */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <a
            href="#intake-seller"
            className="group relative overflow-hidden rounded-xl border border-secondary/30 bg-card/80 p-7 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Building2 className="h-5 w-5" aria-hidden />
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground">I'm selling or exiting</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Owners and operators exploring partial liquidity, full exit, or a strategic partner—confidentially.
                </p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-primary opacity-60 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
            </div>
            <span className="mt-5 inline-flex items-center text-sm font-medium text-primary">
              Start seller intake
            </span>
          </a>

          <a
            href="#intake-buyer"
            className="group relative overflow-hidden rounded-xl border border-primary/20 bg-card/80 p-7 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <LineChart className="h-5 w-5" aria-hidden />
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground">I'm a buyer or investor</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Strategic and financial buyers sourcing durable, mission-aligned assets across regional markets.
                </p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-accent opacity-60 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
            </div>
            <span className="mt-5 inline-flex items-center text-sm font-medium text-accent">
              Start buyer intake
            </span>
          </a>
        </div>

        <div className="mt-8">
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Link to={mnaHero.secondaryHref}>
              {mnaHero.secondaryCta}
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
