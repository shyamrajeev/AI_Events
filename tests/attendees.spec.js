import { test, expect } from '@playwright/test';
import { Login } from '../pages/loginpage.js';
import {Lobby} from '../pages/lobbypage.js';
import {Attendees} from '../pages/attendees.js';
import { EventsData } from '../Test_Data/Eventsdata';
import * as allure from 'allure-js-commons'

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
            await expect(page.getByRole('heading', { name: 'Add New Attendee' })).toHaveText('Add New Attendee');

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
            await expect(page.getByText('Password must be at least 6 characters', { exact: true })).toBeVisible();
            await expect(page.getByText('Displayed role is required', { exact: true })).toBeVisible();

        });
    });   
     test('TC_04: Verify validation message is shown for password field if the requirement is not met', async ({ page }) => 
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
            await expect(page.getByRole('heading', { name: 'Add New Attendee' })).toHaveText('Add New Attendee');
        }); 
        await test.step('Enter attendee details and click on add button',async()=>
        {
          await attendee.password_validation();
          await attendee.add_button();
        });
        await test.step('Verify password validation',async()=>
        {
          await expect(page.getByText('Password must be at least 6 characters', { exact: true })).toHaveText('Password must be at least 6 characters');
        });
    });    
    test('TC_05: Verify an attendee can be added',async({page})=>
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
            await page.waitForTimeout(2000);
        });   
        await test.step('Fill attendee details and click on add button',async()=>
        {
            await attendee.add_attendee();
            await attendee.add_button();
            await expect(page.getByText('Attendee added successfully')).toBeVisible();
        });
        await test.step('Verify the added attendee is visible on the attendee list',async()=>
        {
            await page.getByRole('textbox', { name: 'Search by name or email...' }).fill(EventsData.add_attendee.email);
            await expect(page.getByText(EventsData.add_attendee.email)).toHaveText(EventsData.add_attendee.email);
        });
    });
    test('TC_06: Verify attendee can be updated',async({page})=>
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
            await page.waitForTimeout(2000);
        });
        await test.step('click on add attendee button', async()=>
        {
            await attendee.add_attendeebutton();
        });   
        await test.step('Fill attendee details and click on add button',async()=>
        {
            await attendee.update_attendee();
            await attendee.add_button();
            await expect(page.getByText('Attendee added successfully')).toBeVisible();
        });
        await test.step('access the added attendee', async()=>
        {
            await attendee.search_and_openactionmenu();
            await page.getByRole('button', { name: 'Edit Profile' }).click();
            await page.waitForTimeout(2000);
            await expect( page.locator('input[type="email"]')).toHaveValue(EventsData.update_attendee.email);
            await attendee.update_attendee_data();
            await attendee.update_button();
            await expect(page.getByText('Attendee updated successfully')).toBeVisible();
        });
         await test.step('Verify the updated attendee data',async()=>
        {
            await attendee.search_and_openactionmenu();
            await page.getByRole('button', { name: 'Edit Profile' }).click();
            await expect( page.locator('input[type="email"]')).toHaveValue(EventsData.update_attendee.email);
            await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveValue(EventsData.update_attendeedata.first_name);
            await expect(page.getByRole('textbox', { name: 'Last Name' })).toHaveValue(EventsData.update_attendeedata.last_name);
            await expect(page.getByRole('textbox', { name: 'Company Name' })).toHaveValue(EventsData.update_attendeedata.company);
            await expect(page.getByRole('textbox', { name: 'Job Title' })).toHaveValue(EventsData.update_attendeedata.job);

        });
    });   
     test('TC_07: Verify attendee can be deleted',async({page})=>
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
            await page.waitForTimeout(2000);
        });   
        await test.step('Fill attendee details and click on add button',async()=>
        {
            await attendee.delete_attendee();
            await attendee.add_button();
        }); 
        await test.step('search attendee to be deleted',async()=>
        {
            await page.getByRole('textbox', { name: 'Search by name or email...' }).fill(EventsData.delete_attendee.email);
            await expect(page.getByRole('cell', { name: EventsData.delete_attendee.email })).toBeVisible();
            
        });  
         await test.step('Delete the attendee',async()=>
        {  
            const deleteattendeeEmail = EventsData.delete_attendee.email;
            const attendeeRow = page.locator('table tbody tr').filter({hasText: deleteattendeeEmail});
            await expect(attendeeRow).toHaveCount(1);
            await attendeeRow.locator('button').filter({ hasText: '⋮' }).click();
            await page.getByRole('button', { name: 'Delete Attendee' }).click();
            await page.getByRole('button', { name: 'Confirm' }).click();

        });
         await test.step('Verify the attendee is deleted',async()=>
        {
            await page.getByRole('textbox', { name: 'Search by name or email...' }).fill(EventsData.delete_attendee.email);
            await expect(page.getByText('No users', { exact: true })).toHaveText('No users');
        });    
    });   
     test('TC_08: Verify attendee can be searched',async({page})=>
    {
     const login = new Login(page);
        const attendee = new Attendees(page);
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const lobby = new Lobby(page, targetEvent);
        const attendeeRows = page.locator('table.stage-table tbody tr');
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
         await test.step('Search for a attendee', async()=>
        {
             await attendee.search_attendee();
            await expect(attendeeRows.first()).toBeVisible();

            const rowCount = await attendeeRows.count();
            for (let index = 0; index < rowCount; index++) {
                const cells = attendeeRows.nth(index).locator('td');
                const [name, email] = await Promise.all([
                    cells.nth(0).innerText(),
                    cells.nth(1).innerText(),
                ]);
                const searchTerm = attendee.getsearchTerm();
                const normalizedSearchTerm = searchTerm.toLocaleLowerCase();
                expect(
                    name.toLocaleLowerCase().includes(normalizedSearchTerm)
                    || email.toLocaleLowerCase().includes(normalizedSearchTerm)).toBe(true);
            }
        });
    });
     test('TC_09: Verify empty state message when no attendees is in the search result',async({page})=>
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
         await test.step('Search for a attendee', async()=>
        {  
            await attendee.empty_search();

        });    
        await test.step('Verify empty state message',async()=>
        {
            await expect(page.getByText('No users', { exact: true })).toHaveText('No users');
        });
     });  
    test('TC_10: Verify validation message shows on trying to update the attendee password with current password',async({page})=>
    {
     const login = new Login(page);
        const attendee = new Attendees(page);
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const lobby = new Lobby(page, targetEvent);
        const attendeeRows = page.locator('table.stage-table tbody tr');
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
        await test.step('Access change password window', async()=>
        {
            await attendee.search_and_openactionmenu();
            await page.waitForTimeout(2000);
            await page.getByRole('button', { name: 'Change Password' }).click();
            await expect(page.getByRole('heading', { name: 'Change Password' })).toBeVisible();
        });
        await test.step('Enter the same old password',async()=>
        {
            await attendee.changepswd_old();
            await expect(page.getByText('This is your old password try something new')).toBeVisible();
        });
    });      
    test('TC_11: Verify the attendee password can be updated',async({page})=>
    {
     const login = new Login(page);
        const attendee = new Attendees(page);
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const lobby = new Lobby(page, targetEvent);
        const attendeeRows = page.locator('table.stage-table tbody tr');
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
        await test.step('Access change password window', async()=>
        {
            await attendee.search_and_openactionmenu();
            await page.getByRole('button', { name: 'Change Password' }).click();
            await expect(page.getByRole('heading', { name: 'Change Password' })).toBeVisible();
        });
        await test.step('Enter the same old password',async()=>
        {
            await attendee.changepswd();
            await expect(page.getByText('Password updated successfully')).toBeVisible();
        });
    });      
     test('TC_12: Verify password validation shows if added passwords do not match',async({page})=>
    {
     const login = new Login(page);
        const attendee = new Attendees(page);
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const lobby = new Lobby(page, targetEvent);
        const attendeeRows = page.locator('table.stage-table tbody tr');
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
        await test.step('Access change password window', async()=>
        {
            await attendee.search_and_openactionmenu();
            await page.getByRole('button', { name: 'Change Password' }).click();
            await expect(page.getByRole('heading', { name: 'Change Password' })).toBeVisible();
        });
        await test.step('Enter different passwords',async()=>
        {
            await attendee.changepswd_different();
            await expect(page.getByText('Passwords do not match', { exact: true })).toBeVisible();
        });
    });           
});