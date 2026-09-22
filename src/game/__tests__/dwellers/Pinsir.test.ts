import { describe, expect, it } from "@jest/globals";

import { CardType, DwellerPosition } from "@/game";
import { Pinsir } from "@/game/dwellers";

import { createFakeDwellers } from "../fake";
import {
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Pinsir card", () => {
  it.each([
    [0, 0],
    [1, 1],
    [5, 5],
  ])(
    "scores %i points if there are %i pawed animal cards",
    (expectedPoints, count) => {
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(Pinsir),
        otherDwellers: createFakeDwellers(count, DwellerPosition.Left, {
          types: [CardType.PawedAnimal],
        }),
      });
      const game = createGame(forest);

      const points = Pinsir.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
