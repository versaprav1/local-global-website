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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Lock } from "lucide-react";

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
      className="scroll-mt-28 border-t border-border bg-gradient-to-b from-primary/[0.06] via-background to-secondary/[0.08] py-20"
    >
      <div className="mx-auto max-w-xl">
        <div className="mb-8 flex items-center gap-2">
          <span className="tag-accent inline-flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5" aria-hidden />
            Private
          </span>
        </div>
        <Card className="feature-card overflow-hidden border-primary/20 shadow-lg">
          <CardHeader className="space-y-1 border-b border-border/60 bg-muted/20 pb-6">
            <CardTitle className="font-display text-2xl text-foreground">Confidential intake</CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Short fields only. No deal specifics required to start—we will ask for more if there is a fit.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="mna-name">Name</Label>
                <Input id="mna-name" name="name" required autoComplete="name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mna-email">Work email</Label>
                <Input
                  id="mna-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mna-role">I am primarily…</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger id="mna-role">
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
                  className="resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="btn-primary w-full rounded-lg sm:w-auto">
                Submit securely
              </Button>
              <p className="text-xs text-muted-foreground">
                By submitting, you agree we may contact you about this request. No spam; no resale of your address.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
