import { Page } from "@playwright/test";
import { LOCATORS } from "../locators/locators";

export class FinancePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async checkNews() {
        await this.page.locator(LOCATORS.finance).click();
        return this.page.locator(LOCATORS.checkTitle);
    }

    async getTitle() {
        return this.page.locator(LOCATORS.checkTitle);
    }
}