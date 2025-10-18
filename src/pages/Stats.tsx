import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/BottomNav";
import { TrendingUp, Clock, Zap, Target } from "lucide-react";

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
    <div className="min-h-screen pb-24">
      <div className="p-6 space-y-6">
        <div className="animate-float-up">
          <h1 className="text-2xl font-bold text-foreground">Your Stats</h1>
          <p className="text-muted-foreground">Track your progress</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card
                key={index}
                className="p-5 space-y-3 animate-float-up"
                style={{ animationDelay: `${100 + index * 100}ms` }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-secondary" />
                  </div>
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                </div>
                
                <div>
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{metric.change}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Session History */}
        <Card className="p-6 space-y-4 animate-float-up" style={{ animationDelay: "500ms" }}>
          <h3 className="font-semibold text-foreground">Session History</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <div>
                  <p className="text-sm font-medium text-foreground">First Void</p>
                  <p className="text-xs text-muted-foreground">Today, 2:30 PM</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-foreground">3 min</p>
                <p className="text-xs text-gold">+10 VP</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Insights */}
        <Card className="p-6 space-y-4 animate-float-up" style={{ animationDelay: "600ms" }}>
          <h3 className="font-semibold text-foreground">Insights</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Total captured</p>
              <p className="text-sm font-medium text-foreground">1</p>
            </div>
            
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Themes detected</p>
              <p className="text-sm font-medium text-foreground">Work-related</p>
            </div>
          </div>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default Stats;
