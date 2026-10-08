import { describe, expect, it } from "@jest/globals";

import { InfatuatedBulbasaur } from "@/game/dwellers";

import {
  createAnyDweller,
  createCompleteForestWithDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("An Infatuated Bulbasaur card", () => {
  it("scores 2 points in an empty forest", () => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(InfatuatedBulbasaur),
    });
    const game = createGame(forest);

    const points = InfatuatedBulbasaur.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(2);
  });

  it("scores 2 points in a complete forest", () => {
    const { dweller, woodyPlant, forest } = createCompleteForestWithDweller({
      dwellerUnderTest: createAnyDweller(InfatuatedBulbasaur),
    });
    const game = createGame(forest);

    const points = InfatuatedBulbasaur.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(2);
  });
});
