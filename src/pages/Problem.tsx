import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Brain, Smartphone, Clock } from "lucide-react";

const stats = [
  {
    icon: Clock,
    stat: "12s → 8s",
    label: "Average attention span declined",
  },
  {
    icon: Smartphone,
    stat: "237",
    label: "Notifications per day",
  },
  {
    icon: Brain,
    stat: "3 min",
    label: "Most can't sit still without a screen",
  },
];

const Problem = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 pb-24">
      <div className="max-w-md w-full flex-1 flex flex-col justify-center space-y-8">
        <h2 className="text-3xl font-bold text-center text-foreground">
          Our attention is under siege
        </h2>

        <div className="space-y-4">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 flex items-center gap-4 animate-float-up bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{item.stat}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-lg text-muted-foreground italic">
          The solution isn't more content — it's intentional emptiness.
        </p>
      </div>

      <div className="max-w-md w-full space-y-3">
        <Button
          onClick={() => navigate("/persona")}
          size="lg"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg rounded-full"
        >
          I'm Curious
        </Button>
        <Button
          onClick={() => navigate("/summary")}
          variant="ghost"
          size="lg"
          className="w-full py-6 text-lg rounded-full"
        >
          Skip to App
        </Button>
      </div>
    </div>
  );
};

export default Problem;
