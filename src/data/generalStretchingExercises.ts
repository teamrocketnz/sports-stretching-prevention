import { Exercise } from "@/types/exercise";
import { layingStretches } from "./stretches/layingStretches";
import { kneelingStretches } from "./stretches/kneelingStretches";
import { seatedStretches } from "./stretches/seatedStretches";
import { floorStretches } from "./stretches/floorStretches";

export const generalStretchingExercises: Exercise[] = [
  ...layingStretches,
  ...kneelingStretches,
  ...seatedStretches,
  ...floorStretches
];