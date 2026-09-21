import { describe, expect, it } from "@jest/globals";

import { Gnat, Psyduck } from "@/game/dwellers";

import {
  createAllDwellers,
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Psyduck card", () => {
  it.each([
    [0, 0],
    [5, 1],
    [15, 3],
  ])("scores %i points if there are %i Gnat cards", (expectedPoints, count) => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Psyduck),
      otherDwellers: createAllDwellers(Gnat).slice(0, count),
    });
    const game = createGame(forest);

    const points = Psyduck.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(expectedPoints);
  });
});
