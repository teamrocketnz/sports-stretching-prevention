import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

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
          <div
            className="w-full h-full rounded-full shadow-lg"
            style={{
              background: `linear-gradient(45deg, ${color1}, ${color2})`,
            }}
          />
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