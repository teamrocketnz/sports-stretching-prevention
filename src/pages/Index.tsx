import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Dumbbell, 
  Activity, 
  Footprints, 
  ChevronRight 
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-6 relative">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Stretch & Flex
          </h1>
          <p className="text-neutral-100 text-lg max-w-2xl mx-auto">
            Your personal guide to better flexibility and injury prevention
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Dynamic Stretches",
              description: "Pre-workout routines to warm up your muscles",
              icon: <Activity className="w-6 h-6" />,
              path: "/dynamic",
              gradient: "from-blue-400 to-blue-600",
            },
            {
              title: "General Stretching",
              description: "Complete body flexibility workouts",
              icon: <Dumbbell className="w-6 h-6" />,
              path: "/general-stretching",
              gradient: "from-purple-400 to-purple-600",
            },
            {
              title: "Shin Splints",
              description: "Targeted exercises for shin splint prevention",
              icon: <Footprints className="w-6 h-6" />,
              path: "/shin-splints",
              gradient: "from-orange-400 to-orange-600",
            },
            {
              title: "Jumper's Knee",
              description: "Strengthen and protect your knee joints",
              icon: <Dumbbell className="w-6 h-6" />,
              path: "/jumpers-knee",
              gradient: "from-green-400 to-green-600",
            },
          ].map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`bg-gradient-to-br ${item.gradient} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group text-left`}
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="bg-white/20 p-2 rounded-lg w-fit">
                    {item.icon}
                  </div>
                  <h2 className="text-xl font-heading font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="text-neutral-100 text-sm">
                    {item.description}
                  </p>
                </div>
                <ChevronRight className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" />
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="absolute bottom-2 right-4 text-white/30 text-xs font-light">
        by ROBBIE MAC
      </div>
    </div>
  );
};

export default Index;