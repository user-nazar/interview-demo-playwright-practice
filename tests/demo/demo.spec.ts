// tests/demo/demo.spec.ts
import { test, expect } from "@playwright/test";
import { PageObjectManager } from "../../managers/PageObjectManager";
import { PracticePage } from "../../pageObjects/PracticePage";
import { TableHandler } from "../../pageObjects/TableHandler";

test.describe("Demo Forte Group", () => {
  let dropdownPage: any; // Ajustar tipo según corresponda
  test.beforeEach(async ({ page }) => {
    const pom = new PageObjectManager(page);
    dropdownPage = pom.getDropdownPage();
    await dropdownPage.navigate();
  });

  test("validate title", async () => {
    const title = await dropdownPage.getTitle();
    expect(title).toBe("Dropdown Example");
  });

  test("select option 1", async () => {
    const defaultOptionValue = await dropdownPage.getDefaultOptionValue();
    await dropdownPage.selectOption("option1");
    expect(defaultOptionValue).not.toBe("option1");
    const selectedOption = await dropdownPage.getSelectedOptionText();
    expect(selectedOption).toBe("Option1");
  });
});

test.describe("Demo Practice Page", () => {
  let practicePage: PracticePage;
  let storedPage: any; // para tests que lo requieran
  test.beforeEach(async ({ page }) => {
    storedPage = page;
    practicePage = new PracticePage(page);
    await practicePage.navigate(
      "https://rahulshettyacademy.com/AutomationPractice/"
    );
  });

  test("Interactuar con radio buttons y checkboxes", async () => {
    await practicePage.selectRadioButton(2);
    await practicePage.selectCheckbox(1);
  });

  test("Seleccionar opción en dropdown", async () => {
    await practicePage.selectDropdownOption("Option2");
  });

  test("Manejo de alertas", async () => {
    await practicePage.triggerAlert();
    await practicePage.triggerConfirmAlert();
  });

  test("Verificar datos en la tabla de empleados", async () => {
    // Esperar a que la tabla y sus filas estén presentes
    await storedPage.waitForSelector(".tableFixHead tbody tr", {
      state: "attached",
    });
    const tableHandler = new TableHandler(storedPage);
    const names = await tableHandler.getColumnValues(1);
    console.log("Nombres en la tabla:", names);
    expect(names).toContain("Alex");
  });

  test("Realizar hover sobre botón", async () => {
    await practicePage.mouseHover();
  });
});
