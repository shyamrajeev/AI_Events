import {EventsData} from '../Test_Data/Eventsdata.js';
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
        
        await this.eventname.fill(EventsData.create_event.eventName);
        await this.fromemail_address.fill(EventsData.create_event.fromemailaddress);
        await this.startdate.fill(EventsData.create_event.start_date);
        await this.enddate.fill(EventsData.create_event.end_date);
        await this.timezone.click();
        await this.timezone_input.fill(EventsData.create_event.time_zone);
        await this.page.getByText(EventsData.create_event.time_zone, { exact: true }).click();
        await this.fileInput.setInputFiles(EventsData.create_event.logo);
        await this.event_colour.fill(EventsData.create_event.eventcolour);

    }
    async create_event()
    {
        await this.createevent_button.click();
    }
}