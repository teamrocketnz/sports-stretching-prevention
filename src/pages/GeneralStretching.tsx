
import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle, PauseCircle, SkipForward, SkipBack, ArrowLeft } from "lucide-react";
import Timer from "@/components/Timer";
import ExerciseDisplay from "@/components/ExerciseDisplay";
import { generalStretchingExercises } from "@/data/generalStretchingExercises";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const GeneralStretching = () => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleNext = useCallback(() => {
    setCurrentExerciseIndex((prev) => 
      prev === generalStretchingExercises.length - 1 ? 0 : prev + 1
    );
    setIsPlaying(true);
  }, []);

  const handlePrevious = useCallback(() => {
    setCurrentExerciseIndex((prev) => 
      prev === 0 ? generalStretchingExercises.length - 1 : prev - 1
    );
    setIsPlaying(true);
  }, []);

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const handleTimerComplete = useCallback(() => {
    handleNext();
  }, [handleNext]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-4 sm:p-6">
      <div className="max-w-md mx-auto space-y-4 sm:space-y-6">
        <Button
          variant="ghost"
          className="text-white hover:text-white/80"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4 sm:mb-8">
          General Stretching Exercises
        </h1>
        
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg space-y-6 sm:space-y-8">
          <div className="text-center text-sm text-gray-600 font-medium">
            Exercise {currentExerciseIndex + 1} of {generalStretchingExercises.length}
          </div>
          
          <ExerciseDisplay exercise={generalStretchingExercises[currentExerciseIndex]} />
          
          <Timer 
            duration={60} 
            isPlaying={isPlaying} 
            onComplete={handleTimerComplete}
          />
          
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              className="hover:scale-105 transition-transform duration-200 hover:bg-gray-100"
              size={isMobile ? "default" : "lg"}
            >
              <SkipBack className={`h-6 w-6 sm:h-7 sm:w-7`} />
            </Button>
            
            <Button 
              onClick={togglePlay}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full hover:scale-105 transition-all duration-200 hover:shadow-md hover:bg-primary/90"
              size={isMobile ? "default" : "lg"}
            >
              {isPlaying ? (
                <PauseCircle className="h-8 w-8 sm:h-10 sm:w-10" />
              ) : (
                <PlayCircle className="h-8 w-8 sm:h-10 sm:w-10" />
              )}
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleNext}
              className="hover:scale-105 transition-transform duration-200 hover:bg-gray-100"
              size={isMobile ? "default" : "lg"}
            >
              <SkipForward className={`h-6 w-6 sm:h-7 sm:w-7`} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralStretching;
