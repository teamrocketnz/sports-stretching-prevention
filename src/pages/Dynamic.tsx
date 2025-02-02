import React, { useState } from "react";
import { exercises } from "@/data/exercises";
import Timer from "@/components/Timer";
import ExerciseDisplay from "@/components/ExerciseDisplay";
import { Button } from "@/components/ui/button";
import { PlayCircle, PauseCircle, SkipForward, SkipBack, Volume2, VolumeX, RotateCcw } from "lucide-react";

const Dynamic = () => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleNext = () => {
    setCurrentExerciseIndex((prev) => 
      prev === exercises.length - 1 ? 0 : prev + 1
    );
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    setCurrentExerciseIndex((prev) => 
      prev === 0 ? exercises.length - 1 : prev - 1
    );
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Pre-Game Dynamic Stretches
        </h1>
        
        <div className="bg-white rounded-lg p-6 shadow-xl relative">
          <div className="text-center text-sm text-gray-600 mb-4">
            Exercise {currentExerciseIndex + 1} of {exercises.length}
          </div>
          
          <ExerciseDisplay exercise={exercises[currentExerciseIndex]} />
          
          <Timer 
            duration={25} 
            isPlaying={isPlaying} 
            onComplete={handleNext}
          />

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="rounded-full"
            >
              {soundEnabled ? <Volume2 /> : <VolumeX />}
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="rounded-full"
            >
              <SkipBack />
            </Button>

            <Button
              size="icon"
              onClick={togglePlay}
              className="rounded-full"
            >
              {isPlaying ? <PauseCircle className="w-6 h-6" /> : <PlayCircle className="w-6 h-6" />}
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full"
            >
              <SkipForward />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <RotateCcw />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dynamic;