import { describe, expect, it } from "@jest/globals";
import * as _ from "lodash-es";

import { Bellsprout } from "@/game/dwellers";
import { CardType } from "@/game/types";
import * as WoodyPlants from "@/game/woody-plants";
import {
  Fuchsia,
  Birch,
  Blackthorne,
  DouglasFir,
  Elderberry,
  EuropeanLarch,
  HorseChestnut,
  Vermilion,
  MoorBirch,
  OChristmasTree,
  Mauville,
} from "@/game/woody-plants";

import {
  createAnyDweller,
  createAnyWoodyPlant,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Bellsprout card", () => {
  const treeBlueprints = Object.values(WoodyPlants).filter((w) =>
    w.types.includes(CardType.Tree),
  );

  it("scores 10 points if forest has all tree species", () => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Bellsprout),
      otherWoodyPlants: treeBlueprints.map(createAnyWoodyPlant),
    });
    const game = createGame(forest);

    const points = Bellsprout.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(10);
  });

  it.each(_.range(1, 7).map((x) => [x]))(
    "scores no points if forest has %i trees",
    (treeCount) => {
      const trees = treeBlueprints.slice(0, treeCount).map(createAnyWoodyPlant);
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(Bellsprout),
        otherWoodyPlants: trees,
      });
      const game = createGame(forest);

      const points = Bellsprout.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(0);
    },
  );

  it("ignores shrubs when scoring", () => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Bellsprout),
      otherWoodyPlants: [
        // Shrubs
        createAnyWoodyPlant(Elderberry),
        createAnyWoodyPlant(Blackthorne),
        // Trees
        createAnyWoodyPlant(Fuchsia),
        createAnyWoodyPlant(Birch),
        createAnyWoodyPlant(DouglasFir),
        createAnyWoodyPlant(EuropeanLarch),
        createAnyWoodyPlant(HorseChestnut),
        createAnyWoodyPlant(Vermilion),
      ],
    });
    const game = createGame(forest);

    const points = Bellsprout.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(0);
  });

  it.each([
    [MoorBirch.name, MoorBirch.countsAs, MoorBirch],
    [OChristmasTree.name, OChristmasTree.countsAs, OChristmasTree],
    [Mauville.name, Mauville.countsAs, Mauville],
  ])("treats %s as %s when scoring", (_1, _2, blueprint) => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Bellsprout),
      otherWoodyPlants: [
        createAnyWoodyPlant(blueprint),
        createAnyWoodyPlant(
          treeBlueprints.find((b) => b.name === blueprint.countsAs)!,
        ),
        createAnyWoodyPlant(WoodyPlants.Fuchsia),
        createAnyWoodyPlant(WoodyPlants.EuropeanLarch),
        createAnyWoodyPlant(WoodyPlants.HorseChestnut),
        createAnyWoodyPlant(WoodyPlants.Vermilion),
        createAnyWoodyPlant(WoodyPlants.StonePine),
        createAnyWoodyPlant(WoodyPlants.Sycamore),
      ],
    });
    const game = createGame(forest);

    const points = Bellsprout.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(0);
  });
});
