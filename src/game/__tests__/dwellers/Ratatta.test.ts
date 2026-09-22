import { describe, expect, it } from "@jest/globals";

import { Ratatta } from "@/game/dwellers";
import { createDweller } from "@/game/factory";
import { CardType, DwellerPosition } from "@/game/types";

import { createFakeDweller, createFakeWoodyPlant } from "../fake";
import {
  addDwellersToWoodyPlant,
  createAnyDweller,
  createForestWith,
  createGame,
} from "../helpers";

describe("A Ratatta card", () => {
  it.each([
    [0, DwellerPosition.Left, null],
    [0, DwellerPosition.Right, null],
    [0, DwellerPosition.Left, CardType.Amphibian],
    [0, DwellerPosition.Right, CardType.Amphibian],
    [15, DwellerPosition.Left, CardType.Bat],
    [15, DwellerPosition.Right, CardType.Bat],
  ])(
    "scores %i being in the %s slot with a %p card in the opposite slot",
    (expectedPoints, position, oppositeCardType) => {
      const variant = Ratatta.variants.find(
        (v) => v.position === position,
      );
      const dweller = createDweller(Ratatta, variant!);

      let dwellers = [dweller];
      if (oppositeCardType) {
        const oppositePosition =
          position === DwellerPosition.Left
            ? DwellerPosition.Right
            : DwellerPosition.Left;
        const oppositeDweller = createFakeDweller(oppositePosition, {
          types: [oppositeCardType],
        });
        dwellers = [...dwellers, oppositeDweller];
      }

      const woodyPlant = addDwellersToWoodyPlant(
        createFakeWoodyPlant(),
        ...dwellers,
      );
      const forest = createForestWith({ woodyPlants: [woodyPlant] });
      const game = createGame(forest);

      const points = Ratatta.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );

  it("scores 0 points if paired with a bat on a shrub", () => {
    const dweller = createAnyDweller(Ratatta);

    const oppositePosition =
      dweller.position === DwellerPosition.Left
        ? DwellerPosition.Right
        : DwellerPosition.Left;
    const oppositeDweller = createFakeDweller(oppositePosition, {
      types: [CardType.Bat],
    });

    const woodyPlant = addDwellersToWoodyPlant(
      createFakeWoodyPlant({ types: [CardType.Shrub] }),
      dweller,
      oppositeDweller,
    );
    const forest = createForestWith({ woodyPlants: [woodyPlant] });
    const game = createGame(forest);

    const points = Ratatta.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(0);
  });
});
