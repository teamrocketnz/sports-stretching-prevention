
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

interface TimerProps {
  duration: number;
  isPlaying: boolean;
  onComplete: () => void;
}

const Timer: React.FC<TimerProps> = ({ duration, isPlaying, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            onComplete();
            return duration;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPlaying, timeLeft, duration, onComplete]);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  return (
    <div className="w-full space-y-2 sm:space-y-3">
      <Progress 
        value={(timeLeft / duration) * 100} 
        className="h-2.5 sm:h-3 rounded-full bg-gray-100 shadow-sm" 
      />
      <p className="text-3xl sm:text-4xl font-bold text-center text-gray-800 font-heading">
        {timeLeft}s
      </p>
    </div>
  );
};

export default Timer;
