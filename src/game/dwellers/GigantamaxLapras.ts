import { extendBlueprint } from "../blueprints";
import { GameBox, TreeSymbol, DwellerCardBlueprint, DwellerPosition } from "../types";
import Lapras from "./Lapras";

const name = "GIGANTAMAX_LAPRAS";

const blueprint: DwellerCardBlueprint = extendBlueprint(Lapras, {
  name,
  variants: [
    // Promo card P002
    {
      gameBox: GameBox.Exploration,
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.Fuchsia,
      count: 1,
    },
  ],
});

export default blueprint;
