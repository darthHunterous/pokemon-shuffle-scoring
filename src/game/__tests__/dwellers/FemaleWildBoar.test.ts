import { describe, expect, it } from "@jest/globals";

import { FemaleWildBoar, Pichu } from "@/game/dwellers";

import {
  createAllDwellers,
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Female Wild Boar card", () => {
  it.each([
    [0, 0],
    [10, 1],
    [20, 2],
  ])(
    "scores %i points if there are %i Pichu cards",
    (expectedPoints, count) => {
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(FemaleWildBoar),
        otherDwellers: createAllDwellers(Pichu).slice(0, count),
      });
      const game = createGame(forest);

      const points = FemaleWildBoar.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
