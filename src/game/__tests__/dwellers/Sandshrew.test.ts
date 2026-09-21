import { describe, expect, it } from "@jest/globals";

import { Sandshrew } from "@/game/dwellers";

import {
  createAnyDweller,
  createCompleteForestWithDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Sandshrew card", () => {
  it("scores 2 points in an empty forest", () => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Sandshrew),
    });
    const game = createGame(forest);

    const points = Sandshrew.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(2);
  });

  it("scores 2 points in a complete forest", () => {
    const { dweller, woodyPlant, forest } = createCompleteForestWithDweller({
      dwellerUnderTest: createAnyDweller(Sandshrew),
    });
    const game = createGame(forest);

    const points = Sandshrew.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(2);
  });
});
