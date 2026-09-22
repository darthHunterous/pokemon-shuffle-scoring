import { describe, expect, it } from "@jest/globals";

import { DwellerPosition } from "@/game";
import { Saffron } from "@/game/woody-plants";

import { createFakeDweller } from "../fake";
import {
  addDwellersToWoodyPlant,
  createAnyWoodyPlant,
  createForestWith,
  createGame,
  createWoodyPlants,
} from "../helpers";

describe("A Saffron card", () => {
  it.each([
    [1, 1],
    [4, 2],
    [9, 3],
    [16, 4],
    [25, 5],
    [36, 6],
    [49, 7],
    [49, 8],
  ])("scores %i points for a set of %i", (expectedPoints, count) => {
    const woodyPlants = createWoodyPlants(Saffron, count);
    const forest = createForestWith({ woodyPlants });
    const game = createGame(forest);

    const points = woodyPlants
      .map((woodyPlant) => Saffron.score({ game, forest, woodyPlant }))
      .reduce((a, b) => a + b, 0);

    expect(points).toBe(expectedPoints);
  });

  it("takes into account cards increasing the tree count when scoring", () => {
    const woodyPlant = addDwellersToWoodyPlant(
      createAnyWoodyPlant(Saffron),
      createFakeDweller(DwellerPosition.Left, {
        modifiers: {
          woodyPlantCount: () => 1,
        },
      }),
    );
    const forest = createForestWith({ woodyPlants: [woodyPlant] });
    const game = createGame(forest);

    const points = Saffron.score({ game, forest, woodyPlant });

    expect(points).toBe(4);
  });
});
