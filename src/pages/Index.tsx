import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import CulturalExperiences from "@/components/CulturalExperiences";
import LocalArtisans from "@/components/LocalArtisans";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <FeaturedDestinations />
        <CulturalExperiences />
        <LocalArtisans />
      </main>
      <Footer />
    </div>
  );
};

export default Index;