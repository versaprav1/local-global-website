import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter, X } from "lucide-react";

interface AdvancedFiltersProps {
  categories?: string[];
  selectedCategories?: string[];
  onCategoriesChange?: (categories: string[]) => void;
  priceRange?: [number, number];
  maxPrice?: number;
  onPriceChange?: (range: [number, number]) => void;
  locations?: string[];
  selectedLocations?: string[];
  onLocationsChange?: (locations: string[]) => void;
  showDistance?: boolean;
  distance?: number;
  onDistanceChange?: (distance: number) => void;
}

export const AdvancedFilters = ({
  categories = [],
  selectedCategories = [],
  onCategoriesChange,
  priceRange = [0, 500],
  maxPrice = 500,
  onPriceChange,
  locations = [],
  selectedLocations = [],
  onLocationsChange,
  showDistance = false,
  distance = 50,
  onDistanceChange,
}: AdvancedFiltersProps) => {
  const [open, setOpen] = useState(false);

  const toggleCategory = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    onCategoriesChange?.(newCategories);
  };

  const toggleLocation = (location: string) => {
    const newLocations = selectedLocations.includes(location)
      ? selectedLocations.filter((l) => l !== location)
      : [...selectedLocations, location];
    onLocationsChange?.(newLocations);
  };

  const clearAll = () => {
    onCategoriesChange?.([]);
    onLocationsChange?.([]);
    onPriceChange?.([0, maxPrice]);
    onDistanceChange?.(50);
  };

  const activeFiltersCount =
    selectedCategories.length + selectedLocations.length;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2 relative">
          <Filter className="w-4 h-4" />
          Advanced Filters
          {activeFiltersCount > 0 && (
            <Badge
              variant="default"
              className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center"
            >
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Advanced Filters</SheetTitle>
          <SheetDescription>
            Refine your search with detailed filters
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Active Filters */}
          {activeFiltersCount > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Active Filters</Label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAll}
                  className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear All
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedCategories.map((cat) => (
                  <Badge
                    key={cat}
                    variant="secondary"
                    className="gap-1 cursor-pointer hover:bg-secondary/80"
                    onClick={() => toggleCategory(cat)}
                  >
                    {cat}
                    <X className="w-3 h-3" />
                  </Badge>
                ))}
                {selectedLocations.map((loc) => (
                  <Badge
                    key={loc}
                    variant="secondary"
                    className="gap-1 cursor-pointer hover:bg-secondary/80"
                    onClick={() => toggleLocation(loc)}
                  >
                    {loc}
                    <X className="w-3 h-3" />
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Categories */}
          {categories.length > 0 && (
            <div className="space-y-3">
              <Label className="text-sm font-medium">Categories</Label>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}
                    />
                    <label
                      htmlFor={category}
                      className="text-sm font-normal cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Price Range */}
          {onPriceChange && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Price Range</Label>
                <span className="text-sm text-muted-foreground">
                  €{priceRange[0]} - €{priceRange[1]}
                </span>
              </div>
              <Slider
                min={0}
                max={maxPrice}
                step={10}
                value={priceRange}
                onValueChange={(value) =>
                  onPriceChange(value as [number, number])
                }
                className="w-full"
              />
            </div>
          )}

          {/* Locations */}
          {locations.length > 0 && (
            <div className="space-y-3">
              <Label className="text-sm font-medium">Locations</Label>
              <div className="space-y-2">
                {locations.map((location) => (
                  <div key={location} className="flex items-center space-x-2">
                    <Checkbox
                      id={location}
                      checked={selectedLocations.includes(location)}
                      onCheckedChange={() => toggleLocation(location)}
                    />
                    <label
                      htmlFor={location}
                      className="text-sm font-normal cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {location}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Distance Filter */}
          {showDistance && onDistanceChange && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Distance</Label>
                <span className="text-sm text-muted-foreground">
                  {distance} km
                </span>
              </div>
              <Slider
                min={5}
                max={200}
                step={5}
                value={[distance]}
                onValueChange={(value) => onDistanceChange(value[0])}
                className="w-full"
              />
            </div>
          )}

          {/* Apply Button */}
          <Button onClick={() => setOpen(false)} className="w-full">
            Apply Filters
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
