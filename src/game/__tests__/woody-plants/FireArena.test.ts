import { describe, expect, it } from "@jest/globals";

import { FireArena } from "@/game/woody-plants";

import {
  createAnyWoodyPlant,
  createCompleteForestWithWoodyPlant,
  createForestWith,
  createGame,
} from "../helpers";

describe("A Fire Arena card", () => {
  it("scores no points in an empty forest", () => {
    const woodyPlant = createAnyWoodyPlant(FireArena);
    const forest = createForestWith({ woodyPlants: [woodyPlant] });
    const game = createGame(forest);

    const points = FireArena.score({
      game,
      forest,
      woodyPlant,
    });

    expect(points).toBe(0);
  });

  it("scores no points in a complete forest", () => {
    const { woodyPlant, forest } = createCompleteForestWithWoodyPlant({
      woodyPlantUnderTest: createAnyWoodyPlant(FireArena),
    });
    const game = createGame(forest);

    const points = FireArena.score({
      game,
      forest,
      woodyPlant,
    });

    expect(points).toBe(0);
  });
});
