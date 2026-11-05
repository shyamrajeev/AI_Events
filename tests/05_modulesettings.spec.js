import { test, expect } from '@playwright/test';
import { Login } from '../pages/loginpage.js';
import { Lobby } from '../pages/lobbypage.js';
import {Module_setting} from '../pages/modulesettings.js';
import {EventsData} from '../Test_Data/Eventsdata.js'
import * as allure from 'allure-js-commons'

test.describe.serial('Module settings test scenarios',()=>
{
test('TC_01: Verify the admin is able to access module settings', async ({ page }) => {
        const login = new Login(page);
        const targetEvent = EventsData.event_name_modulesettings.event_name;
        const lobby = new Lobby(page, targetEvent);

        await test.step('Login to the Event', async () => {
            await login.loginURL();
            await login.login();
        });

        await test.step(`Click on module settings`, async () => {
            await lobby.module_setting();
            await expect(page.getByRole('heading', { name: 'Module Settings' })).toBeVisible();
            await expect(page.locator('p').filter({ hasText: targetEvent })).toBeVisible();
        });
    });

    test('TC_02: Verify the admin is able to toggle ON/OFF Core Toggles', async ({ page }) => {
        const login = new Login(page);
        const targetEvent = 'Sample_Event';
        const lobby = new Lobby(page, targetEvent);
        const module = new Module_setting(page);

        await test.step('Login to the Event', async () => {
            await login.loginURL();
            await login.login();
        });

        await test.step(`Click on module settings`, async () => {
            await lobby.module_setting();
            await expect(page.getByRole('heading', { name: 'Module Settings' })).toBeVisible();
            await expect(page.locator('p').filter({ hasText: targetEvent })).toBeVisible();
        });

        await test.step('click the toggle buttons',async()=>
        {
           await module.coretoggles();
           await module.registrationtoggle();
           await module.communicationtoggles();
        });

        await test.step('click on save changes button',async()=>
        {
           await module.savechanges();
            await expect(page.getByText('Module settings saved')).toBeVisible();
        });
    });
test('TC_03: Verify the admin is able to toggle OFF the enabled toggles', async ({ page }) => {
        const login = new Login(page);
        const targetEvent = 'Sample_Event';
        const lobby = new Lobby(page, targetEvent);
        const module = new Module_setting(page);

        await test.step('Login to the Event', async () => {
            await login.loginURL();
            await login.login();
        });

        await test.step(`Click on module settings`, async () => {
            await lobby.module_setting();
            await expect(page.getByRole('heading', { name: 'Module Settings' })).toBeVisible();
            await expect(page.locator('p').filter({ hasText: targetEvent })).toBeVisible();
        });

        await test.step('click the toggle buttons',async()=>
        {
           await module.coretogglesOffIfOn();
           await module.registrationtoggleOffIfOn();
           await module.communicationtogglesOffIfOn();
        });
        await test.step('click on save changes button',async()=>
        {
           await module.savechanges();
            await expect(page.getByText('Module settings saved')).toBeVisible();
        });
    });
    test('TC_03: Verify the admin is able to toggle on the disabled toggles', async ({ page }) => {
        const login = new Login(page);
        const targetEvent = 'Sample_Event';
        const lobby = new Lobby(page, targetEvent);
        const module = new Module_setting(page);

        await test.step('Login to the Event', async () => {
            await login.loginURL();
            await login.login();
        });

        await test.step(`Click on module settings`, async () => {
            await lobby.module_setting();
            await expect(page.getByRole('heading', { name: 'Module Settings' })).toBeVisible();
            await expect(page.locator('p').filter({ hasText: targetEvent })).toBeVisible();
        });

        await test.step('click the toggle buttons',async()=>
        {
           await module.coretogglesOnIfOff();
           await module.registrationtoggleOnIfOff();
           await module.communicationtogglesOnIfOff();
        });
        await test.step('click on save changes button',async()=>
        {
           await module.savechanges();
            await expect(page.getByText('Module settings saved')).toBeVisible();
        });
    });
    
});