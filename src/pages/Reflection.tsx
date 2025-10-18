import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { Mic } from "lucide-react";

const moods = [
  { emoji: "😰", label: "Restless" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "😌", label: "Calm" },
  { emoji: "✨", label: "Inspired" },
];

const Reflection = () => {
  const navigate = useNavigate();
  const [reflection, setReflection] = useState("");
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  const handleSave = () => {
    // Show VP reward animation then navigate
    navigate("/achievement");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 pb-24">
      <div className="max-w-md w-full flex-1 flex flex-col justify-center space-y-6">
        <div className="text-center space-y-2 animate-float-up">
          <h2 className="text-3xl font-bold text-foreground">Void Complete</h2>
          <p className="text-muted-foreground">What did you notice?</p>
        </div>

        <Card className="p-6 space-y-6 animate-float-up" style={{ animationDelay: "200ms" }}>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-foreground">
                Capture your thoughts
              </label>
              <Button variant="ghost" size="sm" className="gap-2">
                <Mic className="w-4 h-4" />
                Voice Note
              </Button>
            </div>
            
            <Textarea
              placeholder="I felt... I noticed... I realized..."
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              className="min-h-32 resize-none"
            />
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              How do you feel?
            </label>
            <div className="flex gap-2 justify-between">
              {moods.map((mood, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedMood(index)}
                  className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                    selectedMood === index
                      ? "border-secondary bg-secondary/5 scale-105"
                      : "border-border hover:border-secondary/50"
                  }`}
                >
                  <div className="text-3xl mb-1">{mood.emoji}</div>
                  <div className="text-xs text-muted-foreground">{mood.label}</div>
                </button>
              ))}
            </div>
          </div>

          {reflection && selectedMood !== null && (
            <div className="pt-3 border-t border-border animate-float-up">
              <p className="text-sm text-muted-foreground italic">
                💡 AI suggests: Work-related pattern detected
              </p>
            </div>
          )}
        </Card>
      </div>

      <Button
        onClick={handleSave}
        disabled={!reflection || selectedMood === null}
        size="lg"
        className="w-full max-w-md bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg rounded-full disabled:opacity-50"
      >
        Save & Continue
      </Button>
    </div>
  );
};

export default Reflection;
