import React from "react";
import EnhancedTimer from "./EnhancedTimer";

interface TimerProps {
  duration: number;
  isPlaying: boolean;
  onComplete: () => void;
}

const Timer: React.FC<TimerProps> = ({ duration, isPlaying, onComplete }) => {
  return (
    <EnhancedTimer
      onComplete={onComplete}
      autoAdvance={true}
    />
  );
};

export default Timer;