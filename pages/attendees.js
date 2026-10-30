import { EventsData } from "../Test_Data/Eventsdata";

export class Attendees
{
    constructor(page)
    {
        this.page = page;
        this.users_path = page.locator("//button[@title='Users']//*[name()='svg']");
        this.attendees_tab = page.getByRole('button', { name: 'Attendees' });
        this.addattendee_button = page.getByRole('button', { name: '+ Add Attendee' })
        this.attendee_search = page.getByRole('textbox', { name: 'Search by name or email...' });
        this.attendee_email =  page.locator('input[name="email"]');
        this.attendee_firstname = page.getByRole('textbox', { name: 'First Name' });
        this.attendee_lastname = page.getByRole('textbox', { name: 'Last Name' });
        this.attendee_companyname = page.getByRole('textbox', { name: 'Company Name' });
        this.attendee_jobtitle = page.getByRole('textbox', { name: 'Job Title' });
        this.attendee_role = page.locator('div.multi-select-container').locator('span').nth(0);
        this.attendee_displayedrole = page.locator('[name="displayedRole"]');
        this.attendee_type = page.locator('[name="attendeeType"]');
        this.attendee_password = page.getByPlaceholder('Temporary password');
        this.attendee_addbutton = page.getByText('Add', { exact: true });

    }

    async access_attendeepage()
    {
        await this.users_path.click();
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
    
    async add_button()
    {
        await this.attendee_addbutton.click();
    }
}