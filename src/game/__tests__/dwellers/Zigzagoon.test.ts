import { describe, expect, it } from "@jest/globals";

import { CardType, DwellerPosition } from "@/game";
import { Zigzagoon } from "@/game/dwellers";

import { createFakeDwellers } from "../fake";
import {
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Zigzagoon card", () => {
  it.each([
    [1, 0],
    [2, 1],
    [3, 2],
    [6, 5],
  ])(
    "scores %i points for %i other woodland edge cards",
    (expectedPoints, woodlandEdgeCount) => {
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(Zigzagoon),
        otherDwellers: createFakeDwellers(
          woodlandEdgeCount,
          DwellerPosition.Bottom,
          { types: [CardType.WoodlandEdge] },
        ),
      });
      const game = createGame(forest);

      const points = Zigzagoon.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
