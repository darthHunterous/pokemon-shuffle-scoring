import { describe, expect, it } from "@jest/globals";
import * as _ from "lodash-es";

import { CardType } from "@/game/types";
import * as WoodyPlants from "@/game/woody-plants";
import {
  Fuchsia,
  Birch,
  Blackthorne,
  Cerulean,
  Elderberry,
  EuropeanLarch,
  HorseChestnut,
  Vermilion,
  Lavaridge,
  OChristmasTree,
  Pewter,
  StonePine,
  Mauville,
} from "@/game/woody-plants";

import {
  createAnyWoodyPlant,
  createForestForWoodyPlantTest,
  createGame,
} from "../helpers";

describe("A Pewter card", () => {
  const treeBlueprints = Object.values(WoodyPlants).filter((t) =>
    t.types.includes(CardType.Tree),
  );

  it("scores 10 points if forest has all tree species", () => {
    const { forest, woodyPlant } = createForestForWoodyPlantTest({
      woodyPlantUnderTest: createAnyWoodyPlant(Pewter),
      otherWoodyPlants: treeBlueprints.map(createAnyWoodyPlant),
    });
    const game = createGame(forest);

    const points = Pewter.score({ game, forest, woodyPlant });

    expect(points).toBe(10);
  });

  it.each(_.range(1, 6).map((x) => [x]))(
    "scores no points if forest has %i tree species",
    (otherWoodyPlantCount) => {
      const { forest, woodyPlant } = createForestForWoodyPlantTest({
        woodyPlantUnderTest: createAnyWoodyPlant(Pewter),
        otherWoodyPlants: treeBlueprints
          .slice(0, otherWoodyPlantCount)
          .map(createAnyWoodyPlant),
      });
      const game = createGame(forest);

      const points = Pewter.score({ game, forest, woodyPlant });

      expect(points).toBe(0);
    },
  );

  it("ignores shrubs when scoring", () => {
    const { forest, woodyPlant } = createForestForWoodyPlantTest({
      woodyPlantUnderTest: createAnyWoodyPlant(Pewter),
      otherWoodyPlants: [
        // Shrubs
        createAnyWoodyPlant(Elderberry),
        createAnyWoodyPlant(Blackthorne),
        // Trees
        createAnyWoodyPlant(Fuchsia),
        createAnyWoodyPlant(Birch),
        createAnyWoodyPlant(Cerulean),
        createAnyWoodyPlant(EuropeanLarch),
        createAnyWoodyPlant(HorseChestnut),
      ],
    });
    const game = createGame(forest);

    const points = Pewter.score({ game, forest, woodyPlant });

    expect(points).toBe(0);
  });

  it.each([
    [Lavaridge.name, Lavaridge.countsAs, Lavaridge],
    [OChristmasTree.name, OChristmasTree.countsAs, OChristmasTree],
    [Mauville.name, Mauville.countsAs, Mauville],
  ])("treats %s as %s when scoring", (_1, _2, blueprint) => {
    const { forest, woodyPlant } = createForestForWoodyPlantTest({
      woodyPlantUnderTest: createAnyWoodyPlant(Pewter),
      otherWoodyPlants: [
        createAnyWoodyPlant(blueprint),
        createAnyWoodyPlant(
          treeBlueprints.find((b) => b.name === blueprint.countsAs)!,
        ),
        createAnyWoodyPlant(Fuchsia),
        createAnyWoodyPlant(EuropeanLarch),
        createAnyWoodyPlant(HorseChestnut),
        createAnyWoodyPlant(Vermilion),
        createAnyWoodyPlant(StonePine),
      ],
    });
    const game = createGame(forest);

    const points = Pewter.score({ game, forest, woodyPlant });

    expect(points).toBe(0);
  });
});
