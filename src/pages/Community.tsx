import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";
import { Users, Clock } from "lucide-react";

const activities = [
  {
    type: "void",
    text: "Someone just completed a 10-minute void",
    time: "2 min ago",
  },
  {
    type: "milestone",
    text: "Sarah unlocked Protected Acre milestone",
    time: "15 min ago",
  },
  {
    type: "challenge",
    text: "Weekend Voidathon starts in 2 hours",
    time: "Join now",
  },
];

const Community = () => {
  return (
    <div className="min-h-screen pb-24">
      <div className="p-6 space-y-6">
        <div className="animate-float-up">
          <h1 className="text-2xl font-bold text-foreground">Community</h1>
          <p className="text-muted-foreground">Connect in quiet</p>
        </div>

        {/* Live Void Room */}
        <Card className="p-6 bg-gradient-to-br from-teal/10 to-teal/5 border-teal/20 animate-float-up" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal rounded-full animate-pulse-soft" />
              <p className="font-semibold text-foreground">Live Void Room</p>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>23</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            Join others in a synchronous silent session
          </p>
          
          <Button size="sm" className="w-full bg-teal text-teal-foreground hover:bg-teal/90">
            Join Room
          </Button>
        </Card>

        {/* Activity Feed */}
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground animate-float-up" style={{ animationDelay: "200ms" }}>
            Activity
          </h3>
          
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="p-4 animate-float-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <p className="text-foreground flex-1">{activity.text}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground ml-4">
                  <Clock className="w-3 h-3" />
                  <span>{activity.time}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Challenges */}
        <Card className="p-5 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 animate-float-up" style={{ animationDelay: "600ms" }}>
          <h3 className="font-semibold text-foreground mb-3">This Week's Challenge</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Complete 3 voids of 5+ minutes
          </p>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-secondary rounded-full" />
            </div>
            <span className="text-sm text-muted-foreground">1/3</span>
          </div>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default Community;
