import { cn } from "@/lib/utils";

interface ToleranceRingProps {
  current: number;
  target: number;
  className?: string;
}

export const ToleranceRing = ({ current, target, className }: ToleranceRingProps) => {
  const percentage = (current / target) * 100;
  const circumference = 2 * Math.PI * 60; // radius = 60
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <svg className="w-40 h-40 transform -rotate-90">
        {/* Background circle */}
        <circle
          cx="80"
          cy="80"
          r="60"
          stroke="hsl(var(--border))"
          strokeWidth="8"
          fill="none"
        />
        {/* Progress circle with breathing animation */}
        <circle
          cx="80"
          cy="80"
          r="60"
          stroke="hsl(var(--secondary))"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out animate-pulse-soft"
        />
      </svg>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-foreground">{current}</span>
        <span className="text-sm text-muted-foreground">/ {target} min</span>
      </div>
    </div>
  );
};
