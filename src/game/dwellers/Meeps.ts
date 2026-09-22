import { extendBlueprint } from "../blueprints";
import {
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";
import Zigzagoon from "./Zigzagoon";

const name = "MEEPS";

// Promo card P013
const blueprint: DwellerCardBlueprint = extendBlueprint(Zigzagoon, {
  name,
  variants: [
    {
      gameBox: GameBox.PromoCards,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Saffron,
      count: 1,
    },
  ],
});

export default blueprint;
