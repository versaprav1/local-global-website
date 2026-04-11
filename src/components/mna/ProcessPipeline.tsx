import { SectionShell } from "./SectionShell";
import { mnaPipelineSteps } from "./content";
import { PipelineStep } from "./PipelineStep";

export function ProcessPipeline() {
  return (
    <SectionShell className="py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          How engagements move
        </h2>
        <p className="mt-3 text-stone-600 dark:text-stone-400">
          A deliberate sequence so neither side overexposes too early.
        </p>
      </div>
      <div className="mx-auto mt-14 flex max-w-xl flex-col gap-10">
        {mnaPipelineSteps.map((step) => (
          <PipelineStep key={step.step} item={step} />
        ))}
      </div>
    </SectionShell>
  );
}
