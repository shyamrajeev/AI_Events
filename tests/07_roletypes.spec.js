import{test,expect} from '@playwright/test';
import {Login} from '../pages/loginpage';
import { Lobby } from '../pages/lobbypage';
import { RoleTypes } from '../pages/roletypes';
import { EventsData } from '../Test_Data/Eventsdata';
import * as allure from 'allure-js-commons'

async function isRoleEnabled(toggle) {
    return toggle.locator('input[type="checkbox"]').isChecked();
}

function roleCheckbox(toggle) {
    return toggle.locator('input[type="checkbox"]');
}

test.describe('Role type page test cases',()=>
{
    test('TC_01: Verify the user is able to access the role types page',async({page})=>
{   
    const targetEvent = EventsData.event_name_lobbyactions.event_name;
    const login = new Login(page);
    const lobby = new Lobby(page,targetEvent);
    const roletype = new RoleTypes(page);

    await test.step('Login and access the event',async()=>
    {
        await login.loginURL();
        await login.login();
        await lobby.event_admin();
    });
    await test.step('Access and verify the page',async()=>
    {
        await roletype.access_roletypespage();
        await expect(page.getByRole('heading', { name: 'Role Types' })).toBeVisible();
     });
});
test('TC_02: Verify the add role button is present',async({page})=>
{   
    const targetEvent = EventsData.event_name_lobbyactions.event_name;
    const login = new Login(page);
    const lobby = new Lobby(page,targetEvent);
    const roletype = new RoleTypes(page);

    await test.step('Login and access the event',async()=>
    {
        await login.loginURL();
        await login.login();
        await lobby.event_admin();
    });
    await test.step('Access the roletypes page',async()=>
    {
        await roletype.access_roletypespage();
    });
    await test.step('Verify the button is present',async()=>
    {
        await expect(page.getByRole('button', { name: '+ Add Role' })).toBeVisible();
    });
});
test('TC_03: Verify the admin is able to access the add role window',async({page})=>
{   
    const targetEvent = EventsData.event_name_lobbyactions.event_name;
    const login = new Login(page);
    const lobby = new Lobby(page,targetEvent);
    const roletype = new RoleTypes(page);

    await test.step('Login and access the event',async()=>
    {
        await login.loginURL();
        await login.login();
        await lobby.event_admin();
    });
    await test.step('Access the roletypes page',async()=>
    {
        await roletype.access_roletypespage();
    });
    await test.step('Click on add role button',async()=>
    {
        await roletype.addrole_button();
    });
    await test.step('Verify the page',async()=>
    {
        await expect(page.getByRole('heading', { name: 'Add Role' })).toContainText('Add Role');
    });
});
test('TC_04: Verify the mandatory field validaiotn is showing',async({page})=>
{   
    const targetEvent = EventsData.event_name_lobbyactions.event_name;
    const login = new Login(page);
    const lobby = new Lobby(page,targetEvent);
    const roletype = new RoleTypes(page);

    await test.step('Login and access the event',async()=>
    {
        await login.loginURL();
        await login.login();
        await lobby.event_admin();
    });
    await test.step('Access the roletypes page',async()=>
    {
        await roletype.access_roletypespage();
    });
    await test.step('Click on add role button',async()=>
    {
        await roletype.addrole_button();
    });
    await test.step('Click on submit button',async()=>
    {
        await roletype.submit();
    });
    await test.step('Verify the mandatory validation displays',async()=>
    {
        await expect(page.getByText('Please enter a name', { exact: true })).toHaveText('Please enter a name');
    });
});
test('TC_05: Verify Role type can be created',async({page})=>
{   
    const targetEvent = EventsData.event_name_lobbyactions.event_name;
    const login = new Login(page);
    const lobby = new Lobby(page,targetEvent);
    const roletype = new RoleTypes(page);

    await test.step('Login and access the event',async()=>
    {
        await login.loginURL();
        await login.login();
        await lobby.event_admin();
    });
    await test.step('Access the roletypes page',async()=>
    {
        await roletype.access_roletypespage();
    });
    await test.step('Click on add role button',async()=>
    {
        await roletype.addrole_button();
        await page.waitForTimeout(2000);
    });
    await test.step('Enter the role name and click on submit button',async()=>
    {
        await roletype.add_role();
        await roletype.submit();
    });
    await test.step('Verify the created role is displayed on the list',async()=>
    {
       await expect(page.locator('table tbody tr').filter({hasText: EventsData.add_role.Name})).toBeVisible(); });
});
test('TC_06: Verify Role type can be searched',async({page})=>
{   
    const targetEvent = EventsData.event_name_lobbyactions.event_name;
    const login = new Login(page);
    const lobby = new Lobby(page,targetEvent);
    const roletype = new RoleTypes(page);

    await test.step('Login and access the event',async()=>
    {
        await login.loginURL();
        await login.login();
        await lobby.event_admin();
    });
    await test.step('Access the roletypes page',async()=>
    {
        await roletype.access_roletypespage();
    });
    await test.step('Search a role',async()=>
    {
       await roletype.search_role(); 
       const searchText = EventsData.search_role.Name;
       const matchingRows = page.locator('table tbody tr').filter({has: page.locator('td:first-child').filter({hasText: searchText})});
       const count = await matchingRows.count(); 
       for (let i = 0; i < count; i++) 
        {
          const roleName = await matchingRows.nth(i).locator('td:first-child div').innerText();
            expect(roleName.toLowerCase()).toContain(searchText.toLowerCase());
        } 
    });
});
test('TC_07: Verify empty state message shown if no role is displayed on search',async({page})=>
{   
    const targetEvent = EventsData.event_name_lobbyactions.event_name;
    const login = new Login(page);
    const lobby = new Lobby(page,targetEvent);
    const roletype = new RoleTypes(page);

    await test.step('Login and access the event',async()=>
    {
        await login.loginURL();
        await login.login();
        await lobby.event_admin();
    });
    await test.step('Access the roletypes page',async()=>
    {
        await roletype.access_roletypespage();
    });
    await test.step('Search a role',async()=>
    {
       await roletype.empty_rolesearch();
    });
    await test.step('Verify the empty state message',async()=>
    {
         await expect(page.getByText('No roles found', { exact: true })).toBeVisible();
    });
});    
test('TC_08: Verify Role type can be updated',async({page})=>
{   
    const targetEvent = EventsData.event_name_lobbyactions.event_name;
    const login = new Login(page);
    const lobby = new Lobby(page,targetEvent);
    const roletype = new RoleTypes(page);

    await test.step('Login and access the event',async()=>
    {
        await login.loginURL();
        await login.login();
        await lobby.event_admin();
    });
    await test.step('Access the roletypes page',async()=>
    {
        await roletype.access_roletypespage();
    });  
    await test.step('Search roletype and click on edit',async()=>
    {
        await roletype.edit_role();
        const roleName = EventsData.update_role.Name;
        const roleRow = page.locator('table tbody tr').filter({has: page.locator('td:first-child').getByText(roleName, { exact: true })});
        await expect(roleRow).toBeVisible();
        await roleRow.locator('td:last-child button').click();
        await page.getByRole('button', { name: 'Edit' }).click();
        await page.waitForTimeout(2000);
    });   
    await test.step('Update the role and click on submit',async()=>
    {
        await roletype.update_role();
    });   
    await test.step('Verify the role is updated',async()=>
    {
        await expect(page.getByText(EventsData.update_role.Updated_Name, { exact: true })).toBeVisible();
    });
      await test.step('Revert the role name',async()=>
    {   
        const roleName = EventsData.update_role.Updated_Name;
        const roleRow = page.locator('table tbody tr').filter({has: page.locator('td:first-child').getByText(roleName, { exact: true })});
        await expect(roleRow).toBeVisible();
        await roleRow.locator('td:last-child button').click();
        await page.getByRole('button', { name: 'Edit' }).click();
        await page.waitForTimeout(2000);
        await page.getByRole('textbox', { name: 'Display name' }).fill('Delegate');
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.getByText(EventsData.update_role.Name, { exact: true })).toBeVisible();
    });   
});
test('TC_09: Verify Role type can be deleted',async({page})=>
{   
    const targetEvent = EventsData.event_name_lobbyactions.event_name;
    const login = new Login(page);
    const lobby = new Lobby(page,targetEvent);
    const roletype = new RoleTypes(page);

    await test.step('Login and access the event',async()=>
    {
        await login.loginURL();
        await login.login();
        await lobby.event_admin();
    });
    await test.step('Access the roletypes page',async()=>
    {
        await roletype.access_roletypespage();
    });  
    await test.step('Create new role',async()=>
    {
        await roletype.addrole_button();
        await roletype.delete_role();
        const roleName = EventsData.delete_role.Name;
        const roleRow = page.locator('table tbody tr').filter({has: page.locator('td:first-child').getByText(roleName, { exact: true })});
        await expect(roleRow).toBeVisible();
        await roleRow.locator('td:last-child button').click();
        await page.getByRole('button', { name: 'Delete' }).click();
        await page.getByRole('button', { name: 'Delete' }).click();
    });  
    await test.step('Verify the role is deleted',async()=>
    {
        await page.getByRole('textbox', { name: 'Search' }).fill(EventsData.delete_role.Name);
        await expect(page.getByText('No roles found', { exact: true })).toBeVisible();
    });    
});   
test('TC_10: Verify Role type can be deleted',async({page})=>
{   
    const targetEvent = EventsData.event_name_lobbyactions.event_name;
    const login = new Login(page);
    const lobby = new Lobby(page,targetEvent);
    const roletype = new RoleTypes(page);

    await test.step('Login and access the event',async()=>
    {
        await login.loginURL();
        await login.login();
        await lobby.event_admin();
    });
    await test.step('Access the roletypes page',async()=>
    {
        await roletype.access_roletypespage();
    });  
    await test.step('Create new role',async()=>
    {
        await roletype.addrole_button();
        await roletype.samerole_add();
    });
    await test.step('Create role with same details again',async()=>
    {
        await roletype.addrole_button();
        await roletype.samerole_add();
    });
    await test.step('Verify the validaiton message',async()=>
    {
        await expect(page.getByText('Sorry, same role has already')).toBeVisible();
    });
    await test.step('Delete the role',async()=>
    {
        await page.waitForTimeout(2000);
        await page.getByRole('button', { name: '×' }).click();
        const roleName = EventsData.adding_samerole.Name;
        const roleRow = page.locator('table tbody tr').filter({has: page.locator('td:first-child').getByText(roleName, { exact: true })});
        await expect(roleRow).toBeVisible();
        await roleRow.locator('td:last-child button').click();
        await page.getByRole('button', { name: 'Delete' }).click();
        await page.getByRole('button', { name: 'Delete' }).click();
    });
});
test.describe.serial('Role type toggle scenarios', () => {
test('TC_11: Verify Role type toggles can be enabled and disabled', async ({page}) => {
    const targetEvent = EventsData.event_name_lobbyactions.event_name;
    const login = new Login(page);
    const lobby = new Lobby(page,targetEvent);
    const roletype = new RoleTypes(page);

    await test.step('Login and access the event',async()=>
    {
        await login.loginURL();
        await login.login();
        await lobby.event_admin();
    });
    await test.step('Access the roletypes page',async()=>
    {
        await roletype.access_roletypespage();
    });  
    await test.step('Verify each role toggle can be changed and restored', async () => {
        const toggles = [
            roletype.organiser_toggle,
            roletype.delegate_toggle,
            roletype.sponsor_toggle,
            roletype.speaker_toggle,
            roletype.exhibitor_toggle,
        ];

        for (const toggle of toggles) {
            const checkbox = roleCheckbox(toggle);
            const initiallyEnabled = await isRoleEnabled(toggle);
            await toggle.click();
            try {
                await expect(checkbox).toBeChecked({ checked: !initiallyEnabled });
            } finally {
                if (await isRoleEnabled(toggle) !== initiallyEnabled) {
                    await toggle.click();
                }
            }
            await expect(checkbox).toBeChecked({ checked: initiallyEnabled });
        }
    });
});

test('TC_12: Disable all enabled role type toggles', async ({page}) => {
    const targetEvent = EventsData.event_name_lobbyactions.event_name;
    const login = new Login(page);
    const lobby = new Lobby(page,targetEvent);
    const roletype = new RoleTypes(page);

    await test.step('Login and access the event', async () => {
        await login.loginURL();
        await login.login();
        await lobby.event_admin();
    });
    await test.step('Access the roletypes page', async () => {
        await roletype.access_roletypespage();
    });
    await test.step('Disable enabled role toggles and verify all are disabled', async () => {
        const toggles = [
            roletype.organiser_toggle,
            roletype.delegate_toggle,
            roletype.sponsor_toggle,
            roletype.speaker_toggle,
            roletype.exhibitor_toggle,
        ];

        for (const toggle of toggles) {
            const checkbox = roleCheckbox(toggle);
            if (await isRoleEnabled(toggle)) {
                await toggle.click();
            }
            await expect(checkbox).not.toBeChecked();
        }
    });
});

test('TC_13: Enable disabled role type toggles and skip enabled toggles', async ({page}) => {
    const targetEvent = EventsData.event_name_lobbyactions.event_name;
    const login = new Login(page);
    const lobby = new Lobby(page,targetEvent);
    const roletype = new RoleTypes(page);

    await test.step('Login and access the event', async () => {
        await login.loginURL();
        await login.login();
        await lobby.event_admin();
    });
    await test.step('Access the roletypes page', async () => {
        await roletype.access_roletypespage();
    });
    await test.step('Enable only disabled role toggles and verify all are enabled', async () => {
        const toggles = [
            ['Organiser', roletype.organiser_toggle],
            ['Delegate', roletype.delegate_toggle],
            ['Sponsor', roletype.sponsor_toggle],
            ['Speaker', roletype.speaker_toggle],
            ['Exhibitor', roletype.exhibitor_toggle],
        ];

        for (const [, toggle] of toggles) {
            if (!(await isRoleEnabled(toggle))) {
                await toggle.click();
            }
            await expect(roleCheckbox(toggle)).toBeChecked();
        }

        await test.step('Verify all role toggles are enabled', async () => {
            const disabledRoles = [];
            for (const [roleName, toggle] of toggles) {
                if (!(await isRoleEnabled(toggle))) {
                    disabledRoles.push(roleName);
                    console.log(`${roleName} role toggle is disabled.`);
                }
            }
            expect(disabledRoles, 'All role toggles should be enabled').toEqual([]);
        });
    });
});
});
});     
