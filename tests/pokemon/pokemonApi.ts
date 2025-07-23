import { APIRequestContext } from "@playwright/test";
import { attachResponse } from "../../utils/attachmentUtils";

export async function getPokemon(
  name: string,
  request: APIRequestContext
): Promise<any> {
  const response = await request.get(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  if (response.status() !== 200) {
    throw new Error(`Error fetching Pokemon: ${name}`);
  }
  const data = await response.json();

  // Llamada para adjuntar el JSON de respuesta a un attachment
  attachResponse("response.json", data);

  return data;
}
