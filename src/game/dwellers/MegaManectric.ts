import { countTreeSymbols } from "../scoring/helpers";
import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "MEGA_MANECTRIC";
const pointsPerFuchsiaOrPewter = 2;

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.ElectricalPokemon, CardType.WoodlandEdge],
  cost: 3,
  isPartOfDeck: true,
  variants: [
    // Promo card P007
    {
      gameBox: GameBox.Exploration,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Fuchsia,
      count: 1,
    },
  ],
  score: ({ forest }) =>
    countTreeSymbols(forest, [TreeSymbol.Fuchsia, TreeSymbol.Pewter]) *
    pointsPerFuchsiaOrPewter,
};

export default blueprint;
