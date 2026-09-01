import { describe, expect, it } from "@jest/globals";

import { DwellerPosition, TreeSymbol } from "@/game";
import { RoeDeer } from "@/game/dwellers";
import { createDweller, createSapling } from "@/game/factory";

import { createFakeDwellers, createFakeWoodyPlant } from "../fake";
import {
  createCompleteForestWithDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Roe Deer card", () => {
  it.each([
    [TreeSymbol.Vermilion],
    [TreeSymbol.SilverFir],
    [TreeSymbol.Fuchsia],
    [TreeSymbol.Cinnabar],
    [TreeSymbol.HorseChestnut],
  ])(
    "with %s symbol scores 3 points if there's no other cards with that symbol",
    (treeSymbol) => {
      const { dweller, woodyPlant, forest } = createCompleteForestWithDweller({
        dwellerUnderTest: createDweller(
          RoeDeer,
          RoeDeer.variants.find((v) => v.treeSymbol === treeSymbol)!,
        ),
        filterDwellers: (d) => d.treeSymbol !== treeSymbol,
        filterWoodyPlants: (w) => w.treeSymbol !== treeSymbol,
      });
      const game = createGame(forest);

      const points = RoeDeer.score({ game, forest, woodyPlant, dweller });

      expect(points).toBe(3);
    },
  );

  it.each([
    [TreeSymbol.Vermilion, 9],
    [TreeSymbol.SilverFir, 12],
    [TreeSymbol.Fuchsia, 15],
    [TreeSymbol.Cinnabar, 18],
    [TreeSymbol.HorseChestnut, 21],
  ])("with %s symbol scores %i points", (treeSymbol, expectedPoints) => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createDweller(
        RoeDeer,
        RoeDeer.variants.find((v) => v.treeSymbol === treeSymbol)!,
      ),
      otherDwellers: [
        ...createFakeDwellers(1, DwellerPosition.Left, {
          treeSymbol: TreeSymbol.Vermilion,
        }),
        ...createFakeDwellers(2, DwellerPosition.Left, {
          treeSymbol: TreeSymbol.SilverFir,
        }),
        ...createFakeDwellers(3, DwellerPosition.Left, {
          treeSymbol: TreeSymbol.Fuchsia,
        }),
        ...createFakeDwellers(4, DwellerPosition.Left, {
          treeSymbol: TreeSymbol.Cinnabar,
        }),
        ...createFakeDwellers(5, DwellerPosition.Left, {
          treeSymbol: TreeSymbol.HorseChestnut,
        }),
      ],
      otherWoodyPlants: [
        createSapling(),
        createFakeWoodyPlant({ treeSymbol: TreeSymbol.Vermilion }),
        createFakeWoodyPlant({ treeSymbol: TreeSymbol.SilverFir }),
        createFakeWoodyPlant({ treeSymbol: TreeSymbol.Fuchsia }),
        createFakeWoodyPlant({ treeSymbol: TreeSymbol.Cinnabar }),
        createFakeWoodyPlant({ treeSymbol: TreeSymbol.HorseChestnut }),
      ],
    });
    const game = createGame(forest);

    const points = RoeDeer.score({ game, forest, woodyPlant, dweller });

    expect(points).toBe(expectedPoints);
  });
});
