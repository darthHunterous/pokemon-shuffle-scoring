import Diglett from "./Diglett";
import { extendBlueprint } from "../blueprints";

import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "DIGLETT_ALOLA";
const gameBox = GameBox.Alpine;

const blueprint: DwellerCardBlueprint = extendBlueprint(Diglett, {
  name,
  types: [CardType.Alps, CardType.PawedAnimal],
  variants: [
    {
      gameBox,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Goldenrod,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Viridian,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Right,
      treeSymbol: TreeSymbol.SwissPine,
      count: 1,
    },
  ],
});

export default blueprint;
