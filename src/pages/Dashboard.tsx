import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ToleranceRing } from "@/components/ToleranceRing";
import { BottomNav } from "@/components/BottomNav";
import { Flame, Brain, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: Flame, label: "Streak", value: "1 day" },
    { icon: Brain, label: "Total Voids", value: "1" },
    { icon: TrendingUp, label: "Insights", value: "1" },
  ];

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="p-6 space-y-6">
        <div className="animate-float-up">
          <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
          <p className="text-muted-foreground">Ready for your next void?</p>
        </div>

        {/* Tolerance Ring */}
        <div className="flex justify-center animate-float-up" style={{ animationDelay: "100ms" }}>
          <ToleranceRing current={3} target={20} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 animate-float-up" style={{ animationDelay: "200ms" }}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-4 text-center">
                <Icon className="w-5 h-5 mx-auto mb-2 text-secondary" />
                <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-lg font-bold text-foreground">{stat.value}</p>
              </Card>
            );
          })}
        </div>

        {/* Start Void CTA */}
        <Button
          onClick={() => navigate("/pre-session")}
          size="lg"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg rounded-full animate-float-up"
          style={{ animationDelay: "300ms" }}
        >
          Start New Void
        </Button>

        {/* Today's Challenge */}
        <Card className="p-5 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 animate-float-up" style={{ animationDelay: "400ms" }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-foreground mb-1">Today's Challenge</p>
              <p className="text-sm text-muted-foreground">Complete one 5-minute void</p>
            </div>
            <div className="text-2xl">🎯</div>
          </div>
        </Card>

        {/* Recent Insights */}
        <div className="space-y-3 animate-float-up" style={{ animationDelay: "500ms" }}>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Recent Insights</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/journal")}
              className="text-secondary"
            >
              View All
            </Button>
          </div>

          <Card className="p-4">
            <div className="flex items-start justify-between mb-2">
              <p className="text-sm text-muted-foreground">3 minutes ago</p>
              <span className="text-lg">😌</span>
            </div>
            <p className="text-foreground">I felt... I noticed... I realized...</p>
            <p className="text-xs text-secondary mt-2">💡 Work-related pattern</p>
          </Card>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Dashboard;
