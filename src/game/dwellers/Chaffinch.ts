import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";
import { Fuchsia } from "../woody-plants";

const name = "CHAFFINCH";
const gameBox = GameBox.Base;
const pointsOnFuchsia = 5;

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.Bird],
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
      treeSymbol: TreeSymbol.Celadon,
      count: 2,
    },
  ],
  score: ({ woodyPlant }) =>
    woodyPlant.name === Fuchsia.name ? pointsOnFuchsia : 0,
};

export default blueprint;
