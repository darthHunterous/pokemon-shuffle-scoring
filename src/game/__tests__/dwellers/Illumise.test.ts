import { describe, expect, it } from "@jest/globals";

import { Volbeat, Illumise } from "@/game/dwellers";

import {
  createAllDwellers,
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("An Illumise card", () => {
  it.each([
    [0, 1, 0],
    [10, 2, 0],
    [15, 3, 0],
    [20, 4, 0],
    [10, 1, 1],
    [20, 4, 1],
  ])(
    "scores %i points if there are %i Volbeat and %i Illumise cards",
    (expectedPoints, volbeatCount, illumiseCount) => {
      const allVolbeat = createAllDwellers(Volbeat);
      const allIllumises = createAllDwellers(Illumise);
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: {
          ...allIllumises[0],
          id: "00000000-0000-0000-0000-000000000000",
        },
        otherDwellers: [
          ...allVolbeat.slice(1, volbeatCount),
          ...allIllumises.slice(0, illumiseCount),
        ],
      });
      const game = createGame(forest);

      const points = Illumise.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );

  it.each([
    [Volbeat.name, Volbeat],
    [Illumise.name, Illumise],
  ])(
    "scores 0 points if there's another %s card with a smaller id",
    (_, otherBlueprint) => {
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: {
          ...createAnyDweller(Illumise),
          id: "ffffffff-fff-ffff-ffff-ffffffffffff",
        },
        otherDwellers: [createAnyDweller(otherBlueprint)],
      });
      const game = createGame(forest);

      const points = Illumise.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(0);
    },
  );
});
