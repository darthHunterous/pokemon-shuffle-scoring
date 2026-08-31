import { describe, expect, it } from "@jest/globals";

import { Cerulean } from "@/game/woody-plants";

import { createAnyWoodyPlant, createForestWith, createGame } from "../helpers";

describe("A Cerulean card", () => {
  it("always scores 5 points", () => {
    const woodyPlant = createAnyWoodyPlant(Cerulean);
    const forest = createForestWith({ woodyPlants: [woodyPlant] });
    const game = createGame(forest);

    const points = Cerulean.score({ game, forest, woodyPlant });

    expect(points).toBe(5);
  });
});
