import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Search, User, Building2, Briefcase, FileText, MapPin } from "lucide-react";
import { specialists as specialistsData } from "@/data/specialists";
import { treatmentCenters as centersData } from "@/data/centers";
import { opportunities } from "@/data/opportunities";
import { resources } from "@/data/resources";

interface CommandPaletteProps {
  onNavigate?: (section: string, id?: string) => void;
}

export const CommandPalette = ({ onNavigate }: CommandPaletteProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (section: string, id?: string) => {
    setOpen(false);
    onNavigate?.(section, id);
    
    // Scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-primary/90 backdrop-blur-lg text-primary-foreground rounded-full shadow-lg hover:bg-primary transition-all hover:scale-105"
      >
        <Search className="w-4 h-4" />
        <span className="text-sm font-medium">Search</span>
        <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-primary-foreground/20 px-1.5 font-mono text-[10px] font-medium">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search specialists, centers, services..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading="Specialists">
            {specialistsData.slice(0, 5).map((specialist) => (
              <CommandItem
                key={specialist.id}
                onSelect={() => handleSelect("specialists", String(specialist.id))}
                className="flex items-center gap-3 cursor-pointer"
              >
                <User className="w-4 h-4 text-muted-foreground" />
                <div>
                  <div className="font-medium">{specialist.name}</div>
                  <div className="text-xs text-muted-foreground">{specialist.specialty}</div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Treatment Centers">
            {centersData.slice(0, 5).map((center) => (
              <CommandItem
                key={center.id}
                onSelect={() => handleSelect("centers", String(center.id))}
                className="flex items-center gap-3 cursor-pointer"
              >
                <Building2 className="w-4 h-4 text-muted-foreground" />
                <div>
                  <div className="font-medium">{center.name}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {center.location}
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Opportunities">
            {opportunities.slice(0, 4).map((opp) => (
              <CommandItem
                key={opp.id}
                onSelect={() => handleSelect("opportunities", opp.id)}
                className="flex items-center gap-3 cursor-pointer"
              >
                <Briefcase className="w-4 h-4 text-muted-foreground" />
                <div>
                  <div className="font-medium">{opp.title}</div>
                  <div className="text-xs text-muted-foreground">{opp.company}</div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Resources">
            {resources.slice(0, 4).map((resource) => (
              <CommandItem
                key={resource.id}
                onSelect={() => handleSelect("resources", resource.id)}
                className="flex items-center gap-3 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-muted-foreground" />
                <div>
                  <div className="font-medium">{resource.title}</div>
                  <div className="text-xs text-muted-foreground">{resource.description}</div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
