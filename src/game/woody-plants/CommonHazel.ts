import {
  CardType,
  GameBox,
  TreeSymbol,
  WoodyPlantCardBlueprint,
} from "../types";

const name = "COMMON_HAZEL";
const gameBox = GameBox.WoodlandEdge;
const points = 0;

const blueprint: WoodyPlantCardBlueprint = {
  name,
  types: [CardType.Shrub, CardType.WoodlandEdge],
  cost: 2,
  isPartOfDeck: true,
  variants: [
    {
      gameBox,
      treeSymbol: TreeSymbol.Fuchsia,
      count: 1,
    },
    {
      gameBox,
      treeSymbol: TreeSymbol.Cinnabar,
      count: 1,
    },
    {
      gameBox,
      treeSymbol: TreeSymbol.HorseChestnut,
      count: 1,
    },
    {
      gameBox,
      treeSymbol: TreeSymbol.Pewter,
      count: 1,
    },
  ],
  score: () => points,
};

export default blueprint;
