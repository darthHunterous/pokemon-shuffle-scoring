import { countCardTypes } from "../scoring/helpers";
import {
  CardType,
  GameBox,
  TreeSymbol,
  WoodyPlantCardBlueprint,
} from "../types";

const name = "CELADON";
const pointsPerTree = 1;

const blueprint: WoodyPlantCardBlueprint = {
  name,
  types: [CardType.Tree],
  cost: 2,
  isPartOfDeck: true,
  variants: [
    {
      gameBox: GameBox.Base,
      treeSymbol: TreeSymbol.Celadon,
      count: 6,
    },
  ],
  score: ({ forest }) =>
    countCardTypes(forest, [CardType.Tree]) * pointsPerTree,
};

export default blueprint;
