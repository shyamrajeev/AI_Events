import { test } from '@playwright/test';
import { Login } from '../pages/loginpage.js';

test.describe('Login page tests', () => {
  test('TC_01 : Verify the user is able to login', async ({ page }) => {
    const login = new Login(page);

    await test.step('Access the login page', async () => {
      await login.loginURL();
    });

    await test.step('Enter credentials and click login button', async () => {
      await login.login('sreethin.babu@toobler.com', 'password');
    });
  });
});