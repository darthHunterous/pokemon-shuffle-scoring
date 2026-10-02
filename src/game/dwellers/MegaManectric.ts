import { extendBlueprint } from "../blueprints";
import { GameBox, TreeSymbol, DwellerCardBlueprint, DwellerPosition } from "../types";
import Electrike from "./Electrike";

const name = "MEGA_MANECTRIC";

const blueprint: DwellerCardBlueprint = extendBlueprint(Electrike, {
  name,
  variants: [
    // Promo card P007
    {
      gameBox: GameBox.Exploration,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Fuchsia,
      count: 1,
    },
  ],
});

export default blueprint;