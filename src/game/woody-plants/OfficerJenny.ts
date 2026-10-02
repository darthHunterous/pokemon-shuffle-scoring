import { extendBlueprint } from "../blueprints";
import { GameBox, TreeSymbol, WoodyPlantCardBlueprint } from "../types";
import Viridian from "./Viridian";

const name = "OFFICER_JENNY";

// Promo card P015
const blueprint: WoodyPlantCardBlueprint = extendBlueprint(Viridian, {
  name,
  variants: [
    {
      gameBox: GameBox.Exploration,
      treeSymbol: TreeSymbol.Viridian,
      count: 1,
    },
    {
      gameBox: GameBox.PromoCards,
      treeSymbol: TreeSymbol.Viridian,
      count: 1,
    },
  ],
});

export default blueprint;
