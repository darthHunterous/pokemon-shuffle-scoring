import { scoreButterflies } from "../scoring/butterflies";
import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "BEAUTIFLY";
const gameBox = GameBox.Base;

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.Butterfly, CardType.Insect],
  cost: 0,
  isPartOfDeck: true,
  variants: [
    {
      gameBox,
      position: DwellerPosition.Top,
      treeSymbol: TreeSymbol.Birch,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Top,
      treeSymbol: TreeSymbol.HorseChestnut,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Top,
      treeSymbol: TreeSymbol.Celadon,
      count: 2,
    },
  ],
  score: ({ forest, dweller }) => scoreButterflies(forest, dweller),
};

export default blueprint;
