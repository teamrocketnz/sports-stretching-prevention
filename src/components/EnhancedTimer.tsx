import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { PlayCircle, PauseCircle, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface EnhancedTimerProps {
  onComplete?: () => void;
  autoAdvance?: boolean;
}

const PRESET_DURATIONS = [15, 30, 45, 60];

const EnhancedTimer: React.FC<EnhancedTimerProps> = ({ 
  onComplete,
  autoAdvance = false 
}) => {
  const [duration, setDuration] = useState(30);
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const { toast } = useToast();

  // Sound effects
  const playSound = useCallback((type: 'start' | 'halfway' | 'end') => {
    if (!soundEnabled) return;
    
    const frequency = type === 'start' ? 660 : type === 'halfway' ? 440 : 880;
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    gainNode.gain.value = 0.1;
    
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 0.5);
    
    setTimeout(() => {
      oscillator.stop();
      audioContext.close();
    }, 500);
  }, [soundEnabled]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying && timeLeft > 0) {
      // Play start sound when timer begins
      if (timeLeft === duration) {
        playSound('start');
      }

      interval = setInterval(() => {
        setTimeLeft((prev) => {
          // Play halfway sound
          if (prev === Math.ceil(duration / 2)) {
            playSound('halfway');
          }
          
          // Handle completion
          if (prev <= 1) {
            clearInterval(interval);
            playSound('end');
            setIsPlaying(false);
            onComplete?.();
            
            if (autoAdvance) {
              toast({
                title: "Moving to next stretch in 3 seconds",
                duration: 3000,
              });
            }
            
            return duration;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPlaying, timeLeft, duration, playSound, onComplete, autoAdvance, toast]);

  const handleReset = () => {
    setIsPlaying(false);
    setTimeLeft(duration);
  };

  const togglePlay = () => {
    if (!isPlaying && timeLeft === duration) {
      // Vibrate on start if supported
      if ('vibrate' in navigator) {
        navigator.vibrate(200);
      }
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto p-6 space-y-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl"
    >
      {/* Timer Display */}
      <div className="text-center space-y-4">
        <motion.div 
          className="text-6xl font-bold tabular-nums"
          animate={{ scale: isPlaying ? [1, 1.05, 1] : 1 }}
          transition={{ duration: 1, repeat: isPlaying ? Infinity : 0 }}
        >
          {formatTime(timeLeft)}
        </motion.div>
        
        <Progress 
          value={(timeLeft / duration) * 100} 
          className="h-2 w-full bg-neutral-200"
        />
      </div>

      {/* Duration Presets */}
      <div className="flex flex-wrap gap-2 justify-center">
        {PRESET_DURATIONS.map((preset) => (
          <Button
            key={preset}
            variant="outline"
            className="px-4 py-2"
            onClick={() => {
              setDuration(preset);
              setTimeLeft(preset);
            }}
          >
            {preset}s
          </Button>
        ))}
      </div>

      {/* Custom Duration Slider */}
      <div className="space-y-2">
        <label className="text-sm text-neutral-300">Custom Duration</label>
        <Slider
          min={5}
          max={120}
          step={5}
          value={[duration]}
          onValueChange={(value) => {
            setDuration(value[0]);
            setTimeLeft(value[0]);
          }}
          disabled={isPlaying}
          className="my-4"
        />
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="rounded-full"
        >
          {soundEnabled ? <Volume2 /> : <VolumeX />}
        </Button>

        <Button
          size="icon"
          onClick={togglePlay}
          className="w-16 h-16 rounded-full"
        >
          {isPlaying ? <PauseCircle className="w-8 h-8" /> : <PlayCircle className="w-8 h-8" />}
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={handleReset}
          className="rounded-full"
        >
          <RotateCcw />
        </Button>
      </div>
    </motion.div>
  );
};

export default EnhancedTimer;