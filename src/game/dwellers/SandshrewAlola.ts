import { extendBlueprint } from "../blueprints";
import { GameBox, TreeSymbol, DwellerCardBlueprint, DwellerPosition } from "../types";
import Sandshrew from "./Sandshrew";

const name = "SANDSHREW_ALOLA";

const blueprint: DwellerCardBlueprint = extendBlueprint(Sandshrew, {
  name,
  variants: [
    // Promo card P009
    {
      gameBox: GameBox.Exploration,
      position: DwellerPosition.Right,
      treeSymbol: TreeSymbol.Fuchsia,
      count: 1,
    },
  ],
});

export default blueprint;