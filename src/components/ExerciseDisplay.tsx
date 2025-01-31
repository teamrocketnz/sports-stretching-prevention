import React from "react";
import { Exercise } from "@/data/exercises";
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
      <Card className="overflow-hidden bg-black/40 backdrop-blur-lg border-white/20">
        <div className="p-6 space-y-4">
          <div className="text-6xl flex justify-center items-center h-24">
            {exercise.animation}
          </div>
          <h2 className="text-2xl font-heading font-bold text-white">
            {exercise.name}
          </h2>
          <p className="text-white text-base leading-relaxed">
            {exercise.description}
          </p>
          {exercise.id === 1 && (
            <img 
              src="/lovable-uploads/a99b461e-b748-498f-ae4d-bdfff449286c.png" 
              alt="Cook Hip Lift demonstration" 
              className="w-48 mx-auto mt-4 rounded-lg shadow-lg"
            />
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default ExerciseDisplay;