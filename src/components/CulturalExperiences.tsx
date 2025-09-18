import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Music, Palette, Heart } from "lucide-react";
import cultureImage from "@/assets/culture-jharkhand.jpg";

const experiences = [
  {
    title: "Tribal Dance Performances",
    description: "Experience the vibrant Santhali, Oraon, and Munda folk dances that celebrate nature and community.",
    icon: Music,
    participants: "15-30 people",
    duration: "2-3 hours"
  },
  {
    title: "Traditional Craft Workshops",
    description: "Learn ancient crafts like Dokra metal casting, bamboo weaving, and tribal jewelry making.",
    icon: Palette,
    participants: "8-12 people",
    duration: "Half day"
  },
  {
    title: "Community Homestays",
    description: "Live with tribal families, share meals, and experience authentic rural life in Jharkhand.",
    icon: Heart,
    participants: "2-6 people",
    duration: "1-3 days"
  },
  {
    title: "Cultural Village Tours",
    description: "Guided tours through traditional villages showcasing local customs, architecture, and lifestyle.",
    icon: Users,
    participants: "10-20 people",
    duration: "Full day"
  }
];

const CulturalExperiences = () => {
  return (
    <section id="culture" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Immerse in Rich
              <span className="block text-secondary">Tribal Culture</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Jharkhand is home to 32 tribal communities, each with unique traditions, 
              languages, and artistic expressions. Join authentic cultural experiences 
              that support local communities.
            </p>

            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <Card key={experience.title} className="border-0 shadow-sm hover:shadow-warm transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-culture p-3 rounded-lg">
                        <experience.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{experience.title}</h3>
                        <p className="text-muted-foreground mb-3">{experience.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>👥 {experience.participants}</span>
                          <span>⏱️ {experience.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Button size="lg" variant="secondary" className="mr-4">
                Book Cultural Tour
              </Button>
              <Button size="lg" variant="outline">
                View Calendar
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-warm">
              <img
                src={cultureImage}
                alt="Tribal cultural performance in Jharkhand"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-secondary">32</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">
                        Tribal Groups
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">15+</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">
                        Folk Dances
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">200+</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">
                        Artisan Families
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalExperiences;