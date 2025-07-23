import { test } from "@playwright/test";
import { getPokemon } from "./pokemonApi.ts";
import { assertPokemonResponse, assertPokemonError } from "./pokemonAssertions";

test.describe("Pokemon API tests", () => {
  test("Get Pikachu info", async ({ request }) => {
    const data = await getPokemon("pikachu", request);
    assertPokemonResponse(data, "pikachu");
  });

  test("Get Bulbasaur info", async ({ request }) => {
    const data = await getPokemon("bulbasaur", request);
    assertPokemonResponse(data, "bulbasaur");
  });

  test("Handle non-existent Pokemon", async ({ request }) => {
    try {
      await getPokemon("nonexistentpokemon", request);
      throw new Error("Expected error was not thrown");
    } catch (error) {
      assertPokemonError(error, "nonexistentpokemon");
    }
  });

  // ...additional tests can be added here...
});
