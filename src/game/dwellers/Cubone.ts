import { filterTrees } from "@/game/helpers";

import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "CUBONE";
const gameBox = GameBox.Base;
const pointsPerTree = 5;

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.PawedAnimal],
  cost: 1,
  isPartOfDeck: true,
  variants: [
    {
      gameBox,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Fuchsia,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Celadon,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Right,
      treeSymbol: TreeSymbol.HorseChestnut,
      count: 2,
    },
    {
      gameBox,
      position: DwellerPosition.Right,
      treeSymbol: TreeSymbol.Pewter,
      count: 1,
    },
  ],
  score: ({ forest }) => {
    const fullyOccupiedTrees = filterTrees(forest.woodyPlants).filter((w) =>
      Object.values(w.dwellers).every((d) => d.length > 0),
    );

    return fullyOccupiedTrees.length * pointsPerTree;
  },
};

export default blueprint;
