import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "INFATUATED_BULBASAUR";
const gameBox = GameBox.PromoCards;
const points = 2;

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.Plant],
  cost: 1,
  isPartOfDeck: true,
  variants: [
    {
      gameBox,
      position: DwellerPosition.Bottom,
      treeSymbol: TreeSymbol.Vermilion,
      count: 1,
    },
  ],
  score: () => points,
};

export default blueprint;
