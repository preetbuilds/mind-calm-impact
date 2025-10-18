import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

const goals = [
  "Be more creative",
  "Break phone addiction",
  "Focus better at work",
  "Reduce family screen time",
  "Feel calmer",
  "Rediscover original thoughts",
];

const Goals = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const toggleGoal = (index: number) => {
    const newSelected = new Set(selected);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelected(newSelected);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 pb-24">
      <div className="max-w-md w-full flex-1 flex flex-col justify-center space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-foreground">
            What are you hoping for?
          </h2>
          <p className="text-sm text-muted-foreground">Choose all that apply</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {goals.map((goal, index) => {
            const isSelected = selected.has(index);
            return (
              <Card
                key={index}
                onClick={() => toggleGoal(index)}
                className={`p-4 cursor-pointer transition-all duration-300 relative animate-float-up ${
                  isSelected
                    ? "border-secondary border-2 bg-secondary/5"
                    : "hover:border-secondary/50"
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                    <Check className="w-4 h-4 text-secondary-foreground" />
                  </div>
                )}
                <p className="text-sm font-medium text-foreground text-center">
                  {goal}
                </p>
              </Card>
            );
          })}
        </div>
      </div>

      <Button
        onClick={() => navigate("/summary")}
        disabled={selected.size === 0}
        size="lg"
        className="w-full max-w-md bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg rounded-full disabled:opacity-50"
      >
        Set Goals
      </Button>
    </div>
  );
};

export default Goals;
