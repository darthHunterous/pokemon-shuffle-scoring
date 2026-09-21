import { describe, expect, it } from "@jest/globals";

import { Pichu } from "@/game/dwellers";

import {
  createAnyDweller,
  createCompleteForestWithDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Pichu card", () => {
  it("scores 1 point in an empty forest", () => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Pichu),
    });
    const game = createGame(forest);

    const points = Pichu.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(1);
  });

  it("scores 1 point in a complete forest", () => {
    const { dweller, woodyPlant, forest } = createCompleteForestWithDweller({
      dwellerUnderTest: createAnyDweller(Pichu),
    });
    const game = createGame(forest);

    const points = Pichu.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(1);
  });
});
