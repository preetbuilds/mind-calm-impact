import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";
import { MapPin, Radio, School, Book, Building } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const impactOptions = [
  {
    icon: MapPin,
    name: "Protected Acre",
    description: "Preserve dark-sky land",
    progress: 25,
    required: "5 Focus Credits",
    color: "text-green-600",
  },
  {
    icon: Radio,
    name: "Sky Meter",
    description: "Deploy light sensor",
    progress: 60,
    required: "3 Focus Credits",
    color: "text-teal",
  },
  {
    icon: School,
    name: "School Program",
    description: "Support astronomy education",
    progress: 40,
    required: "4 Focus Credits",
    color: "text-blue-600",
  },
  {
    icon: Book,
    name: "Indigenous Story",
    description: "Preserve cultural heritage",
    progress: 10,
    required: "6 Focus Credits",
    color: "text-amber-600",
  },
  {
    icon: Building,
    name: "Town Certification",
    description: "Help certify a dark-sky town",
    progress: 5,
    required: "10 Focus Credits",
    color: "text-purple-600",
  },
];

const Impact = () => {
  return (
    <div className="min-h-screen pb-24">
      <div className="p-6 space-y-6">
        <div className="animate-float-up">
          <h1 className="text-2xl font-bold text-foreground">Impact Vault</h1>
          <p className="text-muted-foreground">Turn attention into permanence</p>
        </div>

        {/* Current Progress */}
        <Card className="p-5 bg-gradient-to-br from-gold/10 to-gold/5 border-gold/20 animate-float-up" style={{ animationDelay: "100ms" }}>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Your Progress</p>
                <p className="text-2xl font-bold text-foreground">10 VP</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Focus Credits</p>
                <p className="text-2xl font-bold text-gold">0.01 FC</p>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground">
              1,000 VP → 1 Focus Credit. Keep going!
            </p>
            
            <Progress value={1} className="h-2" />
          </div>
        </Card>

        {/* Impact Options */}
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground animate-float-up" style={{ animationDelay: "200ms" }}>
            Impact Options
          </h3>
          
          {impactOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card
                key={index}
                className="p-5 space-y-3 animate-float-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center ${option.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div>
                      <p className="font-semibold text-foreground">{option.name}</p>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Community progress</span>
                        <span className="text-foreground font-medium">{option.progress}%</span>
                      </div>
                      <Progress value={option.progress} className="h-1.5" />
                    </div>
                    
                    <p className="text-xs text-gold">{option.required} to contribute</p>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  disabled
                >
                  Allocate Focus Credits
                </Button>
              </Card>
            );
          })}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Impact;
