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
    description: "Lie on your back, lift hips while keeping core engaged",
    animation: "🏃‍♂️", // We'll use emojis as placeholders for now
  },
  {
    id: 2,
    name: "Hip Mobility",
    description: "Rotate hips in circular motion while standing",
    animation: "🔄",
  },
  // ... Add all other exercises with similar structure
  {
    id: 22,
    name: "Triple Cuts",
    description: "Quick lateral movements with direction changes",
    animation: "⚡",
  },
];