
import React from "react";
import { Exercise } from "@/types/exercise";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ExerciseDisplayProps {
  exercise: Exercise;
}

const ExerciseDisplay: React.FC<ExerciseDisplayProps> = ({ exercise }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden bg-white shadow-lg rounded-xl border-0">
        <div className="p-6 space-y-6">
          <div className="text-6xl flex justify-center items-center h-24 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
            {exercise.animation}
          </div>
          <h2 className="text-3xl font-heading font-bold text-gray-800 tracking-tight">
            {exercise.name}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {exercise.description}
          </p>
          {exercise.image && (
            <img 
              src={exercise.image} 
              alt={`${exercise.name} demonstration`} 
              className="w-full max-w-sm mx-auto mt-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
            />
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default ExerciseDisplay;
