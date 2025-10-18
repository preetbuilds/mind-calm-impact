import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Smartphone, Briefcase, Lightbulb, Users } from "lucide-react";

const personas = [
  {
    id: "scroll-addict",
    icon: Smartphone,
    name: "Scroll Addict",
    description: "I can't put my phone down",
    details: "We'll help you build phone-free moments and reclaim your attention.",
  },
  {
    id: "busy-pro",
    icon: Briefcase,
    name: "Busy Pro",
    description: "I'm always in motion",
    details: "Learn to find calm and clarity in stillness for better focus.",
  },
  {
    id: "blocked-creator",
    icon: Lightbulb,
    name: "Blocked Creator",
    description: "I've lost my creative spark",
    details: "Void sessions unlock the DMN — your brain's creative network.",
  },
  {
    id: "concerned-parent",
    icon: Users,
    name: "Concerned Parent",
    description: "My family needs this too",
    details: "Build healthier screen habits together with family plans.",
  },
];

const Persona = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 pb-24">
      <div className="max-w-md w-full flex-1 flex flex-col justify-center space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-foreground">
            Which sounds like you?
          </h2>
          <p className="text-sm text-muted-foreground">
            This helps tailor session cadence & social features
          </p>
        </div>

        <div className="space-y-3">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            const isSelected = selected === persona.id;
            const isExpanded = expanded === persona.id;

            return (
              <Card
                key={persona.id}
                onClick={() => {
                  setSelected(persona.id);
                  setExpanded(isExpanded ? null : persona.id);
                }}
                className={`p-5 cursor-pointer transition-all duration-500 animate-float-up ${
                  isSelected
                    ? "border-secondary border-2 shadow-md"
                    : "hover:border-secondary/50"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    isSelected ? "bg-secondary text-secondary-foreground" : "bg-secondary/20 text-secondary"
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{persona.name}</p>
                    <p className="text-sm text-muted-foreground">{persona.description}</p>
                  </div>
                </div>
                
                {isExpanded && (
                  <p className="mt-4 text-sm text-muted-foreground pl-16 animate-float-up">
                    {persona.details}
                  </p>
                )}
              </Card>
            );
          })}
        </div>
      </div>

      <Button
        onClick={() => navigate("/baseline")}
        disabled={!selected}
        size="lg"
        className="w-full max-w-md bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue
      </Button>
    </div>
  );
};

export default Persona;
