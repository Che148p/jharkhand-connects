import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, MapPin, CreditCard } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Tell us what you want",
      description: "Trip length, interests, languages, budget."
    },
    {
      step: "02", 
      icon: <MapPin className="h-8 w-8" />,
      title: "Get a curated itinerary & live map",
      description: "Tweak with drag & drop."
    },
    {
      step: "03",
      icon: <CreditCard className="h-8 w-8" />,
      title: "Book verified guides, homestays, and crafts",
      description: "Pay securely. Travel with AR guides & chat support."
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to your perfect Jharkhand experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting lines for desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <Card key={index} className="relative z-10 group hover:shadow-warm transition-all duration-300 border-0 shadow-md bg-background">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground font-bold text-xl">
                  {step.step}
                </div>
                
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4 leading-tight">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-6">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8 py-4 text-lg">
            Start Planning Your Trip
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;