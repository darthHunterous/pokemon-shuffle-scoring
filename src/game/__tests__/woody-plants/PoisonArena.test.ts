import { describe, expect, it } from "@jest/globals";

import { PoisonArena } from "@/game/woody-plants";

import {
  createAnyWoodyPlant,
  createCompleteForestWithWoodyPlant,
  createForestWith,
  createGame,
} from "../helpers";

describe("A PoisonArena card", () => {
  it("scores no points in an empty forest", () => {
    const woodyPlant = createAnyWoodyPlant(PoisonArena);
    const forest = createForestWith({ woodyPlants: [woodyPlant] });
    const game = createGame(forest);

    const points = PoisonArena.score({
      game,
      forest,
      woodyPlant,
    });

    expect(points).toBe(0);
  });

  it("scores no points in a complete forest", () => {
    const { woodyPlant, forest } = createCompleteForestWithWoodyPlant({
      woodyPlantUnderTest: createAnyWoodyPlant(PoisonArena),
    });
    const game = createGame(forest);

    const points = PoisonArena.score({
      game,
      forest,
      woodyPlant,
    });

    expect(points).toBe(0);
  });
});
