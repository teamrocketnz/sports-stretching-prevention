import React from "react";
import { Exercise } from "@/data/exercises";
import { Card } from "@/components/ui/card";

interface ExerciseDisplayProps {
  exercise: Exercise;
}

const ExerciseDisplay: React.FC<ExerciseDisplayProps> = ({ exercise }) => {
  return (
    <Card className="p-6 space-y-4">
      <div className={`text-6xl ${exercise.id === 1 ? 'animate-hip-lift' : 'animate-bounce'}`}>
        {exercise.animation}
      </div>
      <h2 className="text-2xl font-bold">{exercise.name}</h2>
      <p className="text-gray-600">{exercise.description}</p>
    </Card>
  );
};

export default ExerciseDisplay;