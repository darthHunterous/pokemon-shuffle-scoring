import { describe, expect, it } from "@jest/globals";

import { DwellerPosition, TreeSymbol } from "@/game";
import { Mareep } from "@/game/dwellers";
import { createDweller, createSapling } from "@/game/factory";

import { createFakeDwellers, createFakeWoodyPlant } from "../fake";
import {
  createCompleteForestWithDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Mareep card", () => {
  it.each([
    [TreeSymbol.Goldenrod],
    [TreeSymbol.Cerulean],
    [TreeSymbol.SwissPine],
  ])(
    "with %s symbol scores 3 points if there's no other cards with that symbol",
    (treeSymbol) => {
      const { dweller, woodyPlant, forest } = createCompleteForestWithDweller({
        dwellerUnderTest: createDweller(
          Mareep,
          Mareep.variants.find((v) => v.treeSymbol === treeSymbol)!,
        ),
        filterDwellers: (d) => d.treeSymbol !== treeSymbol,
        filterWoodyPlants: (w) => w.treeSymbol !== treeSymbol,
      });
      const game = createGame(forest);

      const points = Mareep.score({ game, forest, woodyPlant, dweller });

      expect(points).toBe(3);
    },
  );

  it.each([
    [TreeSymbol.Goldenrod, 9],
    [TreeSymbol.Cerulean, 12],
    [TreeSymbol.SwissPine, 15],
  ])("with %s symbol scores %i points", (treeSymbol, expectedPoints) => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createDweller(
        Mareep,
        Mareep.variants.find((v) => v.treeSymbol === treeSymbol)!,
      ),
      otherDwellers: [
        ...createFakeDwellers(1, DwellerPosition.Left, {
          treeSymbol: TreeSymbol.Goldenrod,
        }),
        ...createFakeDwellers(2, DwellerPosition.Left, {
          treeSymbol: TreeSymbol.Cerulean,
        }),
        ...createFakeDwellers(3, DwellerPosition.Left, {
          treeSymbol: TreeSymbol.SwissPine,
        }),
      ],
      otherWoodyPlants: [
        createSapling(),
        createFakeWoodyPlant({ treeSymbol: TreeSymbol.Goldenrod }),
        createFakeWoodyPlant({ treeSymbol: TreeSymbol.Cerulean }),
        createFakeWoodyPlant({ treeSymbol: TreeSymbol.SwissPine }),
      ],
    });
    const game = createGame(forest);

    const points = Mareep.score({ game, forest, woodyPlant, dweller });

    expect(points).toBe(expectedPoints);
  });
});
