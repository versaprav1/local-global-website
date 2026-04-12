import { SectionShell } from "./SectionShell";
import { mnaPipelineSteps } from "./content";
import { PipelineStep } from "./PipelineStep";

export function ProcessPipeline() {
  return (
    <SectionShell className="py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">How engagements move</h2>
        <div className="editorial-divider mt-4" />
        <p className="mt-4 text-muted-foreground">A deliberate sequence so neither side overexposes too early.</p>
      </div>
      <div className="mx-auto mt-14 flex max-w-xl flex-col gap-10">
        {mnaPipelineSteps.map((step) => (
          <PipelineStep key={step.step} item={step} />
        ))}
      </div>
    </SectionShell>
  );
}
