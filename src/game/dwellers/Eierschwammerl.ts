import { extendBlueprint } from "../blueprints";
import {
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";
import Jynx from "./Jynx";

const name = "EIERSCHWAMMERL";

// Promo card P010
const blueprint: DwellerCardBlueprint = extendBlueprint(Jynx, {
  name,
  variants: [
    {
      gameBox: GameBox.Exploration,
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.Cerulean,
      count: 1,
    },
    {
      gameBox: GameBox.PromoCards,
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.Cerulean,
      count: 1,
    },
  ],
});

export default blueprint;
