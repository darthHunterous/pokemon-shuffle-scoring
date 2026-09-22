import { describe, expect, it } from "@jest/globals";

import { CardType, DwellerPosition } from "@/game";
import { Surskit } from "@/game/dwellers";

import { createFakeDwellers } from "../fake";
import {
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Surskit card", () => {
  it.each([
    [1, 0],
    [2, 1],
    [3, 2],
    [6, 5],
  ])(
    "scores %i points for %i other insect cards",
    (expectedPoints, insectCount) => {
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(Surskit),
        otherDwellers: createFakeDwellers(insectCount, DwellerPosition.Bottom, {
          types: [CardType.Insect],
        }),
      });
      const game = createGame(forest);

      const points = Surskit.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
