import { Button } from "@/components/ui/button";
import { MapPin, Camera, Users } from "lucide-react";
import heroImage from "@/assets/hero-jharkhand.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Explore Jharkhand — 
            <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Nature, Culture & Tribes, Reimagined with AI
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            Personalized itineraries • Local markets & homestays • Secure bookings • AR/VR previews — all in one app.
          </p>

          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            From misty waterfalls and dense forests to living tribal traditions, Jharkhand is India's most authentic nature + culture destination. 
            Jharkhand Connects helps you discover, book and experience it safely — with AI planning, verified local guides, and a marketplace that empowers artisans.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-nature px-8 py-4 text-lg"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Plan My Trip
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
            >
              <Camera className="mr-2 h-5 w-5" />
              Explore Marketplace
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">
                Tourist Destinations
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">32</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">
                Tribal Communities
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">
                National Parks
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;