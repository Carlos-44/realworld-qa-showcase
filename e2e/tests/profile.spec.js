import { test, expect } from '@playwright/test';
import { createArticle, createUser, signInWithToken, uniqueId } from './helpers.js';

test.describe('Profile', () => {
  test('[TC-012] [regression] User can update their profile settings', async ({ page, request }) => {
    const user = await createUser(request);
    await signInWithToken(page, user);
    const bio = `QA bio ${uniqueId()}`;

    await page.goto('/settings');
    await expect(page.getByPlaceholder('Username')).toHaveValue(user.username);
    await page.getByPlaceholder('Short bio about you').fill(bio);
    await page.getByRole('button', { name: 'Update Settings' }).click();
    await expect(page).toHaveURL('/');

    await page.goto(`/@${user.username}`);
    await expect(page.getByText(bio)).toBeVisible();
  });

  test('[TC-013] [nightly] [e2e] User profile page displays correct article count', async ({ page, request }) => {
    const user = await createUser(request);
    const first = await createArticle(request, user);
    const second = await createArticle(request, user);

    await page.goto(`/@${user.username}`);

    const articles = page.locator('.article-preview');
    await expect(articles).toHaveCount(2);
    await expect(articles.filter({ hasText: first.title })).toBeVisible();
    await expect(articles.filter({ hasText: second.title })).toBeVisible();
  });
});
