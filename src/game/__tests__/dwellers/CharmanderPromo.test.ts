import { describe, expect, it } from "@jest/globals";

import { CharmanderPromo, Diglett } from "@/game/dwellers";

import {
  createAllDwellers,
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Charmander Promo card", () => {
  it.each([
    [0, 0],
    [0, 1],
    [3, 2],
    [6, 3],
    [12, 4],
    [20, 5]
  ])("scores %i points if there are %i Digletts",
    (expectedPoints, count) => {
      const allDwellers = createAllDwellers(Diglett);
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(CharmanderPromo),
        otherDwellers: allDwellers.slice(0, count),
      });
      const game = createGame(forest);

      const points = CharmanderPromo.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
