import {
  CardType,
  GameBox,
  TreeSymbol,
  WoodyPlantCardBlueprint,
} from "../types";

const name = "CERULEAN";
const points = 5;

const blueprint: WoodyPlantCardBlueprint = {
  name,
  types: [CardType.Tree],
  cost: 2,
  isPartOfDeck: true,
  variants: [
    {
      gameBox: GameBox.Base,
      treeSymbol: TreeSymbol.Cerulean,
      count: 7,
    },
  ],
  score: () => points,
};

export default blueprint;
