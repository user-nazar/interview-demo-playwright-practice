// pages/PracticePage.ts
import { Page } from "@playwright/test";
import * as allure from "allure-js-commons";
import { BasePage } from "./BasePage";

export class PracticePage extends BasePage {
  // Selectores de elementos
  private radioButton1 = 'input[name="radioButton"][value="radio1"]';
  private radioButton2 = 'input[name="radioButton"][value="radio2"]';
  private radioButton3 = 'input[name="radioButton"][value="radio3"]';

  private option1Checkbox = "#checkBoxOption1";
  private option2Checkbox = "#checkBoxOption2";
  private option3Checkbox = "#checkBoxOption3";

  private dropdown = "#dropdown-class-example";

  private alertButton = "#alertbtn";
  private confirmButton = "#confirmbtn";

  private mouseHoverButton = "#mousehover";

  constructor(page: Page) {
    super(page);
  }

  async selectRadioButton(option: number) {
    await allure.step(`Seleccionar el radio button ${option}`, async () => {
      const radioButtons = [
        this.radioButton1,
        this.radioButton2,
        this.radioButton3,
      ];
      await this.page.waitForSelector(radioButtons[option - 1], {
        state: "visible",
      });
      await this.page.click(radioButtons[option - 1]);
    });
  }

  async selectCheckbox(option: number) {
    await allure.step(`Seleccionar el checkbox ${option}`, async () => {
      const checkboxes = [
        this.option1Checkbox,
        this.option2Checkbox,
        this.option3Checkbox,
      ];
      await this.page.click(checkboxes[option - 1]);
    });
  }

  async selectDropdownOption(value: string) {
    await allure.step(
      `Seleccionar la opción ${value} del dropdown`,
      async () => {
        await this.page.selectOption(this.dropdown, value);
      }
    );
  }

  async triggerAlert() {
    await allure.step("Disparar alerta", async () => {
      await this.page.click(this.alertButton);
      this.page.on("dialog", (dialog) => dialog.accept());
    });
  }

  async triggerConfirmAlert() {
    await allure.step("Disparar alerta de confirmación", async () => {
      await this.page.click(this.confirmButton);
      this.page.on("dialog", (dialog) => dialog.dismiss());
    });
  }

  async mouseHover() {
    await allure.step("Realizar hover sobre el botón", async () => {
      await this.page.hover(this.mouseHoverButton);
    });
  }
}
