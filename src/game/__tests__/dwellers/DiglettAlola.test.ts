import { describe, expect, it } from "@jest/globals";

import { Diglett, DiglettAlola } from "@/game/dwellers";

import {
  createAllDwellers,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Diglett Alola card", () => {
  it.each([
    [1, 1, 0],
    [2, 1, 1],
    [5, 3, 2],
  ])(
    "scores %i points if there are %i Diglett Alola and %i Diglett cards",
    (expectedPoints, diglettAlolaCount, DiglettCount) => {
      const allDiglettsAlola = createAllDwellers(DiglettAlola);
      const allDigletts = createAllDwellers(Diglett);
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: allDiglettsAlola[0],
        otherDwellers: [
          ...allDiglettsAlola.slice(1, diglettAlolaCount),
          ...allDigletts.slice(0, DiglettCount),
        ],
      });
      const game = createGame(forest);

      const points = DiglettAlola.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
