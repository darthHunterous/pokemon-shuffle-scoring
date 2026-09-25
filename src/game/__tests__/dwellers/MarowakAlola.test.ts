import { describe, expect, it } from "@jest/globals";

import { Marowak Alola } from "@/game/dwellers";

import {
  createAnyDweller,
  createCompleteForestWithDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Marowak Alola card", () => {
  it("scores 5 points in an empty forest", () => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Marowak Alola),
    });
    const game = createGame(forest);

    const points = Marowak Alola.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(5);
  });

  it("scores 5 points in a complete forest", () => {
    const { dweller, woodyPlant, forest } = createCompleteForestWithDweller({
      dwellerUnderTest: createAnyDweller(Marowak Alola),
    });
    const game = createGame(forest);

    const points = Marowak Alola.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(5);
  });
});
