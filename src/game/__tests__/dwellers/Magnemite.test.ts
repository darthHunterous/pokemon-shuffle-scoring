import { describe, expect, it } from "@jest/globals";

import { Magnemite } from "@/game/dwellers";
import { CardType, DwellerPosition } from "@/game/types";

import { createFakeDwellers } from "../fake";
import {
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Magnemite card", () => {
  it.each([
    [3, 0],
    [6, 1],
    [15, 4],
  ])(
    "scores %i points if there are %i other electrical pokémon cards",
    (expectedPoints, count) => {
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(Magnemite),
        otherDwellers: createFakeDwellers(count, DwellerPosition.Left, {
          types: [CardType.ElectricalPokemon],
        }),
      });
      const game = createGame(forest);

      const points = Magnemite.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
