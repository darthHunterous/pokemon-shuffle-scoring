import { countCardTypes } from "@/game/scoring/helpers";

import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "SHEEP";
const pointsPerElectricalPokemon = 3;

// Promo card P022
const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.ElectricalPokemon],
  cost: 2,
  isPartOfDeck: true,
  variants: [
    {
      gameBox: GameBox.PromoCards,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Cinnabar,
      count: 1,
    },
  ],
  score: ({ forest }) =>
    countCardTypes(forest, [CardType.ElectricalPokemon]) *
    pointsPerElectricalPokemon,
};

export default blueprint;
