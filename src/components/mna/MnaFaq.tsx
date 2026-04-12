import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionShell } from "./SectionShell";
import { mnaFaq } from "./content";

export function MnaFaq() {
  return (
    <SectionShell className="border-t border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-foreground">
          Questions
        </h2>
        <div className="editorial-divider mx-auto mt-4" />
        <Accordion type="single" collapsible className="mt-10 w-full">
          {mnaFaq.map((item, i) => (
            <AccordionItem key={i} value={`mna-faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionShell>
  );
}
