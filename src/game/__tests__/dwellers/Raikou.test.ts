import { describe, expect, it } from "@jest/globals";

import { Raikou } from "@/game/dwellers";

import {
  createAnyDweller,
  createCompleteForestWithDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Raikou card", () => {
  it("scores 10 points in an empty forest", () => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Raikou),
    });
    const game = createGame(forest);

    const points = Raikou.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(10);
  });

  it("scores 10 points in a complete forest", () => {
    const { dweller, woodyPlant, forest } = createCompleteForestWithDweller({
      dwellerUnderTest: createAnyDweller(Raikou),
    });
    const game = createGame(forest);

    const points = Raikou.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(10);
  });
});
