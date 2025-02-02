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

export const generalStretchingExercises: Exercise[] = [
  {
    id: 1,
    name: "Laying down Lumber Rotation Left",
    description: "Lie on your back, keep shoulders flat, and rotate knees to the left side. Hold for 30 seconds.",
    animation: "🔄",
  },
  {
    id: 2,
    name: "Laying down Lumber Rotation Right",
    description: "Lie on your back, keep shoulders flat, and rotate knees to the right side. Hold for 30 seconds.",
    animation: "🔄",
  },
  {
    id: 3,
    name: "Laying down Hamstring Stretch",
    description: "Lie on your back, lift one leg straight up while keeping the other flat. Hold for 30 seconds per leg.",
    animation: "🦵",
  },
  {
    id: 4,
    name: "Piriformis Stretch Left",
    description: "Lie on your back, cross left ankle over right knee, pull right thigh toward chest. Hold 30 seconds.",
    animation: "🧘‍♂️",
  },
  {
    id: 5,
    name: "Piriformis Stretch Right",
    description: "Lie on your back, cross right ankle over left knee, pull left thigh toward chest. Hold 30 seconds.",
    animation: "🧘‍♂️",
  },
  {
    id: 6,
    name: "Tall Kneeling Hip Flexor Stretch Left",
    description: "Kneel tall, step left foot forward, lean forward while keeping back straight. Hold 30 seconds.",
    animation: "🧎‍♂️",
  },
  {
    id: 7,
    name: "Kneeling Hamstring Stretch Left",
    description: "Kneel on right knee, extend left leg forward, lean forward from hips. Hold 30 seconds.",
    animation: "🧎‍♂️",
  },
  {
    id: 8,
    name: "Tall Kneeling Hip Flexor Stretch Right",
    description: "Kneel tall, step right foot forward, lean forward while keeping back straight. Hold 30 seconds.",
    animation: "🧎‍♂️",
  },
  {
    id: 9,
    name: "Kneeling Hamstring Stretch Right",
    description: "Kneel on left knee, extend right leg forward, lean forward from hips. Hold 30 seconds.",
    animation: "🧎‍♂️",
  },
  {
    id: 10,
    name: "Seated Spine Rotation Stretch Left",
    description: "Sit cross-legged, place right hand on left knee, rotate torso left. Hold 30 seconds.",
    animation: "🧘‍♀️",
  },
  {
    id: 11,
    name: "Seated Spine Rotation Stretch Right",
    description: "Sit cross-legged, place left hand on right knee, rotate torso right. Hold 30 seconds.",
    animation: "🧘‍♀️",
  },
  {
    id: 12,
    name: "Easy Pose Forward Fold",
    description: "Sit cross-legged, fold forward from hips, reaching arms forward. Hold 30 seconds.",
    animation: "🧘‍♀️",
  },
  {
    id: 13,
    name: "Happy Cow",
    description: "On hands and knees, arch back while looking up, then round back while looking down.",
    animation: "🐄",
  },
  {
    id: 14,
    name: "Pigeon Pose",
    description: "From all fours, bring one leg forward into a bent position while extending back leg. Hold each side 30 seconds.",
    animation: "🕊️",
  },
  {
    id: 15,
    name: "Butterfly Pose",
    description: "Sit with feet together, knees out. Hold feet and lean forward. Hold 30 seconds.",
    animation: "🦋",
  },
  {
    id: 16,
    name: "Frog Pose",
    description: "Kneel with knees wide, feet together. Keep back straight and lean forward. Hold 30 seconds.",
    animation: "🐸",
  },
  {
    id: 17,
    name: "Child's Pose",
    description: "Kneel on the floor, sit back on heels, extend arms forward, and rest forehead on mat. Hold for 30 seconds.",
    animation: "🧎",
  },
  {
    id: 18,
    name: "Cat-Cow Stretch",
    description: "On hands and knees, alternate between arching and rounding your back while breathing deeply. 10 repetitions.",
    animation: "🐱",
  },
  {
    id: 19,
    name: "Thread the Needle",
    description: "From all fours, slide one arm under your body, rotating to stretch the upper back. Hold 30 seconds each side.",
    animation: "🧵",
  },
  {
    id: 20,
    name: "Cobra Pose",
    description: "Lie face down, place hands under shoulders, gently lift chest while keeping hips on ground. Hold 15-30 seconds.",
    animation: "🐍",
  },
];

export const jumpersKneeExercises: Exercise[] = [
  {
    id: 1,
    name: "Cross Friction Massage",
    description: "Apply gentle cross-friction massage to the patellar tendon. Massage for 2-3 minutes, focusing on tender areas.",
    animation: "👐",
  },
  {
    id: 2,
    name: "Patellar Mobilization",
    description: "Gently move your kneecap in all directions (up, down, side to side) while keeping your leg relaxed. Perform for 1-2 minutes.",
    animation: "🦿",
  },
  {
    id: 3,
    name: "Sidelying Quad Stretch",
    description: "Lie on your side, bend your top knee and hold your ankle. Pull gently to feel a stretch in front of your thigh. Hold for 30 seconds.",
    animation: "🧘‍♂️",
  },
  {
    id: 4,
    name: "Standing Quad Stretch",
    description: "Stand on one leg, bend your other knee and hold your ankle behind you. Keep your knees close together. Hold for 30 seconds.",
    animation: "🧍‍♂️",
  },
  {
    id: 5,
    name: "Straight Leg Raise",
    description: "Lie on your back, keep one leg straight and raise it about 6 inches off the ground. Hold for 5 seconds. Perform 10 repetitions.",
    animation: "🦵",
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
  },
  {
    id: 10,
    name: "Walking on Heels",
    description: "Walk on your heels with toes pointed up for 30 seconds. This helps strengthen the muscles in the front of your lower legs.",
    animation: "🚶",
  }
];
