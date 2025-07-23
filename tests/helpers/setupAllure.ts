import * as allure from "allure-js-commons";
import { FormData } from "../../pageObjects/demoqa/selectors";

export const configureAllure = (dataTest: FormData) => {
  // Configuración global de Allure para el test
  dataTest;
  allure.description(
    `This test fills the first and last name fields for ${dataTest.firstName} ${dataTest.lastName} and validates the values.`
  );
  allure.epic("Form Filling");
  allure.feature("Form Automation");
  allure.story("Fill and Validate Form Fields");
  allure.tags("form", "automation", "playwright");
  allure.owner("Federico Cabanilla");
  allure.parameter("firstName", dataTest.firstName!);
  allure.parameter("lastName", dataTest.lastName!);
};
