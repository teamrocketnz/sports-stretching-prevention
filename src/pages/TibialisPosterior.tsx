import React from "react";
import { tibialisPosteriorExercises } from "@/data/exercises";
import ExerciseDisplay from "@/components/ExerciseDisplay";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TibialisPosterior = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Button
          variant="ghost"
          className="text-white hover:text-white/80"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Tibialis Posterior Exercises
          </h1>
          <p className="text-neutral-100 text-lg max-w-2xl mx-auto">
            Targeted exercises for Tibialis Posterior Tendinopathy recovery and prevention
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tibialisPosteriorExercises.map((exercise) => (
            <ExerciseDisplay key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TibialisPosterior;