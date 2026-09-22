import { getDwellersOfWoodyPlant } from "@/game/helpers";

import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "MUDKIP";
const gameBox = GameBox.WoodlandEdge;
const pointsIfAlone = 10;

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.PawedAnimal, CardType.WoodlandEdge],
  cost: 2,
  isPartOfDeck: true,
  variants: [
    {
      gameBox,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Viridian,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Right,
      treeSymbol: TreeSymbol.Celadon,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Right,
      treeSymbol: TreeSymbol.Pewter,
      count: 1,
    },
  ],
  score: ({ woodyPlant }) =>
    getDwellersOfWoodyPlant(woodyPlant).length == 1 ? pointsIfAlone : 0,
};

export default blueprint;
