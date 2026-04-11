import { SectionShell } from "./SectionShell";
import { mnaListingsPreview } from "./content";
import { ListingCard } from "./ListingCard";

export function ListingsPreview() {
  return (
    <SectionShell className="border-y border-stone-200 bg-stone-50/80 py-20 dark:border-stone-800 dark:bg-stone-900/40">
      <div className="mb-12 max-w-2xl">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          Illustrative deal profiles
        </h2>
        <p className="mt-3 text-stone-600 dark:text-stone-400">
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
