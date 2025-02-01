import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

// Placeholder images for frisbees
const placeholderImages = [
  "/placeholder.svg",
  "https://source.unsplash.com/random/200x200?nature",
  "https://source.unsplash.com/random/200x200?abstract",
  "https://source.unsplash.com/random/200x200?pattern"
];

const Collection = () => {
  // In a real app, this would come from a database or localStorage
  const [frisbees] = React.useState([
    {
      id: "1",
      color1: "hsl(340, 70%, 50%)",
      color2: "hsl(260, 70%, 50%)",
      imageUrl: placeholderImages[Math.floor(Math.random() * placeholderImages.length)],
      unlockedAt: new Date()
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-heading font-bold text-white">
            Frisbee Collection
          </h1>
          <p className="text-neutral-100 text-lg">
            Your unlocked frisbee achievements
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {frisbees.map((frisbee) => (
            <Card key={frisbee.id} className="group hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 2, ease: "linear" }}
                  className="relative aspect-square"
                >
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-8 border-gray-200 shadow-inner" />
                  
                  {/* Main disc with gradient and image */}
                  <div
                    className="absolute inset-2 rounded-full shadow-lg overflow-hidden"
                    style={{
                      background: `linear-gradient(45deg, ${frisbee.color1}, ${frisbee.color2})`,
                    }}
                  >
                    <img
                      src={frisbee.imageUrl}
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
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">
                    Unlocked {new Date(frisbee.unlockedAt).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;