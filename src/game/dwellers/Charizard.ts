import {
  CardType,
  DwellerCardBlueprint,
  DwellerPosition,
  GameBox,
  TreeSymbol,
} from "../types";

const name = "CHARIZARD";
const gameBox = GameBox.PromoCards;
const pointsIfElectricAndGroundAbsent = 7;

const blueprint: DwellerCardBlueprint = {
  name,
  types: [CardType.Bird],
  cost: 2,
  isPartOfDeck: true,
  variants: [
    {
      gameBox,
      position: DwellerPosition.Left,
      treeSymbol: TreeSymbol.Fuchsia,
      count: 1,
    },
  ],
  score: ({ woodyPlant }) => {
    if (!woodyPlant.types.includes(CardType.Tree)) {
      return 0;
    }

    const allDwellers = Object.values(woodyPlant.dwellers).flat();
  
    const hasForbiddenTypes = allDwellers.some(
      (c) =>
        c.types.includes(CardType.ElectricalPokemon) ||
        c.types.includes(CardType.PawedAnimal)
    );

    return hasForbiddenTypes ? 0 : pointsIfElectricAndGroundAbsent;
  },
};

export default blueprint;
