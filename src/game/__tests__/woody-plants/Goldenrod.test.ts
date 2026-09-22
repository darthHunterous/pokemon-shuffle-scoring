import { describe, expect, it } from "@jest/globals";

import { Goldenrod } from "@/game/woody-plants";

import { createAnyWoodyPlant, createForestWith, createGame } from "../helpers";

describe("An Goldenrod card", () => {
  it("always scores 3 points", () => {
    const woodyPlant = createAnyWoodyPlant(Goldenrod);
    const forest = createForestWith({ woodyPlants: [woodyPlant] });
    const game = createGame(forest);

    const points = Goldenrod.score({ game, forest, woodyPlant });

    expect(points).toBe(3);
  });
});
