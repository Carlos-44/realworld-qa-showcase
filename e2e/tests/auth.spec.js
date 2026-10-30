import { test, expect } from '@playwright/test';
import { createUser, loginThroughForm, newUserData } from './helpers.js';

test.describe('Authentication', () => {
  test('[TC-001] [smoke] User can register a new account', async ({ page }) => {
    const user = newUserData();

    await page.goto('/register');
    await page.getByPlaceholder('Username').fill(user.username);
    await page.getByPlaceholder('Email').fill(user.email);
    await page.getByPlaceholder('Password').fill(user.password);
    await page.getByRole('button', { name: 'Sign up' }).click();

    await expect(page).toHaveURL('/');
    await expect(page.getByRole('navigation')).toContainText(user.username);
  });

  test('[TC-002] [smoke] User can log in with valid credentials', async ({ page, request }) => {
    const user = await createUser(request);

    await loginThroughForm(page, user.email, user.password);

    await expect(page).toHaveURL('/');
    await expect(page.getByRole('navigation')).toContainText(user.username);
  });

  test('[TC-003] [regression] Login fails with invalid credentials', async ({ page }) => {
    await loginThroughForm(page, 'nobody@example.com', 'wrongpassword');

    await expect(page.locator('.error-messages')).toBeVisible();
    await expect(page).toHaveURL('/login');
    await expect(page.getByRole('navigation')).toContainText('Sign in');
  });

  test('[TC-004] [regression] User can log out', async ({ page, request }) => {
    const user = await createUser(request);
    await loginThroughForm(page, user.email, user.password);
    await expect(page.getByRole('navigation')).toContainText(user.username);

    await page.getByRole('link', { name: 'Settings' }).click();
    await page.getByRole('button', { name: 'Or click here to logout.' }).click();

    await expect(page.getByRole('navigation')).toContainText('Sign in');
    await expect(page.getByRole('navigation')).not.toContainText(user.username);
  });
});
