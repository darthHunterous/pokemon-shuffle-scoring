import {
  CardType,
  GameBox,
  TreeSymbol,
  WoodyPlantCardBlueprint,
} from "../types";

const name = "GOLDENROD";
const points = 3;

const blueprint: WoodyPlantCardBlueprint = {
  name,
  types: [CardType.Alps, CardType.Tree],
  cost: 1,
  isPartOfDeck: true,
  variants: [
    {
      gameBox: GameBox.Alpine,
      treeSymbol: TreeSymbol.Goldenrod,
      count: 7,
    },
  ],
  score: () => points,
};

export default blueprint;
