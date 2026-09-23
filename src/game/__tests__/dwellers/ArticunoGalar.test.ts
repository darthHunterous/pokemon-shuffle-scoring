import { describe, expect, it } from "@jest/globals";

import { CardType, DwellerPosition } from "@/game";
import { ArticunoGalar } from "@/game/dwellers";

import { createFakeDwellers } from "../fake";
import {
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("An Articuno Galar card", () => {
  it.each([
    [0, 0, 0],
    [1, 1, 0],
    [1, 0, 1],
    [10, 5, 5],
  ])(
    "scores %i points if there are %i amphibian and %i insect cards",
    (expectedPoints, amphibianCount, insectCount) => {
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(ArticunoGalar),
        otherDwellers: [
          ...createFakeDwellers(amphibianCount, DwellerPosition.Top, {
            types: [CardType.Amphibian],
          }),
          ...createFakeDwellers(insectCount, DwellerPosition.Top, {
            types: [CardType.Insect],
          }),
        ],
      });
      const game = createGame(forest);

      const points = ArticunoGalar.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
