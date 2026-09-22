import { describe, expect, it } from "@jest/globals";

import { Staryu } from "@/game/dwellers";

import { createFakeWoodyPlant } from "../fake";
import {
  addDwellersToWoodyPlant,
  createAllDwellers,
  createAnyDweller,
  createForestForDwellerTest,
  createForestWith,
  createGame,
} from "../helpers";

describe("A Staryu card", () => {
  it("scores no points if it's the only card in its slot", () => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Staryu),
    });
    const game = createGame(forest);

    const points = Staryu.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(0);
  });

  it("scores 5 points if it shares its slot with another Staryu card", () => {
    const [dweller, otherDweller] = createAllDwellers(Staryu);
    const woodyPlant = addDwellersToWoodyPlant(
      createFakeWoodyPlant(),
      dweller!,
      otherDweller!,
    );
    const forest = createForestWith({ woodyPlants: [woodyPlant] });
    const game = createGame(forest);

    const points = Staryu.score({
      game,
      forest,
      woodyPlant,
      dweller: dweller!,
    });

    expect(points).toBe(5);
  });
});
