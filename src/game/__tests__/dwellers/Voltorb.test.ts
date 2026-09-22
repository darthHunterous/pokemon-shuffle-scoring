import { describe, expect, it } from "@jest/globals";

import { DwellerPosition, TreeSymbol } from "@/game";
import { Voltorb } from "@/game/dwellers";
import { createDweller, createSapling } from "@/game/factory";

import { createFakeDwellers, createFakeWoodyPlant } from "../fake";
import {
  createCompleteForestWithDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Voltorb card", () => {
  it.each([
    [TreeSymbol.Vermilion],
    [TreeSymbol.Viridian],
    [TreeSymbol.Fuchsia],
    [TreeSymbol.Cinnabar],
    [TreeSymbol.Saffron],
  ])(
    "with %s symbol scores 3 points if there's no other cards with that symbol",
    (treeSymbol) => {
      const { dweller, woodyPlant, forest } = createCompleteForestWithDweller({
        dwellerUnderTest: createDweller(
          Voltorb,
          Voltorb.variants.find((v) => v.treeSymbol === treeSymbol)!,
        ),
        filterDwellers: (d) => d.treeSymbol !== treeSymbol,
        filterWoodyPlants: (w) => w.treeSymbol !== treeSymbol,
      });
      const game = createGame(forest);

      const points = Voltorb.score({ game, forest, woodyPlant, dweller });

      expect(points).toBe(3);
    },
  );

  it.each([
    [TreeSymbol.Vermilion, 9],
    [TreeSymbol.Viridian, 12],
    [TreeSymbol.Fuchsia, 15],
    [TreeSymbol.Cinnabar, 18],
    [TreeSymbol.Saffron, 21],
  ])("with %s symbol scores %i points", (treeSymbol, expectedPoints) => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createDweller(
        Voltorb,
        Voltorb.variants.find((v) => v.treeSymbol === treeSymbol)!,
      ),
      otherDwellers: [
        ...createFakeDwellers(1, DwellerPosition.Left, {
          treeSymbol: TreeSymbol.Vermilion,
        }),
        ...createFakeDwellers(2, DwellerPosition.Left, {
          treeSymbol: TreeSymbol.Viridian,
        }),
        ...createFakeDwellers(3, DwellerPosition.Left, {
          treeSymbol: TreeSymbol.Fuchsia,
        }),
        ...createFakeDwellers(4, DwellerPosition.Left, {
          treeSymbol: TreeSymbol.Cinnabar,
        }),
        ...createFakeDwellers(5, DwellerPosition.Left, {
          treeSymbol: TreeSymbol.Saffron,
        }),
      ],
      otherWoodyPlants: [
        createSapling(),
        createFakeWoodyPlant({ treeSymbol: TreeSymbol.Vermilion }),
        createFakeWoodyPlant({ treeSymbol: TreeSymbol.Viridian }),
        createFakeWoodyPlant({ treeSymbol: TreeSymbol.Fuchsia }),
        createFakeWoodyPlant({ treeSymbol: TreeSymbol.Cinnabar }),
        createFakeWoodyPlant({ treeSymbol: TreeSymbol.Saffron }),
      ],
    });
    const game = createGame(forest);

    const points = Voltorb.score({ game, forest, woodyPlant, dweller });

    expect(points).toBe(expectedPoints);
  });
});
