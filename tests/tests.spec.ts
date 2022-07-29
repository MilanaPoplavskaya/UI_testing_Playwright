import { expect, test } from "@playwright/test";
import { InputPage } from "../pages/InputPage";
import { FinancePage } from "../pages/FinancePage";
import { MainNewsPage } from "../pages/MainNewsPage";
import { ExchangePage } from "../pages/ExchangePage";

test.describe("testing 3dnews.ru", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });
    test("main navigation", async ({ page }) => {
        await expect(page).toHaveURL("https://3dnews.ru/");
    });
    test("Check input field", async ({ page }) => {
        const inputPage = new InputPage(page);
        await inputPage.typeTextToElement("Typescript");
        const expectedResult = await inputPage.searchResult();
        expect(expectedResult).toContain("Microsoft");
    });
    test("Check IT - news", async ({ page }) => {
        const financePage = new FinancePage(page);
        await financePage.checkNews();
        const title = await financePage.getTitle();
        await expect(title).toBeEnabled();
    });
    test("Check main news", async ({ page }) => {
        const mainNews = new MainNewsPage(page);
        await mainNews.checkMainNews();
        const allNews = await mainNews.checkAllNews();
        await expect(allNews).toBeVisible();
    });
    test("Check exchange rate", async ({ page }) => {
        const exchangePage = new ExchangePage(page);
        await exchangePage.checkExchangeRate();
        const currency = await exchangePage.checkCurrencyIsExist();
        await expect(currency).toHaveText("USD");
    });
});