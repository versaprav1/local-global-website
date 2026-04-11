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
        "border-stone-200 bg-white/80 shadow-sm transition-shadow hover:shadow-md dark:border-stone-800 dark:bg-stone-950/40",
        className
      )}
    >
      <CardContent className="p-6">
        <div className="mb-4 flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">
              Codename
            </p>
            <h3 className="font-serif text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
              {listing.codename}
            </h3>
          </div>
          {listing.verified && (
            <Badge
              variant="outline"
              className="shrink-0 gap-1 border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-100"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified
            </Badge>
          )}
        </div>
        <dl className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-stone-500 dark:text-stone-400">Sector</dt>
            <dd className="font-medium text-stone-800 dark:text-stone-200">{listing.sector}</dd>
          </div>
          <div>
            <dt className="text-stone-500 dark:text-stone-400">Location</dt>
            <dd className="font-medium text-stone-800 dark:text-stone-200">{listing.location}</dd>
          </div>
          <div>
            <dt className="text-stone-500 dark:text-stone-400">Revenue</dt>
            <dd className="font-medium text-stone-800 dark:text-stone-200">{listing.revenueRange}</dd>
          </div>
          <div>
            <dt className="text-stone-500 dark:text-stone-400">EBITDA</dt>
            <dd className="font-medium text-stone-800 dark:text-stone-200">{listing.ebitdaRange}</dd>
          </div>
        </dl>
        <div className="mt-4 border-t border-stone-100 pt-4 dark:border-stone-800">
          <span className="text-xs font-medium text-stone-500 dark:text-stone-400">Deal type</span>
          <p className="text-sm font-medium text-stone-800 dark:text-stone-200">{listing.dealType}</p>
        </div>
      </CardContent>
    </Card>
  );
}
