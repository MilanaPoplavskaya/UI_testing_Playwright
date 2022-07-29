import { Page } from "@playwright/test";
import { locators } from "../locators/locators";

export class ExchangePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async checkExchangeRate() {
        await this.page.locator(locators.rate).click();
    }

    async checkCurrencyIsExist() {
        return this.page.locator(locators.usd);
    }
}