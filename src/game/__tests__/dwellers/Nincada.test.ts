import { describe, expect, it } from "@jest/globals";

import { createFakeDwellers } from "@/game/__tests__/fake";
import { Nincada } from "@/game/dwellers";
import { CardType, DwellerPosition } from "@/game/types";

import {
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Nincada card", () => {
  it.each([
    [0, 0],
    [1, 1],
    [2, 2],
    [5, 5],
  ])("scores %i points for %i bat cards", (expectedPoints, batCount) => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Nincada),
      otherDwellers: createFakeDwellers(batCount, DwellerPosition.Left, {
        types: [CardType.Bat],
      }),
    });
    const game = createGame(forest);

    const points = Nincada.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(expectedPoints);
  });
});
