import { describe, expect, it } from "@jest/globals";

import { Lavaridge } from "@/game/woody-plants";

import { createAnyWoodyPlant, createForestWith, createGame } from "../helpers";

describe("A Lavaridge card", () => {
  it("always scores 1 point", () => {
    const woodyPlant = createAnyWoodyPlant(Lavaridge);
    const forest = createForestWith({ woodyPlants: [woodyPlant] });
    const game = createGame(forest);

    const points = Lavaridge.score({ game, forest, woodyPlant });

    expect(points).toBe(1);
  });
});
