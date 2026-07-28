import { describe, expect, it } from "@jest/globals";

import { DwellerCard, TreeSymbol, WoodyPlantCard } from "@/game";
import { EuropeanBison } from "@/game/dwellers";
import { createSapling } from "@/game/factory";

import { createFakeWoodyPlants } from "../fake";
import {
  createAnyDweller,
  createCompleteForestWithDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A European Bison card", () => {
  it("scores 2 points if there are no other cards with Fuchsia or Pewter symbol", () => {
    const affectedTreeSymbols = [TreeSymbol.Fuchsia, TreeSymbol.Pewter];
    const cardFilter = (c: WoodyPlantCard | DwellerCard) =>
      !c.treeSymbol || !affectedTreeSymbols.includes(c.treeSymbol);

    const { dweller, woodyPlant, forest } = createCompleteForestWithDweller({
      dwellerUnderTest: createAnyDweller(EuropeanBison),
      filterDwellers: cardFilter,
      filterWoodyPlants: cardFilter,
    });
    const game = createGame(forest);

    const points = EuropeanBison.score({ game, forest, woodyPlant, dweller });

    expect(points).toBe(2);
  });

  it.each([
    [0, 0, 2],
    [1, 0, 4],
    [0, 1, 4],
    [1, 1, 6],
    [5, 5, 22],
  ])(
    "with %s other Fuchsia and %s Pewter symbols scores %i points",
    (fuchsiaCount, pewterCount, expectedPoints) => {
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(EuropeanBison),
        otherWoodyPlants: [
          createSapling(),
          ...createFakeWoodyPlants(fuchsiaCount, {
            treeSymbol: TreeSymbol.Fuchsia,
          }),
          ...createFakeWoodyPlants(pewterCount, {
            treeSymbol: TreeSymbol.Pewter,
          }),
        ],
      });
      const game = createGame(forest);

      const points = EuropeanBison.score({ game, forest, woodyPlant, dweller });

      expect(points).toBe(expectedPoints);
    },
  );
});
