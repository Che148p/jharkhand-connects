import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import CulturalExperiences from "@/components/CulturalExperiences";
import LocalArtisans from "@/components/LocalArtisans";
import PersonalizedRecommendations from "@/components/PersonalizedRecommendations";
import InteractiveMap from "@/components/InteractiveMap";
import AITravelAssistant from "@/components/AITravelAssistant";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <PersonalizedRecommendations />
        <FeaturedDestinations />
        <InteractiveMap />
        <CulturalExperiences />
        <LocalArtisans />
      </main>
      <Footer />
      <AITravelAssistant />
    </div>
  );
};

export default Index;