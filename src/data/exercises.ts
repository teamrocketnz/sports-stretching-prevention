export interface Exercise {
  id: number;
  name: string;
  description: string;
  animation: string;
}

export const exercises: Exercise[] = [
  {
    id: 1,
    name: "Cook Hip Lift",
    description: "Lie on your back with knees bent, lift hips while keeping core engaged",
    animation: "🦵", // Changed to leg emoji to better represent the exercise
  },
  {
    id: 2,
    name: "Hip Mobility",
    description: "Rotate hips in circular motion while standing",
    animation: "🔄", // Rotating movement
  },
  {
    id: 4,
    name: "Tap the Brakes",
    description: "Quick alternating leg movements simulating brake taps",
    animation: "🦶", // Foot tapping movement
  },
  {
    id: 5,
    name: "Trunk Twist",
    description: "Standing twist movements engaging the core",
    animation: "🌪️", // Twisting movement
  },
  {
    id: 6,
    name: "Plank Walk",
    description: "Move sideways while maintaining plank position",
    animation: "🏃‍♂️", // Walking movement
  },
  {
    id: 7,
    name: "Knee to Chest",
    description: "Pull knee towards chest while standing",
    animation: "🧘‍♂️", // Knee lift pose
  },
  {
    id: 8,
    name: "Knee Push",
    description: "Gently push knee forward and back",
    animation: "🦿", // Leg movement
  },
  {
    id: 9,
    name: "Bent Hamstring",
    description: "Bend forward while keeping legs slightly bent",
    animation: "🙇‍♂️", // Forward bend
  },
  {
    id: 10,
    name: "Arm Action",
    description: "Dynamic arm swings and rotations",
    animation: "💪", // Arm exercise
  },
  {
    id: 11,
    name: "Butt Kicks",
    description: "Kick heels toward buttocks while moving forward",
    animation: "🦵", // Leg kick
  },
  {
    id: 12,
    name: "High Knees",
    description: "Lift knees high while running in place",
    animation: "🏃‍♀️", // Running motion
  },
  {
    id: 13,
    name: "Reverse Lunge",
    description: "Step backward into lunge position",
    animation: "🧎‍♂️", // Lunge position
  },
  {
    id: 14,
    name: "Dynamic Lunge",
    description: "Moving lunges with arm movements",
    animation: "🏃", // Dynamic movement
  },
  {
    id: 15,
    name: "Skip Progression",
    description: "Progressive skipping movements",
    animation: "⭐", // Skip motion
  },
  {
    id: 16,
    name: "Foot Strike",
    description: "Practice proper foot landing technique",
    animation: "👣", // Footstep
  },
  {
    id: 17,
    name: "3 Hard Steps",
    description: "Three powerful steps with proper form",
    animation: "👣", // Steps
  },
  {
    id: 18,
    name: "Forward Lunge",
    description: "Step forward into lunge position",
    animation: "🏃", // Forward movement
  },
  {
    id: 19,
    name: "Hop Progression",
    description: "Progressive hopping exercises",
    animation: "🦘", // Hopping motion
  },
  {
    id: 20,
    name: "Chop Stop",
    description: "Quick stopping movements with direction changes",
    animation: "✋", // Stop motion
  },
  {
    id: 21,
    name: "Lateral Lunge",
    description: "Side lunges with proper form",
    animation: "🏃", // Side movement
  },
  {
    id: 22,
    name: "Side Shuffle",
    description: "Quick lateral movements",
    animation: "🔄", // Side shuffle
  },
  {
    id: 23,
    name: "Triple Cuts",
    description: "Quick lateral movements with direction changes",
    animation: "⚡", // Quick movement
  },
];

export const shinSplintExercises: Exercise[] = [
  {
    id: 1,
    name: "Shin Massage",
    description: "Gently massage up and down your shins with your thumbs. Spend 1 minute on each leg.",
    animation: "👐",
  },
  {
    id: 2,
    name: "Seated Shin Stretch",
    description: "Sit with your legs extended. Point your toes forward, then flex them back. Hold each position for 15-20 seconds.",
    animation: "🧘‍♂️",
  },
  {
    id: 3,
    name: "Upward Facing Dog",
    description: "Lie face down, push up through your arms while keeping hips on the ground. Feel the stretch in your shins. Hold for 20-30 seconds.",
    animation: "🧘‍♀️",
  },
  {
    id: 4,
    name: "Kneeling Shin Stretch",
    description: "Kneel with tops of feet flat on the ground, slowly sit back on your heels. Hold for 20-30 seconds.",
    animation: "🧎‍♂️",
  },
  {
    id: 5,
    name: "Toe Taps",
    description: "Sit with legs extended, rapidly tap your toes up and down while keeping heels on the ground. Do 3 sets of 20 taps.",
    animation: "👣",
  },
  {
    id: 6,
    name: "Eversion",
    description: "Sit with legs extended, rotate feet outward from the ankles. Hold for 10 seconds, repeat 10 times.",
    animation: "🦶",
  },
  {
    id: 7,
    name: "Inversion",
    description: "Sit with legs extended, rotate feet inward from the ankles. Hold for 10 seconds, repeat 10 times.",
    animation: "🦶",
  },
  {
    id: 8,
    name: "Walking on Toes",
    description: "Walk on your toes for 30 seconds, focusing on controlled movements.",
    animation: "🚶‍♂️",
  },
  {
    id: 9,
    name: "Balancing Exercises",
    description: "Stand on one leg for 30 seconds, then switch. Progress to closing eyes or standing on unstable surfaces.",
    animation: "🧘‍♂️",
  }
];