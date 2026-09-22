import { describe, expect, it } from "@jest/globals";

import { Chikorita } from "@/game/dwellers";

import {
  createAnyDweller,
  createCompleteForestWithDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Chikorita card", () => {
  it("scores 3 points in an empty forest", () => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Chikorita),
    });
    const game = createGame(forest);

    const points = Chikorita.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(3);
  });

  it("scores 3 points in a complete forest", () => {
    const { dweller, woodyPlant, forest } = createCompleteForestWithDweller({
      dwellerUnderTest: createAnyDweller(Chikorita),
    });
    const game = createGame(forest);

    const points = Chikorita.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(3);
  });
});
