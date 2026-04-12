import { cn } from "@/lib/utils";
import type { MnaPipelineStep as MnaPipelineStepType } from "./content";

type PipelineStepProps = {
  item: MnaPipelineStepType;
};

export function PipelineStep({ item }: PipelineStepProps) {
  return (
    <div className="flex gap-4">
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/40 bg-primary/10 text-sm font-semibold text-primary"
        )}
      >
        {item.step}
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{item.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
      </div>
    </div>
  );
}
