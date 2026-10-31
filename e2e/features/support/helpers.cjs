/** BDD-compatible CJS port of the ESM helpers used in the Playwright specs */
const { expect } = require('@playwright/test');

const PASSWORD = 'P@ssword123!';

function uniqueId() {
  return `${Date.now()}${Math.floor(Math.random() * 1000)}`;
}

function newUserData() {
  const id = uniqueId();
  return { username: `qauser${id}`, email: `qa+${id}@example.com`, password: PASSWORD };
}

async function createUser(apiContext) {
  const data = newUserData();
  const response = await apiContext.post('/api/users', { data: { user: data } });
  const { user } = await response.json();
  return { ...data, token: user.token };
}

async function createArticle(apiContext, user, title = `Seed Article ${uniqueId()}`) {
  const response = await apiContext.post('/api/articles', {
    headers: { Authorization: `Token ${user.token}` },
    data: {
      article: { title, description: 'Created by a test', body: 'Test article body', tagList: [] },
    },
  });
  const { article } = await response.json();
  return article;
}

async function signInWithToken(page, user) {
  await page.addInitScript((token) => localStorage.setItem('jwt', token), user.token);
}

async function loginThroughForm(page, email, password) {
  await page.goto('/login');
  await page.getByPlaceholder('Email').fill(email);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Sign in' }).click();
}

module.exports = { PASSWORD, uniqueId, newUserData, createUser, createArticle, signInWithToken, loginThroughForm };
