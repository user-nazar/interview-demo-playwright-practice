import { Page } from "@playwright/test";
import { DropdownPage } from "../pageObjects/DropdownPage";

export class PageObjectManager {
  private dropdownPage: DropdownPage;

  constructor(private page: Page) {
    this.dropdownPage = new DropdownPage(page);
  }

  getDropdownPage() {
    return this.dropdownPage;
  }
}
