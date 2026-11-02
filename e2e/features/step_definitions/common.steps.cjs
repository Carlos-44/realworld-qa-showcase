const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

// Steps shared by more than one feature. Cucumber fails a scenario when two
// definitions match the same line, so each of these must be defined only here.

When('I click {string}', async function (buttonText) {
  await this.page.getByRole('button', { name: buttonText }).click();
});

When('I click the {string} link', async function (linkText) {
  // Some links (e.g. "Edit Article") appear twice on a page; any copy will do.
  await this.page.getByRole('link', { name: linkText }).first().click();
});

Then('I should be redirected to the home page', async function () {
  await expect(this.page).toHaveURL('/');
});
