import { describe, expect, it } from "@jest/globals";

import {
  createFakeDweller,
  createFakeWoodyPlant,
  createFakeWoodyPlants,
} from "@/game/__tests__/fake";
import { Jigglypuff } from "@/game/dwellers";
import { DwellerPosition } from "@/game/types";
import { Sapling } from "@/game/woody-plants";

import {
  addDwellersToWoodyPlant,
  createAnyDweller,
  createAnyWoodyPlant,
  createForestForDwellerTest,
  createForestWith,
  createGame,
} from "../helpers";

describe("A Jigglypuff card", () => {
  it.each([
    [1, 1],
    [2, 2],
    [5, 5],
  ])("scores %i points for %i trees", (expectedPoints, treeCount) => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Jigglypuff),
      otherWoodyPlants: createFakeWoodyPlants(treeCount),
    });
    const game = createGame(forest);

    const points = Jigglypuff.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(expectedPoints);
  });

  it("scores for Saplings", () => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Jigglypuff),
      otherWoodyPlants: [createAnyWoodyPlant(Sapling)],
    });
    const game = createGame(forest);

    const points = Jigglypuff.score({ game, forest, woodyPlant, dweller });

    expect(points).toBe(1);
  });

  it("ignores cards increasing the tree count when scoring", () => {
    const dweller = createAnyDweller(Jigglypuff);
    const woodyPlant = addDwellersToWoodyPlant(
      createFakeWoodyPlant(),
      dweller,
      createFakeDweller(DwellerPosition.Left, {
        modifiers: {
          woodyPlantCount: () => 1,
        },
      }),
    );
    const forest = createForestWith({ woodyPlants: [woodyPlant] });
    const game = createGame(forest);

    const points = Jigglypuff.score({ game, forest, woodyPlant, dweller });

    expect(points).toBe(1);
  });
});
