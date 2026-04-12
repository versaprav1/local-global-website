import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import type { MnaListingPreview } from "./content";
import { cn } from "@/lib/utils";

type ListingCardProps = {
  listing: MnaListingPreview;
  className?: string;
};

export function ListingCard({ listing, className }: ListingCardProps) {
  return (
    <Card
      className={cn(
        "feature-card border-primary/15 bg-card transition-all hover:border-primary/35",
        className
      )}
    >
      <CardContent className="p-6">
        <div className="mb-4 flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Codename</p>
            <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">{listing.codename}</h3>
          </div>
          {listing.verified && (
            <Badge
              variant="outline"
              className="shrink-0 gap-1 border-accent/30 bg-accent/10 text-accent-foreground"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified
            </Badge>
          )}
        </div>
        <dl className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-muted-foreground">Sector</dt>
            <dd className="font-medium text-foreground">{listing.sector}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Location</dt>
            <dd className="font-medium text-foreground">{listing.location}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Revenue</dt>
            <dd className="font-medium text-foreground">{listing.revenueRange}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">EBITDA</dt>
            <dd className="font-medium text-foreground">{listing.ebitdaRange}</dd>
          </div>
        </dl>
        <div className="mt-4 border-t border-border pt-4">
          <span className="text-xs font-medium text-muted-foreground">Deal type</span>
          <p className="text-sm font-medium text-foreground">{listing.dealType}</p>
        </div>
      </CardContent>
    </Card>
  );
}
