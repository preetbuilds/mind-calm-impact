import { ArrowRight, Sparkles } from "lucide-react";
import { Card } from "./ui/card";

interface ImpactConnectionProps {
  sessionsCompleted: number;
  voidPoints: number;
  focusCredits: number;
  impactUnlocked: string;
}

export const ImpactConnection = ({
  sessionsCompleted,
  voidPoints,
  focusCredits,
  impactUnlocked,
}: ImpactConnectionProps) => {
  return (
    <Card className="p-6 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border-primary/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-constellation opacity-50" />
      
      <div className="space-y-4 relative z-10">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Your Impact Journey</h3>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 text-center">
            <div className="text-2xl font-bold text-foreground">{sessionsCompleted}</div>
            <div className="text-xs text-muted-foreground">Sessions</div>
          </div>

          <ArrowRight className="w-5 h-5 text-primary animate-pulse-soft" />

          <div className="flex-1 text-center">
            <div className="text-2xl font-bold text-primary">{voidPoints}</div>
            <div className="text-xs text-muted-foreground">Void Points</div>
          </div>

          <ArrowRight className="w-5 h-5 text-secondary animate-pulse-soft" />

          <div className="flex-1 text-center">
            <div className="text-2xl font-bold text-accent">{focusCredits}</div>
            <div className="text-xs text-muted-foreground">Focus Credits</div>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-xs text-center text-muted-foreground">
            Next unlock: <span className="text-primary font-semibold">{impactUnlocked}</span>
          </p>
        </div>
      </div>
    </Card>
  );
};
