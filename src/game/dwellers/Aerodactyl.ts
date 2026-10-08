import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "AERODACTYL";
const gameBox = GameBox.PromoCards;
const points = 3;

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.Bird],
  cost: 1,
  isPartOfDeck: true,
  variants: [
    {
      gameBox,
      position: DwellerPosition.Top,
      treeSymbol: TreeSymbol.Pewter,
      count: 1,
    },
  ],
  score: () => points,
};

export default blueprint;
