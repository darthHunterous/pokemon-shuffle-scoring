import { describe, expect, it } from "@jest/globals";

import { Scyther } from "@/game/dwellers";
import { CardType, DwellerPosition } from "@/game/types";

import { createFakeDwellers } from "../fake";
import {
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Scyther card", () => {
  it.each([
    [0, 0],
    [1, 1],
    [5, 5],
  ])("scores %i points if there are %i bat cards", (expectedPoints, count) => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Scyther),
      otherDwellers: createFakeDwellers(count, DwellerPosition.Left, {
        types: [CardType.Bat],
      }),
    });
    const game = createGame(forest);

    const points = Scyther.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(expectedPoints);
  });
});
