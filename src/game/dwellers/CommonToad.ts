import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "COMMON_TOAD";
const gameBox = GameBox.Base;
const pointsIfPaired = 5;

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.Amphibian],
  modifiers: {
    enablesSlotSharing: () => ({
      position: DwellerPosition.Bottom,
      name,
      maxCards: 2,
    }),
  },
  cost: 0,
  isPartOfDeck: true,
  variants: [
    {
      gameBox,
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.Fuchsia,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.DouglasFir,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.HorseChestnut,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.Pewter,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.SilverFir,
      count: 1,
    },
    {
      gameBox,
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.Celadon,
      count: 1,
    },
  ],
  score: ({ woodyPlant }) => {
    const bottomDwellers = woodyPlant.dwellers[DwellerPosition.Bottom];
    return bottomDwellers.filter((c) => c.name === name).length > 1
      ? pointsIfPaired
      : 0;
  },
};

export default blueprint;
