import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Starfield } from "@/components/Starfield";
import { Award, Sparkles, Star } from "lucide-react";

const Achievement = () => {
  const navigate = useNavigate();
  const [showShootingStar, setShowShootingStar] = useState(false);

  useEffect(() => {
    // Trigger haptic feedback if available
    if (navigator.vibrate) {
      navigator.vibrate([50, 100, 50]);
    }

    // Trigger shooting star animation
    setTimeout(() => setShowShootingStar(true), 500);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <Starfield />
      
      {/* Shooting star */}
      {showShootingStar && (
        <div className="absolute top-10 left-10 w-1 h-1 bg-primary rounded-full animate-shoot-star shadow-star" />
      )}
      
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      <div className="max-w-md w-full text-center space-y-8 relative z-10">
        {/* Constellation burst effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-star-burst shadow-star"
              style={{
                transform: `rotate(${i * 45}deg) translateY(-80px)`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>

        <div className="relative inline-block animate-gold-glow">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary via-primary to-primary/70 flex items-center justify-center animate-float-up shadow-star relative">
            <Star className="w-16 h-16 text-primary-foreground fill-current animate-twinkle" />
            <div className="absolute inset-0 rounded-full bg-gradient-constellation animate-pulse-soft" />
          </div>
          <div className="absolute inset-0 rounded-full bg-primary/30 animate-pulse-soft blur-xl" />
        </div>

        <div className="space-y-4 animate-float-up" style={{ animationDelay: "300ms" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-primary/30">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">First Star Lit!</span>
          </div>

          <h1 className="text-4xl font-bold text-foreground">
            Constellation Unlocked
          </h1>
          
          <div className="space-y-2">
            <p className="text-6xl font-bold text-primary animate-float-up drop-shadow-[0_0_20px_hsl(var(--primary))]" style={{ animationDelay: "500ms" }}>
              +10
            </p>
            <p className="text-lg text-muted-foreground">Void Points</p>
          </div>
        </div>

        <div className="space-y-4 animate-float-up" style={{ animationDelay: "700ms" }}>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-primary/20">
              <Award className="w-6 h-6 mx-auto mb-2 text-primary" />
              <p className="text-xs text-muted-foreground mb-1">Badge</p>
              <p className="text-sm font-semibold text-foreground">Stargazer I</p>
            </div>

            <div className="p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-secondary/20">
              <Star className="w-6 h-6 mx-auto mb-2 text-secondary" />
              <p className="text-xs text-muted-foreground mb-1">Unlocked</p>
              <p className="text-sm font-semibold text-foreground">5-min voids</p>
            </div>
          </div>
          
          <div className="p-4 bg-gradient-to-br from-accent/20 to-secondary/10 rounded-xl border border-accent/30">
            <p className="text-xs text-muted-foreground mb-1">Impact Progress</p>
            <p className="text-sm text-foreground">
              <span className="font-bold text-primary">90 VP</span> until your first protected acre contribution
            </p>
          </div>
        </div>

        <Button
          onClick={() => navigate("/")}
          size="lg"
          className="w-full max-w-xs mx-auto bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-star py-6 text-lg rounded-full mt-8 relative overflow-hidden group"
        >
          <span className="relative z-10">Continue Journey</span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-foreground/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </Button>
      </div>
    </div>
  );
};

export default Achievement;
