import { describe, expect, it } from "@jest/globals";

import { Durant } from "@/game/dwellers";

import { CardType, DwellerPosition } from "../..";
import {
  createFakeDweller,
  createFakeDwellers,
  createFakeWoodyPlant,
} from "../fake";
import {
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Durant card", () => {
  it.each([
    [2, 0],
    [4, 1],
    [12, 5],
  ])(
    "scores %i points if there are %i other cards in any bottom slot",
    (expectedPoints, count) => {
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(Durant),
        otherDwellers: [
          createFakeDweller(DwellerPosition.Top),
          createFakeDweller(DwellerPosition.Left),
          createFakeDweller(DwellerPosition.Right),
          ...createFakeDwellers(count, DwellerPosition.Bottom),
        ],
      });
      const game = createGame(forest);

      const points = Durant.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );

  it("ignores cards on shrubs", () => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Durant),
      woodyPlantUnderTest: createFakeWoodyPlant({ types: [CardType.Shrub] }),
    });
    const game = createGame(forest);

    const points = Durant.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(0);
  });
});
