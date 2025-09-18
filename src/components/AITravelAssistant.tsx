import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  MapPin, 
  Calendar, 
  Clock,
  Star,
  Languages,
  Minimize2,
  Maximize2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  suggestions?: string[];
  itinerary?: {
    destination: string;
    duration: string;
    activities: string[];
    bestTime: string;
  };
}

const AITravelAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Namaste! I\'m your AI travel assistant for Jharkhand. I can help you plan personalized itineraries, find cultural experiences, and connect with local artisans. What would you like to explore?',
      timestamp: new Date(),
      suggestions: [
        'Plan a 3-day eco-tourism trip',
        'Find tribal cultural experiences',
        'Show me waterfalls near Ranchi',
        'Book local artisan workshops'
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'hi', name: 'Hindi', native: 'हिंदी' },
    { code: 'bho', name: 'Bhojpuri', native: 'भोजपुरी' },
    { code: 'mag', name: 'Magahi', native: 'मगही' },
    { code: 'mai', name: 'Maithili', native: 'मैथिली' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = async (userMessage: string): Promise<Message> => {
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const lowerMessage = userMessage.toLowerCase();
    
    // Pattern matching for different types of queries
    if (lowerMessage.includes('plan') || lowerMessage.includes('itinerary')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: 'Based on your interests, I\'ve created a personalized itinerary for you! This combines nature, culture, and local experiences.',
        timestamp: new Date(),
        itinerary: {
          destination: 'Netarhat & Betla Circuit',
          duration: '3 Days, 2 Nights',
          activities: [
            'Sunrise at Netarhat Hill Station',
            'Wildlife Safari at Betla National Park',
            'Tribal village cultural tour',
            'Local handicraft workshop',
            'Hundru Falls trekking'
          ],
          bestTime: 'October to March'
        },
        suggestions: [
          'Customize this itinerary',
          'Add more cultural activities',
          'Find accommodation options',
          'Check weather conditions'
        ]
      };
    }
    
    if (lowerMessage.includes('culture') || lowerMessage.includes('tribal')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: 'Jharkhand\'s tribal culture is incredibly rich! I can arrange authentic experiences with Santhali, Oraon, and Munda communities. You can participate in traditional dance performances, learn ancient crafts, and stay in community homestays.',
        timestamp: new Date(),
        suggestions: [
          'Book homestay experience',
          'Learn Dokra metal art',
          'Join traditional dance workshop',
          'Visit tribal museums'
        ]
      };
    }
    
    if (lowerMessage.includes('waterfall') || lowerMessage.includes('falls')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: 'Jharkhand has stunning waterfalls! Hundru Falls (322 ft), Dassam Falls, and Jonha Falls are must-visits. I can provide directions, best visiting times, and nearby attractions for each.',
        timestamp: new Date(),
        suggestions: [
          'Get directions to Hundru Falls',
          'Plan waterfall hopping tour',
          'Find photography spots',
          'Check monsoon safety tips'
        ]
      };
    }
    
    if (lowerMessage.includes('food') || lowerMessage.includes('cuisine')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: 'Jharkhand cuisine is a delightful blend of tribal and traditional flavors! Don\'t miss Dhuska, Pitha, Rugra (mushroom curry), and Bamboo shoots. I can recommend authentic local restaurants and street food spots.',
        timestamp: new Date(),
        suggestions: [
          'Find best local restaurants',
          'Learn traditional cooking',
          'Street food safety tips',
          'Vegetarian options available'
        ]
      };
    }
    
    // Default response
    return {
      id: Date.now().toString(),
      type: 'assistant',
      content: 'I\'d be happy to help you explore Jharkhand! I can assist with itinerary planning, cultural experiences, accommodation bookings, transportation, and connecting you with local guides and artisans. What specific aspect of your trip would you like to focus on?',
      timestamp: new Date(),
      suggestions: [
        'Plan complete trip itinerary',
        'Find cultural experiences',
        'Locate nearby attractions',
        'Connect with local guides'
      ]
    };
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const aiResponse = await generateAIResponse(inputMessage);
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        type: 'assistant',
        content: 'I apologize, but I\'m having trouble processing your request right now. Please try again in a moment.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-glow bg-gradient-hero hover:scale-110 transition-all duration-300 z-50"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className={cn(
      "fixed bottom-6 right-6 w-96 shadow-nature border-0 z-50 transition-all duration-300",
      isMinimized ? "h-16" : "h-[600px]"
    )}>
      <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-hero text-white rounded-t-lg">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          <CardTitle className="text-lg">AI Travel Assistant</CardTitle>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="bg-white/20 border-0 text-xs text-white rounded px-2 py-1"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code} className="text-black">
                {lang.native}
              </option>
            ))}
          </select>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
            className="h-8 w-8 p-0 hover:bg-white/20"
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 p-0 hover:bg-white/20"
          >
            ×
          </Button>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="p-0 flex flex-col h-[536px]">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-3",
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  {message.type === 'assistant' && (
                    <div className="bg-gradient-hero p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  )}
                  
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg p-3 text-sm",
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    )}
                  >
                    <p>{message.content}</p>
                    
                    {message.itinerary && (
                      <div className="mt-3 p-3 bg-background rounded-lg border">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="font-semibold">{message.itinerary.destination}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {message.itinerary.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {message.itinerary.bestTime}
                          </div>
                        </div>
                        <div className="space-y-1">
                          {message.itinerary.activities.map((activity, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs">
                              <Star className="h-3 w-3 text-accent" />
                              {activity}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {message.suggestions && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {message.suggestions.map((suggestion, idx) => (
                          <Button
                            key={idx}
                            variant="outline"
                            size="sm"
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="text-xs h-6 px-2"
                          >
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {message.type === 'user' && (
                    <div className="bg-primary p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <div className="bg-gradient-hero p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about destinations, culture, or plan your trip..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="sm">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default AITravelAssistant;