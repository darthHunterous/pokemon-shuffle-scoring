import { extendBlueprint } from "../blueprints";
import { GameBox, TreeSymbol, WoodyPlantCardBlueprint } from "../types";
import Cinnabar from "./Cinnabar";

const name = "LAVARIDGE";

// Promo card P001
const blueprint: WoodyPlantCardBlueprint = extendBlueprint(Cinnabar, {
  name,
  variants: [
    {
      gameBox: GameBox.Exploration,
      treeSymbol: TreeSymbol.Cinnabar,
      count: 1,
    },
    {
      gameBox: GameBox.PromoCards,
      treeSymbol: TreeSymbol.Cinnabar,
      count: 1,
    },
  ],
});

export default blueprint;
