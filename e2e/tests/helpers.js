import { expect } from '@playwright/test';

export const PASSWORD = 'P@ssword123!';

export function uniqueId() {
  return `${Date.now()}${Math.floor(Math.random() * 1000)}`;
}

export function newUserData() {
  const id = uniqueId();
  return { username: `qauser${id}`, email: `qa+${id}@example.com`, password: PASSWORD };
}

/** Creates a user through the API, so each test owns its data. */
export async function createUser(request) {
  const data = newUserData();
  const response = await request.post('/api/users', { data: { user: data } });
  expect(response.status()).toBe(201);
  const { user } = await response.json();
  return { ...data, token: user.token };
}

/** Creates an article through the API for tests whose focus is elsewhere. */
export async function createArticle(request, user, title = `Seed Article ${uniqueId()}`) {
  const response = await request.post('/api/articles', {
    headers: { Authorization: `Token ${user.token}` },
    data: {
      article: { title, description: 'Created by a test', body: 'Test article body', tagList: [] },
    },
  });
  expect(response.status()).toBe(201);
  const { article } = await response.json();
  return article;
}

/** Starts the browser session as this user, skipping the login form. */
export async function signInWithToken(page, user) {
  await page.addInitScript((token) => localStorage.setItem('jwt', token), user.token);
}

/** Logs in through the real form. */
export async function loginThroughForm(page, email, password) {
  await page.goto('/login');
  await page.getByPlaceholder('Email').fill(email);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Sign in' }).click();
}
