import { SectionShell } from "./SectionShell";
import { mnaListingsPreview } from "./content";
import { ListingCard } from "./ListingCard";

export function ListingsPreview() {
  return (
    <SectionShell className="border-y border-border bg-muted/30 py-20">
      <div className="mb-12 max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">Illustrative deal profiles</h2>
        <p className="mt-3 text-muted-foreground">
          Teaser-style cards only—representative of how we summarize opportunities internally. Not live offers.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mnaListingsPreview.map((listing) => (
          <ListingCard key={listing.codename} listing={listing} />
        ))}
      </div>
    </SectionShell>
  );
}
