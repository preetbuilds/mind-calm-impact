import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Award } from "lucide-react";

const Achievement = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger haptic feedback if available
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-background to-gold/10">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="relative inline-block animate-gold-glow">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gold to-gold/70 flex items-center justify-center animate-float-up shadow-2xl">
            <Award className="w-16 h-16 text-gold-foreground" />
          </div>
          <div className="absolute inset-0 rounded-full bg-gold/20 animate-pulse-soft" />
        </div>

        <div className="space-y-4 animate-float-up" style={{ animationDelay: "300ms" }}>
          <h1 className="text-4xl font-bold text-foreground">
            First Void Unlocked!
          </h1>
          
          <div className="space-y-2">
            <p className="text-6xl font-bold text-gold animate-float-up" style={{ animationDelay: "500ms" }}>
              +10
            </p>
            <p className="text-lg text-muted-foreground">Void Points</p>
          </div>
        </div>

        <div className="space-y-3 animate-float-up" style={{ animationDelay: "700ms" }}>
          <div className="flex items-center justify-center gap-2 text-secondary">
            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <span className="font-medium">Bronze Beginner Badge</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Unlocked: 5-minute void sessions
          </p>
        </div>

        <Button
          onClick={() => navigate("/")}
          size="lg"
          className="w-full max-w-xs mx-auto bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg rounded-full mt-8"
        >
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Achievement;
