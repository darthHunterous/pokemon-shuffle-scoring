import { describe, expect, it } from "@jest/globals";

import { Snorlax } from "@/game/dwellers";

import {
  createAnyDweller,
  createCompleteForestWithDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Snorlax card", () => {
  it("scores no points in an empty forest", () => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Snorlax),
    });
    const game = createGame(forest);

    const points = Snorlax.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(0);
  });

  it("scores no points in a complete forest", () => {
    const { dweller, woodyPlant, forest } = createCompleteForestWithDweller({
      dwellerUnderTest: createAnyDweller(Snorlax),
    });
    const game = createGame(forest);

    const points = Snorlax.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(0);
  });
});
