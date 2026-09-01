import { countCardNames } from "../scoring/helpers";
import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";
import Diglett from "./Diglett";
import DiglettAlola from "./DiglettAlola";

const name = "RED_FOX";
const gameBox = GameBox.Base;
const pointsPerDiglett = 2;

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.PawedAnimal],
  cost: 2,
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
      treeSymbol: TreeSymbol.Vermilion,
      count: 2,
    },
    {
      gameBox,
      position: DwellerPosition.Right,
      treeSymbol: TreeSymbol.Cerulean,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Right,
      treeSymbol: TreeSymbol.Pewter,
      count: 1,
    },
  ],
  score: ({ forest }) =>
    countCardNames(forest, [Diglett.name, DiglettAlola.name]) *
    pointsPerDiglett,
};

export default blueprint;
