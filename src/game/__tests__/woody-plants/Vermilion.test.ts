import { describe, expect, it } from "@jest/globals";

import { DwellerPosition } from "@/game/types";
import { Vermilion } from "@/game/woody-plants";

import { createFakeDweller } from "../fake";
import {
  addDwellersToWoodyPlant,
  createAnyWoodyPlant,
  createForestWith,
  createGame,
  createWoodyPlants,
} from "../helpers";

describe("A Vermilion card", () => {
  const woodyPlants = createWoodyPlants(Vermilion, 2);
  const forest = createForestWith({ woodyPlants });

  it("scores 3 points if forest has the most Vermilion trees", () => {
    const otherForest = createForestWith({
      woodyPlants: createWoodyPlants(Vermilion, 1),
    });
    const game = createGame(forest, otherForest);

    const points = Vermilion.score({ game, forest, woodyPlant: woodyPlants[0]! });

    expect(points).toBe(3);
  });

  it("scores 3 points if forest is tied for the most Vermilion trees", () => {
    const otherForest = createForestWith({
      woodyPlants: createWoodyPlants(Vermilion, 2),
    });
    const game = createGame(forest, otherForest);

    const points = Vermilion.score({ game, forest, woodyPlant: woodyPlants[0]! });

    expect(points).toBe(3);
  });

  it("scores 1 point if forest doesn't have the most Vermilion trees", () => {
    const otherForest = createForestWith({
      woodyPlants: createWoodyPlants(Vermilion, 3),
    });
    const game = createGame(forest, otherForest);

    const points = Vermilion.score({ game, forest, woodyPlant: woodyPlants[0]! });

    expect(points).toBe(1);
  });

  it("takes into account cards increasing the tree count when scoring", () => {
    const otherWoodyPlant = addDwellersToWoodyPlant(
      createAnyWoodyPlant(Vermilion),
      createFakeDweller(DwellerPosition.Left, {
        modifiers: {
          woodyPlantCount: () => 2,
        },
      }),
    );
    const otherForest = createForestWith({ woodyPlants: [otherWoodyPlant] });
    const game = createGame(forest, otherForest);

    const points = Vermilion.score({ game, forest, woodyPlant: woodyPlants[0]! });

    expect(points).toBe(1);
  });
});
