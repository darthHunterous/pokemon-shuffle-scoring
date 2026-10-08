import { describe, expect, it } from "@jest/globals";

import { Charizard } from "@/game/dwellers";
import { CardType, DwellerPosition } from "@/game/types";

import { createFakeDweller, createFakeWoodyPlant } from "../fake";
import {
  addDwellersToWoodyPlant,
  createAnyDweller,
  createForestWith,
  createGame,
} from "../helpers";

describe("A Charizard card", () => {
  it.each([
    [7, null],
    [0, CardType.ElectricalPokemon],
    [0, CardType.PawedAnimal],
  ])(
    "scores %i points when the woody plant has %p",
    (expectedPoints, cardType) => {
      const dweller = createAnyDweller(Charizard);

      let dwellers = [dweller];

      if (cardType) {
        const otherDweller = createFakeDweller(DwellerPosition.Right, {
          types: [cardType],
        });

        dwellers = [...dwellers, otherDweller];
      }

      const woodyPlant = addDwellersToWoodyPlant(
        createFakeWoodyPlant(),
        ...dwellers,
      );

      const forest = createForestWith({ woodyPlants: [woodyPlant] });
      const game = createGame(forest);

      const points = Charizard.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );

  it("scores 7 points if the woody plant has no Deer or PawedAnimal", () => {
    const dweller = createAnyDweller(Charizard);

    const otherDweller = createFakeDweller(DwellerPosition.Right, {
        types: [CardType.Amphibian],
    });

    const woodyPlant = addDwellersToWoodyPlant(
        createFakeWoodyPlant(),
        dweller,
        otherDweller,
    );

    const forest = createForestWith({ woodyPlants: [woodyPlant] });
    const game = createGame(forest);

    const points = Charizard.score({
        game,
        forest,
        woodyPlant,
        dweller,
    });

    expect(points).toBe(7);
  });

  it("scores 0 points if the woody plant has both Deer and PawedAnimal", () => {
    const dweller = createAnyDweller(Charizard);

    const deer = createFakeDweller(DwellerPosition.Right, {
        types: [CardType.ElectricalPokemon],
    });

    const pawedAnimal = createFakeDweller(DwellerPosition.Left, {
        types: [CardType.PawedAnimal],
    });

    const woodyPlant = addDwellersToWoodyPlant(
        createFakeWoodyPlant(),
        dweller,
        deer,
        pawedAnimal,
    );

    const forest = createForestWith({ woodyPlants: [woodyPlant] });
    const game = createGame(forest);

    const points = Charizard.score({
        game,
        forest,
        woodyPlant,
        dweller,
    });

    expect(points).toBe(0);
  });

  it("scores 0 points if on a shrub", () => {
    const dweller = createAnyDweller(Charizard);

    const woodyPlant = addDwellersToWoodyPlant(
        createFakeWoodyPlant({ types: [CardType.Shrub] }),
        dweller,
    );

    const forest = createForestWith({ woodyPlants: [woodyPlant] });
    const game = createGame(forest);

    const points = Charizard.score({
        game,
        forest,
        woodyPlant,
        dweller,
    });

    expect(points).toBe(0);
  });
});
