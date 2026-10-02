import { extendBlueprint } from "../blueprints";
import { GameBox, TreeSymbol, DwellerCardBlueprint, DwellerPosition } from "../types";
import Scyther from "./Scyther";

const name = "SCIZOR";

const blueprint: DwellerCardBlueprint = extendBlueprint(Scyther, {
  name,
  variants: [
    // Promo card P005
    {
      gameBox: GameBox.Exploration,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Pewter,
      count: 1,
    },
  ],
});

export default blueprint;
