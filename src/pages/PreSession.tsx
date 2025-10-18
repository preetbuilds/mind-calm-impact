import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

const PreSession = () => {
  const navigate = useNavigate();
  const [lockApps, setLockApps] = useState(true);

  const rules = [
    "Find a quiet space",
    "No phone interaction",
    "Stay present with your thoughts",
    "It's okay if it feels uncomfortable",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 pb-24">
      <div className="max-w-md w-full flex-1 flex flex-col justify-center space-y-8">
        <div className="text-center space-y-2 animate-float-up">
          <h2 className="text-3xl font-bold text-foreground">Before We Begin</h2>
          <p className="text-muted-foreground">A few simple guidelines</p>
        </div>

        <Card className="p-6 space-y-4 animate-float-up" style={{ animationDelay: "200ms" }}>
          {rules.map((rule, index) => (
            <div
              key={index}
              className="flex items-center gap-3 animate-float-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-secondary" />
              </div>
              <p className="text-foreground">{rule}</p>
            </div>
          ))}

          <div className="pt-4 border-t border-border flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Lock apps during session</p>
              <p className="text-xs text-muted-foreground">Recommended for focus</p>
            </div>
            <Switch checked={lockApps} onCheckedChange={setLockApps} />
          </div>
        </Card>
      </div>

      <div className="max-w-md w-full space-y-3">
        <Button
          onClick={() => navigate("/void")}
          size="lg"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg rounded-full"
        >
          I'm Ready
        </Button>
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          size="lg"
          className="w-full py-6 text-lg rounded-full"
        >
          Not Yet
        </Button>
      </div>
    </div>
  );
};

export default PreSession;
