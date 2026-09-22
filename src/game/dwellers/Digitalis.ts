import { countCardTypes, scoreByCount } from "@/game/scoring/helpers";

import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "DIGITALIS";
const gameBox = GameBox.WoodlandEdge;
const pointsByDistinctPlantsCount = {
  1: 1,
  2: 3,
  3: 6,
  4: 10,
  5: 15,
};

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.Plant, CardType.WoodlandEdge],
  cost: 0,
  isPartOfDeck: true,
  variants: [
    {
      gameBox,
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.Cinnabar,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.Cerulean,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.Pewter,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.Celadon,
      count: 1,
    },
  ],
  score: ({ forest }) => {
    const count = countCardTypes(forest, [CardType.Plant], true);
    return scoreByCount(count, pointsByDistinctPlantsCount);
  },
};

export default blueprint;
