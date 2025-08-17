import { expect, test } from "@playwright/test";
import Common from "../pages/common.screen";

test.beforeEach(async ({ page }) => {
  await page.goto("https://thinking-tester-contact-list.herokuapp.com/login");
  await page.screenshot({ path: "artifacts/Dashboard.jpg" });
});

test.afterAll(async () => {
  console.log("Done Testing!");
});

test.describe("Ultimate QA Testing", () => {
  test("Login Fields Testing", async ({ page }) => {
    await expect(page.getByText("Incorrect username or password")).toBeHidden();
    await page.locator("#email").fill("test@test.com");
    await page.locator("#password").fill("password");
    await page.locator("#submit").click();
    await page.waitForTimeout(2000);
    await expect(
      page.getByText("Incorrect username or password")
    ).toBeVisible();
    await page.screenshot({ path: "artifacts/screenshot.jpg" });
  });

  test("Sign Up Field Testing", async ({ page }) => {
    await page.locator("#signup").isVisible();
    await page.screenshot({ path: "artifacts/signUp.jpg" });
    await page.locator("#signup").click();
    await page.screenshot({ path: "artifacts/screenshotClicked.jpg" });
  });
});
