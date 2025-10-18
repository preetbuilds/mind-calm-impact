import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const VOID_DURATION = 180; // 3 minutes in seconds
const MYSTERY_PHRASES = [
  "What if boredom is a gift?",
  "Your mind is speaking...",
  "Notice the silence between thoughts",
  "This moment is enough",
];

const Void = () => {
  const navigate = useNavigate();
  const [timeRemaining, setTimeRemaining] = useState(VOID_DURATION);
  const [showPhrase, setShowPhrase] = useState(false);
  const [mysteryPhrase, setMysteryPhrase] = useState("");
  const [holdProgress, setHoldProgress] = useState(0);
  const [isHolding, setIsHolding] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/reflection");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Mystery phrase appears at random time
    const phraseTimeout = setTimeout(() => {
      setMysteryPhrase(MYSTERY_PHRASES[Math.floor(Math.random() * MYSTERY_PHRASES.length)]);
      setShowPhrase(true);
      setTimeout(() => setShowPhrase(false), 3000);
    }, Math.random() * 120000 + 30000); // Between 30s and 2.5min

    return () => {
      clearInterval(timer);
      clearTimeout(phraseTimeout);
    };
  }, [navigate]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHolding) {
      interval = setInterval(() => {
        setHoldProgress((prev) => {
          if (prev >= 100) {
            navigate("/");
            return 100;
          }
          return prev + 3.33; // 100% over 3 seconds
        });
      }, 100);
    } else {
      setHoldProgress(0);
    }
    return () => clearInterval(interval);
  }, [isHolding, navigate]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/95 to-primary flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Timer */}
      <div className="absolute top-12 left-0 right-0 text-center">
        <p className="text-4xl font-light text-primary-foreground tabular-nums">
          {minutes}:{seconds.toString().padStart(2, "0")}
        </p>
      </div>

      {/* Breathing Circle */}
      <div className="relative flex items-center justify-center">
        <div className="w-64 h-64 rounded-full border-4 border-primary-foreground/20 animate-breathe" />
        <div className="absolute w-48 h-48 rounded-full border-4 border-primary-foreground/40 animate-breathe" style={{ animationDelay: "1s" }} />
        <div className="absolute w-32 h-32 rounded-full bg-primary-foreground/10 animate-breathe" style={{ animationDelay: "2s" }} />
      </div>

      {/* Mystery Phrase */}
      {showPhrase && (
        <div className="absolute top-1/2 left-0 right-0 text-center animate-float-up">
          <p className="text-xl text-primary-foreground/80 italic px-6">
            {mysteryPhrase}
          </p>
        </div>
      )}

      {/* End Early Button */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <Button
          variant="ghost"
          onMouseDown={() => setIsHolding(true)}
          onMouseUp={() => setIsHolding(false)}
          onMouseLeave={() => setIsHolding(false)}
          onTouchStart={() => setIsHolding(true)}
          onTouchEnd={() => setIsHolding(false)}
          className="relative text-primary-foreground/60 hover:text-primary-foreground/80"
        >
          <span className="relative z-10">Hold to End Early</span>
          {holdProgress > 0 && (
            <div
              className="absolute inset-0 bg-primary-foreground/20 rounded-md transition-all"
              style={{ width: `${holdProgress}%` }}
            />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Void;
