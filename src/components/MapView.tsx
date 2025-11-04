import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Phone, Clock } from "lucide-react";
import { treatmentCenters } from "@/data/centers";
import { useState } from "react";

export default function MapView() {
  const { language } = useLanguage();
  const [selectedCenter, setSelectedCenter] = useState(treatmentCenters[0]);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "de" ? "Unsere Standorte" : "Our Locations"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "de" 
              ? "Finden Sie das nächstgelegene Behandlungszentrum in Ihrer Nähe"
              : "Find the nearest treatment center near you"}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="glass-card overflow-hidden h-[600px]">
              <CardContent className="p-0 h-full relative">
                {/* Mock Map - In production, integrate Google Maps or Mapbox */}
                <div className="w-full h-full bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="h-16 w-16 mx-auto text-primary" />
                    <p className="text-muted-foreground">
                      {language === "de" 
                        ? "Interaktive Karte wird hier angezeigt"
                        : "Interactive map would be displayed here"}
                    </p>
                    <Button variant="outline">
                      <Navigation className="h-4 w-4 mr-2" />
                      {language === "de" ? "Route planen" : "Get Directions"}
                    </Button>
                  </div>
                </div>

                {/* Location Markers */}
                <div className="absolute inset-0 pointer-events-none">
                  {treatmentCenters.map((center, index) => (
                    <button
                      key={center.id}
                      onClick={() => setSelectedCenter(center)}
                      className="absolute pointer-events-auto group"
                      style={{
                        top: `${20 + index * 15}%`,
                        left: `${30 + index * 10}%`,
                      }}
                    >
                      <div className="relative">
                        <MapPin 
                          className={`h-10 w-10 transition-all ${
                            selectedCenter.id === center.id 
                              ? "text-primary scale-125" 
                              : "text-primary/60 group-hover:text-primary group-hover:scale-110"
                          }`}
                          fill="currentColor"
                        />
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse" />
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Details */}
          <div className="space-y-4">
            <Card className="glass-card">
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedCenter.name}</h3>
                  <p className="text-muted-foreground">{selectedCenter.type}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">
                        {language === "de" ? "Adresse" : "Address"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {selectedCenter.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">
                        {language === "de" ? "Telefon" : "Phone"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        +49 (0) 123 456 789
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">
                        {language === "de" ? "Öffnungszeiten" : "Opening Hours"}
                      </p>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>{language === "de" ? "Mo-Fr:" : "Mon-Fri:"} 08:00 - 20:00</p>
                        <p>{language === "de" ? "Sa:" : "Sat:"} 09:00 - 16:00</p>
                        <p>{language === "de" ? "So:" : "Sun:"} {language === "de" ? "Geschlossen" : "Closed"}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <Button className="w-full">
                    <Navigation className="h-4 w-4 mr-2" />
                    {language === "de" ? "Route planen" : "Get Directions"}
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    {language === "de" ? "Anrufen" : "Call Now"}
                  </Button>
                </div>

                {/* Distance Info */}
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground text-center">
                    {language === "de" 
                      ? `${(Math.random() * 10 + 1).toFixed(1)} km von Ihrem Standort entfernt`
                      : `${(Math.random() * 10 + 1).toFixed(1)} km from your location`}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Access List */}
            <div className="space-y-2">
              <h4 className="font-semibold px-2">
                {language === "de" ? "Alle Standorte" : "All Locations"}
              </h4>
              {treatmentCenters.map((center) => (
                <button
                  key={center.id}
                  onClick={() => setSelectedCenter(center)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    selectedCenter.id === center.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/50 hover:bg-muted"
                  }`}
                >
                  <p className="font-medium">{center.name}</p>
                  <p className="text-sm opacity-80">{center.location}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
