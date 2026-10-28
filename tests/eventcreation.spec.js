import{test,expect} from '@playwright/test'
import { Login } from '../pages/loginpage.js';
import {eventcreate} from '../pages/eventcreation.js';

import * as allure from 'allure-js-commons'

test.describe.serial('Event creation scenarios',()=>
{
    
  test('TC_01: Verify the create event button is visible and able to access the event creation page',async({page})=>
{
    const login = new Login(page);
    const createevent = new eventcreate(page);
  await test.step('Login to the platform',async()=>
   {
        await login.loginURL();
        await login.login();
   });
    await test.step('Verify create new event button is present',async()=>
   {
        await expect(page.getByText('Create New Event', { exact: true })).toBeVisible();
   });
    await test.step('Click on the create new button',async()=>
   {
       await createevent.createnewevent();
   });
   await test.step('Verify the user is in event creation page',async()=>
   {
        await expect(page.getByRole('heading', { name: 'Create Event' })).toBeVisible();
   });

});

test('TC_02: Verify the admin is getting validation message on skipping the mandatory fields',async({page})=>
{
const login = new Login(page);
    const createevent = new eventcreate(page);
  await test.step('Login to the platform',async()=>
   {
        await login.loginURL();
        await login.login();
   });
    await test.step('Verify create new event button is present',async()=>
   {
        await expect(page.getByText('Create New Event', { exact: true })).toBeVisible();
   });
    await test.step('Click on the create new button',async()=>
   {
       await createevent.createnewevent();
   });
    await test.step('Click on create event button',async()=>
   {
       await createevent.mandatoryfieldvalidation();
   });
   await test.step('verify the validation message is showing',async()=>
   {
    await expect( page.getByText('Please enter an event name', { exact: true })).toBeVisible();
    await expect(page.getByText('Please enter a start date', { exact: true })).toBeVisible();
    await expect(page.getByText('Please enter an end date', { exact: true })).toBeVisible();
    await expect(page.getByText('Please select a timezone', { exact: true })).toBeVisible();

   });
});
test('TC_03: Verify the admin is able to create an event',async({page})=>
{
   
    const login = new Login(page);
    const createevent = new eventcreate(page);
  await test.step('Login to the platform',async()=>
   {
        await login.loginURL();
        await login.login();
   });
    await test.step('Verify create new event button is present',async()=>
   {
        await expect(page.getByText('Create New Event', { exact: true })).toBeVisible();
   });
    await test.step('Click on the create new button',async()=>
   {
       await createevent.createnewevent();
   });
   await test.step('Enter the details',async()=>
   {
       await createevent.fillvalues();
   });
   await test.step('Click on create event button',async()=>
   {
       await createevent.create_event();
       await expect(page.getByRole('textbox', { name: 'Enter event name' })).toHaveValue(eventName);
   });
   });
});