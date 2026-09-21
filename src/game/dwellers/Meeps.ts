import { extendBlueprint } from "../blueprints";
import {
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";
import EuropeanWildcat from "./EuropeanWildcat";

const name = "MEEPS";

// Promo card P013
const blueprint: DwellerCardBlueprint = extendBlueprint(EuropeanWildcat, {
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
