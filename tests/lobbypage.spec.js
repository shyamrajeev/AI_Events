import { test, expect } from '@playwright/test';
import { Login } from '../pages/loginpage.js';
import { Lobby } from '../pages/lobbypage.js';

test.describe.serial('Lobby page scenarios', () => {

    test('TC_01: Verify the search bar is present on the lobby', async ({ page }) => {
        const login = new Login(page);
        const lobby = new Lobby(page);
        await test.step('Login to the Event', async () => {
            await login.loginURL();
            await login.login('sreethin.babu@toobler.com', 'password');
        });
        await test.step('Verify search bar is present', async () => {
            await expect(page.getByPlaceholder('Search Events')).toBeVisible();
        });
    });

    test('TC_02: Verify the user is able to search an Event', async ({ page }) => {
        const login = new Login(page);
        const lobby = new Lobby(page);
        await test.step('Login to the Event', async () => {
            await login.loginURL();
            await login.login('sreethin.babu@toobler.com', 'password');  
        });
        await test.step('Verify search bar is present', async () => {
            await expect(page.getByPlaceholder('Search Events')).toBeVisible();
        });
        const searchKeyword = 'Demo Event';
        await test.step('Enter words to search', async () => {
            await lobby.search(searchKeyword);
        });
        await test.step('Verify events displayed match the searched keyword', async () => {
            await expect(async () => {
                const count = await lobby.event_titles.count();
                expect(count).toBeGreaterThan(0);
                const titles = await lobby.event_titles.allTextContents();
                for (const title of titles) {
                    expect(title.toLowerCase()).toContain(searchKeyword.toLowerCase());
                }
            }).toPass();
        });
    });

    test('TC_03: Verify No Events Found message is displayed if no events displayed on the made search', async ({ page }) => {
        const login = new Login(page);
        const lobby = new Lobby(page);
        await test.step('Login to the Event', async () => {
            await login.loginURL();
            await login.login('sreethin.babu@toobler.com', 'password');
        });
        await test.step('Enter words to search', async () => {
            await lobby.search('No Events');
        });
        await test.step('Verify the empty state message', async () => {
            await expect(page.getByText('No Events Found')).toBeVisible();
        });
    });

    test('TC_04: Check whether the user is able to enter a specific event', async ({ page }) => {
        const login = new Login(page);
        const targetEvent = 'Future-Event';
        const lobby = new Lobby(page, targetEvent);

        await test.step('Login to the Event', async () => {
            await login.loginURL();
            await login.login('sreethin.babu@toobler.com', 'password');
        });

        await test.step(`Click on enter event button`, async () => {
            await lobby.enter_event();
            await expect(page).toHaveURL(/.*\/event\/.*\/home/);
        });
    });

    test('TC_05: Check whether the user is able to enter as admin for a specific event', async ({ page }) => {
        const login = new Login(page);
        const targetEvent = 'Future-Event';
        const lobby = new Lobby(page, targetEvent);

        await test.step('Login to the Event', async () => {
            await login.loginURL();
            await login.login('sreethin.babu@toobler.com', 'password');
        });

        await test.step(`Click on enter admin button`, async () => {
            await lobby.event_admin();
           await expect(page.getByRole('textbox', { name: 'Enter event name' })).toHaveValue(targetEvent);
        });
    });

    test('TC_06: Check whether the user is able to access module settings for a specific event', async ({ page }) => {
        const login = new Login(page);
        const targetEvent = 'Future-Event';
        const lobby = new Lobby(page, targetEvent);

        await test.step('Login to the Event', async () => {
            await login.loginURL();
            await login.login('sreethin.babu@toobler.com', 'password');
        });

        await test.step(`Click on module settings`, async () => {
            await lobby.module_setting();
            await expect(page.getByRole('heading', { name: 'Module Settings' })).toBeVisible();
            await expect(page.locator('p').filter({ hasText: targetEvent })).toBeVisible();
        });
    });

});