import { Page } from "@playwright/test";
import { LOCATORS } from "../locators/locators";

export class MainNewsPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async checkMainNews() {
        await this.page.locator(LOCATORS.main).click();
    }

    async checkAllNews() {
        return this.page.locator(LOCATORS.newsLabel);
    }
}