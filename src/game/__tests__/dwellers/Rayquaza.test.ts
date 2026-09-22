import { describe, expect, it } from "@jest/globals";

import { createFakeDwellers } from "@/game/__tests__/fake";
import { Rayquaza } from "@/game/dwellers";
import { CardType, DwellerPosition } from "@/game/types";

import {
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Rayquaza card", () => {
  it.each([
    [0, 0],
    [3, 1],
    [6, 2],
    [15, 5],
  ])("scores %i points for %i bat cards", (expectedPoints, batCount) => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Rayquaza),
      otherDwellers: createFakeDwellers(batCount, DwellerPosition.Left, {
        types: [CardType.Bat],
      }),
    });
    const game = createGame(forest);

    const points = Rayquaza.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(expectedPoints);
  });
});
