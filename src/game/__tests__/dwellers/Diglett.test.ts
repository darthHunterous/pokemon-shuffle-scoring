import { describe, expect, it } from "@jest/globals";

import { Diglett, DiglettAlola } from "@/game/dwellers";

import {
  createAllDwellers,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Diglett card", () => {
  it.each([
    [1, 1, 0],
    [2, 1, 1],
    [5, 3, 2],
  ])(
    "scores %i points if there are %i Diglett and %i Diglett Alola cards",
    (expectedPoints, DiglettCount, diglettAlolaCount) => {
      const allDigletts = createAllDwellers(Diglett);
      const allDiglettsAlola = createAllDwellers(DiglettAlola);
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: allDigletts[0],
        otherDwellers: [
          ...allDiglettsAlola.slice(1, DiglettCount),
          ...allDigletts.slice(0, diglettAlolaCount),
        ],
      });
      const game = createGame(forest);

      const points = Diglett.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
