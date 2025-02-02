import React, { useState } from "react";
import { exercises } from "@/data/exercises";
import Timer from "@/components/Timer";
import ExerciseDisplay from "@/components/ExerciseDisplay";
import { Button } from "@/components/ui/button";
import { PlayCircle, PauseCircle, SkipForward, SkipBack } from "lucide-react";

const Dynamic = () => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

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
          
          <div className="flex justify-between items-center mt-6">
            <Button 
              variant="ghost" 
              onClick={handlePrevious}
              className="flex-1 mr-2"
            >
              <SkipBack className="mr-2 h-5 w-5" />
              Previous
            </Button>
            
            <Button 
              onClick={togglePlay}
              className="mx-2"
              size="lg"
            >
              {isPlaying ? (
                <PauseCircle className="h-6 w-6" />
              ) : (
                <PlayCircle className="h-6 w-6" />
              )}
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={handleNext}
              className="flex-1 ml-2"
            >
              Next
              <SkipForward className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dynamic;