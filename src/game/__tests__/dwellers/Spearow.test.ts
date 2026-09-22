import { describe, expect, it } from "@jest/globals";

import { Spearow } from "@/game/dwellers";
import { CardType, DwellerPosition } from "@/game/types";

import { createFakeDwellers } from "../fake";
import {
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Spearow card", () => {
  it.each([
    [3, 0],
    [6, 1],
    [18, 5],
  ])(
    "scores %i points if there are %i other bird cards",
    (expectedPoints, count) => {
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(Spearow),
        otherDwellers: createFakeDwellers(count, DwellerPosition.Top, {
          types: [CardType.Bird],
        }),
      });
      const game = createGame(forest);

      const points = Spearow.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
