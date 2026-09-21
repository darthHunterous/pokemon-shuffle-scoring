import { describe, expect, it } from "@jest/globals";

import { Pichu, Pikachu } from "@/game/dwellers";

import {
  createAllDwellers,
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Pikachu card", () => {
  it.each([
    [0, 0],
    [10, 1],
    [10, 2],
  ])(
    "scores %i points if there are %i Pichu cards",
    (expectedPoints, count) => {
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(Pikachu),
        otherDwellers: createAllDwellers(Pichu).slice(0, count),
      });
      const game = createGame(forest);

      const points = Pikachu.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
