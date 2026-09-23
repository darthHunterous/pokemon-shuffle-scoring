import { describe, expect, it } from "@jest/globals";

import { Totodile } from "@/game/dwellers";
import { CardType, DwellerPosition } from "@/game/types";

import { createFakeDwellers } from "../fake";
import {
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("An Totodile card", () => {
  it.each([
    [0, 0],
    [2, 1],
    [4, 2],
    [10, 5],
  ])("scores %i points for %i insect cards", (expectedPoints, plantCount) => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Totodile),
      otherDwellers: createFakeDwellers(plantCount, DwellerPosition.Bottom, {
        types: [CardType.Insect],
      }),
    });
    const game = createGame(forest);

    const points = Totodile.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(expectedPoints);
  });
});
