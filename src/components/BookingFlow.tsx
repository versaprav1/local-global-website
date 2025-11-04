import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { specialists as specialistsData } from "@/data/specialists";
import { Calendar as CalendarIcon, Clock, User, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const specialists = specialistsData.map((s) => ({
  ...s,
  id: String(s.id),
}));

interface BookingFlowProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preselectedSpecialist?: string;
}

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
];

export function BookingFlow({ open, onOpenChange, preselectedSpecialist }: BookingFlowProps) {
  const { language } = useLanguage();
  const [step, setStep] = useState(1);
  const [selectedSpecialist, setSelectedSpecialist] = useState(preselectedSpecialist || "");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", notes: "" });

  const resetFlow = () => {
    setStep(1);
    setSelectedSpecialist(preselectedSpecialist || "");
    setSelectedDate(undefined);
    setSelectedTime("");
    setFormData({ name: "", email: "", phone: "", notes: "" });
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(resetFlow, 300);
  };

  const handleConfirm = () => {
    toast.success(
      language === "de" 
        ? "Buchung erfolgreich! Bestätigung wurde per E-Mail gesendet." 
        : "Booking confirmed! Confirmation sent via email."
    );
    handleClose();
  };

  const specialist = specialists.find(s => s.id === selectedSpecialist);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] glass-card">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {language === "de" ? "Termin Buchen" : "Book Appointment"}
          </DialogTitle>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {([1, 2, 3, 4] as const).map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
                {s}
              </div>
              {s < 4 && (
                <div className={`w-12 h-1 ${step > s ? "bg-primary" : "bg-muted"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Select Specialist */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <Label>{language === "de" ? "Spezialist auswählen" : "Select Specialist"}</Label>
              <Select value={selectedSpecialist} onValueChange={setSelectedSpecialist}>
                <SelectTrigger>
                  <SelectValue placeholder={language === "de" ? "Wählen Sie einen Spezialisten" : "Choose a specialist"} />
                </SelectTrigger>
                <SelectContent>
                  {specialists.map((spec) => (
                    <SelectItem key={spec.id} value={spec.id}>
                      {spec.name} - {spec.specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {specialist && (
              <div className="p-4 rounded-lg bg-muted/50 space-y-2">
                <p className="font-semibold">{specialist.name}</p>
                <p className="text-sm text-muted-foreground">{specialist.specialty}</p>
                <p className="text-sm">{specialist.experience}</p>
              </div>
            )}
            <Button onClick={() => setStep(2)} disabled={!selectedSpecialist} className="w-full">
              {language === "de" ? "Weiter" : "Continue"}
            </Button>
          </div>
        )}

        {/* Step 2: Select Date & Time */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <Label className="flex items-center gap-2 mb-2">
                <CalendarIcon className="h-4 w-4" />
                {language === "de" ? "Datum wählen" : "Select Date"}
              </Label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date()}
                className="rounded-md border"
              />
            </div>
            {selectedDate && (
              <div>
                <Label className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4" />
                  {language === "de" ? "Zeit wählen" : "Select Time"}
                </Label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      onClick={() => setSelectedTime(time)}
                      size="sm"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            )}
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                {language === "de" ? "Zurück" : "Back"}
              </Button>
              <Button onClick={() => setStep(3)} disabled={!selectedDate || !selectedTime} className="flex-1">
                {language === "de" ? "Weiter" : "Continue"}
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Enter Details */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <Label className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {language === "de" ? "Name" : "Name"}
              </Label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={language === "de" ? "Ihr vollständiger Name" : "Your full name"}
              />
            </div>
            <div>
              <Label>{language === "de" ? "E-Mail" : "Email"}</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="email@example.com"
              />
            </div>
            <div>
              <Label>{language === "de" ? "Telefon" : "Phone"}</Label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+49 123 456 7890"
              />
            </div>
            <div>
              <Label>{language === "de" ? "Notizen (Optional)" : "Notes (Optional)"}</Label>
              <Input
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder={language === "de" ? "Besondere Anmerkungen..." : "Special notes..."}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                {language === "de" ? "Zurück" : "Back"}
              </Button>
              <Button 
                onClick={() => setStep(4)} 
                disabled={!formData.name || !formData.email || !formData.phone}
                className="flex-1"
              >
                {language === "de" ? "Weiter" : "Continue"}
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <CheckCircle2 className="h-16 w-16 text-primary" />
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-muted/50">
              <h3 className="font-semibold text-lg">
                {language === "de" ? "Buchungsübersicht" : "Booking Summary"}
              </h3>
              <div className="space-y-2 text-sm">
                <p><strong>{language === "de" ? "Spezialist:" : "Specialist:"}</strong> {specialist?.name}</p>
                <p><strong>{language === "de" ? "Datum:" : "Date:"}</strong> {selectedDate?.toLocaleDateString()}</p>
                <p><strong>{language === "de" ? "Zeit:" : "Time:"}</strong> {selectedTime}</p>
                <p><strong>{language === "de" ? "Name:" : "Name:"}</strong> {formData.name}</p>
                <p><strong>{language === "de" ? "E-Mail:" : "Email:"}</strong> {formData.email}</p>
                <p><strong>{language === "de" ? "Telefon:" : "Phone:"}</strong> {formData.phone}</p>
                {formData.notes && (
                  <p><strong>{language === "de" ? "Notizen:" : "Notes:"}</strong> {formData.notes}</p>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep(3)} className="flex-1">
                {language === "de" ? "Zurück" : "Back"}
              </Button>
              <Button onClick={handleConfirm} className="flex-1">
                {language === "de" ? "Bestätigen" : "Confirm Booking"}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
