import { describe, expect, it } from "@jest/globals";

import { Rhyhorn, Voltorb } from "@/game/dwellers";

import {
  createAllDwellers,
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Rhyhorn card", () => {
  it.each([
    [0, 0],
    [10, 1],
    [10, 2],
  ])(
    "scores %i points if there are %i Voltorb cards",
    (expectedPoints, count) => {
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(Rhyhorn),
        otherDwellers: createAllDwellers(Voltorb).slice(0, count),
      });
      const game = createGame(forest);

      const points = Rhyhorn.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
