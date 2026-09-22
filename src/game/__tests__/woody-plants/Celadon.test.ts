import { describe, expect, it } from "@jest/globals";

import { DwellerPosition } from "@/game";
import { Sapling, Celadon } from "@/game/woody-plants";

import { createFakeDweller, createFakeWoodyPlants } from "../fake";
import {
  addDwellersToWoodyPlant,
  createAnyWoodyPlant,
  createForestWith,
  createGame,
} from "../helpers";

describe("A Celadon card", () => {
  it("scores 1 point if there are no other trees", () => {
    const woodyPlant = createAnyWoodyPlant(Celadon);
    const forest = createForestWith({ woodyPlants: [woodyPlant] });
    const game = createGame(forest);

    const points = Celadon.score({ game, forest, woodyPlant });

    expect(points).toBe(1);
  });

  it("scores 3 points if there are 3 trees", () => {
    const woodyPlant = createAnyWoodyPlant(Celadon);
    const otherWoodyPlants = createFakeWoodyPlants(2);
    const forest = createForestWith({
      woodyPlants: [woodyPlant, ...otherWoodyPlants],
    });
    const game = createGame(forest);

    const points = Celadon.score({ game, forest, woodyPlant });

    expect(points).toBe(3);
  });

  it("scores for Saplings", () => {
    const woodyPlant = createAnyWoodyPlant(Celadon);
    const otherWoodyPlant = createAnyWoodyPlant(Sapling);
    const forest = createForestWith({
      woodyPlants: [woodyPlant, otherWoodyPlant],
    });
    const game = createGame(forest);

    const points = Celadon.score({ game, forest, woodyPlant });

    expect(points).toBe(2);
  });

  it("ignores cards increasing the tree count when scoring", () => {
    const woodyPlant = addDwellersToWoodyPlant(
      createAnyWoodyPlant(Celadon),
      createFakeDweller(DwellerPosition.Left, {
        modifiers: {
          woodyPlantCount: () => 1,
        },
      }),
    );
    const forest = createForestWith({ woodyPlants: [woodyPlant] });
    const game = createGame(forest);

    const points = Celadon.score({ game, forest, woodyPlant });

    expect(points).toBe(1);
  });
});
