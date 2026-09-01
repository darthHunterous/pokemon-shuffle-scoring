import { DiglettAlola } from "@/game/dwellers";

import { countCardNames } from "../scoring/helpers";
import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "DIGLETT";
const gameBox = GameBox.Base;
const pointsPerCard = 1;

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.PawedAnimal],
  modifiers: {
    enablesSlotSharing: ({ dweller }) => ({
      position: dweller.position,
      name,
    }),
  },
  cost: 0,
  isPartOfDeck: true,
  variants: [
    {
      gameBox,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Fuchsia,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Cinnabar,
      count: 2,
    },
    {
      gameBox,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Vermilion,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.SilverFir,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Pewter,
      count: 1,
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
      treeSymbol: TreeSymbol.SilverFir,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Right,
      treeSymbol: TreeSymbol.Vermilion,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Right,
      treeSymbol: TreeSymbol.Celadon,
      count: 2,
    },
    // Promo card P003
    {
      gameBox: GameBox.PromoCards,
      position: DwellerPosition.Right,
      treeSymbol: TreeSymbol.Cerulean,
      count: 1,
    },
  ],
  score: ({ forest }) =>
    countCardNames(forest, [name, DiglettAlola.name]) * pointsPerCard,
};

export default blueprint;
