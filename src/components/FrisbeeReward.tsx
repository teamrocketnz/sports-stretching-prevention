import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const placeholderImages = [
  "/placeholder.svg",
  "https://source.unsplash.com/random/200x200?nature",
  "https://source.unsplash.com/random/200x200?abstract",
  "https://source.unsplash.com/random/200x200?pattern"
];

interface FrisbeeRewardProps {
  isVisible: boolean;
}

const FrisbeeReward: React.FC<FrisbeeRewardProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  // Show toast when reward appears
  React.useEffect(() => {
    if (isVisible) {
      toast({
        title: "Achievement Unlocked! 🎉",
        description: "You've earned a new frisbee for completing your stretches!",
      });
    }
  }, [isVisible]);

  // Generate random gradient colors for the frisbee
  const color1 = `hsl(${Math.random() * 360}, 70%, 50%)`;
  const color2 = `hsl(${Math.random() * 360}, 70%, 50%)`;
  const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
    >
      <div className="bg-black/80 p-8 rounded-xl shadow-2xl text-center space-y-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="relative w-48 h-48 mx-auto"
        >
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-8 border-gray-200 shadow-inner" />
          
          {/* Main disc with gradient and image */}
          <div
            className="absolute inset-2 rounded-full shadow-lg overflow-hidden"
            style={{
              background: `linear-gradient(45deg, ${color1}, ${color2})`,
            }}
          >
            <img
              src={randomImage}
              alt="Frisbee pattern"
              className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
            
            {/* Inner ring */}
            <div className="absolute inset-8 rounded-full border-4 border-white/30" />
            
            {/* Center dot */}
            <div className="absolute inset-[45%] rounded-full bg-white/30" />
          </div>
          
          <motion.div
            className="absolute -top-2 -right-2 bg-gradient-achievement p-2 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Trophy className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>
        <h2 className="text-2xl font-bold text-white">New Frisbee Unlocked!</h2>
        <p className="text-gray-300">
          A unique addition to your collection
        </p>
      </div>
    </motion.div>
  );
};

export default FrisbeeReward;