import { Page } from "@playwright/test";

export class DropdownPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  }

  async getTitle() {
    return await this.page.getByText("Dropdown Example").textContent();
  }

  async getDefaultOptionValue() {
    return await this.page.$eval(
      "select#dropdown-class-example",
      (el: HTMLSelectElement) => el.value
    );
  }

  async selectOption(value: string) {
    await this.page.selectOption("select#dropdown-class-example", { value });
  }

  async getSelectedOptionText() {
    return await this.page.$eval(
      "select#dropdown-class-example > option:checked",
      (el: HTMLOptionElement) => el.textContent
    );
  }
}
