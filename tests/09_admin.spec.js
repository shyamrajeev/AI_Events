import{test,expect} from '@playwright/test';
import{Login} from '../pages/loginpage';
import{Lobby} from '../pages/lobbypage';
import{Admin} from '../pages/admins';
import { EventsData } from '../Test_Data/Eventsdata';
import * as allure from 'allure-js-commons'

test.describe('Admin page scenarios',()=>
{
    test('TC_01: Verify the user is able to access the admin page', async({page})=>
    {
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby = new Lobby(page, targetEvent);
        const admin = new Admin(page);

        await test.step('Login to the event and access the event as admin',async()=>
        {
            login.loginURL();
            login.login();
            lobby.event_admin();
        })
         await test.step('Access the admin page',async()=>
        {
            admin.access_adminpage();
            await expect(page.getByRole('heading', { name: 'Admins' })).toBeVisible();
        })
    });
    test('TC_02: Verify the add admin button is present and able to access the add admin window',async({page})=>
    {
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby = new Lobby(page, targetEvent);
        const admin = new Admin(page);

        await test.step('Login to the event and access the event as admin',async()=>
        {
            login.loginURL();
            login.login();
            lobby.event_admin();
        })
         await test.step('Access the admin page',async()=>
        {
            admin.access_adminpage();
        }) 
        await test.step('Check add admin button is present',async()=>
        {
            await expect(page.getByRole('button', { name: '+ Add Admin' })).toBeVisible();
        })
        await test.step('Click on the add admin button',async()=>
        {
           await admin.button_Addadmin();
           await expect(page.getByRole('heading', { name: 'Add Admin' })).toBeVisible();
        })
    })
    test('TC_03: Verify mandatory field validation message displays on clicking add button skipping the mandatory fields',async({page})=>
    {
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby = new Lobby(page, targetEvent);
        const admin = new Admin(page);

        await test.step('Login to the event and access the event as admin',async()=>
        {
            login.loginURL();
            login.login();
            lobby.event_admin();
        })
         await test.step('Access the admin page and click on add admin button',async()=>
        {
            await admin.access_adminpage();
            await admin.button_Addadmin();
        }) 
        await test.step('Click on the add button without filling the mandatory fields',async()=>
        {
           await admin.add_Admin();
        })
        await test.step('Verify mandatory field validaiton message is showing',async()=>
        {
            await expect(page.getByText('First name is required', { exact: true })).toBeVisible();
            await expect(page.getByText('Last name is required', { exact: true })).toBeVisible();
            await expect(page.getByText('Email is required', { exact: true })).toBeVisible();
            await expect(page.getByText('Job is required', { exact: true })).toBeVisible();
            await expect(page.getByText('Company is required', { exact: true })).toBeVisible();
            await expect(page.getByText('Password is required', { exact: true })).toBeVisible();
        })
    })
    test('TC_04: Verify validation message showing for password field on not meeting the password conditions',async({page})=>
    {
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby = new Lobby(page, targetEvent);
        const admin = new Admin(page);

        await test.step('Login to the event and access the event as admin',async()=>
        {
            login.loginURL();
            login.login();
            lobby.event_admin();
        })
         await test.step('Access the admin page and click on add admin button',async()=>
        {
            await admin.access_adminpage();
            await admin.button_Addadmin();
        }) 
        await test.step('fill the admin details',async()=>
        {
           await admin.admin_psdvalidation();
        })

        await test.step('Click on the add button',async()=>
        {
           await admin.add_Admin();
        })
        await test.step('Verify the password validation message',async()=>
        {
           await expect(page.getByText('Password must be minimum 14 characters long, and must contain a symbol', { exact: true })).toBeVisible();
        })
    });
    test('TC_05: Verify event admin can be added',async({page})=>
    {
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby = new Lobby(page, targetEvent);
        const admin = new Admin(page);

        await test.step('Login to the event and access the event as admin',async()=>
        {
            login.loginURL();
            login.login();
            lobby.event_admin();
        })
         await test.step('Access the admin page and click on add admin button',async()=>
        {
            await admin.access_adminpage();
            await admin.button_Addadmin();
        }) 
        await test.step('fill the admin details',async()=>
        {
           await admin.admin_createdetails();
        })

        await test.step('Click on the add button',async()=>
        {
           await admin.add_Admin();
           await page.waitForTimeout(2000);
        })
        await test.step('Verify the admin is successfullt added',async()=>
        {
          await page.getByRole('textbox', { name: 'Search by name or email...' }).fill(EventsData.eventadmin_create.Email);
          const userRow = page.locator('table tbody tr').filter({has: page.getByText(EventsData.eventadmin_create.Email, { exact: true })});
          await expect(userRow).toBeVisible();  
          await expect(userRow).toContainText(EventsData.eventadmin_create.Email);
          await expect(userRow).toContainText(EventsData.eventadmin_create.Company);
          await expect(userRow).toContainText(EventsData.eventadmin_create.Job);
        })
    });
    test('TC_06: Verify enpty state message is displayed when the search does not have any matching admin',async({page})=>
    {
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby = new Lobby(page, targetEvent);
        const admin = new Admin(page);

        await test.step('Login to the event and access the event as admin',async()=>
        {
            login.loginURL();
            login.login();
            lobby.event_admin();
        })
         await test.step('Access the admin page and click on add admin button',async()=>
        {
            await admin.access_adminpage();
            await admin.button_Addadmin();
        }) 
        await test.step('Do a empty search',async()=>
        {
            await admin.emptysearch();
        }) 
        await test.step('Verify empty state message',async()=>
        {
            await expect(page.getByText('No admins match your search.', { exact: true })).toBeVisible();
        })
    });
test.only('TC_07: Verify the admin can be deleted',async({page})=>
    {
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby = new Lobby(page, targetEvent);
        const admin = new Admin(page);

        await test.step('Login to the event and access the event as admin',async()=>
        {
            login.loginURL();
            login.login();
            lobby.event_admin();
        })
         await test.step('Access the admin page and click on add admin button',async()=>
        {
            await admin.access_adminpage();
            await admin.button_Addadmin();
        }) 
         await test.step('Add an admin',async()=>
        {
            await admin.admindelete();
            await admin.add_Admin();
        }) 
        await test.step('Delete the admin and verify the user is deleted from the admins list',async()=>
        {
            await page.getByRole('textbox', { name: 'Search by name or email...' }).fill(EventsData.eventadmin_delete.Email);
            const userRow = page.locator('table tbody tr').filter({has: page.getByText('david.admin@gmail.com', { exact: true })});
            await page.locator('button').filter({ hasText: '⋮' }).first().click();
            await page.getByRole('button', { name: 'Delete Admin' }).click();
            await page.getByRole('button', { name: 'Delete' }).click();
            await expect(page.getByText('Admin deleted successfully')).toBeVisible();
            await page.getByRole('textbox', { name: 'Search by name or email...' }).fill(EventsData.eventadmin_delete.Email);
            await expect(page.getByText('No admins match your search.', { exact: true })).toBeVisible();
        })
    });
    test('TC_08:Verify that removing a admin only removes them from the admin List retaining them in the Attendee List.',async({page})=>
    {
 const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby = new Lobby(page, targetEvent);
        const admin = new Admin(page);

        await test.step('Login to the event and access the event as admin',async()=>
        {
            login.loginURL();
            login.login();
            lobby.event_admin();
        })
         await test.step('Access the admin page and click on add admin button',async()=>
        {
            await admin.access_adminpage();
            await admin.button_Addadmin();
        }) 
         await test.step('Add an admin',async()=>
        {
            await admin.admindelete();
            await admin.add_Admin();
        }) 
        await test.step('Delete the admin and verify the user is deleted from the admins list',async()=>
        {
            await page.getByRole('textbox', { name: 'Search by name or email...' }).fill(EventsData.eventadmin_delete.Email);
            const userRow = page.locator('table tbody tr').filter({has: page.getByText('david.admin@gmail.com', { exact: true })});
            await page.locator('button').filter({ hasText: '⋮' }).first().click();
            await page.getByRole('button', { name: 'Delete Admin' }).click();
            await page.getByRole('button', { name: 'Delete' }).click();
            await expect(page.getByText('Admin deleted successfully')).toBeVisible();
            await page.getByRole('textbox', { name: 'Search by name or email...' }).fill(EventsData.eventadmin_delete.Email);
            await expect(page.getByText('No admins match your search.', { exact: true })).toBeVisible();
        })
        await test.step('Verify the user is still listed under the attendee list',async()=>
        {
            await page.goto('/admin/event/21/attendees');
            
        })
    });

});