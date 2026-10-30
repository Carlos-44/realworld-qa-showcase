import { test, expect } from '@playwright/test';
import { createArticle, createUser, signInWithToken, uniqueId } from './helpers.js';

test.describe('Articles', () => {
  test('[TC-005] [smoke] User can publish a new article', async ({ page, request }) => {
    const user = await createUser(request);
    await signInWithToken(page, user);
    const title = `Published Article ${uniqueId()}`;

    await page.goto('/editor');
    await page.getByPlaceholder('Article Title').fill(title);
    await page.getByPlaceholder("What's this article about?").fill('About testing');
    await page.getByPlaceholder('Write your article (in markdown)').fill('Body of the article');
    await page.getByRole('button', { name: 'Publish Article' }).click();

    await expect(page).toHaveURL(/\/article\//);
    await expect(page.getByRole('heading', { level: 1, name: title })).toBeVisible();
    await expect(page.getByText('Body of the article')).toBeVisible();
  });

  test('[TC-006] [regression] User can edit an existing article', async ({ page, request }) => {
    const user = await createUser(request);
    const article = await createArticle(request, user);
    await signInWithToken(page, user);
    const newTitle = `Edited Article ${uniqueId()}`;

    await page.goto(`/article/${article.slug}`);
    await page.getByRole('link', { name: 'Edit Article' }).first().click();
    await expect(page.getByPlaceholder('Article Title')).toHaveValue(article.title);
    await page.getByPlaceholder('Article Title').fill(newTitle);
    await page.getByRole('button', { name: 'Publish Article' }).click();

    await expect(page.getByRole('heading', { level: 1, name: newTitle })).toBeVisible();
  });

  test('[TC-007] [regression] User can delete an article', async ({ page, request }) => {
    const user = await createUser(request);
    const article = await createArticle(request, user);
    await signInWithToken(page, user);

    await page.goto(`/article/${article.slug}`);
    await page.getByRole('button', { name: 'Delete Article' }).first().click();
    await expect(page).toHaveURL('/');

    await page.goto(`/@${user.username}`);
    await expect(page.getByText('No articles are here... yet.')).toBeVisible();
  });

  test('[TC-008] [regression] User can favorite an article', async ({ page, request }) => {
    const author = await createUser(request);
    const article = await createArticle(request, author);
    const reader = await createUser(request);
    await signInWithToken(page, reader);

    await page.goto('/');
    await page.getByRole('link', { name: 'Global Feed' }).click();
    const preview = page.locator('.article-preview').filter({ hasText: article.title });
    await expect(preview.getByRole('button')).toHaveText('0');

    await preview.getByRole('button').click();

    await expect(preview.getByRole('button')).toHaveText('1');
  });

  test('[TC-009] [nightly] [e2e] Global feed loads and displays articles', async ({ page, request }) => {
    const user = await createUser(request);
    const article = await createArticle(request, user);

    await page.goto('/');
    await page.getByRole('link', { name: 'Global Feed' }).click();

    const articles = page.locator('.article-preview');
    await expect(articles.filter({ hasText: article.title })).toBeVisible();
    expect(await articles.count()).toBeGreaterThanOrEqual(1);
  });
});
