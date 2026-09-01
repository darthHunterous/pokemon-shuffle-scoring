import { describe, expect, it } from "@jest/globals";

import { Farfetchd } from "@/game/dwellers";

import {
  createAnyDweller,
  createCompleteForestWithDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A European Badger card", () => {
  it("scores 3 points in an empty forest", () => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Farfetchd),
    });
    const game = createGame(forest);

    const points = Farfetchd.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(3);
  });

  it("scores 3 points in a complete forest", () => {
    const { dweller, woodyPlant, forest } = createCompleteForestWithDweller({
      dwellerUnderTest: createAnyDweller(Farfetchd),
    });
    const game = createGame(forest);

    const points = Farfetchd.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(3);
  });
});
