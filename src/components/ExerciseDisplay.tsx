import React from "react";
import { Exercise } from "@/data/exercises";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Trophy, Star } from "lucide-react";

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
          <div className="flex justify-between items-start">
            <div className="text-6xl flex justify-center items-center h-24">
              {exercise.animation}
            </div>
            <div className="flex items-center space-x-2">
              <motion.div
                className="bg-achievement-gold/20 p-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Trophy className="w-6 h-6 text-achievement-gold" />
              </motion.div>
              <motion.div
                className="bg-primary/20 p-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                <Star className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
          </div>
          <h2 className="text-2xl font-heading font-bold text-white">
            {exercise.name}
          </h2>
          <p className="text-white text-base leading-relaxed">
            {exercise.description}
          </p>
          {exercise.id === 1 && (
            <div className="relative">
              <img 
                src="/lovable-uploads/a99b461e-b748-498f-ae4d-bdfff449286c.png" 
                alt="Cook Hip Lift demonstration" 
                className="w-48 mx-auto mt-4 rounded-lg shadow-lg"
              />
              <motion.div
                className="absolute -top-2 -right-2 bg-gradient-achievement p-1.5 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Trophy className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          )}
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="flex justify-between items-center text-sm text-white/80">
              <span>Personal Best: 3 minutes</span>
              <span>Streak: 5 days</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ExerciseDisplay;