import { expect, test } from "@playwright/test";
import { InputPage } from "../pages/InputPage";
import { FinancePage } from "../pages/FinancePage";
import { MainNewsPage } from "../pages/MainNewsPage";
import { ExchangePage } from "../pages/ExchangePage";
import { expectedValue } from "../constants/expectedValue";
import { PageFactory } from "../pages/pageFactory/PageFactory";
import {inputTypescript} from "../constants/inputText";

test.describe("testing 3dnews.ru", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });
    test("main navigation", async ({ page }) => {
        await expect(page).toHaveURL(expectedValue.baseURL);
    });
    test("Check input field", async ({ page }) => {
        const input = PageFactory.getPage(page, "Input") as InputPage;
        await input.typeTextToElement(inputTypescript);
        const expectedResult = await input.searchResult();
        expect(expectedResult).toContain(expectedValue.resultOfSearch);
    });
    test("Check IT - news", async ({ page }) => {
        const finance = PageFactory.getPage(page, "Finance") as FinancePage;
        await finance.checkNews();
        const title = await finance.getTitle();
        await expect(title).toBeEnabled();
    });
    test("Check main news", async ({ page }) => {
        const mainNews = PageFactory.getPage(page, "News") as MainNewsPage;
        await mainNews.checkMainNews();
        const allNews = await mainNews.checkAllNews();
        await expect(allNews).toBeVisible();
    });
    test("Check exchange rate", async ({ page }) => {
        const exchange = PageFactory.getPage(page, "Exchange") as ExchangePage;
        await exchange.checkExchangeRate();
        const currency = await exchange.checkCurrencyIsExist();
        await expect(currency).toHaveText(expectedValue.resultOfCurrency);
    });
});