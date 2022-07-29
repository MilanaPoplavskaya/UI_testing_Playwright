import { Page } from "@playwright/test";
import { locators } from "../locators/locators";

export class InputPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async typeTextToElement(text: string) {
        await this.page.type(locators.searchInput, text);
        await this.page.keyboard.press("Enter");
        return this.page.innerText(locators.containsText);
    }

    async searchResult() {
        return this.page.innerText(locators.containsText);
    }
}