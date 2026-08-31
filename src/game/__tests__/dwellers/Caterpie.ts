import { describe, expect, it } from "@jest/globals";

import { Caterpie } from "@/game/dwellers";

import {
  createAnyDweller,
  createCompleteForestWithDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Caterpie card", () => {
  it("scores 0 points in an empty forest", () => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Caterpie),
    });
    const game = createGame(forest);

    const points = Caterpie.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(0);
  });

  it("scores 0 points in a complete forest", () => {
    const { dweller, woodyPlant, forest } = createCompleteForestWithDweller({
      dwellerUnderTest: createAnyDweller(Caterpie),
    });
    const game = createGame(forest);

    const points = Caterpie.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(0);
  });
});
