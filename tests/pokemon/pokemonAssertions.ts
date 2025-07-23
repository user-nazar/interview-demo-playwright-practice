import { expect } from "@playwright/test";

export function assertPokemonResponse(data: any, expectedName: string): void {
  expect(data).toHaveProperty("name", expectedName);
  expect(data).toHaveProperty("abilities");
  // Add additional common assertions if needed
}

export function assertPokemonError(error: any, expectedName: string): void {
  expect(error).toHaveProperty(
    "message",
    `Error fetching Pokemon: ${expectedName}`
  );
}
