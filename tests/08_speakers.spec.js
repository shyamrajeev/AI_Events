import {test,expect} from '@playwright/test';
import { Login} from '../pages/loginpage';
import { Lobby } from '../pages/lobbypage';
import { Speaker } from '../pages/speakers';
import { EventsData } from '../Test_Data/Eventsdata';
import { spawn } from 'node:child_process';
import * as allure from 'allure-js-commons'

test.describe('speaker page scenarios',()=>
{
    test('TC_01: Verify the user is able to access the speakers page',async({page})=>
    {
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby =new Lobby(page, targetEvent);
        const speaker = new Speaker(page);
        await test.step('Login and enter the event as admin',async()=>
        {   
            await login.loginURL();
            await login.login();
            await lobby.event_admin();
        });
         await test.step('Access the speakers page',async()=>
        {   
            await speaker.access_speakerspage();
        });
        await test.step('Verify the speakers page',async()=>
        {   
            await expect(await page.getByRole('heading', { name: 'Speakers' })).toBeVisible();
        });
    })
    test('TC_02: Verify Add attendee button is present and able to click',async({page})=>
    {
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby =new Lobby(page, targetEvent);
        const speaker = new Speaker(page);
        await test.step('Login and enter the event as admin',async()=>
        {   
            await login.loginURL();
            await login.login();
            await lobby.event_admin();
        });
         await test.step('Access the speakers page',async()=>
        {   
            await speaker.access_speakerspage();
        });
        await test.step('check for add speaker button',async()=>
        {   
            await expect(page.getByRole('button', { name: '+ Add Speaker' })).toBeVisible();
        });
        await test.step('click on add speaker button',async()=>
        {   
            await speaker.add_speakerbutton();
        });
        await test.step('Verfi user gets the add speaker window ',async()=>
        {   
            await expect(await page.getByRole('heading', { name: 'Add New Speaker' })).toBeVisible();
        });
    });   
    test('TC_03: Verify validation message is showing for mandatory fields',async({page})=>
    {
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby =new Lobby(page, targetEvent);
        const speaker = new Speaker(page);
        await test.step('Login and enter the event as admin',async()=>
        {   
            await login.loginURL();
            await login.login();
            await lobby.event_admin();
        });
         await test.step('Access the speakers page',async()=>
        {   
            await speaker.access_speakerspage();
        });
        await test.step('check for add speaker button',async()=>
        {   
            await expect(page.getByRole('button', { name: '+ Add Speaker' })).toBeVisible();
        });
        await test.step('click on add speaker button',async()=>
        {   
            await speaker.add_speakerbutton();
        });
        await test.step('click on add button',async()=>
        {   
            await speaker.add();
        });
        await test.step('Verify the validation message',async()=>
        {   
            await expect(page.getByText('Email is required', { exact: true })).toBeVisible();
            await expect(page.locator('span').filter({ hasText: 'First name is required' }).first()).toBeVisible();
            await expect(page.locator('span').filter({ hasText: 'First name is required' }).first()).toBeVisible();
            await expect(page.getByText('At least one role is required', { exact: true })).toBeVisible();
            await expect(page.getByText('Password must be at least 8 characters', { exact: true })).toBeVisible();
        });
    });
     test('TC_04: Verify user gets empty state message when no speakers is listed on the search',async({page})=>
    {
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby =new Lobby(page, targetEvent);
        const speaker = new Speaker(page);
        await test.step('Login and enter the event as admin',async()=>
        {   
            await login.loginURL();
            await login.login();
            await lobby.event_admin();
        });
         await test.step('Access the speakers page',async()=>
        {   
            await speaker.access_speakerspage();
        });
        await test.step('check for add speaker button',async()=>
        {   
            await expect(page.getByRole('button', { name: '+ Add Speaker' })).toBeVisible();
        });
        await test.step('click on add speaker button',async()=>
        {   
            await speaker.add_speakerbutton();
        });
        await test.step('Search for a speaker',async()=>
        {
            await speaker.empty_search();
        });
        await test.step('Verify empty state message',async()=>
        {
            await expect(page.getByText('No speakers match your search.', { exact: true })).toBeVisible();
        });
    });
     test('TC_05: Verify user gets validation for password field when password requirement is not met',async({page})=>
    {
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby =new Lobby(page, targetEvent);
        const speaker = new Speaker(page);
        await test.step('Login and enter the event as admin',async()=>
        {   
            await login.loginURL();
            await login.login();
            await lobby.event_admin();
        });
         await test.step('Access the speakers page',async()=>
        {   
            await speaker.access_speakerspage();
        });
        await test.step('check for add speaker button',async()=>
        {   
            await expect(page.getByRole('button', { name: '+ Add Speaker' })).toBeVisible();
        });
        await test.step('click on add speaker button',async()=>
        {   
            await speaker.add_speakerbutton();
            await page.waitForTimeout(2000);
        });
        await test.step('fill the date and click on add button',async()=>
        {   
           await speaker.psd_validation();
           await speaker.add();
        });
        await test.step('Verify password vlidaiton message shows',async()=>
        {   
           await expect(page.getByText('Password must be at least 8 characters', { exact: true })).toBeVisible();
        });
    });
    test('TC_06: Verify a speaker can be added',async({page})=>
    {
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby =new Lobby(page, targetEvent);
        const speaker = new Speaker(page);
        await test.step('Login and enter the event as admin',async()=>
        {   
            await login.loginURL();
            await login.login();
            await lobby.event_admin();
        });
         await test.step('Access the speakers page',async()=>
        {   
            await speaker.access_speakerspage();
        });
        await test.step('check for add speaker button',async()=>
        {   
            await expect(page.getByRole('button', { name: '+ Add Speaker' })).toBeVisible();
        });
        await test.step('click on add speaker button',async()=>
        {   
            await speaker.add_speakerbutton();
            await page.waitForTimeout(2000);
        });
        await test.step('fill the date and click on add button',async()=>
        {   
           await speaker.add_speaker();
           await speaker.add();
           await page.waitForTimeout(2000);
        });
        await test.step('Verify the added speaker is listed on the speaker list',async()=>
        {   
          await page.getByRole('textbox', { name: 'Search by name or email...' }).fill(EventsData.add_speaker.Email);
          const speakerEmail = EventsData.add_speaker.Email;
          const speakerRow = page.locator('table tbody tr').filter({has:page.getByText(speakerEmail, { exact: true })});
          await expect(speakerRow).toBeVisible();
        });    
    });
    test('TC_07: Verify validation message shows on adding a speaker with existin email',async({page})=>
    {
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby =new Lobby(page, targetEvent);
        const speaker = new Speaker(page);
        await test.step('Login and enter the event as admin',async()=>
        {   
            await login.loginURL();
            await login.login();
            await lobby.event_admin();
        });
         await test.step('Access the speakers page',async()=>
        {   
            await speaker.access_speakerspage();
        });
        await test.step('check for add speaker button',async()=>
        {   
            await expect(page.getByRole('button', { name: '+ Add Speaker' })).toBeVisible();
        });
        await test.step('click on add speaker button',async()=>
        {   
            await speaker.add_speakerbutton();
            await page.waitForTimeout(2000);
        });
        await test.step('fill the date and click on add button',async()=>
        {   
           await speaker.add_speaker();
           await speaker.add();
           await page.waitForTimeout(2000);
        });
        await test.step('Verify the validation message',async()=>
        {   
          await expect(page.getByText('Duplicate host registration')).toBeVisible();
        });    
    });
    test('TC_08: Verify the added speaker is listed on the attendee list',async({page})=>
    {
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby =new Lobby(page, targetEvent);
        const speaker = new Speaker(page);
        await test.step('Login and enter the event as admin',async()=>
        {   
            await login.loginURL();
            await login.login();
            await lobby.event_admin();
        });
         await test.step('Access the speakers page',async()=>
        {   
            await speaker.access_speakerspage();
        });
        await test.step('check for add speaker button',async()=>
        {   
            await expect(page.getByRole('button', { name: '+ Add Speaker' })).toBeVisible();
        });
        await test.step('click on add speaker button',async()=>
        {   
            await speaker.add_speakerbutton();
            await page.waitForTimeout(2000);
        });
        await test.step('fill the date and click on add button',async()=>
        {   
           await speaker.attendeelist_check();
           await speaker.add();
           await page.waitForTimeout(2000);
        });
        await test.step('Verify the speaker is listed on the attendee page',async()=>
        {   
          await page.goto('/admin/event/17/attendees');
          await page.getByRole('textbox', { name: 'Search by name or email...' }).fill(EventsData.speaker_attendeelist.Email);
          const speakerEmail = EventsData.speaker_attendeelist.Email;
          const attendeeRow = page.locator('table tbody tr').filter({has:page.getByText(speakerEmail, { exact: true })});
          await expect(attendeeRow).toBeVisible();
        });    
    });
    test('TC_09: Verify the speaker details can be updated',async({page})=>
    {
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby =new Lobby(page, targetEvent);
        const speaker = new Speaker(page);
        await test.step('Login and enter the event as admin',async()=>
        {   
            await login.loginURL();
            await login.login();
            await lobby.event_admin();
        });
         await test.step('Access the speakers page',async()=>
        {   
            await speaker.access_speakerspage();
        });
        await test.step('check for add speaker button',async()=>
        {   
            await expect(page.getByRole('button', { name: '+ Add Speaker' })).toBeVisible();
        });
        await test.step('click on add speaker button',async()=>
        {   
            await speaker.add_speakerbutton();
            await page.waitForTimeout(2000);
        });
        await test.step('fill the date and click on add button',async()=>
        {   
           await speaker.addspeaker_4update();
           await speaker.add();
           await page.waitForTimeout(2000);
        });
        await test.step('update the added speaker data',async()=>
        {   
          await page.getByRole('textbox', { name: 'Search by name or email...' }).fill(EventsData.speaker_update.Email);
          const speakerEmail = EventsData.speaker_update.Email;
          const speakerRow = page.locator('table tbody tr').filter({has:page.getByText(speakerEmail, { exact: true })});
          await page.locator('button').filter({ hasText: '⋮' }).first().click();
          await page.getByRole('button', { name: 'Edit Profile' }).click();
          await page.waitForTimeout(2000);
          await speaker.speaker_update();
          await page.waitForTimeout(2000);
        }); 
         await test.step('Verify the changes',async()=>
        {  
          await page.getByRole('textbox', { name: 'Search by name or email...' }).fill(EventsData.speaker_update.Email);
          const speakerEmail = EventsData.speaker_update.Email;
          const speakerRow = page.locator('table tbody tr').filter({has:page.getByText(speakerEmail, { exact: true })});
          await page.locator('button').filter({ hasText: '⋮' }).first().click();
          await page.getByRole('button', { name: 'Edit Profile' }).click();
          await page.waitForTimeout(2000);
          await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveValue(EventsData.update_speakerdata.first_name);
          await expect(page.getByRole('textbox', { name: 'Last Name' })).toHaveValue(EventsData.update_speakerdata.last_name);
          await expect(page.getByRole('textbox', { name: 'Company Name' })).toHaveValue(EventsData.update_speakerdata.company);
          await expect(page.getByRole('textbox', { name: 'Job Title' })).toHaveValue(EventsData.update_speakerdata.job);  
          await expect(page.locator('[name="attendeeType"]')).toHaveValue(EventsData.update_speakerdata.type);
          await expect(page.getByRole('textbox', { name: 'Enter speaker biography...' })).toHaveValue(EventsData.update_speakerdata.bio);  
        });   
    });
    test('TC_10: Verify a speaker can be deleted',async({page})=>
    {
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby =new Lobby(page, targetEvent);
        const speaker = new Speaker(page);
        await test.step('Login and enter the event as admin',async()=>
        {   
            await login.loginURL();
            await login.login();
            await lobby.event_admin();
        });
         await test.step('Access the speakers page',async()=>
        {   
            await speaker.access_speakerspage();
        });
        await test.step('check for add speaker button',async()=>
        {   
            await expect(page.getByRole('button', { name: '+ Add Speaker' })).toBeVisible();
        });
        await test.step('click on add speaker button',async()=>
        {   
            await speaker.add_speakerbutton();
            await page.waitForTimeout(2000);
        });
        await test.step('fill the date and click on add button',async()=>
        {   
           await speaker.speaker_delete();
           await speaker.add();
           await page.waitForTimeout(2000);
        });
        await test.step('Delete the speaker',async()=>
        {   
            await page.getByRole('textbox', { name: 'Search by name or email...' }).fill(EventsData.speaker_delete.Email);
            const speakerEmail = EventsData.speaker_delete.Email;
            const speakerRow = page.locator('table tbody tr').filter({has:page.getByText(speakerEmail, { exact: true })});
            await page.locator('button').filter({ hasText: '⋮' }).first().click();
            await page.getByRole('button', { name: 'Delete Speaker' }).click();
            await page.getByRole('button', { name: 'Delete' }).click();

        });
         await test.step('Verify the user is removed from the speakers list',async()=>
        {  
            await page.getByRole('textbox', { name: 'Search by name or email...' }).fill(EventsData.speaker_delete.Email);
            await expect(await page.getByText('No speakers match your search.', { exact: true })).toBeVisible();
        });
    });
    test.only('TC_11:Verify that removing a speaker only removes them from the Speaker List, while retaining them in the Attendee List.',async({page})=>
    {
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby =new Lobby(page, targetEvent);
        const speaker = new Speaker(page);
        await test.step('Login and enter the event as admin',async()=>
        {   
            await login.loginURL();
            await login.login();
            await lobby.event_admin();
        });
         await test.step('Access the speakers page',async()=>
        {   
            await speaker.access_speakerspage();
        });
        await test.step('check for add speaker button',async()=>
        {   
            await expect(page.getByRole('button', { name: '+ Add Speaker' })).toBeVisible();
        });
        await test.step('click on add speaker button',async()=>
        {   
            await speaker.add_speakerbutton();
            await page.waitForTimeout(2000);
        });
        await test.step('fill the date and click on add button',async()=>
        {   
           await speaker.speaker_delete();
           await speaker.add();
           await page.waitForTimeout(2000);
        });
        await test.step('Delete the speaker',async()=>
        {   
            await page.getByRole('textbox', { name: 'Search by name or email...' }).fill(EventsData.speaker_delete.Email);
             const speakerEmail = EventsData.speaker_delete.Email;
            const speakerRow = page.locator('table tbody tr').filter({has:page.getByText(speakerEmail, { exact: true })});
            await page.locator('button').filter({ hasText: '⋮' }).first().click();
            await page.getByRole('button', { name: 'Delete Speaker' }).click();
            await page.getByRole('button', { name: 'Delete' }).click();

        });
         await test.step('Verify the removed speaker is still visible on the attendee list',async()=>
        {  
            await page.goto('/admin/event/21/attendees')
            await page.getByRole('textbox', { name: 'Search by name or email...' }).fill(EventsData.speaker_delete.Email);
            const speakerEmail = EventsData.speaker_delete.Email;
            const speakerRow = page.locator('table tbody tr').filter({has:page.getByText(speakerEmail, { exact: true })});
            await expect(speakerRow).toBeVisible();

        });
    });
});
