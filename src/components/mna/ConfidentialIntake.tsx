import { useState, FormEvent } from "react";
import { SectionShell } from "./SectionShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export function ConfidentialIntake() {
  const [role, setRole] = useState<string>("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!role) {
      toast.error("Please select how you identify for this request.");
      return;
    }
    toast.success("Thank you. We will follow up privately.", {
      description: "This demo form does not transmit data yet—wire to Supabase when ready.",
    });
  };

  return (
    <SectionShell
      id="intake"
      className="scroll-mt-28 border-t border-stone-200 bg-white py-20 dark:border-stone-800 dark:bg-stone-950"
    >
      <div className="mx-auto max-w-xl">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          Confidential intake
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          Short fields only. No deal specifics required to start—we will ask for more if there is a fit.
        </p>
        <form onSubmit={onSubmit} className="mt-10 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="mna-name">Name</Label>
            <Input id="mna-name" name="name" required autoComplete="name" className="bg-white dark:bg-stone-950" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mna-email">Work email</Label>
            <Input
              id="mna-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="bg-white dark:bg-stone-950"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mna-role">I am primarily…</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger id="mna-role" className="bg-white dark:bg-stone-950">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="seller">Seller / operator</SelectItem>
                <SelectItem value="buyer">Buyer (strategic or financial)</SelectItem>
                <SelectItem value="advisor">Advisor / intermediary</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="mna-context">Context (optional)</Label>
            <Textarea
              id="mna-context"
              name="context"
              rows={4}
              placeholder="Sector, geography, timeline—high level only."
              className="resize-none bg-white dark:bg-stone-950"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full bg-stone-900 text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white sm:w-auto"
          >
            Submit securely
          </Button>
          <p className="text-xs text-stone-500 dark:text-stone-500">
            By submitting, you agree we may contact you about this request. No spam; no resale of your address.
          </p>
        </form>
      </div>
    </SectionShell>
  );
}
