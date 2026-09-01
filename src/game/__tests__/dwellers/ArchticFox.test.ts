import { describe, expect, it } from "@jest/globals";

import { DwellerPosition } from "@/game";
import { ArcticFox, Diglett, DiglettAlola } from "@/game/dwellers";
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

describe("A Arctic Fox card", () => {
  it.each([
    [0, 0, 0],
    [2, 1, 0],
    [2, 0, 1],
    [18, 6, 3],
  ])(
    "scores %i points if there are %i Diglett cards and %i Diglett Alola cards",
    (expectedPoints, DiglettCount, diglettAlolaCount) => {
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(ArcticFox),
        otherDwellers: [
          ...createAllDwellers(Diglett).slice(0, DiglettCount),
          ...createAllDwellers(DiglettAlola).slice(0, diglettAlolaCount),
        ],
      });
      const game = createGame(forest);

      const points = ArcticFox.score({
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
      ArcticFox,
      ArcticFox.variants.find((v) => v.position === DwellerPosition.Left)!,
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

    const points = ArcticFox.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(4);
  });
});
