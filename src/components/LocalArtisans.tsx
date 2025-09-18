import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingBag, Award, Users } from "lucide-react";

const artisans = [
  {
    name: "Sita Devi",
    craft: "Dokra Metal Art",
    village: "Bikna Village",
    experience: "25+ years",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1594736797933-d0b58ace8b60?w=300&h=300&fit=crop&crop=face",
    specialties: ["Bronze Figurines", "Tribal Masks", "Traditional Jewelry"],
    story: "Master artisan preserving 4000-year-old lost-wax casting technique."
  },
  {
    name: "Raman Oraon",
    craft: "Bamboo Crafts",
    village: "Simdega District",
    experience: "18+ years",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    specialties: ["Baskets", "Home Decor", "Furniture"],
    story: "Eco-friendly craftsman creating sustainable bamboo products."
  },
  {
    name: "Maya Santhal",
    craft: "Tribal Textiles",
    village: "Dumka Region",
    experience: "20+ years",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    specialties: ["Handloom Sarees", "Tribal Patterns", "Natural Dyes"],
    story: "Weaving traditional Santhali motifs into contemporary designs."
  },
  {
    name: "Birsa Munda Collective",
    craft: "Stone Carving",
    village: "Khunti District",
    experience: "30+ years",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&h=300&fit=crop&crop=face",
    specialties: ["Sculptures", "Temple Art", "Memorial Stones"],
    story: "Group of 12 artisans keeping ancient stone carving traditions alive."
  }
];

const LocalArtisans = () => {
  return (
    <section id="artisans" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Meet Local Artisans
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect directly with master craftspeople preserving ancient traditions. 
            Support local communities through authentic handmade purchases and workshops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {artisans.map((artisan, index) => (
            <Card key={artisan.name} className="group hover:shadow-warm transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-sm font-medium">{artisan.rating}</span>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{artisan.name}</CardTitle>
                <div className="space-y-1">
                  <p className="text-secondary font-medium">{artisan.craft}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {artisan.village}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground italic">
                  "{artisan.story}"
                </p>
                
                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-accent" />
                  <span className="font-medium">{artisan.experience}</span>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {artisan.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    Visit Workshop
                  </Button>
                  <Button variant="outline" size="sm">
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-culture rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Support Local Communities</h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Every purchase and workshop booking directly supports artisan families 
            and helps preserve centuries-old cultural traditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Browse Artisan Marketplace
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Schedule Workshop Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalArtisans;