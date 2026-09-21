import { countCardNames } from "../scoring/helpers";
import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";
import Pichu from "./Pichu";

const name = "FEMALE_WILD_BOAR";
const gameBox = GameBox.WoodlandEdge;
const pointsPerPichu = 10;

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.ElectricalPokemon, CardType.WoodlandEdge],
  cost: 2,
  isPartOfDeck: true,
  variants: [
    {
      gameBox,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Cinnabar,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Right,
      treeSymbol: TreeSymbol.Celadon,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.SilverFir,
      count: 1,
    },
  ],
  score: ({ forest }) =>
    countCardNames(forest, [Pichu.name]) * pointsPerPichu,
};

export default blueprint;
