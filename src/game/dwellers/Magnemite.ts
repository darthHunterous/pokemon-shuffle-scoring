import { countCardTypes } from "../scoring/helpers";
import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "MAGNEMITE";
const gameBox = GameBox.Base;
const pointsPerElectricalPokemon = 3;

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.ElectricalPokemon, CardType.Normal],
  cost: 2,
  isPartOfDeck: true,
  variants: [
    {
      gameBox,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Vermilion,
      count: 2,
    },
    {
      gameBox,
      position: DwellerPosition.Right,
      treeSymbol: TreeSymbol.Cinnabar,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Right,
      treeSymbol: TreeSymbol.Celadon,
      count: 1,
    },
  ],
  score: ({ forest }) =>
    countCardTypes(forest, [CardType.ElectricalPokemon]) *
    pointsPerElectricalPokemon,
};

export default blueprint;
