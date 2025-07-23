import * as allure from "allure-js-commons";

export function attachResponse(name: string, data: any): void {
  allure.attachment(name, JSON.stringify(data, null, 2), "application/json");
}
