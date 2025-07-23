import { expect } from "@playwright/test";
import * as allure from "allure-js-commons";

// Function that encapsulates form assertions with custom messages in English
export function assertFormData(filledData: any, expectedData: any) {
  allure.step("Validating form data", () => {
    // ...other assertions if necessary...
    expect(filledData.firstName, "firstName field does not match").toBe(
      expectedData.firstName
    );
    expect(filledData.lastName, "lastName field does not match").toBe(
      expectedData.lastName
    );
    // Optional assertions:
    // expect(filledData.email, "email field does not match").toBe(expectedData.email);
    // expect(filledData.phone, "phone field does not match").toBe(expectedData.phone);
  });
}
