import { describe, expect, it } from "@jest/globals";

import { Chaffinch } from "@/game/dwellers";
import {
  Fuchsia,
  Cinnabar,
  Cerulean,
  HorseChestnut,
  Vermilion,
  Pewter,
  Sapling,
  SilverFir,
  Celadon,
} from "@/game/woody-plants";

import {
  createAnyDweller,
  createAnyWoodyPlant,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Chaffinch card", () => {
  it.each([
    [5, Fuchsia.name, Fuchsia],
    [0, Cinnabar.name, Cinnabar],
    [0, Cerulean.name, Cerulean],
    [0, HorseChestnut.name, HorseChestnut],
    [0, Vermilion.name, Vermilion],
    [0, Pewter.name, Pewter],
    [0, Sapling.name, Sapling],
    [0, SilverFir.name, SilverFir],
    [0, Celadon.name, Celadon],
  ])(
    "scores %i points on top on a %s card",
    (expectedPoints, _, woodyPlantBlueprint) => {
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(Chaffinch),
        woodyPlantUnderTest: createAnyWoodyPlant(woodyPlantBlueprint),
      });
      const game = createGame(forest);

      const points = Chaffinch.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );
});
