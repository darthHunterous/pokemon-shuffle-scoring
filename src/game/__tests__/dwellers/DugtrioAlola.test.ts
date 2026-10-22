import { describe, expect, it } from "@jest/globals";

import { Diglett, DugtrioAlola } from "@/game/dwellers";

import {
  createAllDwellers,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Dugtrio Alola card", () => {
  it.each([
    [1, 1, 0],
    [2, 1, 1],
    [3, 1, 2],
  ])(
    "scores %i points if there are %i Dugtrio Alola and %i Diglett cards",
    (expectedPoints, diglettAlolaCount, DiglettCount) => {
      const allDiglettsAlola = createAllDwellers(DugtrioAlola);
      const allDigletts = createAllDwellers(Diglett);
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: allDiglettsAlola[0],
        otherDwellers: [
          ...allDiglettsAlola.slice(1, diglettAlolaCount),
          ...allDigletts.slice(0, DiglettCount),
        ],
      });
      const game = createGame(forest);

      const points = DugtrioAlola.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
