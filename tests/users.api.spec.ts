import { test, expect } from '@playwright/test';

test('GET users - JSONPlaceholder', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users');

  console.log('STATUS:', response.status());

  const body = await response.json();
  console.log('USERS COUNT:', body.length);

  expect(response.status()).toBe(200);
  expect(body.length).toBeGreaterThan(0);
});