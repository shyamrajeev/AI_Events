import{test,expect} from '@playwright/test';
import { Login } from '../pages/loginpage';
import { Lobby } from '../pages/lobbypage';
import {AdminRedirection} from '../pages/adminpageredirection';
import { EventsData } from '../Test_Data/Eventsdata';
import * as allure from 'allure-js-commons'

test.describe('Admin side page redirections',()=>
{
test('TC_01:Verify the admim redirects correctly to the sections on admin side',async({page})=>
{
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby = new Lobby(page, targetEvent);
        const adminredirection = new AdminRedirection(page);
await test.step('Login and enter the event as admin',async()=>
{
    await login.loginURL();
    await  login.login();
    await lobby.event_admin();
})
await test.step('Redirection to event details page',async()=>
{
    await adminredirection.eventdetails();
})
await test.step('Redirection to homepage builder page',async()=>
{
    await adminredirection.homepagebuilder();
})
await test.step('Redirection to registration page',async()=>
{
    await adminredirection.registrationpage();
})
await test.step('Redirection to Event Library page',async()=>
{
    await adminredirection.eventlibrary();
})
await test.step('Redirection to adverts page',async()=>
{
    await adminredirection.adverts();
})
await test.step('Redirection to web navigation page',async()=>
{
    await adminredirection.webnavigation();
})
await test.step('Redirection to agenda stage page',async()=>
{
    await adminredirection.agendastage();
})
await test.step('Redirection to agenda session page',async()=>
{
    await adminredirection.agendasession();
})
await test.step('Redirection to agenda session polls page',async()=>
{
    await adminredirection.agendasessionpoll();
})
await test.step('Redirection to agenda ondemand page',async()=>
{
    await adminredirection.agendaondemand();
})
await test.step('Redirection to networking tbales page',async()=>
{
    await adminredirection.networkingtables();
})
await test.step('Redirection to meetings page',async()=>
{
    await adminredirection.meetings();
})
await test.step('Redirection to attendee page',async()=>
{
    await adminredirection.attendeeuser();
})
await test.step('Redirection to speaker page',async()=>
{
    await adminredirection.speakeruser();
})
await test.step('Redirection to admin page',async()=>
{
    await adminredirection.adminuser();
})
await test.step('Redirection to roletypes page',async()=>
{
    await adminredirection.roletype();
})
await test.step('Redirection to filter sections',async()=>
{
    await adminredirection.filtersection();
})
await test.step('Redirection to campaign sections',async()=>
{
    await adminredirection.campaigns();
})
await test.step('Redirection to exhibitor pages',async()=>
{
    await adminredirection.expo();
})
await test.step('Redirection to sponsor pages',async()=>
{
    await adminredirection.sponsorpages();
})
await test.step('Redirection to hosted buyer pages',async()=>
{
    await adminredirection.hosted();
})
});

test('TC_02:Verify the redirection on clicking enter event button',async({page,context})=>
{
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby = new Lobby(page, targetEvent);
        const adminredirection = new AdminRedirection(page);
await test.step('Login and enter the event as admin',async()=>
{
    await login.loginURL();
    await  login.login();
    await lobby.event_admin();
})
let newTab;

 await test.step('click on enter event button', async () =>
{
    const newTabPromise = context.waitForEvent('page');
    await adminredirection.evententer();
    newTab = await newTabPromise;
});

await test.step('verify the user is entered into the event', async () => 
{
    await expect(newTab).toHaveURL(/https:\/\/aievents\.brandingnext\.com\/event\/\d+\/home/);
});
});
test('TC_03:Verify the redirection on clicking back to lobby button',async({page})=>
{
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby = new Lobby(page, targetEvent);
        const adminredirection = new AdminRedirection(page);
await test.step('Login and enter the event as admin',async()=>
{
    await login.loginURL();
    await  login.login();
    await lobby.event_admin();
})
await test.step('click on back ot lobby button',async()=>
{
    
    await adminredirection.tolobby();  
})
await test.step('Verify the user is taken back to lobby page',async()=>
{
    
   await expect(page).toHaveURL(/\/lobby$/);
})
})
test('TC_04:Verify the user is getting logged out on clicking logout option',async({page})=>
{
        const targetEvent = EventsData.event_name_lobbyactions.event_name;
        const login = new Login(page);
        const lobby = new Lobby(page, targetEvent);
        const adminredirection = new AdminRedirection(page);
await test.step('Login and enter the event as admin',async()=>
{
    await login.loginURL();
    await  login.login();
    await lobby.event_admin();
})
await test.step('click on back ot lobby button',async()=>
{
    
    await adminredirection.userlogout();  
})
await test.step('Verify the user is logged out',async()=>
{
    await expect(page).toHaveURL(/\/login$/)
   
})
});
});
