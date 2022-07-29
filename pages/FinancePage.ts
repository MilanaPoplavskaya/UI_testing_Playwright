import { Page } from "@playwright/test";
import { locators } from "../locators/locators";

export class FinancePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async checkNews() {
        await this.page.locator(locators.finance).click();
        return this.page.locator(locators.checkTitle);
    }

    async getTitle() {
        return this.page.locator(locators.checkTitle);
    }
}