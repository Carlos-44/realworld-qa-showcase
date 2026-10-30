import { test, expect } from '@playwright/test';
import { createArticle, createUser, signInWithToken, uniqueId } from './helpers.js';

async function postComment(page, text) {
  await page.getByPlaceholder('Write a comment...').fill(text);
  await page.getByRole('button', { name: 'Post Comment' }).click();
}

test.describe('Comments', () => {
  test('[TC-010] [regression] User can post a comment on an article', async ({ page, request }) => {
    const user = await createUser(request);
    const article = await createArticle(request, user);
    await signInWithToken(page, user);
    const text = `Comment ${uniqueId()}`;

    await page.goto(`/article/${article.slug}`);
    await postComment(page, text);

    const comment = page.locator('.card').filter({ hasText: text });
    await expect(comment).toBeVisible();
    await expect(comment).toContainText(user.username);
  });

  test('[TC-011] [regression] User can delete their own comment', async ({ page, request }) => {
    const user = await createUser(request);
    const article = await createArticle(request, user);
    await signInWithToken(page, user);
    const text = `Comment ${uniqueId()}`;

    await page.goto(`/article/${article.slug}`);
    await postComment(page, text);
    const comment = page.locator('.card').filter({ hasText: text });
    await expect(comment).toBeVisible();

    await comment.locator('.mod-options i').click();

    await expect(comment).toHaveCount(0);
  });
});
