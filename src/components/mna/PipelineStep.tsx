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
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-stone-300 bg-white text-sm font-semibold text-stone-800",
          "dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100"
        )}
      >
        {item.step}
      </div>
      <div>
        <h3 className="font-semibold text-stone-900 dark:text-stone-50">{item.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          {item.description}
        </p>
      </div>
    </div>
  );
}
