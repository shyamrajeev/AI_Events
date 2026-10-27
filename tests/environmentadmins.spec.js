import { test, expect } from '@playwright/test';
import { Login } from '../pages/loginpage.js';
import { Admin } from '../pages/environmentadmins.js';
import * as allure from 'allure-js-commons'

test.describe.serial('Environment Admin scenarios',()=>
{
    test('TC_01: Verify admin is able to access the environment admin page',async({page})=>
    {
        const login = new Login(page);
        const admin = new Admin(page);
        await test.step('Login to the platform',async()=>
        {
            await login.loginURL();
            await login.login();
        });
        await test.step('click on admin option from navigation',async()=>{
            await admin.access_EnvAdmins();
            await expect(page.getByRole('heading', { name: 'Environment Admins' })).toBeVisible();
        });
    });
    test('TC_02: Verify Add admin button is present',async({page})=>
    {
        const login = new Login(page);
        const admin = new Admin(page);
        await test.step('Login to the platform',async()=>
        {
            await login.loginURL();
            await login.login();
        });
        await test.step('click on admin option from navigation',async()=>{
            await admin.access_EnvAdmins();
            await expect(page.getByRole('heading', { name: 'Environment Admins' })).toBeVisible();
        });
        await test.step('Verify Add admin button is present',async()=>{
            await expect(page.getByRole('button', { name: '+ Add Admin' })).toBeVisible();
        });    
    });
    test('TC_03: Verify on clicking add admin button a slide window is visible with heading Add Admin ',async({page})=>
    {
        const login = new Login(page);
        const admin = new Admin(page);
        await test.step('Login to the platform',async()=>
        {
            await login.loginURL();
            await login.login();
        });
        await test.step('click on admin option from navigation',async()=>{
            await admin.access_EnvAdmins();
            await expect(page.getByRole('heading', { name: 'Environment Admins' })).toBeVisible();
        });
        await test.step('Click on add admin button',async()=>{
           await admin.addadmin_page();
        });
        await test.step('Verify the add admin slide window',async()=>{
           await expect(page.getByRole('heading', { name: 'Add Admin' })).toBeVisible();

        });    
    });
    test('TC_04: Verify the admin gets validation message on skipping mandatory fields ',async({page})=>
    {
        const login = new Login(page);
        const admin = new Admin(page);
        await test.step('Login to the platform',async()=>
        {
            await login.loginURL();
            await login.login();
        });
        await test.step('click on admin option from navigation',async()=>{
            await admin.access_EnvAdmins();
            await expect(page.getByRole('heading', { name: 'Environment Admins' })).toBeVisible();
        });
        await test.step('Click on add admin button',async()=>{
           await admin.addadmin_page();
        });
        await test.step('Verify the add admin slide window',async()=>{
           await expect(page.getByRole('heading', { name: 'Add Admin' })).toBeVisible();

        });    
        await test.step('click on add button',async()=>{
           await admin.add_admin();
        });    
         await test.step('Verify validation message is showing for mandatory fields',async()=>{
           await expect(page.getByText('First name is required', { exact: true })).toBeVisible();
           await expect(page.getByText('Last name is required', { exact: true })).toBeVisible();
           await expect(page.getByText('Email is required', { exact: true })).toBeVisible();
           await expect(page.getByText('Job is required', { exact: true })).toBeVisible();
           await expect(page.getByText('Company is required', { exact: true })).toBeVisible();
           await expect(page.getByText('Password is required', { exact: true })).toBeVisible();    
        });    
    });
    test('TC_05: Verify the admin gets validation message for password fields if it dosent meet the requirement ',async({page})=>
    {
        const login = new Login(page);
        const admin = new Admin(page);
        await test.step('Login to the platform',async()=>
        {
            await login.loginURL();
            await login.login();
        });
        await test.step('click on admin option from navigation',async()=>{
            await admin.access_EnvAdmins();
            await expect(page.getByRole('heading', { name: 'Environment Admins' })).toBeVisible();
        });
        await test.step('Click on add admin button',async()=>{
           await admin.addadmin_page();
        });
        await test.step('Verify the add admin slide window',async()=>{
           await expect(page.getByRole('heading', { name: 'Add Admin' })).toBeVisible();
          });   
        await test.step('Enter admin details and click on add button',async()=>{
            await admin.fill_details_passwordvalidation();
            await admin.add_admin();
        }); 
         await test.step('Verify validation message shows for password',async()=>{
        await expect(page.getByText('Password must be minimum 14 characters long, and must contain a symbol', { exact: true })).toBeVisible();
        }); 

    });  
    test('TC_06: Verify an environment admin can be added',async({page})=>
    {
        const adminDetails = {
            firstName: 'Shyam',
            lastName: 'Rajeev',
            email: 'shyam.rajeev@toobler.com',
        };
        const fullName = `${adminDetails.firstName} ${adminDetails.lastName}`;
        const login = new Login(page);
        const admin = new Admin(page);
        await test.step('Login to the platform',async()=>
        {
            await login.loginURL();
            await login.login();
        });
        await test.step('click on admin option from navigation',async()=>{
            await admin.access_EnvAdmins();
            await expect(page.getByRole('heading', { name: 'Environment Admins' })).toBeVisible();
        });
        await test.step('Click on add admin button',async()=>{
           await admin.addadmin_page();
        }); 
        await test.step('Enter admin details and click on add button',async()=>{
            await admin.fill_details(adminDetails);
            await admin.add_admin();
        });   
        await test.step('Verify the created admin is visible in the table', async () => {
            const adminRow = page.locator('table.stage-table tbody tr')
                .filter({ hasText: adminDetails.email });
            await expect(adminRow).toContainText(fullName);
            await expect(adminRow).toContainText(adminDetails.email);
        });
    });
    test('TC_07: Verify admins can be searched by name or email', async ({ page }) =>
    {
        const login = new Login(page);
        const admin = new Admin(page);
        const searchTerm = 'akhil';
        const adminRows = page.locator('table.stage-table tbody tr');

        await test.step('Login and open Environment Admins', async () => {
            await login.loginURL();
            await login.login();
            await admin.access_EnvAdmins();
            await expect(page.getByRole('heading', { name: 'Environment Admins' })).toBeVisible();
        });

        await test.step(`Search by "${searchTerm}" and verify the matching admin`, async () => {
            await admin.search_admin(searchTerm);
            await expect(adminRows.first()).toBeVisible();

            const rowCount = await adminRows.count();
            for (let index = 0; index < rowCount; index++) {
                const cells = adminRows.nth(index).locator('td');
                const [name, email] = await Promise.all([
                    cells.nth(0).innerText(),
                    cells.nth(1).innerText(),
                ]);
                const normalizedSearchTerm = searchTerm.toLocaleLowerCase();
                expect(
                    name.toLocaleLowerCase().includes(normalizedSearchTerm)
                    || email.toLocaleLowerCase().includes(normalizedSearchTerm)
                ).toBe(true);
            }
        });
    });
test('TC_08: Verify empty state message is showing when the search returns no result ',async({page})=>
    {
        const login = new Login(page);
        const admin = new Admin(page);
        await test.step('Login to the platform',async()=>
        {
            await login.loginURL();
            await login.login();
        });
        await test.step('click on admin option from navigation',async()=>{
            await admin.access_EnvAdmins();
        });
        await test.step('Search an admin',async()=>{
            await admin.search_emptystate();
            await expect(page.getByText('No admins match your search.', { exact: true })).toBeVisible();
        });
    });

    test('TC_09: Verify the edit admin window is accessible and shows correct admin details', async ({ page }) =>
    {
        const adminName = 'Sreethin Babu E';
        const [firstName, ...lastNameParts] = adminName.split(' ');
        const lastName = lastNameParts.join(' ');
        const login = new Login(page);
        const admin = new Admin(page);

        await test.step('Login and open Environment Admins', async () => {
            await login.loginURL();
            await login.login();
            await admin.access_EnvAdmins();
            await expect(page.getByRole('heading', { name: 'Environment Admins' })).toBeVisible();
        });

        await test.step(`Open the edit window for ${adminName}`, async () => {
            await admin.open_edit_admin(adminName);
            await expect(page.getByRole('heading', { name: 'Edit Admin' })).toBeVisible();
        });

        await test.step('Verify the selected admin name in the edit form', async () => {
            await expect(admin.admin_firstname).toHaveValue(firstName);
            await expect(admin.admin_lastname).toHaveValue(lastName);
        });
    });
    test.only('TC_10: Verify updated admin details remain after reopening the edit window', async ({ page }) =>
    {
        const adminDetails = {
            firstName: 'David',
            lastName: 'James',
            email: 'davidjames@gmail.com',
        };
        const updatedAdminDetails = {
            firstName: 'David Updated',
            lastName: 'James Updated',
            job: 'QA Updated',
            company: 'Toobler Updated',
        };
        const fullName = `${adminDetails.firstName} ${adminDetails.lastName}`;
        const updatedFullName = `${updatedAdminDetails.firstName} ${updatedAdminDetails.lastName}`;
        const login = new Login(page);
        const admin = new Admin(page);

        await test.step('Login to the platform', async () =>
        {
            await login.loginURL();
            await login.login();
        });

        await test.step('Open Environment Admins', async () =>
        {
            await admin.access_EnvAdmins();
            await expect(page.getByRole('heading', { name: 'Environment Admins' })).toBeVisible();
        });

        await test.step('Create the admin to update', async () =>
        {
            await admin.addadmin_page();
            await admin.admin_detailsbeforeupdate(adminDetails);
            await admin.add_admin();
        });

        await test.step('Open the created admin edit window', async () =>
        {
            const adminRow = page.locator('table.stage-table tbody tr')
                .filter({ hasText: adminDetails.email });
            await expect(adminRow).toContainText(fullName);
            await admin.open_edit_admin(fullName);
            await expect(page.getByRole('heading', { name: 'Edit Admin' })).toBeVisible();
        });

        await test.step('Update the admin details and save', async () =>
        {
            await admin.admin_detailsafterupdate(updatedAdminDetails);
            await admin.admin_update();
        });

        await test.step('Reopen the updated admin and verify the saved details', async () =>
        {
            const updatedAdminRow = page.locator('table.stage-table tbody tr')
                .filter({ hasText: adminDetails.email });
            await expect(updatedAdminRow).toContainText(updatedFullName);
            await admin.open_edit_admin(updatedFullName);
            await expect(page.getByRole('heading', { name: 'Edit Admin' })).toBeVisible();
            await expect(admin.admin_firstname).toHaveValue(updatedAdminDetails.firstName);
            await expect(admin.admin_lastname).toHaveValue(updatedAdminDetails.lastName);
            await expect(admin.admin_job).toHaveValue(updatedAdminDetails.job);
            await expect(admin.admin_company).toHaveValue(updatedAdminDetails.company);
        });
    });

});