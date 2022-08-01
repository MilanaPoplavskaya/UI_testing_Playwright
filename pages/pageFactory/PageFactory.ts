import { Page } from "@playwright/test";
import { InputPage } from "../InputPage";
import { FinancePage } from "../FinancePage";
import { MainNewsPage } from "../MainNewsPage";
import { ExchangePage } from "../ExchangePage";

export class PageFactory {
    static getPage(page: Page, pageName: string) {
        switch (pageName) {
            case "Input":
                return new InputPage(page);
            case "Finance":
                return new FinancePage(page);
            case "News":
                return new MainNewsPage(page);
            case "Exchange":
                return new ExchangePage(page);
            default:
                return new InputPage(page);
        }
    }
}