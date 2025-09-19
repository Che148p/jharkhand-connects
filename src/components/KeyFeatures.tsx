import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  MessageCircle, 
  Shield, 
  MapPin, 
  Navigation, 
  Store, 
  BarChart3, 
  Headphones 
} from "lucide-react";

const KeyFeatures = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Personalized Itineraries",
      description: "Tell the app how long you have, what you like (nature, culture, adventure), and your mobility/food preferences — AI builds a day-by-day plan, optimized for time and transport."
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Multilingual Chatbot & Voice Guide",
      description: "24×7 chatbot that speaks Hindi, English, Santhali, Kurukh, Mundari and other local languages. Ask in text or voice and get local tips, safety alerts, and route help."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Blockchain Booking & Guide Verification",
      description: "Vendor and guide IDs, booking receipts, and certificates are immutable on a permissioned blockchain — reducing fraud and ensuring trust."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Interactive Maps & AR/VR Previews",
      description: "Explore points of interest with map overlays. View 3D/360 AR previews of temples, waterfalls and homestays before you go."
    },
    {
      icon: <Navigation className="h-8 w-8" />,
      title: "Real-time Transport & Geo-aware Alerts",
      description: "Live bus/train/ride suggestions, walking time estimates, and location-based safety & weather alerts."
    },
    {
      icon: <Store className="h-8 w-8" />,
      title: "Local Marketplace & Homestays",
      description: "Buy tribal handicrafts, book homestays, reserve eco-tours and community experiences — payments secured and settlement tracked."
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Feedback & Sentiment Intelligence",
      description: "Post-visit feedback is analyzed with AI to surface hot/cold spots, service gaps and rising trends for continuous improvement."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics for Tourism Officials",
      description: "A dashboard for officials showing arrivals, local revenue, environmental impact indicators, and hotspot heatmaps."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Key Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for an authentic and secure Jharkhand experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg text-center leading-tight">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;