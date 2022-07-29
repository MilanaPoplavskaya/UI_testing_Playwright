import { Page } from "@playwright/test";
import { locators } from "../locators/locators";

export class MainNewsPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async checkMainNews() {
        await this.page.locator(locators.main).click();
    }

    async checkAllNews() {
        return this.page.locator(locators.newsLabel);
    }
}