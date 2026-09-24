import { describe, expect, it } from "@jest/globals";

import { GigantamaxLapras } from "@/game/dwellers";

import {
  createAllDwellers,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Gigantamax Lapras card", () => {
  it.each([
    [5, 1],
    [15, 2],
    [25, 3],
  ])(
    "scores %i points if there are %i Gigantamax Lapras cards",
    (expectedPoints, count) => {
      const allDwellers = createAllDwellers(GigantamaxLapras);
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: allDwellers[0],
        otherDwellers: allDwellers.slice(1, count),
      });
      const game = createGame(forest);

      const points = GigantamaxLapras.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );

  it("scores 0 points if there's another Gigantamax Lapras card with a smaller id", () => {
    const [dwellerUnderTest, ...otherDwellers] =
      createAllDwellers(GigantamaxLapras).reverse();
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest,
      otherDwellers,
    });
    const game = createGame(forest);

    const points = GigantamaxLapras.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(0);
  });
});
