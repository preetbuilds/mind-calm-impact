import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const questions = [
  {
    question: "How long can you sit without your phone?",
    options: ["< 1 minute", "1-3 minutes", "3-5 minutes", "5+ minutes"],
  },
  {
    question: "When did you last have a truly original idea?",
    options: ["Today", "This week", "This month", "Can't remember"],
  },
  {
    question: "How often do you feel bored?",
    options: ["Never", "Rarely", "Sometimes", "Often"],
  },
  {
    question: "What do you do when bored?",
    options: ["Scroll social media", "Watch videos", "Message friends", "Just sit with it"],
  },
];

const Baseline = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (index: number) => {
    const newAnswers = [...answers, index];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => navigate("/goals"), 500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 pb-24">
      <div className="max-w-md w-full space-y-8">
        <Progress value={progress} className="h-1" />

        <div className="space-y-6 animate-float-up" key={currentQuestion}>
          <p className="text-sm text-muted-foreground text-center">
            Question {currentQuestion + 1} of {questions.length}
          </p>
          
          <h2 className="text-2xl font-bold text-center text-foreground">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-3 pt-4">
            {questions[currentQuestion].options.map((option, index) => (
              <Card
                key={index}
                onClick={() => handleAnswer(index)}
                className="p-5 cursor-pointer hover:border-secondary transition-all duration-300 text-center"
              >
                <p className="text-foreground">{option}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baseline;
