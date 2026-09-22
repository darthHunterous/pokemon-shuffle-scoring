import { describe, expect, it } from "@jest/globals";

import { Hoppip } from "@/game/dwellers";
import { CardType, DwellerPosition } from "@/game/types";

import { createFakeDwellers } from "../fake";
import {
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Hoppip card", () => {
  it.each([
    [0, 0],
    [1, 1],
    [2, 2],
    [5, 5],
  ])("scores %i points for %i plant cards", (expectedPoints, plantCount) => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Hoppip),
      otherDwellers: createFakeDwellers(plantCount, DwellerPosition.Bottom, {
        types: [CardType.Plant],
      }),
    });
    const game = createGame(forest);

    const points = Hoppip.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(expectedPoints);
  });
});
