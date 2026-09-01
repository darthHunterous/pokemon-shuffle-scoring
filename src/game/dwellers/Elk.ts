import { countCardNames, countTreeSymbols } from "@/game/scoring/helpers";
import { Sapling } from "@/game/woody-plants";

import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "ELK";
const pointsPerSaplingCinnabarOrCerulean = 2;

// Promo card P011
const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.ClovenhoofedAnimal, CardType.Deer],
  cost: 3,
  isPartOfDeck: true,
  variants: [
    {
      gameBox: GameBox.Exploration,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Cinnabar,
      count: 1,
    },
    {
      gameBox: GameBox.PromoCards,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Cinnabar,
      count: 1,
    },
  ],
  score: ({ forest }) => {
    const count =
      countCardNames(forest, [Sapling.name]) +
      countTreeSymbols(forest, [TreeSymbol.Cinnabar, TreeSymbol.Cerulean]);
    return count * pointsPerSaplingCinnabarOrCerulean;
  },
};

export default blueprint;
