import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ToleranceRing } from "@/components/ToleranceRing";

const Summary = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 pb-24">
      <div className="max-w-md w-full flex-1 flex flex-col justify-center space-y-8">
        <div className="text-center space-y-2 animate-float-up">
          <h2 className="text-3xl font-bold text-foreground">Your Starting Point</h2>
          <p className="text-muted-foreground">We'll build from here, together</p>
        </div>

        <Card className="p-8 space-y-6 animate-float-up" style={{ animationDelay: "200ms" }}>
          <div className="flex flex-col items-center space-y-4">
            <ToleranceRing current={3} target={20} />
            
            <div className="text-center space-y-1">
              <p className="text-2xl font-bold text-foreground">BEGINNER</p>
              <p className="text-sm text-muted-foreground">Boredom Tolerance Level</p>
            </div>
          </div>

          <div className="pt-4 border-t border-border space-y-3">
            <p className="text-center text-foreground">
              Your first void session: <span className="font-bold text-secondary">3 minutes</span>
            </p>
            <p className="text-sm text-center text-muted-foreground">
              We'll gradually build your tolerance from 3 → 20 minutes over the coming weeks.
            </p>
          </div>
        </Card>
      </div>

      <div className="max-w-md w-full space-y-3">
        <Button
          onClick={() => navigate("/pre-session")}
          size="lg"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg rounded-full"
        >
          Start My First Void
        </Button>
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          size="lg"
          className="w-full py-6 text-lg rounded-full"
        >
          Schedule for Later
        </Button>
      </div>
    </div>
  );
};

export default Summary;
