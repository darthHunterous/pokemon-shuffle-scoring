import { extendBlueprint } from "../blueprints";
import {
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";
import Eevee from "./Eevee";

const name = "GIGANTAMAX_EEVEE";
const gameBox = GameBox.Exploration;

// Promo card P016
const blueprint: DwellerCardBlueprint = extendBlueprint(Eevee, {
  name,
  variants: [
    {
      gameBox,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Pewter,
      count: 1,
    },
  ],
});

export default blueprint;
