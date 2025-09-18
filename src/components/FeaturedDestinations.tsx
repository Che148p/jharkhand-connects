import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Camera } from "lucide-react";

const destinations = [
  {
    name: "Netarhat",
    description: "Known as the 'Queen of Chotanagpur', offering stunning sunrise views and cool climate.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    rating: 4.8,
    highlights: ["Sunrise Point", "Hill Station", "Cool Climate"]
  },
  {
    name: "Betla National Park",
    description: "Premier wildlife sanctuary home to tigers, elephants, and diverse flora and fauna.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&h=300&fit=crop",
    rating: 4.7,
    highlights: ["Wildlife Safari", "Tigers", "Eco-tourism"]
  },
  {
    name: "Hundru Falls",
    description: "Spectacular 322-foot waterfall surrounded by lush greenery and rocky terrain.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
    rating: 4.6,
    highlights: ["Waterfall", "Trekking", "Photography"]
  },
  {
    name: "Deoghar",
    description: "Sacred pilgrimage site famous for Baidyanath Temple and spiritual significance.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop",
    rating: 4.9,
    highlights: ["Temple", "Pilgrimage", "Spiritual"]
  },
  {
    name: "Patratu Valley",
    description: "Serene valley with pristine lake, perfect for boating and peaceful retreats.",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=300&fit=crop",
    rating: 4.5,
    highlights: ["Lake", "Boating", "Valley Views"]
  },
  {
    name: "Rajrappa Temple",
    description: "Ancient temple complex at the confluence of rivers, rich in history and culture.",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=300&fit=crop",
    rating: 4.4,
    highlights: ["Temple", "Rivers", "Heritage"]
  }
];

const FeaturedDestinations = () => {
  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover Jharkhand's most captivating locations, from serene hill stations 
            to wildlife sanctuaries and sacred temples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.name} 
              className="group hover:shadow-nature transition-all duration-300 overflow-hidden border-0 shadow-md"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <MapPin className="h-5 w-5 text-primary" />
                  {destination.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {destination.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button variant="default" size="sm" className="flex-1">
                    Learn More
                  </Button>
                  <Button variant="outline" size="sm">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;