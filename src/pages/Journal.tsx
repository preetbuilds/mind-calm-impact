import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";
import { Calendar } from "@/components/ui/calendar";
import { JournalChat } from "@/components/JournalChat";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Plus } from "lucide-react";

const Journal = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [insights, setInsights] = useState([
    {
      date: "Today, 2:30 PM",
      mood: "😌",
      text: "I felt surprisingly calm after the first minute. Work thoughts kept creeping in but I let them pass.",
      theme: "Work-related pattern",
    },
  ]);
  const [showChat, setShowChat] = useState(false);

  const handleEntrySaved = (entry: { text: string; mood: string; theme: string }) => {
    const now = new Date();
    const newInsight = {
      date: `${now.toLocaleDateString()}, ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
      mood: entry.mood,
      text: entry.text,
      theme: entry.theme,
    };
    setInsights([newInsight, ...insights]);
    setShowChat(false);
  };

  return (
    <div className="min-h-screen pb-24 relative">
      <div className="p-6 space-y-6">
        <div className="animate-float-up">
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-gold animate-pulse-soft" />
            Insight Journal
          </h1>
          <p className="text-muted-foreground">Your captured thoughts from the void</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 animate-float-up" style={{ animationDelay: "100ms" }}>
          <Button
            onClick={() => navigate("/pre-session")}
            className="flex-1 bg-gradient-to-r from-primary via-primary/80 to-secondary hover:opacity-90 text-white py-6 rounded-xl shadow-[0_0_30px_rgba(227,178,60,0.3)]"
          >
            <Plus className="w-5 h-5 mr-2" />
            Start New Void
          </Button>
          <Button
            onClick={() => setShowChat(!showChat)}
            variant="outline"
            className="flex-1 border-gold/30 hover:bg-gold/10 text-gold py-6 rounded-xl"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            {showChat ? "Hide" : "Reflect"} with AI
          </Button>
        </div>

        {/* AI Chat */}
        {showChat && (
          <div className="animate-float-up" style={{ animationDelay: "150ms" }}>
            <JournalChat onEntrySaved={handleEntrySaved} />
          </div>
        )}

        {/* Calendar Heatmap */}
        <Card className="p-6 animate-float-up" style={{ animationDelay: "100ms" }}>
          <h3 className="font-semibold text-foreground mb-4">Activity</h3>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md"
          />
        </Card>

        {/* Insights List */}
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground animate-float-up" style={{ animationDelay: "200ms" }}>
            Recent Entries
          </h3>
          
          {insights.map((insight, index) => (
            <Card
              key={index}
              className="p-5 space-y-3 cursor-pointer hover:shadow-md transition-all animate-float-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <p className="text-sm text-muted-foreground">{insight.date}</p>
                <span className="text-2xl">{insight.mood}</span>
              </div>
              
              <p className="text-foreground leading-relaxed">{insight.text}</p>
              
              <div className="pt-2 border-t border-border">
                <p className="text-xs text-secondary">💡 {insight.theme}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Journal;
