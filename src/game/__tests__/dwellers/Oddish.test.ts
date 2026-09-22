import { describe, expect, it } from "@jest/globals";

import { CardType, DwellerPosition } from "@/game";
import { Oddish } from "@/game/dwellers";

import { createFakeDwellers } from "../fake";
import {
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("An Oddish card", () => {
  it.each([
    [0, 0],
    [6, 1],
    [18, 3],
  ])(
    "scores %i points if there are %i amphibian cards",
    (expectedPoints, count) => {
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(Oddish),
        otherDwellers: createFakeDwellers(count, DwellerPosition.Bottom, {
          types: [CardType.Amphibian],
        }),
      });
      const game = createGame(forest);

      const points = Oddish.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
