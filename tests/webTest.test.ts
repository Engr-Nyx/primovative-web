import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://arcee-tomaquin-8967251.postman.co/workspace/76b955d1-64d3-4da6-8843-ff803bb6fb67/request/47642588-891d148c-a104-4c36-b51f-024e31817d30"
  );
});

test.afterAll(async () => {
  console.log("Done Testing!");
});

test.describe("Postman Testing", () => {
  test("Postman Form Fields Testing", async ({ page }) => {
    await page.waitForTimeout(5000);
    await page.screenshot({ path: "artifacts/postmanLoginDashboard.jpg" });
    await page.locator("#username").fill("arcee.tomaquin@gmail.com");
    await page.screenshot({ path: "artifacts/postmanUsernameFill.jpg" });
    await page.locator("#password").fill("dasdadsadasdasd");
    await page.screenshot({ path: "artifacts/postmanpassword.jpg" });
  });

  test("Google Connection Testing", async ({ page }) => {
    await page.goto("https://www.postman.com/");
    await page.waitForTimeout(3000);
    await page.screenshot({ path: "artifacts/postmandDashboard.jpg" });
    await page.locator(".btn btn-secondary google-sign-in").click();
    await page.screenshot({ path: "artifacts/postmanGoogle.jpg" });
    await page.waitForTimeout(3000);
    await page.locator(".LbOduc").click();
    await page.screenshot({ path: "artifacts/postmangooglSelect.jpg" });
  });
});
