import { extendBlueprint } from "../blueprints";
import { countCardTypes } from "../scoring/helpers";
import {
  CardType,
  GameBox,
  TreeSymbol,
  WoodyPlantCardBlueprint,
} from "../types";
import Pewter from "./Pewter";

const name = "MAUVILLE";
const pointsPerClovenhoofedAnimal = 1;

const blueprint: WoodyPlantCardBlueprint = extendBlueprint(Pewter, {
  name,
  variants: [
    {
      gameBox: GameBox.Exploration,
      treeSymbol: TreeSymbol.Pewter,
      count: 1,
    },
    {
      gameBox: GameBox.PromoCards,
      treeSymbol: TreeSymbol.Pewter,
      count: 1,
    },
  ],
  score: ({ forest }) =>
    countCardTypes(forest, [CardType.ClovenhoofedAnimal]) *
    pointsPerClovenhoofedAnimal,
});

export default blueprint;
