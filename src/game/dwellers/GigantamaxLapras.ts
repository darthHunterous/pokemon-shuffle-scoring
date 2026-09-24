import { scoreSet } from "../scoring/helpers";
import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "GIGANTAMAX_LAPRAS";
const pointsByCount = {
  1: 5,
  2: 15,
  3: 25,
};

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.Amphibian],
  cost: 1,
  isPartOfDeck: true,
  variants: [
    // Promo card P002
    {
      gameBox: GameBox.Exploration,
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.Fuchsia,
      count: 1,
    },
  ],
  score: ({ forest, dweller }) => scoreSet(forest, dweller, pointsByCount),
};

export default blueprint;
