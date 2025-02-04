import { Exercise } from "@/types/exercise";
import { layingStretches } from "./stretches/layingStretches";
import { seatedStretches } from "./stretches/seatedStretches";
import { floorStretches } from "./stretches/floorStretches";

export const generalStretchingExercises: Exercise[] = [
  ...layingStretches,
  ...seatedStretches,
  ...floorStretches
];