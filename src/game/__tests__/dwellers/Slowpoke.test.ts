import { describe, expect, it } from "@jest/globals";

import { Slowpoke } from "@/game/dwellers";

import {
  createAnyDweller,
  createCompleteForestWithDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Slowpoke card", () => {
  it("scores no points in an empty forest", () => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Slowpoke),
    });
    const game = createGame(forest);

    const points = Slowpoke.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(0);
  });

  it("scores no points in a complete forest", () => {
    const { dweller, woodyPlant, forest } = createCompleteForestWithDweller({
      dwellerUnderTest: createAnyDweller(Slowpoke),
    });
    const game = createGame(forest);

    const points = Slowpoke.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(0);
  });
});
