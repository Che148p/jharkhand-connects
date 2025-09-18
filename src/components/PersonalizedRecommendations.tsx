import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  TrendingUp,
  Calendar,
  Camera,
  Heart
} from "lucide-react";

interface Recommendation {
  id: string;
  title: string;
  type: 'destination' | 'experience' | 'artisan' | 'event';
  description: string;
  image: string;
  rating: number;
  matchScore: number;
  tags: string[];
  duration?: string;
  price?: string;
  location: string;
  trending?: boolean;
}

const PersonalizedRecommendations = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [userPreferences, setUserPreferences] = useState({
    interests: ['nature', 'culture', 'adventure'],
    budget: 'moderate',
    travelStyle: 'experiential',
    duration: '2-3 days'
  });

  // Simulate AI-powered recommendations based on user behavior
  useEffect(() => {
    const generateRecommendations = () => {
      const baseRecommendations: Recommendation[] = [
        {
          id: '1',
          title: 'Netarhat Sunrise & Santhali Village Tour',
          type: 'experience',
          description: 'Watch the breathtaking sunrise from Queen of Chotanagpur and immerse in authentic Santhali culture.',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
          rating: 4.8,
          matchScore: 95,
          tags: ['Nature', 'Culture', 'Sunrise', 'Community'],
          duration: '2 days',
          price: '₹3,500',
          location: 'Netarhat, Latehar',
          trending: true
        },
        {
          id: '2',
          title: 'Dokra Art Workshop with Master Artisan',
          type: 'artisan',
          description: 'Learn the 4000-year-old lost-wax casting technique from renowned artist Sita Devi.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
          rating: 4.9,
          matchScore: 88,
          tags: ['Handicraft', 'Learning', 'Heritage', 'Bronze'],
          duration: '4 hours',
          price: '₹1,200',
          location: 'Bikna Village'
        },
        {
          id: '3',
          title: 'Betla Wildlife Photography Safari',
          type: 'destination',
          description: 'Exclusive photography-focused safari with chances to spot tigers, elephants, and rare birds.',
          image: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&h=300&fit=crop',
          rating: 4.7,
          matchScore: 92,
          tags: ['Wildlife', 'Photography', 'Adventure', 'Tigers'],
          duration: '1 day',
          price: '₹2,800',
          location: 'Betla National Park'
        },
        {
          id: '4',
          title: 'Tribal Dance Festival Experience',
          type: 'event',
          description: 'Join the vibrant Karam festival celebrations with traditional Oraon and Munda communities.',
          image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop',
          rating: 4.6,
          matchScore: 85,
          tags: ['Festival', 'Dance', 'Music', 'Celebration'],
          duration: '3 days',
          price: '₹4,200',
          location: 'Khunti District',
          trending: true
        },
        {
          id: '5',
          title: 'Hundru Falls Adventure Trek',
          type: 'destination',
          description: 'Guided trek to the spectacular 322-foot waterfall with rock climbing and photography.',
          image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop',
          rating: 4.5,
          matchScore: 78,
          tags: ['Waterfall', 'Trekking', 'Adventure', 'Nature'],
          duration: '1 day',
          price: '₹1,800',
          location: 'Near Ranchi'
        },
        {
          id: '6',
          title: 'Bamboo Craft & Eco-Village Stay',
          type: 'experience',
          description: 'Learn sustainable bamboo crafting and stay in an eco-friendly tribal village homestay.',
          image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=300&fit=crop',
          rating: 4.4,
          matchScore: 81,
          tags: ['Eco-tourism', 'Homestay', 'Crafts', 'Sustainable'],
          duration: '2 nights',
          price: '₹2,500',
          location: 'Simdega District'
        }
      ];

      // Sort by match score and add some randomization for variety
      const sorted = baseRecommendations
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 4);
      
      setRecommendations(sorted);
    };

    generateRecommendations();
  }, [userPreferences]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'destination': return <MapPin className="h-4 w-4" />;
      case 'experience': return <Camera className="h-4 w-4" />;
      case 'artisan': return <Users className="h-4 w-4" />;
      case 'event': return <Calendar className="h-4 w-4" />;
      default: return <MapPin className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'destination': return 'bg-primary/10 text-primary';
      case 'experience': return 'bg-secondary/10 text-secondary';
      case 'artisan': return 'bg-accent/10 text-accent';
      case 'event': return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-muted';
    }
  };

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">
              AI-Powered Recommendations
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Personalized suggestions based on your interests, travel style, and preferences. 
            Our AI learns from your interactions to provide better recommendations.
          </p>
        </div>

        {/* Preference Indicators */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Badge variant="secondary" className="px-3 py-1">
            <TrendingUp className="h-3 w-3 mr-1" />
            Based on your activity
          </Badge>
          <Badge variant="outline" className="px-3 py-1">
            Nature Lover
          </Badge>
          <Badge variant="outline" className="px-3 py-1">
            Culture Enthusiast
          </Badge>
          <Badge variant="outline" className="px-3 py-1">
            Photography Interest
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((rec) => (
            <Card key={rec.id} className="group hover:shadow-warm transition-all duration-300 overflow-hidden border-0 shadow-md">
              <div className="relative">
                <img
                  src={rec.image}
                  alt={rec.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className={getTypeColor(rec.type)}>
                    {getTypeIcon(rec.type)}
                    <span className="ml-1 capitalize">{rec.type}</span>
                  </Badge>
                  {rec.trending && (
                    <Badge className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300">
                      🔥 Trending
                    </Badge>
                  )}
                </div>
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Brain className="h-3 w-3 text-primary" />
                  <span className="text-xs font-medium">{rec.matchScore}%</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <span className="text-xs font-medium">{rec.rating}</span>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg leading-tight">{rec.title}</CardTitle>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {rec.location}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {rec.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {rec.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {rec.duration}
                  </div>
                  <div className="font-semibold text-primary">
                    {rec.price}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    Book Now
                  </Button>
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            See More Recommendations
          </Button>
        </div>

        {/* AI Insights */}
        <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6">
          <div className="text-center">
            <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Travel Insights</h3>
            <p className="text-muted-foreground mb-4">
              Based on your preferences and current travel trends in Jharkhand
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">Oct-Mar</div>
                <div className="text-sm text-muted-foreground">Best time for your interests</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-1">₹2,800</div>
                <div className="text-sm text-muted-foreground">Average budget match</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">85%</div>
                <div className="text-sm text-muted-foreground">Traveler satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedRecommendations;