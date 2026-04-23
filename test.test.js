test('loads homepage and clicks CTA', async () => {
  await page.goto('https://example.com');
  await page.click('#cta-button');
  await page.waitForSelector('.success-message');

  const text = await page.$eval('.success-message', el => el.textContent);
  expect(text).toContain('Success');
});