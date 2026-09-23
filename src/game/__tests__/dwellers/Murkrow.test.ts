import { describe, expect, it } from "@jest/globals";

import { RegularCave } from "@/game/caves";
import { Murkrow } from "@/game/dwellers";
import { createCave } from "@/game/factory";

import {
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Murkrow card", () => {
  it.each([
    [0, 0],
    [1, 1],
    [2, 2],
    [5, 5],
  ])("scores %i points with %i cave cards", (expectedPoints, caveCardCount) => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Murkrow),
      cave: createCave(RegularCave, caveCardCount),
    });
    const game = createGame(forest);

    const points = Murkrow.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(expectedPoints);
  });
});
