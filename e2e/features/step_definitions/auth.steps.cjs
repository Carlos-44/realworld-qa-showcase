const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { newUserData, createUser, loginThroughForm } = require('../support/helpers.cjs');

// ---- Given ----

Given('I am on the registration page', async function () {
  await this.page.goto('/register');
});

Given('I am on the login page', async function () {
  await this.page.goto('/login');
});

Given('a user account exists via the API', async function () {
  this.user = await createUser(this.apiContext);
});

Given('a user account exists via the API and I am signed in', async function () {
  this.user = await createUser(this.apiContext);
  await this.page.addInitScript((token) => localStorage.setItem('jwt', token), this.user.token);
});

Given('I am logged in as that user', async function () {
  await this.page.addInitScript((token) => localStorage.setItem('jwt', token), this.user.token);
});

// ---- When ----

When('I fill in a unique username, email, and password', async function () {
  this.user = newUserData();
  await this.page.getByPlaceholder('Username').fill(this.user.username);
  await this.page.getByPlaceholder('Email').fill(this.user.email);
  await this.page.getByPlaceholder('Password').fill(this.user.password);
});

When('I click {string}', async function (buttonText) {
  await this.page.getByRole('button', { name: buttonText }).click();
});

When('I log in with that user\'s email and password', async function () {
  await loginThroughForm(this.page, this.user.email, this.user.password);
});

When('I log in with {string} and {string}', async function (email, password) {
  await loginThroughForm(this.page, email, password);
});

When('I navigate to Settings and click logout', async function () {
  await this.page.getByRole('link', { name: 'Settings' }).click();
  await this.page.getByRole('button', { name: 'Or click here to logout.' }).click();
});

// ---- Then ----

Then('I should be redirected to the home page', async function () {
  await expect(this.page).toHaveURL('/');
});

Then('the navigation should show my username', async function () {
  await expect(this.page.getByRole('navigation')).toContainText(this.user.username);
});

Then('the navigation should show {string}', async function (text) {
  await expect(this.page.getByRole('navigation')).toContainText(text);
});

Then('the navigation should not show the username', async function () {
  await expect(this.page.getByRole('navigation')).not.toContainText(this.user.username);
});

Then('the error messages block should be visible', async function () {
  await expect(this.page.locator('.error-messages')).toBeVisible();
  await expect(this.page).toHaveURL('/login');
});
