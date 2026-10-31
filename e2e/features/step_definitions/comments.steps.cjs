const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { uniqueId } = require('../support/helpers.cjs');

When('I write and post a comment', async function () {
  this.commentText = `Comment ${uniqueId()}`;
  await this.page.getByPlaceholder('Write a comment...').fill(this.commentText);
  await this.page.getByRole('button', { name: 'Post Comment' }).click();
});

When('I delete that comment', async function () {
  const comment = this.page.locator('.card').filter({ hasText: this.commentText });
  await expect(comment).toBeVisible();
  await comment.locator('.mod-options i').click();
});

Then('the comment card should be visible with my username', async function () {
  const comment = this.page.locator('.card').filter({ hasText: this.commentText });
  await expect(comment).toBeVisible();
  await expect(comment).toContainText(this.user.username);
});

Then('the comment should no longer be visible', async function () {
  const comment = this.page.locator('.card').filter({ hasText: this.commentText });
  await expect(comment).toHaveCount(0);
});
