import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "WINGULL";
const gameBox = GameBox.WoodlandEdge;
const points = 3;

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.Bird, CardType.WoodlandEdge],
  cost: 1,
  isPartOfDeck: true,
  variants: [
    {
      gameBox,
      position: DwellerPosition.Top,
      treeSymbol: TreeSymbol.Fuchsia,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Top,
      treeSymbol: TreeSymbol.Cinnabar,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Top,
      treeSymbol: TreeSymbol.SilverFir,
      count: 1,
    },
  ],
  score: () => points,
};

export default blueprint;
