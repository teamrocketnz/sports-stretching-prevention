
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle, PauseCircle, SkipForward, SkipBack, ArrowLeft } from "lucide-react";
import Timer from "@/components/Timer";
import ExerciseDisplay from "@/components/ExerciseDisplay";
import { shinSplintExercises } from "@/data/exercises";
import { useNavigate } from "react-router-dom";

const ShinSplints = () => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentExerciseIndex((prev) => 
      prev === shinSplintExercises.length - 1 ? 0 : prev + 1
    );
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    setCurrentExerciseIndex((prev) => 
      prev === 0 ? shinSplintExercises.length - 1 : prev - 1
    );
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-6">
      <div className="max-w-md mx-auto space-y-6">
        <Button
          variant="ghost"
          className="text-white hover:text-white/80"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Shin Splints Prevention Exercises
        </h1>
        
        <div className="bg-white rounded-lg p-6 shadow-xl space-y-6">
          <div className="text-center text-sm text-gray-600">
            Exercise {currentExerciseIndex + 1} of {shinSplintExercises.length}
          </div>
          
          <ExerciseDisplay exercise={shinSplintExercises[currentExerciseIndex]} />
          
          <Timer 
            duration={60} 
            isPlaying={isPlaying} 
            onComplete={handleNext}
          />
          
          <div className="flex justify-center space-x-4">
            <Button variant="outline" onClick={handlePrevious}>
              <SkipBack className="h-6 w-6" />
            </Button>
            
            <Button onClick={togglePlay}>
              {isPlaying ? (
                <PauseCircle className="h-6 w-6" />
              ) : (
                <PlayCircle className="h-6 w-6" />
              )}
            </Button>
            
            <Button variant="outline" onClick={handleNext}>
              <SkipForward className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShinSplints;
