import { extendBlueprint } from "../blueprints";
import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";
import Volbeat from "./Volbeat";

const name = "ILLUMISE";

// Promo card P008
const blueprint: DwellerCardBlueprint = extendBlueprint(Volbeat, {
  name,
  types: [CardType.Insect, CardType.WoodlandEdge],
  variants: [
    {
      gameBox: GameBox.Exploration,
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.Vermilion,
      count: 1,
    },
    {
      gameBox: GameBox.PromoCards,
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.Vermilion,
      count: 1,
    },
  ],
});

export default blueprint;
