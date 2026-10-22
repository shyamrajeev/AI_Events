export class eventcreate
{
    constructor(page)
    {
        this.page = page;
        this.createnewevent_button = page.getByText('Create New Event', { exact: true });
        this.eventname = page.getByRole('textbox', { name: 'Event Title' });
        this.fromemail_address =  page.getByRole('textbox', { name: 'Emails from' });
        this.startdate = page.locator('input[type="date"]').nth(0);
        this.enddate = page.locator('input[type="date"]').nth(1);
        this.timezone = page.getByText('Select timezone…', { exact: true });
        this.logo = page.getByText('Click to upload', { exact: true });
        this.event_colour =  page.getByRole('textbox', { name: '#002244' });
        this.createevent_button =  page.getByRole('button', { name: 'Create Event' });
        this.timezone_input = page.getByRole('textbox', { name: 'Search timezone (e.g. London, Kolkata, UTC)...' });
        this.fileInput = page.locator('input[type="file"]');
    }
    async createnewevent()
    {
        await this.createnewevent_button.click();
    }
    async mandatoryfieldvalidation()
    {
        await this.createevent_button.click();
    }
    async fillvalues()
    {
        await this.eventname.fill('Test_Event');
        await this.fromemail_address.fill('test');
        await this.startdate.fill('2026-11-01');
        await this.enddate.fill('2026-11-10');
        await this.timezone.click();
        await this.timezone_input.fill('Asia/Kolkata');
        await this.page.getByText('Asia/Kolkata', { exact: true }).click();
        await this.fileInput.setInputFiles('/Users/totem/Desktop/AIEvents/Test_Data/event_logo.jpg');
        await this.event_colour.fill('#3787d7');
    }
    async create_event()
    {
        await this.createevent_button.click();
    }
}