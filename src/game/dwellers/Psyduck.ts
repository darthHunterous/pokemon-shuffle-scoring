import { countCardNames } from "../scoring/helpers";
import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";
import Scyther from "./Scyther";

const name = "PSYDUCK";
const gameBox = GameBox.Base;
const pointsPerScyther = 5;

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.Amphibian],
  cost: 0,
  isPartOfDeck: true,
  variants: [
    {
      gameBox,
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.Vermilion,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.Pewter,
      count: 2,
    },
  ],
  score: ({ forest }) => countCardNames(forest, [Scyther.name]) * pointsPerScyther,
};

export default blueprint;
