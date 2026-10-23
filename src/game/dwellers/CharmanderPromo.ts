import { countCardNames, scoreByCount } from "../scoring/helpers";
import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";
import Diglett from "./Diglett";
import DiglettAlola from "./DiglettAlola";

const name = "CHARMANDER_PROMO";
const gameBox = GameBox.PromoCards;
const pointsByCount = {
  1: 0,
  2: 3,
  3: 6,
  4: 12,
  5: 20
};

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.PawedAnimal],
  cost: 1,
  isPartOfDeck: true,
  variants: [
    {
      gameBox,
      position: DwellerPosition.Right,
      treeSymbol: TreeSymbol.Cerulean,
      count: 1,
    },
  ],
  score: ({ forest }) => {
      const diglettCount = countCardNames(forest, [Diglett.name]);
      return scoreByCount(diglettCount, pointsByCount);
    },
};

export default blueprint;
