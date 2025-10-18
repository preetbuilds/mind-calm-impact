import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/BottomNav";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const insights = [
  {
    date: "Today, 2:30 PM",
    mood: "😌",
    text: "I felt surprisingly calm after the first minute. Work thoughts kept creeping in but I let them pass.",
    theme: "Work-related pattern",
  },
];

const Journal = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen pb-24">
      <div className="p-6 space-y-6">
        <div className="animate-float-up">
          <h1 className="text-2xl font-bold text-foreground">Insight Journal</h1>
          <p className="text-muted-foreground">Your captured thoughts</p>
        </div>

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
