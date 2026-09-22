import { describe, expect, it } from "@jest/globals";

import {
  Vulpix,
  Growlithe,
  Charmander,
  CommonPipistrelle,
  DuererFledermaus,
  Ponyta,
  SavisPipistrelle,
} from "@/game/dwellers";

import {
  createAllDwellers,
  createAnyDweller,
  createForestForDwellerTest,
  createGame,
} from "../helpers";

describe("A Growlithe card", () => {
  const otherBats = [
    Vulpix,
    Charmander,
    CommonPipistrelle,
    DuererFledermaus,
    Ponyta,
    SavisPipistrelle,
  ];

  it.each([
    [0, 0, []],
    [0, 1, otherBats.slice(0, 1)],
    [5, 2, otherBats.slice(0, 2)],
    [5, 3, otherBats.slice(0, 3)],
    [5, 3, otherBats.slice(0, 4)],
    [5, 3, otherBats.slice(0, 5)],
  ])(
    "scores %i points if there are %i other bat species",
    (expectedPoints, _, otherBatBlueprints) => {
      const { dweller, woodyPlant, forest } = createForestForDwellerTest({
        dwellerUnderTest: createAnyDweller(Growlithe),
        otherDwellers: otherBatBlueprints.map(createAnyDweller),
      });
      const game = createGame(forest);

      const points = Growlithe.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(expectedPoints);
    },
  );

  it("ignores multiple instances of the same bat", () => {
    const { dweller, woodyPlant, forest } = createForestForDwellerTest({
      dwellerUnderTest: createAnyDweller(Growlithe),
      otherDwellers: createAllDwellers(Vulpix),
    });
    const game = createGame(forest);

    const points = Vulpix.score({
      game,
      forest,
      woodyPlant,
      dweller,
    });

    expect(points).toBe(0);
  });
});
