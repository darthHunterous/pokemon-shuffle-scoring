import { Diglett } from "@/game/dwellers";
import { extendBlueprint } from "../blueprints";

import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "DUGTRIO_ALOLA";
const gameBox = GameBox.PromoCards;

const blueprint: DwellerCardBlueprint = extendBlueprint(Diglett, {
  name,
  variants: [
    {
      gameBox,
      position: DwellerPosition.Right,
      treeSymbol: TreeSymbol.Cerulean,
      count: 1,
    },
  ],
});

export default blueprint;
