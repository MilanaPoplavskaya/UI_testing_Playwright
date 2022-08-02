import { Page } from "@playwright/test";
import { LOCATORS } from "../locators/locators";

export class InputPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async typeTextToElement(text: string) {
        await this.page.type(LOCATORS.searchInput, text);
        await this.page.keyboard.press("Enter");
        return this.page.innerText(LOCATORS.containsText);
    }

    async searchResult() {
        return this.page.innerText(LOCATORS.containsText);
    }
}