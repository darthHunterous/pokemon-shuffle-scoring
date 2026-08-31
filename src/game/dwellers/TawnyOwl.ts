import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "TAWNY_OWL";
const gameBox = GameBox.Base;
const points = 5;

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.Bird],
  cost: 2,
  isPartOfDeck: true,
  variants: [
    {
      gameBox,
      position: DwellerPosition.Top,
      treeSymbol: TreeSymbol.Fuchsia,
      count: 2,
    },
    {
      gameBox,
      position: DwellerPosition.Top,
      treeSymbol: TreeSymbol.Birch,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Top,
      treeSymbol: TreeSymbol.Celadon,
      count: 1,
    },
  ],
  score: () => points,
};

export default blueprint;
