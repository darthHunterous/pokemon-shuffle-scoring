import { describe, expect, it } from "@jest/globals";

import { CardType, DwellerPosition } from "@/game/types";
import { Mauville } from "@/game/woody-plants";

import { createFakeDwellers } from "../fake";
import {
  createAnyWoodyPlant,
  createForestForWoodyPlantTest,
  createGame,
} from "../helpers";

describe("A Mauville card", () => {
  it.each([
    [0, 0],
    [1, 1],
    [5, 5],
  ])(
    "scores %i points for %i electrical cards",
    (expectedPoints, plantCount) => {
      const { woodyPlant, forest } = createForestForWoodyPlantTest({
        woodyPlantUnderTest: createAnyWoodyPlant(Mauville),
        dwellers: createFakeDwellers(plantCount, DwellerPosition.Bottom, {
          types: [CardType.ElectricalPokemon],
        }),
      });
      const game = createGame(forest);

      const points = Mauville.score({
        game,
        forest,
        woodyPlant,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
