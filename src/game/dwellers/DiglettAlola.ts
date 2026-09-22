import { Diglett } from "@/game/dwellers";
import { countCardNames } from "@/game/scoring/helpers";

import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "DIGLETT_ALOLA";
const gameBox = GameBox.Alpine;
const pointsPerCard = 1;

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.Alps, CardType.PawedAnimal],
  cost: 0,
  isPartOfDeck: true,
  variants: [
    {
      gameBox,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Goldenrod,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Viridian,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Right,
      treeSymbol: TreeSymbol.SwissPine,
      count: 1,
    },
  ],
  score: ({ forest }) =>
    countCardNames(forest, [name, Diglett.name]) * pointsPerCard,
};

export default blueprint;
