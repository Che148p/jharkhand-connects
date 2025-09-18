import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Map, 
  MapPin, 
  Navigation, 
  Layers, 
  Search,
  Filter,
  Zap,
  Camera,
  Mountain,
  TreePine,
  Waves
} from "lucide-react";

interface MapLocation {
  id: string;
  name: string;
  type: 'destination' | 'cultural' | 'wildlife' | 'waterfall' | 'heritage';
  coordinates: { lat: number; lng: number };
  description: string;
  rating: number;
  image: string;
  features: string[];
  distance?: string;
}

const InteractiveMap = () => {
  const [activeLocation, setActiveLocation] = useState<MapLocation | null>(null);
  const [mapFilter, setMapFilter] = useState<string>('all');
  const [showARPreview, setShowARPreview] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  const locations: MapLocation[] = [
    {
      id: '1',
      name: 'Netarhat Hill Station',
      type: 'destination',
      coordinates: { lat: 23.4667, lng: 84.25 },
      description: 'Queen of Chotanagpur with breathtaking sunrise views',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
      features: ['Sunrise Point', 'Cool Climate', 'Hill Station'],
      distance: '156 km from Ranchi'
    },
    {
      id: '2',
      name: 'Betla National Park',
      type: 'wildlife',
      coordinates: { lat: 23.8667, lng: 84.1833 },
      description: 'Premier wildlife sanctuary with tigers and elephants',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=300&h=200&fit=crop',
      features: ['Tiger Reserve', 'Safari', 'Wildlife Photography'],
      distance: '170 km from Ranchi'
    },
    {
      id: '3',
      name: 'Hundru Falls',
      type: 'waterfall',
      coordinates: { lat: 23.4333, lng: 85.6167 },
      description: 'Spectacular 322-foot waterfall near Ranchi',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=300&h=200&fit=crop',
      features: ['Waterfall', 'Trekking', 'Photography'],
      distance: '45 km from Ranchi'
    },
    {
      id: '4',
      name: 'Deoghar Temple',
      type: 'heritage',
      coordinates: { lat: 24.4833, lng: 86.7 },
      description: 'Sacred Baidyanath Temple pilgrimage site',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=300&h=200&fit=crop',
      features: ['Temple', 'Pilgrimage', 'Spiritual'],
      distance: '253 km from Ranchi'
    },
    {
      id: '5',
      name: 'Tribal Cultural Village',
      type: 'cultural',
      coordinates: { lat: 23.35, lng: 85.33 },
      description: 'Authentic Santhali village experience',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300&h=200&fit=crop',
      features: ['Tribal Culture', 'Homestay', 'Traditional Crafts'],
      distance: '87 km from Ranchi'
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Locations', icon: Map },
    { value: 'destination', label: 'Destinations', icon: Mountain },
    { value: 'wildlife', label: 'Wildlife', icon: TreePine },
    { value: 'waterfall', label: 'Waterfalls', icon: Waves },
    { value: 'cultural', label: 'Cultural Sites', icon: MapPin },
    { value: 'heritage', label: 'Heritage', icon: Camera }
  ];

  const filteredLocations = mapFilter === 'all' 
    ? locations 
    : locations.filter(loc => loc.type === mapFilter);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'destination': return 'bg-primary/20 border-primary text-primary';
      case 'wildlife': return 'bg-green-100 border-green-500 text-green-700';
      case 'waterfall': return 'bg-blue-100 border-blue-500 text-blue-700';
      case 'cultural': return 'bg-secondary/20 border-secondary text-secondary';
      case 'heritage': return 'bg-purple-100 border-purple-500 text-purple-700';
      default: return 'bg-muted border-muted-foreground text-muted-foreground';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Interactive Travel Map
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore Jharkhand with our AI-powered interactive map featuring real-time information, 
            AR previews, and personalized route planning.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-0 shadow-nature">
              <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardTitle className="flex items-center gap-2">
                  <Map className="h-5 w-5" />
                  Jharkhand Tourism Map
                </CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Navigation className="h-4 w-4 mr-1" />
                    Get Directions
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowARPreview(!showARPreview)}
                  >
                    <Zap className="h-4 w-4 mr-1" />
                    AR Preview
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <div 
                  ref={mapRef}
                  className="relative h-96 bg-muted rounded-b-lg overflow-hidden"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                >
                  {/* Simulated Map Interface */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
                    <div className="text-center">
                      <div className="relative inline-block">
                        <div className="w-64 h-48 bg-green-200 dark:bg-green-800 rounded-lg mb-4 relative overflow-hidden">
                          {/* Jharkhand State Outline Simulation */}
                          <div className="absolute inset-2 bg-green-300 dark:bg-green-700 rounded-lg">
                            {filteredLocations.map((location, index) => (
                              <div
                                key={location.id}
                                className={`absolute w-3 h-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-150 ${
                                  activeLocation?.id === location.id 
                                    ? 'bg-red-500 scale-150 animate-pulse' 
                                    : 'bg-red-400 hover:bg-red-500'
                                }`}
                                style={{
                                  left: `${20 + (index * 35)}%`,
                                  top: `${15 + (index % 3) * 25}%`,
                                }}
                                onClick={() => setActiveLocation(location)}
                                title={location.name}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Interactive map showing {filteredLocations.length} locations
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* AR Preview Overlay */}
                  {showARPreview && (
                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Camera className="h-16 w-16 mx-auto mb-4 text-accent" />
                        <h3 className="text-xl font-semibold mb-2">AR Preview Mode</h3>
                        <p className="text-sm opacity-80 mb-4">
                          Point your camera at locations to see virtual tours
                        </p>
                        <Button 
                          variant="outline" 
                          onClick={() => setShowARPreview(false)}
                          className="border-white text-white hover:bg-white hover:text-black"
                        >
                          Close AR Mode
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Filter className="h-5 w-5" />
                  Filter Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {filterOptions.map((option) => (
                  <Button
                    key={option.value}
                    variant={mapFilter === option.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setMapFilter(option.value)}
                    className="w-full justify-start"
                  >
                    <option.icon className="h-4 w-4 mr-2" />
                    {option.label}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Location Details */}
            {activeLocation ? (
              <Card>
                <div className="relative">
                  <img
                    src={activeLocation.image}
                    alt={activeLocation.name}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  <Badge 
                    className={`absolute top-2 left-2 ${getTypeColor(activeLocation.type)}`}
                  >
                    {activeLocation.type}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{activeLocation.name}</CardTitle>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{activeLocation.distance}</span>
                    <div className="flex items-center gap-1">
                      <span>⭐ {activeLocation.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm">{activeLocation.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {activeLocation.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      Visit Now
                    </Button>
                    <Button variant="outline" size="sm">
                      <Navigation className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">
                    Click on a location pin to see details and get directions
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Search className="h-4 w-4 mr-2" />
                  Search Locations
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Layers className="h-4 w-4 mr-2" />
                  Traffic Layer
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Navigation className="h-4 w-4 mr-2" />
                  Plan Route
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Banner */}
        <div className="mt-12 bg-gradient-hero rounded-2xl p-6 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Advanced Map Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <Zap className="h-8 w-8 mx-auto mb-2 text-accent" />
              <h4 className="font-medium mb-1">AR Previews</h4>
              <p className="text-sm opacity-90">Virtual site tours</p>
            </div>
            <div className="text-center">
              <Navigation className="h-8 w-8 mx-auto mb-2 text-accent" />
              <h4 className="font-medium mb-1">Real-time GPS</h4>
              <p className="text-sm opacity-90">Live navigation</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-2 text-accent" />
              <h4 className="font-medium mb-1">Local Insights</h4>
              <p className="text-sm opacity-90">Community tips</p>
            </div>
            <div className="text-center">
              <Camera className="h-8 w-8 mx-auto mb-2 text-accent" />
              <h4 className="font-medium mb-1">Photo Spots</h4>
              <p className="text-sm opacity-90">Best viewpoints</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;