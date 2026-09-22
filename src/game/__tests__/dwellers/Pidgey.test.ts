import { describe, expect, it } from "@jest/globals";

import { Pidgey } from "@/game/dwellers";

import { CardType, DwellerPosition } from "../..";
import { createFakeDwellers } from "../fake";
import {
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Pidgey card", () => {
  it.each([
    [0, 0],
    [2, 1],
    [10, 5],
  ])(
    "scores %i points if there are %i insect cards",
    (expectedPoints, count) => {
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(Pidgey),
        otherDwellers: createFakeDwellers(count, DwellerPosition.Top, {
          types: [CardType.Insect],
        }),
      });
      const game = createGame(forest);

      const points = Pidgey.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
