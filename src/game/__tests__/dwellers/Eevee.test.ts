import { describe, expect, it } from "@jest/globals";

import { DwellerPosition } from "@/game";
import { Diglett, DiglettAlola, Eevee } from "@/game/dwellers";
import { createDweller } from "@/game/factory";

import { createFakeWoodyPlant } from "../fake";
import {
  addDwellersToWoodyPlant,
  createAllDwellers,
  createAnyDweller,
  createForestForDwellerTest,
  createForestWith,
  createGame,
} from "../helpers";

describe("A Eevee card", () => {
  it.each([
    [0, 0, 0],
    [2, 1, 0],
    [2, 0, 1],
    [18, 6, 3],
  ])(
    "scores %i points if there are %i Diglett cards and %i Diglett Alola cards",
    (expectedPoints, DiglettCount, diglettAlolaCount) => {
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(Eevee),
        otherDwellers: [
          ...createAllDwellers(Diglett).slice(0, DiglettCount),
          ...createAllDwellers(DiglettAlola).slice(0, diglettAlolaCount),
        ],
      });
      const game = createGame(forest);

      const points = Eevee.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );

  it("takes into account Diglett cards sharing a slot when scoring", () => {
    const dweller = createDweller(
      Eevee,
      Eevee.variants.find((v) => v.position === DwellerPosition.Left)!,
    );
    const otherDwellers = createAllDwellers(Diglett)
      .filter((v) => v.position === DwellerPosition.Right)
      .slice(0, 2);
    const woodyPlant = addDwellersToWoodyPlant(
      createFakeWoodyPlant(),
      dweller,
      ...otherDwellers,
    );
    const forest = createForestWith({ woodyPlants: [woodyPlant] });
    const game = createGame(forest);

    const points = Eevee.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(4);
  });
});
