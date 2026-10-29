export class Attendees
{
    constructor(page)
    {
        this.page = page;
        this.users_path = page.locator("//button[@title='Users']//*[name()='svg']");
        this.attendees_tab = page.getByRole('button', { name: 'Attendees' });
        this.addattendee_button = page.getByRole('button', { name: '+ Add Attendee' });
        this.attendee_search = page.getByRole('textbox', { name: 'Search by name or email...' });
        this.attendee_email =page.getByRole('textbox', { name: 'Email' });
        this.attendee_firstname = page.getByRole('textbox', { name: 'First Name' });
        this.attendee_lastname = page.getByRole('textbox', { name: 'Last Name' });
        this.attendee_companyname = page.getByRole('textbox', { name: 'Company Name' });
        this.attendee_jobtitle = page.getByRole('textbox', { name: 'Job Title' });
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
    async add_button()
    {
        await this.attendee_addbutton.click();
    }
}