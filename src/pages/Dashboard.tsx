import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ToleranceRing } from "@/components/ToleranceRing";
import { BottomNav } from "@/components/BottomNav";
import { Starfield } from "@/components/Starfield";
import { StreakFlame } from "@/components/StreakFlame";
import { ConstellationProgress } from "@/components/ConstellationProgress";
import { ImpactConnection } from "@/components/ImpactConnection";
import { Brain, TrendingUp, Target } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: Brain, label: "Total Voids", value: "1" },
    { icon: TrendingUp, label: "Void Points", value: "10 VP" },
    { icon: Target, label: "Focus Credits", value: "0 FC" },
  ];

  return (
    <div className="min-h-screen pb-24 relative">
      <Starfield />
      
      {/* Header */}
      <div className="p-6 space-y-6 relative z-10">
        <div className="animate-float-up">
          <h1 className="text-2xl font-bold text-foreground">Welcome back, Void Seeker</h1>
          <p className="text-muted-foreground">Your constellation is growing</p>
        </div>

        {/* Start Void CTA */}
        <Button
          onClick={() => navigate("/pre-session")}
          size="lg"
          className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-star py-6 text-lg rounded-full animate-float-up relative overflow-hidden group"
          style={{ animationDelay: "50ms" }}
        >
          <span className="relative z-10">Start New Void</span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-foreground/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </Button>

        {/* Streak Showcase */}
        <Card className="p-6 bg-gradient-to-br from-card via-card to-primary/5 border-primary/30 animate-float-up" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-1">Current Streak</p>
              <p className="text-3xl font-bold text-foreground mb-2">1 Day</p>
              <ConstellationProgress current={1} total={7} label="Weekly Goal" />
            </div>
            <StreakFlame days={1} />
          </div>
        </Card>

        {/* Impact Connection */}
        <div className="animate-float-up" style={{ animationDelay: "150ms" }}>
          <ImpactConnection
            sessionsCompleted={1}
            voidPoints={10}
            focusCredits={0}
            impactUnlocked="0.01 Protected Acre (100 VP needed)"
          />
        </div>

        {/* Tolerance Ring */}
        <div className="flex justify-center animate-float-up" style={{ animationDelay: "200ms" }}>
          <ToleranceRing current={3} target={20} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 animate-float-up" style={{ animationDelay: "250ms" }}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-4 text-center bg-card/50 backdrop-blur-sm border-border/50">
                <Icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-lg font-bold text-foreground">{stat.value}</p>
              </Card>
            );
          })}
        </div>

        {/* Today's Challenge */}
        <Card className="p-5 bg-gradient-to-br from-accent/20 to-secondary/10 border-accent/30 animate-float-up relative overflow-hidden" style={{ animationDelay: "300ms" }}>
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-constellation opacity-30" />
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className="font-semibold text-foreground mb-1">Today's Constellation Quest</p>
              <p className="text-sm text-muted-foreground">Complete one void to light the first star</p>
              <div className="mt-2 flex items-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === 0 ? "bg-primary shadow-star" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="text-3xl">⭐</div>
          </div>
        </Card>

        {/* Recent Insights */}
        <div className="space-y-3 animate-float-up" style={{ animationDelay: "350ms" }}>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Recent Insights</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/journal")}
              className="text-primary hover:text-primary/80"
            >
              View All
            </Button>
          </div>

          <Card className="p-4 bg-gradient-to-br from-card to-secondary/5 border-secondary/20">
            <div className="flex items-start justify-between mb-2">
              <p className="text-sm text-muted-foreground">3 minutes ago</p>
              <span className="text-lg">😌</span>
            </div>
            <p className="text-foreground">I felt... I noticed... I realized...</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-1 h-1 rounded-full bg-primary animate-twinkle" />
              <p className="text-xs text-primary">Work-related pattern</p>
            </div>
          </Card>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Dashboard;
