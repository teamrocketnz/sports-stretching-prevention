import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-6">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Stretching Guide
        </h1>
        
        <div className="bg-white rounded-lg p-6 shadow-xl space-y-4">
          <h2 className="text-xl font-semibold text-center mb-4">
            Choose Your Stretching Routine
          </h2>
          
          <div className="space-y-3">
            <Button 
              className="w-full bg-primary hover:bg-primary/90"
              onClick={() => navigate("/dynamic")}
            >
              Dynamic Stretches
            </Button>

            <Button 
              className="w-full bg-primary hover:bg-primary/90"
              onClick={() => navigate("/general-stretching")}
            >
              General Stretching
            </Button>
            
            <Button 
              className="w-full bg-secondary hover:bg-secondary/90"
              onClick={() => navigate("/shin-splints")}
            >
              Shin Splints
            </Button>
            
            <Button 
              className="w-full bg-accent hover:bg-accent/90"
              onClick={() => navigate("/jumpers-knee")}
            >
              Jumper's Knee
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;