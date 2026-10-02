import { describe, expect, it } from "@jest/globals";

import { CardType, DwellerPosition } from "@/game";
import { Lugia } from "@/game/dwellers";

import { createFakeDwellers } from "../fake";
import {
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Lugia card", () => {
  it.each([
    [0, 0],
    [1, 1],
    [2, 2],
    [5, 5],
  ])("scores %i points for %i insect cards", (expectedPoints, insectCount) => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Lugia),
      otherDwellers: createFakeDwellers(insectCount, DwellerPosition.Bottom, {
        types: [CardType.Insect],
      }),
    });
    const game = createGame(forest);

    const points = Lugia.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(expectedPoints);
  });
});
