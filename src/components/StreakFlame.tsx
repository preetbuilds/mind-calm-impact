import { Flame } from "lucide-react";

interface StreakFlameProps {
  days: number;
}

export const StreakFlame = ({ days }: StreakFlameProps) => {
  const getFlameColor = () => {
    if (days >= 30) return "text-primary drop-shadow-[0_0_20px_hsl(var(--gold))]";
    if (days >= 7) return "text-accent drop-shadow-[0_0_15px_hsl(var(--accent))]";
    return "text-secondary drop-shadow-[0_0_10px_hsl(var(--secondary))]";
  };

  const getFlameSize = () => {
    if (days >= 30) return "w-16 h-16";
    if (days >= 7) return "w-12 h-12";
    return "w-10 h-10";
  };

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent blur-xl" />
      <Flame className={`${getFlameSize()} ${getFlameColor()} animate-pulse-soft relative z-10`} />
      <div className="absolute text-xs font-bold text-foreground mt-16 bg-card px-2 py-1 rounded-full border border-primary/30">
        {days} {days === 1 ? "day" : "days"}
      </div>
    </div>
  );
};
