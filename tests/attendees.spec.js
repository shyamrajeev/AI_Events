import { test, expect } from '@playwright/test';
import { Login } from '../pages/loginpage.js';
import {Lobby} from '../pages/lobbypage.js';
import {Attendees} from '../pages/attendees.js';
import { EventsData } from '../Test_Data/Eventsdata';

test.describe.serial('Attendee scenarios', () => 
    {    
    test('TC_01: Verify the admin is able to access the attendees page', async ({ page }) => 
    {
        const login = new Login(page);
        const attendee = new Attendees(page);
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const lobby = new Lobby(page, targetEvent);
        
        await test.step('login to the platform', async () => 
        {
            await login.loginURL();
            await login.login();
        });
        await test.step(`Click on enter admin button`, async () => 
        {
            await lobby.event_admin();
            await expect(page.getByRole('textbox', { name: 'Enter event name' })).toHaveValue(targetEvent);
        });
        await test.step('click on users', async()=>
        {
            await attendee.access_attendeepage();
        });
        await test.step('Verify the page', async()=>
        {
            await expect(page.getByRole('heading', { name: 'Attendees' })).toBeVisible();
        });
    });
test('TC_02: Verify add attendee button is present and admin able to access the add attendee page', async ({ page }) => 
    {
        const login = new Login(page);
        const attendee = new Attendees(page);
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const lobby = new Lobby(page, targetEvent);
        await test.step('login to the platform', async () => 
        {
            await login.loginURL();
            await login.login();
        });
        await test.step(`Click on enter admin button`, async () => 
        {
            await lobby.event_admin();
        });
        await test.step('click on users', async()=>
        {
            await attendee.access_attendeepage();
        });
        await test.step('click on add attendee button', async()=>
        {
            await attendee.add_attendeebutton();
            await expect(page.getByRole('heading', { name: 'Add New Attendee' })).toBeVisible;

        });
    });
    test('TC_03: Verify validation message is shown on skipping mandatory fields', async ({ page }) => 
    {
        const login = new Login(page);
        const attendee = new Attendees(page);
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const lobby = new Lobby(page, targetEvent);
        await test.step('login to the platform', async () => 
        {
            await login.loginURL();
            await login.login();
        });
        await test.step(`Click on enter admin button`, async () => 
        {
            await lobby.event_admin();
        });
        await test.step('click on users', async()=>
        {
            await attendee.access_attendeepage();
        });
        await test.step('click on add attendee button', async()=>
        {
            await attendee.add_attendeebutton();
        });
        await test.step('click on add button', async()=>
        {
            await attendee.add_button();
        });
        await test.step('Verify the validation messages are shown', async()=>
        {
            await expect(page.getByText('Email is required', { exact: true })).toBeVisible();
            await expect(page.getByText('First name is required', { exact: true })).toBeVisible();
            await expect(page.getByText('Last name is required', { exact: true })).toBeVisible();
            await expect(page.getByText('At least one role must be selected', { exact: true })).toBeVisible();
            await expect(await page.getByText('Password must be at least 6 characters', { exact: true })).toBeVisible();

        });
    });    
});