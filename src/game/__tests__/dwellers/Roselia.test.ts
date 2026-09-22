import { describe, expect, it } from "@jest/globals";

import { createFakeDwellers } from "@/game/__tests__/fake";
import { Roselia } from "@/game/dwellers";
import { CardType, DwellerPosition } from "@/game/types";

import {
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Roselia card", () => {
  it.each([
    [0, 0],
    [2, 1],
    [4, 2],
    [10, 5],
  ])(
    "scores %i points for %i butterfly cards",
    (expectedPoints, butterflyCount) => {
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(Roselia),
        otherDwellers: createFakeDwellers(butterflyCount, DwellerPosition.Top, {
          types: [CardType.Butterfly],
        }),
      });
      const game = createGame(forest);

      const points = Roselia.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
