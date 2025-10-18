import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface JournalChatProps {
  onEntrySaved: (entry: { text: string; mood: string; theme: string }) => void;
}

export const JournalChat = ({ onEntrySaved }: JournalChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "✨ Let's capture what emerged from the void. What did you notice during your session?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a meaningful observation. How did that realization make you feel?",
        "Interesting pattern. Have you noticed this before in your daily life?",
        "That sounds like a breakthrough moment. What do you think triggered this insight?",
        "Beautiful reflection. Would you like to save this as a journal entry?",
        "This connects to your previous insights about work-life balance. Shall we explore that further?"
      ];
      
      const aiMessage: Message = {
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)]
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSaveEntry = () => {
    const userMessages = messages.filter(m => m.role === "user").map(m => m.content).join(" ");
    onEntrySaved({
      text: userMessages,
      mood: "😌",
      theme: "AI-guided reflection"
    });
  };

  return (
    <Card className="p-4 bg-card/50 backdrop-blur-sm border-border/30">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-gold animate-pulse-soft" />
        <h3 className="font-semibold text-foreground">Reflection Guide</h3>
      </div>

      <div className="space-y-3 mb-4 max-h-[300px] overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === "user"
                  ? "bg-primary/20 text-foreground"
                  : "bg-muted/50 text-muted-foreground"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-muted/50 p-3 rounded-lg">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" style={{ animationDelay: "200ms" }} />
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" style={{ animationDelay: "400ms" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex gap-2">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Share your thoughts..."
          className="min-h-[60px] bg-background/50 border-border/50 resize-none"
        />
        <div className="flex flex-col gap-2">
          <Button
            onClick={handleSend}
            size="icon"
            className="bg-primary/20 hover:bg-primary/30 text-gold"
          >
            <Send className="w-4 h-4" />
          </Button>
          {messages.length > 2 && (
            <Button
              onClick={handleSaveEntry}
              size="icon"
              variant="outline"
              className="border-gold/30 hover:bg-gold/10"
            >
              <Sparkles className="w-4 h-4 text-gold" />
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
