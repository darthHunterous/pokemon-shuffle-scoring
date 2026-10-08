import { describe, expect, it } from "@jest/globals";

import { Scovillain } from "@/game/dwellers";
import { CardType } from "@/game/types";
import { Sapling } from "@/game/woody-plants";

import { createFakeWoodyPlants } from "../fake";
import {
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
  createWoodyPlants,
} from "../helpers";

describe("A Scovillain card", () => {
  it.each([
    [15, 1],
    [7, 6],
    [3, 11],
  ])("scores %i points if there are %i trees", (expectedPoints, count) => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Scovillain),
      otherWoodyPlants: createFakeWoodyPlants(count),
    });
    const game = createGame(forest);

    const points = Scovillain.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(expectedPoints);
  });

  it("considers Saplings for scoring", () => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Scovillain),
      otherWoodyPlants: createWoodyPlants(Sapling, 15),
    });
    const game = createGame(forest);

    const points = Scovillain.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(3);
  });

  it("ignores shrubs for scoring", () => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Scovillain),
      otherWoodyPlants: createFakeWoodyPlants(15, {
        types: [CardType.Shrub],
      }),
    });
    const game = createGame(forest);

    const points = Scovillain.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(15);
  });
});
