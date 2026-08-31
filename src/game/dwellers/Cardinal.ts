import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "CARDINAL";
const points = 5;

// Promo card P008
const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.Bird, CardType.WoodlandEdge],
  cost: 1,
  isPartOfDeck: true,
  variants: [
    {
      gameBox: GameBox.Exploration,
      position: DwellerPosition.Top,
      treeSymbol: TreeSymbol.Celadon,
      count: 1,
    },
    {
      gameBox: GameBox.PromoCards,
      position: DwellerPosition.Top,
      treeSymbol: TreeSymbol.Celadon,
      count: 1,
    },
  ],
  score: () => points,
};

export default blueprint;
