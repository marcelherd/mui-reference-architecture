import { test, expect } from "@playwright/test";

test("navigate to the settings page and change the tab", async ({ page }) => {
  // Open the index page and navigate to the settings page
  await page.goto("/");
  await page.getByRole("link", { name: /Settings/i }).click();
  await expect(page).toHaveURL("http://localhost:3000/settings");

  // Ensure the titles are visible
  await expect(page.getByRole("heading", { name: /Settings/i })).toBeVisible();
  await expect(
    page.getByText(/Manage your account settings and set e-mail preferences./i)
  ).toBeVisible();

  // Ensure the selected property is set correctly initially
  await expect(page.getByRole("tab", { name: /Profile/i })).toHaveClass(
    /Mui-selected/i
  );
  await expect(page.getByRole("tab", { name: /Account/i })).not.toHaveClass(
    /Mui-selected/i
  );

  // Ensure that the profile tab has the correct content
  await expect(page.getByRole("heading", { name: /Profile/i })).toBeVisible();
  await expect(
    page.getByText(/This is how others will see you on the site./i)
  ).toBeVisible();
  await expect(page.getByLabel(/Username/i)).toBeVisible();

  // Navigate to the Account tab and ensure the selected property is set correctly
  await page.getByRole("tab", { name: /Account/i }).click();
  await expect(page.getByRole("tab", { name: /Profile/i })).not.toHaveClass(
    /Mui-selected/i
  );
  await expect(page.getByRole("tab", { name: /Account/i })).toHaveClass(
    /Mui-selected/i
  );

  // Ensure the content of the tab has changed
  await expect(page.getByRole("heading", { name: /Account/i })).toBeVisible();
  await expect(
    page.getByText(
      /Update your account settings. Set your preferred language and timezone./i
    )
  ).toBeVisible();
});
