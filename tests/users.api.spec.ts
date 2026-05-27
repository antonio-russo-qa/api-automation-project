test('GET users - Reqres API', async ({ request }) => {
  test.skip(true, 'Requires API key - disabled in CI');

  const response = await request.get('https://reqres.in/api/users?page=2');

  expect(response.status()).toBe(200);
});