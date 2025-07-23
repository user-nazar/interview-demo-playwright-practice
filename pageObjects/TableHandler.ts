// pages/TableHandler.ts
import { Page } from "@playwright/test";

export class TableHandler {
  private page: Page;
  private tableSelector: string;

  constructor(page: Page, tableSelector: string = ".tableFixHead") {
    this.page = page;
    this.tableSelector = tableSelector;
  }

  async getRowCount(): Promise<number> {
    await this.page.waitForSelector(`${this.tableSelector} tbody tr`, {
      state: "attached",
    });
    return await this.page.locator(`${this.tableSelector} tbody tr`).count();
  }

  async getColumnValues(columnIndex: number): Promise<string[]> {
    return await this.page
      .locator(`${this.tableSelector} tbody tr td:nth-child(${columnIndex})`)
      .allTextContents();
  }
}
