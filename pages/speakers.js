import { EventsData } from "../Test_Data/Eventsdata";

export class Speaker
{
    constructor(page)
    {
        this.page=page;
        this.users = page.locator("//button[@title='Users']//*[name()='svg']");
        this.speakers_tab = page.getByRole('button', { name: 'Speakers' });
        this.addspeaker_btn = page.getByRole('button', { name: '+ Add Speaker' });
        this.speaker_search = page.getByRole('textbox', { name: 'Search by name or email...' });
        this.speaker_email = page.locator('input[name="email"]');
        this.speaker_firstname = page.getByRole('textbox', { name: 'First Name' });
        this.speaker_lastname = page.getByRole('textbox', { name: 'Last Name' });
        this.speaker_company = page.getByRole('textbox', { name: 'Company Name' });
        this.speaker_job = page.getByRole('textbox', { name: 'Job Title' });
        this.fileInput = page.locator('input[type="file"]');
        this.speaker_role = page.locator("//div[@class='multi-select-container']");
        this.speaker_type = page.locator('[name="attendeeType"]');
        this.speaker_bio = page.getByRole('textbox', { name: 'Enter speaker biography...' });
        this.speaker_password = page.getByPlaceholder('Temporary password');
        this.add_btn = page.getByText('Add', { exact: true });
        this.save_btn = page.getByRole('button', { name: 'Save' });
    }
    async access_speakerspage()
    {
        await this.users.click();
        await this.speakers_tab.click();
    }
    async add_speakerbutton()
    {
        await this.addspeaker_btn.click();
    }
    async fill_speakerdetails()
    {

    }
    async psd_validation()
    {
        await this.speaker_email.fill(EventsData.speaker_psdvalidation.Email);
        await this.speaker_firstname.fill(EventsData.speaker_psdvalidation.First_name);
        await this.speaker_lastname.fill(EventsData.speaker_psdvalidation.Last_name);
        await this.speaker_company.fill(EventsData.speaker_psdvalidation.Company);
        await this.speaker_job.fill(EventsData.speaker_psdvalidation.Job);
        await this.speaker_role.click();
        for (const role of EventsData.speaker_psdvalidation.Role) 
            {
            await this.page.locator('div[style*="cursor: pointer"]').getByText(role, { exact: true }).click();
            }
        await this.speaker_role.click();
        await this.speaker_type.click();
        await this.page.locator('select[name="attendeeType"]').selectOption(EventsData.speaker_psdvalidation.Type);
        await this.speaker_password.fill(EventsData.speaker_psdvalidation.Password);    
    }

    async add_speaker()
    {
        await this.speaker_email.fill(EventsData.add_speaker.Email);
        await this.speaker_firstname.fill(EventsData.add_speaker.First_name);
        await this.speaker_lastname.fill(EventsData.add_speaker.Last_name);
        await this.speaker_company.fill(EventsData.add_speaker.Company);
        await this.speaker_job.fill(EventsData.add_speaker.Job);
        await this.fileInput.setInputFiles(EventsData.add_speaker.DP);
        await this.speaker_role.click();
        for (const role of EventsData.add_speaker.Role) 
            {
            await this.page.locator('div[style*="cursor: pointer"]').getByText(role, { exact: true }).click();
            }
        await this.speaker_role.click();
        await this.speaker_type.click();
        await this.page.locator('select[name="attendeeType"]').selectOption(EventsData.add_speaker.Type);
        await this.speaker_bio.fill(EventsData.add_speaker.Bio);
        await this.speaker_password.fill(EventsData.add_speaker.Password);    
    }
    async add()
    {
        await this.add_btn.click();
    }
    async empty_search()
    {
        await this.speaker_search.fill('No speaker');
    }
    async attendeelist_check()
    {
       await this.speaker_email.fill(EventsData.speaker_attendeelist.Email);
        await this.speaker_firstname.fill(EventsData.speaker_attendeelist.First_name);
        await this.speaker_lastname.fill(EventsData.speaker_attendeelist.Last_name);
        await this.speaker_company.fill(EventsData.speaker_attendeelist.Company);
        await this.speaker_job.fill(EventsData.speaker_attendeelist.Job);
        await this.fileInput.setInputFiles(EventsData.speaker_attendeelist.DP);
        await this.speaker_role.click();
        for (const role of EventsData.speaker_attendeelist.Role) 
            {
            await this.page.locator('div[style*="cursor: pointer"]').getByText(role, { exact: true }).click();
            }
        await this.speaker_role.click();
        await this.speaker_type.click();
        await this.page.locator('select[name="attendeeType"]').selectOption(EventsData.speaker_attendeelist.Type);
        await this.speaker_bio.fill(EventsData.speaker_attendeelist.Bio);
        await this.speaker_password.fill(EventsData.speaker_attendeelist.Password);     
    }
    async addspeaker_4update()
    {
        await this.speaker_email.fill(EventsData.speaker_update.Email);
        await this.speaker_firstname.fill(EventsData.speaker_update.First_name);
        await this.speaker_lastname.fill(EventsData.speaker_update.Last_name);
        await this.speaker_company.fill(EventsData.speaker_update.Company);
        await this.speaker_job.fill(EventsData.speaker_update.Job);
        await this.fileInput.setInputFiles(EventsData.speaker_update.DP);
        await this.speaker_role.click();
        for (const role of EventsData.speaker_update.Role) 
            {
            await this.page.locator('div[style*="cursor: pointer"]').getByText(role, { exact: true }).click();
            }
        await this.speaker_role.click();
        await this.speaker_type.click();
        await this.page.locator('select[name="attendeeType"]').selectOption(EventsData.speaker_update.Type);
        await this.speaker_bio.fill(EventsData.speaker_update.Bio);
        await this.speaker_password.fill(EventsData.speaker_update.Password);    
    }
    async speaker_update()
    {
        await this.speaker_firstname.fill(EventsData.update_speakerdata.first_name);
        await this.speaker_lastname.fill(EventsData.update_speakerdata.last_name);
        await this.speaker_company.fill(EventsData.update_speakerdata.company);
        await this.speaker_job.fill(EventsData.update_speakerdata.job);
        await this.speaker_type.click();
        await this.page.locator('select[name="attendeeType"]').selectOption(EventsData.update_speakerdata.type);
        await this.speaker_bio.fill(EventsData.update_speakerdata.bio);
        await this.save_btn.click();
    }
    async speaker_delete()
    {
        await this.speaker_email.fill(EventsData.speaker_delete.Email);
        await this.speaker_firstname.fill(EventsData.speaker_delete.First_name);
        await this.speaker_lastname.fill(EventsData.speaker_delete.Last_name);
        await this.speaker_company.fill(EventsData.speaker_delete.Company);
        await this.speaker_job.fill(EventsData.speaker_delete.Job);
        await this.fileInput.setInputFiles(EventsData.speaker_delete.DP);
        await this.speaker_role.click();
        for (const role of EventsData.speaker_delete.Role) 
            {
            await this.page.locator('div[style*="cursor: pointer"]').getByText(role, { exact: true }).click();
            }
        await this.speaker_role.click();
        await this.speaker_type.click();
        await this.page.locator('select[name="attendeeType"]').selectOption(EventsData.speaker_delete.Type);
        await this.speaker_bio.fill(EventsData.speaker_delete.Bio);
        await this.speaker_password.fill(EventsData.speaker_delete.Password);    
    }
}