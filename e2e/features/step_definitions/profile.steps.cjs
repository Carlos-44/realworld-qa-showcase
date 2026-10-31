const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { createUser, createArticle, uniqueId } = require('../support/helpers.cjs');

Given('a user account exists with two articles via the API and I am signed in', async function () {
  this.user = await createUser(this.apiContext);
  this.firstArticle = await createArticle(this.apiContext, this.user);
  this.secondArticle = await createArticle(this.apiContext, this.user);
  await this.page.addInitScript((token) => localStorage.setItem('jwt', token), this.user.token);
});

When('I navigate to the settings page', async function () {
  await this.page.goto('/settings');
  await expect(this.page.getByPlaceholder('Username')).toHaveValue(this.user.username);
});

When('I update my bio with a unique value', async function () {
  this.bio = `QA bio ${uniqueId()}`;
  await this.page.getByPlaceholder('Short bio about you').fill(this.bio);
});

When('I click {string}', async function (buttonText) {
  await this.page.getByRole('button', { name: buttonText }).click();
});

When('I visit the user\'s profile page', async function () {
  await this.page.goto(`/@${this.user.username}`);
});

Then('I should be redirected to the home page', async function () {
  await expect(this.page).toHaveURL('/');
});

Then('my profile page should display the new bio', async function () {
  await this.page.goto(`/@${this.user.username}`);
  await expect(this.page.getByText(this.bio)).toBeVisible();
});

Then('{int} article previews should be displayed', async function (count) {
  this.articles = this.page.locator('.article-preview');
  await expect(this.articles).toHaveCount(count);
});

Then('both articles should be visible in the list', async function () {
  await expect(this.articles.filter({ hasText: this.firstArticle.title })).toBeVisible();
  await expect(this.articles.filter({ hasText: this.secondArticle.title })).toBeVisible();
});
