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
    <SectionShell className="border-t border-stone-200 bg-stone-50/80 py-20 dark:border-stone-800 dark:bg-stone-900/40">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center font-serif text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          Questions
        </h2>
        <Accordion type="single" collapsible className="mt-10 w-full">
          {mnaFaq.map((item, i) => (
            <AccordionItem key={i} value={`mna-faq-${i}`} className="border-stone-200 dark:border-stone-800">
              <AccordionTrigger className="text-left text-stone-900 dark:text-stone-50">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionShell>
  );
}
