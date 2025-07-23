import { expect, test } from "@playwright/test";
import { FormPage as DemoPageBusiness } from "../../pageObjects/demoqa/formPage";
import { dataTests } from "./dataTest";
import { assertFormData } from "./assertions";

test.describe("Example from Youtube tutorial", () => {
  test.beforeEach(async ({ page }) => {
    //const dpb = new DemoPageBusiness(page).navigateToForm();
  });

  for (const dataTest of dataTests) {
    test(`Fill the first and last name fields for ${dataTest.firstName} ${dataTest.lastName}`, async ({
      page,
    }) => {
      const dpb = new DemoPageBusiness(page);
      await dpb.navigateToForm();
      await dpb.fillForm(dataTest);
      const filledData = await dpb.getFormData();
      assertFormData(filledData, dataTest);
    });
  }
});
