import { Page } from "@playwright/test";
import { LOCATORS } from "../locators/locators";

export class ExchangePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async checkExchangeRate() {
        await this.page.locator(LOCATORS.rate).click();
    }

    async checkCurrencyIsExist() {
        return this.page.locator(LOCATORS.usd);
    }
}