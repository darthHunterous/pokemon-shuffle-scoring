import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "SANDSHREW_ALOLA";
const points = 2;

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.PawedAnimal],
  cost: 1,
  isPartOfDeck: true,
  variants: [
    // Promo card P009
    {
      gameBox: GameBox.Exploration,
      position: DwellerPosition.Right,
      treeSymbol: TreeSymbol.Fuchsia,
      count: 1,
    },
  ],
  score: () => points,
};

export default blueprint;
