const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { createUser, createArticle, uniqueId } = require('../support/helpers.cjs');

// ---- Given ----

Given('a user account exists with an article via the API and I am signed in', async function () {
  this.user = await createUser(this.apiContext);
  this.article = await createArticle(this.apiContext, this.user);
  await this.page.addInitScript((token) => localStorage.setItem('jwt', token), this.user.token);
});

// ---- When (articles) ----

When('I navigate to the article editor', async function () {
  await this.page.goto('/editor');
});

When('I fill in the article title, about, and body', async function () {
  this.newTitle = `Published Article ${uniqueId()}`;
  await this.page.getByPlaceholder('Article Title').fill(this.newTitle);
  await this.page.getByPlaceholder("What's this article about?").fill('About testing');
  await this.page.getByPlaceholder('Write your article (in markdown)').fill('Body of the article');
});

When('I click {string}', async function (buttonText) {
  await this.page.getByRole('button', { name: buttonText }).click();
});

When('I navigate to that article\'s page', async function () {
  await this.page.goto(`/article/${this.article.slug}`);
});

When('I click {string}', async function (linkOrButton) {
  // Handle both links and buttons
  const locator = this.page.getByRole('link', { name: linkOrButton }).or(
    this.page.getByRole('button', { name: linkOrButton })
  );
  await locator.first().click();
});

When('I update the article title', async function () {
  this.newTitle = `Edited Article ${uniqueId()}`;
  await expect(this.page.getByPlaceholder('Article Title')).toHaveValue(this.article.title);
  await this.page.getByPlaceholder('Article Title').fill(this.newTitle);
});

When('I view the global feed and find the article', async function () {
  await this.page.goto('/');
  await this.page.getByRole('link', { name: 'Global Feed' }).click();
  this.articlePreview = this.page.locator('.article-preview').filter({ hasText: this.article.title });
});

When('I click the favorite button', async function () {
  await this.articlePreview.getByRole('button').click();
});

When('I click "Global Feed"', async function () {
  await this.page.goto('/');
  await this.page.getByRole('link', { name: 'Global Feed' }).click();
});

// ---- Then ----

Then('the URL should match the article page pattern', async function () {
  await expect(this.page).toHaveURL(/\/article\//);
});

Then('the article heading and body should be visible', async function () {
  await expect(this.page.getByRole('heading', { level: 1, name: this.newTitle })).toBeVisible();
  await expect(this.page.getByText('Body of the article')).toBeVisible();
});

Then('the article heading should show the new title', async function () {
  await expect(this.page.getByRole('heading', { level: 1, name: this.newTitle })).toBeVisible();
});

Then('I should be redirected to the home page', async function () {
  await expect(this.page).toHaveURL('/');
});

Then('the user\'s profile should show no articles', async function () {
  await this.page.goto(`/@${this.user.username}`);
  await expect(this.page.getByText('No articles are here... yet.')).toBeVisible();
});

Then('the favorite button count should be {string}', async function (count) {
  await expect(this.articlePreview.getByRole('button')).toHaveText(count);
});

Then('the article should appear in the feed', async function () {
  const articles = this.page.locator('.article-preview');
  await expect(articles.filter({ hasText: this.article.title })).toBeVisible();
  this.articles = articles;
});

Then('there should be at least {int} article', async function (min) {
  expect(await this.articles.count()).toBeGreaterThanOrEqual(min);
});
