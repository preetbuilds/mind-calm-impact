import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-md w-full space-y-12 text-center">
        <div className="space-y-6 animate-float-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Welcome to Reconnct.
          </h1>
          <p className="text-xl text-muted-foreground animate-float-up" style={{ animationDelay: "200ms" }}>
            The world's first boredom gym.
          </p>
          <p className="text-xl text-muted-foreground animate-float-up" style={{ animationDelay: "400ms" }}>
            Rediscover the craft of doing nothing.
          </p>
        </div>

        <Button
          onClick={() => navigate("/problem")}
          variant="outline"
          size="lg"
          className="w-full max-w-xs mx-auto text-lg py-6 rounded-full border-2 hover:bg-secondary/10 transition-all duration-500"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
