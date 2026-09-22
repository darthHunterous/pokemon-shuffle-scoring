import { describe, expect, it } from "@jest/globals";

import { Cinnabar } from "@/game/woody-plants";

import { createAnyWoodyPlant, createForestWith, createGame } from "../helpers";

describe("A Cinnabar card", () => {
  it("always scores 1 point", () => {
    const woodyPlant = createAnyWoodyPlant(Cinnabar);
    const forest = createForestWith({ woodyPlants: [woodyPlant] });
    const game = createGame(forest);

    const points = Cinnabar.score({ game, forest, woodyPlant });

    expect(points).toBe(1);
  });
});
