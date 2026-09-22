import { describe, expect, it } from "@jest/globals";

import { CardType, DwellerPosition } from "@/game";
import { Mudkip } from "@/game/dwellers";

import { createFakeDweller, createFakeWoodyPlant } from "../fake";
import {
  addDwellersToWoodyPlant,
  createAnyDweller,
  createForestWith,
  createGame,
} from "../helpers";

describe("A Mudkip card", () => {
  it.each([[CardType.Tree, CardType.Shrub]])(
    "scores 10 points if it's the only card on its woody plant of type $0",
    (cardType) => {
      const dweller = createAnyDweller(Mudkip);
      const woodyPlant = addDwellersToWoodyPlant(
        createFakeWoodyPlant({ types: [cardType] }),
        dweller,
      );
      const forest = createForestWith({ woodyPlants: [woodyPlant] });
      const game = createGame(forest);

      const points = Mudkip.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(10);
    },
  );

  it.each([[CardType.Tree, CardType.Shrub]])(
    "scores no points if there are other cards on its woody plant of type $0",
    (cardType) => {
      const dweller = createAnyDweller(Mudkip);
      const woodyPlant = addDwellersToWoodyPlant(
        createFakeWoodyPlant({ types: [cardType] }),
        createFakeDweller(DwellerPosition.Top),
        dweller,
      );
      const forest = createForestWith({ woodyPlants: [woodyPlant] });
      const game = createGame(forest);

      const points = Mudkip.score({
        game,
        forest,
        woodyPlant,
        dweller,
      });

      expect(points).toBe(0);
    },
  );
});
