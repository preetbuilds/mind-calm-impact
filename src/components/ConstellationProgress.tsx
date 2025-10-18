import { Star } from "lucide-react";

interface ConstellationProgressProps {
  current: number;
  total: number;
  label: string;
}

export const ConstellationProgress = ({ current, total, label }: ConstellationProgressProps) => {
  const stars = Array.from({ length: total }, (_, i) => i < current);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className="text-sm font-bold text-foreground">
          {current}/{total}
        </span>
      </div>
      
      <div className="relative">
        {/* Constellation line */}
        <svg className="absolute inset-0 w-full h-12" style={{ zIndex: 0 }}>
          {stars.map((filled, i) => {
            if (i === stars.length - 1 || !filled || !stars[i + 1]) return null;
            const x1 = (i / (total - 1)) * 100;
            const x2 = ((i + 1) / (total - 1)) * 100;
            return (
              <line
                key={i}
                x1={`${x1}%`}
                y1="50%"
                x2={`${x2}%`}
                y2="50%"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                opacity="0.5"
                strokeDasharray="4"
              />
            );
          })}
        </svg>

        {/* Stars */}
        <div className="relative flex items-center justify-between h-12">
          {stars.map((filled, i) => (
            <div
              key={i}
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500 ${
                filled
                  ? "bg-primary text-primary-foreground shadow-star scale-110"
                  : "bg-muted text-muted-foreground scale-90"
              }`}
            >
              <Star className={`w-4 h-4 ${filled ? "fill-current" : ""}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
