import { describe, expect, it } from "@jest/globals";

import { GrassArena } from "@/game/woody-plants";

import {
  createAnyWoodyPlant,
  createCompleteForestWithWoodyPlant,
  createForestWith,
  createGame,
} from "../helpers";

describe("A GrassArena card", () => {
  it("scores no points in an empty forest", () => {
    const woodyPlant = createAnyWoodyPlant(GrassArena);
    const forest = createForestWith({ woodyPlants: [woodyPlant] });
    const game = createGame(forest);

    const points = GrassArena.score({
      game,
      forest,
      woodyPlant,
    });

    expect(points).toBe(0);
  });

  it("scores no points in a complete forest", () => {
    const { woodyPlant, forest } = createCompleteForestWithWoodyPlant({
      woodyPlantUnderTest: createAnyWoodyPlant(GrassArena),
    });
    const game = createGame(forest);

    const points = GrassArena.score({
      game,
      forest,
      woodyPlant,
    });

    expect(points).toBe(0);
  });
});
