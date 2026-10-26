import { test, expect } from '@playwright/test';
import { Login } from '../pages/loginpage.js';
import * as allure from 'allure-js-commons'


test.describe.serial('Login page tests', () => {
    test('TC_02 : Verify the user is abel to access the login page', async ({ page }) => 
        {
        const login = new Login(page);

        await test.step('Access the login page', async () => {
            await login.loginURL();
        });

        await test.step('Verify the login page', async () => {
            await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
        });
        
    });
    test('TC_02 : Verify the user is getting validation message while trying to login using invalid crediantials', async ({ page }) => 
        {
        const login = new Login(page);

        await test.step('Access the login page', async () => {
            await login.loginURL();
        });

        await test.step('Enter credentials and click login button', async () => {
            await login.login('sreethin.babu@toobler.com', 'password123');
        });
        await test.step('verify the validation message', async()=>
        {
            await expect(page.getByText('Invalid email or password')).toBeVisible();
        });
    });

test('TC_03 : Verify the user is able to login using valid crediantials', async ({ page }) => {
    const login = new Login(page);

    await test.step('Access the login page', async () => {
        await login.loginURL();
    });

    await test.step('Enter credentials and click login button', async () => {
        await login.login('sreethin.babu@toobler.com', 'password');
    });
    await test.step('verify the user is logged in successfully', async()=>
        {
            await expect(page).toHaveURL('https://aievents.brandingnext.com/lobby');
        });
});    
test('TC_04 : Verify the user is able to access the reset password page', async ({ page }) => {
    const login = new Login(page);

    await test.step('Access the login page', async () => {
        await login.loginURL();
    });

    await test.step('click on reset password option', async () => {
        await login.forgotpassword();
    });
    await test.step('verify the page', async () => {
        await expect(page.getByRole('heading', { name: 'Reset Password' })).toBeVisible();
    });
});
test('TC_05 : Verify the user is send reset password link', async ({ page }) => {
    const login = new Login(page);

    await test.step('Access the login page', async () => {
        await login.loginURL();
    });

    await test.step('click on reset password option', async () => {
        await login.forgotpassword();
    });
    await test.step('verify the page', async () => {
        await expect(page.getByRole('heading', { name: 'Reset Password' })).toBeVisible();
    });
    await test.step('Enter the email address and click on send reset link button', async () => {
        await login.resetpassword('sreethin.babu@toobler.com');
    });
    await test.step('verify the message', async () => {
        await expect(page.getByText( /^Password reset link has been dispatched to .+\. Please check your inbox\.$/)).toBeVisible();
    });
        
    });        

    test('TC_06 : Verify the user is able to go back to the login page from reset password page', async ({ page }) => {
    const login = new Login(page);

    await test.step('Access the login page', async () => {
        await login.loginURL();
    });

    await test.step('click on reset password option', async () => {
        await login.forgotpassword();
    });
    await test.step('verify the page', async () => {
        await expect(page.getByRole('heading', { name: 'Reset Password' })).toBeVisible();
    });
    await test.step('click on back to sign in', async () => {
        await login.backtologinpage();
    });
    await test.step('verify the login page', async () => {
       await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    });
        
    });        
});
