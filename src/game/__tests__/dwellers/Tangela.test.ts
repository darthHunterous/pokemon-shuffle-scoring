import { describe, expect, it } from "@jest/globals";

import { Tangela } from "@/game/dwellers";
import { DwellerPosition } from "@/game/types";
import { Sapling } from "@/game/woody-plants";

import { createFakeDweller, createFakeWoodyPlants } from "../fake";
import {
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
  createWoodyPlants,
} from "../helpers";

describe("A Tangela card", () => {
  it.each([
    [0, 1],
    [0, 9],
    [10, 10],
    [10, 20],
  ])(
    "scores %i points if forest has at least %i trees",
    (expectedPoints, count) => {
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(Tangela),
        otherWoodyPlants: createFakeWoodyPlants(count),
      });
      const game = createGame(forest);

      const points = Tangela.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );

  it("takes into account Sapling cards when scoring", () => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Tangela),
      otherWoodyPlants: createWoodyPlants(Sapling, 10),
    });
    const game = createGame(forest);

    const points = Tangela.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(10);
  });

  it("takes into account cards increasing the tree count when scoring", () => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Tangela),
      otherDwellers: [
        createFakeDweller(DwellerPosition.Left, {
          modifiers: {
            woodyPlantCount: () => 1,
          },
        }),
      ],
      otherWoodyPlants: createFakeWoodyPlants(9),
    });
    const game = createGame(forest);

    const points = Tangela.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(10);
  });
});
