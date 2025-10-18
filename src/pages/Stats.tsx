import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/BottomNav";
import { Starfield } from "@/components/Starfield";
import { ConstellationProgress } from "@/components/ConstellationProgress";
import { TrendingUp, Clock, Zap, Target, Star } from "lucide-react";

const Stats = () => {
  const metrics = [
    {
      icon: Clock,
      label: "Total Void Time",
      value: "3 min",
      change: "+3 min this week",
    },
    {
      icon: Zap,
      label: "Void Points",
      value: "10 VP",
      change: "+10 VP today",
    },
    {
      icon: Target,
      label: "Focus Hours",
      value: "0.05 FH",
      change: "0.95 to next tier",
    },
    {
      icon: TrendingUp,
      label: "Avg Session",
      value: "3 min",
      change: "Building tolerance",
    },
  ];

  return (
    <div className="min-h-screen pb-24 relative">
      <Starfield />
      
      <div className="p-6 space-y-6 relative z-10">
        <div className="animate-float-up">
          <h1 className="text-2xl font-bold text-foreground">Your Constellation</h1>
          <p className="text-muted-foreground">Every session lights a star</p>
        </div>

        {/* Constellation Overview */}
        <Card className="p-6 bg-gradient-to-br from-primary/10 via-card to-secondary/5 border-primary/30 animate-float-up" style={{ animationDelay: "50ms" }}>
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-primary fill-current" />
            <h3 className="font-semibold text-foreground">Path to Impact</h3>
          </div>
          <ConstellationProgress current={1} total={10} label="Sessions to next tier" />
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card
                key={index}
                className="p-5 space-y-3 animate-float-up bg-card/50 backdrop-blur-sm border-border/50 relative overflow-hidden"
                style={{ animationDelay: `${100 + index * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-constellation opacity-20" />
                <div className="flex items-center gap-2 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                </div>
                
                <div className="relative z-10">
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  <p className="text-xs text-primary mt-1">{metric.change}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Session History */}
        <Card className="p-6 space-y-4 animate-float-up bg-card/50 backdrop-blur-sm" style={{ animationDelay: "500ms" }}>
          <h3 className="font-semibold text-foreground">Session History</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/5 border border-primary/20">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full shadow-star animate-twinkle" />
                <div>
                  <p className="text-sm font-medium text-foreground">First Void ⭐</p>
                  <p className="text-xs text-muted-foreground">Today, 2:30 PM</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-foreground">3 min</p>
                <p className="text-xs text-primary font-semibold">+10 VP</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Insights */}
        <Card className="p-6 space-y-4 animate-float-up bg-gradient-to-br from-accent/10 to-card border-accent/20" style={{ animationDelay: "600ms" }}>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-accent fill-current" />
            <h3 className="font-semibold text-foreground">Insights Captured</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Total captured</p>
              <p className="text-sm font-medium text-foreground">1</p>
            </div>
            
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Themes detected</p>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-primary animate-twinkle" />
                <p className="text-sm font-medium text-foreground">Work-related</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default Stats;
