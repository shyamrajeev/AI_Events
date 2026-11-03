import { EventsData } from "../Test_Data/Eventsdata";
import { expect } from '@playwright/test'

export class Attendees
{
    constructor(page)
    {
        this.page = page;
        this.users_path = page.locator("//button[@title='Users']//*[name()='svg']");
        this.attendees_tab = page.getByRole('button', { name: 'Attendees' });
        this.addattendee_button = page.getByRole('button', { name: '+ Add Attendee' })
        this.attendee_search = page.getByRole('textbox', { name: 'Search by name or email...' });
        this.attendee_email = page.getByPlaceholder('Email',{exact: true});
        this.attendee_firstname = page.getByRole('textbox', { name: 'First Name' });
        this.attendee_lastname = page.getByRole('textbox', { name: 'Last Name' });
        this.attendee_companyname = page.getByRole('textbox', { name: 'Company Name' });
        this.attendee_jobtitle = page.getByRole('textbox', { name: 'Job Title' });
        this.attendee_role = page.locator('div.multi-select-container').locator('span').nth(0);
        this.attendee_displayedrole = page.locator('[name="displayedRole"]');
        this.attendee_type = page.locator('[name="attendeeType"]');
        this.attendee_password = page.locator('[name="temporaryPassword"]');
        this.attendee_addbutton = page.getByText('Add', { exact: true });
        this.attendee_updatebutton = page.getByRole('button', { name: 'Save' });
        this.new_password = page.locator('[name="password"]');
        this.confirm_password = page.locator('[name="confirmPassword"]');
        this.changepswd_savebtn = page.getByRole('button', { name: 'Save' });


    }

    async access_attendeepage()
    {
        await this.users_path.click();
        await this.attendees_tab.click();
    }
    async add_attendeebutton()
    {
        await this.addattendee_button.click();
    }
    async password_validation()
    {
       await this.attendee_email.fill(EventsData.attendee_psdvalidation.email);
       await this.attendee_firstname.fill(EventsData.attendee_psdvalidation.first_name);
       await this.attendee_lastname.fill(EventsData.attendee_psdvalidation.last_name);
       await this.attendee_companyname.fill(EventsData.attendee_psdvalidation.company);
       await this.attendee_jobtitle.fill(EventsData.attendee_psdvalidation.job);
       await this.attendee_role.click();
       // Select roles
       for (const role of EventsData.attendee_psdvalidation.roles) 
        {     
            await this.page.locator('div[style*="cursor: pointer"]').getByText(role, { exact: true }).click();
        }
       await this.attendee_role.click();
       await this.attendee_displayedrole.click();  
        // Select display roles
       await this.page.locator('select[name="displayedRole"]').selectOption(EventsData.attendee_psdvalidation.display_role);
       await this.attendee_type.click();  
       await this.page.locator('select[name="attendeeType"]').selectOption(EventsData.attendee_psdvalidation.type);
       await this.attendee_password.fill(EventsData.attendee_psdvalidation.password);
       await this.attendee_addbutton.click();
    }
    async add_attendee()
    {
       await this.attendee_email.isVisible();
       await this.attendee_email.pressSequentially(EventsData.add_attendee.email);
       await this.attendee_firstname.fill(EventsData.add_attendee.first_name);
       await this.attendee_lastname.fill(EventsData.add_attendee.last_name);
       await this.attendee_companyname.fill(EventsData.add_attendee.company);
       await this.attendee_jobtitle.fill(EventsData.add_attendee.job);
       await this.attendee_role.click();
       // Select roles
       for (const role of EventsData.add_attendee.roles) 
        {     
            await this.page.locator('div[style*="cursor: pointer"]').getByText(role, { exact: true }).click();
        }
       await this.attendee_role.click();
       await this.attendee_displayedrole.click();  
        // Select display roles
       await this.page.locator('select[name="displayedRole"]').selectOption(EventsData.add_attendee.display_role);
       await this.attendee_type.click();  
       await this.page.locator('select[name="attendeeType"]').selectOption(EventsData.add_attendee.type);
       await this.attendee_password.fill(EventsData.add_attendee.password);
      
    }
    async update_attendee()
    {
       await this.attendee_email.isVisible();
       await this.attendee_email.pressSequentially(EventsData.update_attendee.email);
       await this.attendee_firstname.fill(EventsData.update_attendee.first_name);
       await this.attendee_lastname.fill(EventsData.update_attendee.last_name);
       await this.attendee_companyname.fill(EventsData.update_attendee.company);
       await this.attendee_jobtitle.fill(EventsData.update_attendee.job);
       await this.attendee_role.click();
       // Select roles
       for (const role of EventsData.update_attendee.roles) 
        {     
            await this.page.locator('div[style*="cursor: pointer"]').getByText(role, { exact: true }).click();
        }
       await this.attendee_role.click();
       await this.attendee_displayedrole.click();  
        // Select display roles
       await this.page.locator('select[name="displayedRole"]').selectOption(EventsData.update_attendee.display_role);
       await this.attendee_type.click();  
       await this.page.locator('select[name="attendeeType"]').selectOption(EventsData.update_attendee.type);
       await this.attendee_password.fill(EventsData.update_attendee.password);
      
    }
    async update_attendee_data()
    {
      
       await this.attendee_firstname.fill(EventsData.update_attendeedata.first_name);
       await this.attendee_lastname.fill(EventsData.update_attendeedata.last_name);
       await this.attendee_companyname.fill(EventsData.update_attendeedata.company);
       await this.attendee_jobtitle.fill(EventsData.update_attendeedata.job);
       await this.attendee_type.click();  
       await this.page.locator('select[name="attendeeType"]').selectOption(EventsData.update_attendeedata.type);
    }
    
    async add_button()
    {
        await this.attendee_addbutton.click();
    }
    async update_button()
    {
        await this.attendee_updatebutton.click();
    }
    async delete_attendee()
    {
        await this.attendee_email.fill(EventsData.delete_attendee.email);
       await this.attendee_firstname.fill(EventsData.delete_attendee.first_name);
       await this.attendee_lastname.fill(EventsData.delete_attendee.last_name);
       await this.attendee_companyname.fill(EventsData.delete_attendee.company);
       await this.attendee_jobtitle.fill(EventsData.delete_attendee.job);
       await this.attendee_role.click();
       // Select roles
       for (const role of EventsData.delete_attendee.roles) 
        {     
            await this.page.locator('div[style*="cursor: pointer"]').getByText(role, { exact: true }).click();
        }
       await this.attendee_role.click();
       await this.attendee_displayedrole.click();  
        // Select display roles
       await this.page.locator('select[name="displayedRole"]').selectOption(EventsData.delete_attendee.display_role);
       await this.attendee_type.click();  
       await this.page.locator('select[name="attendeeType"]').selectOption(EventsData.delete_attendee.type);
       await this.attendee_password.fill(EventsData.delete_attendee.password);
    }
    getsearchTerm()
         {
            const searchTerm = EventsData.attendee_search.Name;
            return searchTerm;
         }
         async search_attendee()
         {
            
            await this.attendee_search.fill(this.getsearchTerm());
            
         }
    async empty_search()
    {
        await this.attendee_search.fill('empty search ');
    }  
   async changepswd_old()
   {
        await this.new_password.fill(process.env.attendee_createpassword);
        await this.confirm_password.fill(process.env.attendee_createpassword);
        await this.changepswd_savebtn.click();
   }
    async changepswd()
   {
        await this.new_password.fill(process.env.attendee_updatepassword);
        await this.confirm_password.fill(process.env.attendee_updatepassword);
        await this.changepswd_savebtn.click();
   }
   async search_and_openactionmenu()
   {
    await this.page.getByRole('textbox', { name: 'Search by name or email...' }).fill(EventsData.update_attendee.email);
    await expect(this.page.getByRole('cell', { name: EventsData.update_attendee.email })).toBeVisible();
    this.attendeeEmail = EventsData.update_attendee.email;
    this.attendeeRow = this.page.locator('table tbody tr').filter({hasText: this.attendeeEmail});
    await expect(this.attendeeRow).toHaveCount(1);
    await this.attendeeRow.locator('button').filter({ hasText: '⋮' }).click();
   }
}
