import { describe, expect, it } from "@jest/globals";

import { Onix } from "@/game/dwellers";

import { CardType, DwellerPosition } from "../..";
import { createFakeDwellers } from "../fake";
import {
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Onix card", () => {
  it.each([
    [0, 0],
    [5, 1],
    [25, 5],
  ])("scores %i points if there are %i normal cards", (expectedPoints, count) => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Onix),
      otherDwellers: createFakeDwellers(count, DwellerPosition.Left, {
        types: [CardType.Normal],
      }),
    });
    const game = createGame(forest);

    const points = Onix.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(expectedPoints);
  });
});
