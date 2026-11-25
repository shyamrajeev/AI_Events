import { EventsData } from "../Test_Data/Eventsdata";

export class Admin
{
    constructor(page)
        {
            this.page = page;
            this.users = page.locator('span:has-text("USERS")');
            this.admin_tab = page.locator('button:has-text("Admins")');
            this.addadmin_btn = page.getByRole('button', { name: '+ Add Admin' });
            this.add_button = page.locator(':text-is("Add")');
            this.admin_firstname = page.getByRole('textbox', { name: 'First name *' });
            this.admin_lastname = page.getByRole('textbox', { name: 'Last name *' });
            this.admin_roleopen = page.getByText('Select role', { exact: true });
            this.admin_roleclose = page.locator('div[class*="min-h-"][class*="cursor-pointer"][class*="justify-between"]');
            this.admin_dp = page.locator('input[type="file"]');
            this.admin_email = page.getByRole('textbox', { name: 'Email *' });
            this.admin_job = page.getByRole('textbox', { name: 'Job *' });
            this.admin_company = page.getByRole('textbox', { name: 'Company *' });
            this.admin_password = page.getByPlaceholder('Min 14 characters & a symbol');
            this.admin_search = page.getByRole('textbox', { name: 'Search by name or email...' });
            this.update_button = page.getByText('Update', { exact: true });
            this.attendee_type = page.locator('#attendeeType');
            this.edit = page.locator(':text-is("Edit Profile")');
            this.delete = page.locator(':text-is("Delete Admin")');

        }

    async access_adminpage()
    {
       await this.users.click();
       await this.admin_tab.click();
    } 
    async button_Addadmin()
    {
       await this.addadmin_btn.click();
    }   
    async add_Admin()
    {
       await this.add_button.click();
    }
    async update()
    {
        await this.update_button.click();
    }
    async admin_psdvalidation()
    {
       await this.admin_firstname.fill(EventsData.eventadmin_psdvalidation.First_name);
       await this.admin_lastname.fill(EventsData.eventadmin_psdvalidation.Last_name);
       await this.admin_roleopen.click();
        for (const role of EventsData.eventadmin_psdvalidation.Role) 
        {     
            await this.page.locator('div.absolute.left-0.right-0.top-full').getByText(role, { exact: true }).click();
        }
        await this.admin_roleclose.click();
        await this.admin_email.fill(EventsData.eventadmin_psdvalidation.Email);
        await this.admin_dp.setInputFiles(EventsData.eventadmin_psdvalidation.DP);
        await this.admin_job.fill(EventsData.eventadmin_psdvalidation.Job);
        await this.admin_company.fill(EventsData.eventadmin_psdvalidation.Company);
        await this.admin_password.fill(EventsData.eventadmin_psdvalidation.Password);
        await this.attendee_type.click();  
        await this.page.locator('select[name="attendeeType"]').selectOption(EventsData.eventadmin_psdvalidation.Type);
    }  
    async admin_createdetails()
    {
        await this.admin_firstname.fill(EventsData.eventadmin_create.First_name);
       await this.admin_lastname.fill(EventsData.eventadmin_create.Last_name);
       await this.admin_roleopen.click();
        for (const role of EventsData.eventadmin_create.Role) 
        {     
            await this.page.locator('div.absolute.left-0.right-0.top-full').getByText(role, { exact: true }).click();
        }
        await this.admin_roleclose.click();
        await this.admin_email.fill(EventsData.eventadmin_create.Email);
        await this.admin_dp.setInputFiles(EventsData.eventadmin_create.DP);
        await this.admin_job.fill(EventsData.eventadmin_create.Job);
        await this.admin_company.fill(EventsData.eventadmin_create.Company);
        await this.attendee_type.click();  
        await this.page.locator('select[name="attendeeType"]').selectOption(EventsData.eventadmin_create.Type);
        await this.admin_password.fill(EventsData.eventadmin_create.Password); 
    }
    async emptysearch()
    {
        await this.admin_search.fill('No admins');
    }
    async admindelete()
    {
       await this.admin_firstname.fill(EventsData.eventadmin_delete.First_name);
       await this.admin_lastname.fill(EventsData.eventadmin_delete.Last_name);
       await this.admin_roleopen.click();
        for (const role of EventsData.eventadmin_delete.Role) 
        {     
            await this.page.locator('div.absolute.left-0.right-0.top-full').getByText(role, { exact: true }).click();
        }
        await this.admin_roleclose.click();
        await this.admin_email.fill(EventsData.eventadmin_delete.Email);
        await this.admin_dp.setInputFiles(EventsData.eventadmin_delete.DP);
        await this.admin_job.fill(EventsData.eventadmin_delete.Job);
        await this.admin_company.fill(EventsData.eventadmin_delete.Company);
        await this.admin_password.fill(EventsData.eventadmin_delete.Password); 
        await this.attendee_type.click();  
        await this.page.locator('select[name="attendeeType"]').selectOption(EventsData.eventadmin_delete.Type);
    }
    async admindelete_chkattendeelist()
    {
       await this.admin_firstname.fill(EventsData.eventadmin_delete2.First_name);
       await this.admin_lastname.fill(EventsData.eventadmin_delete2.Last_name);
       await this.admin_roleopen.click();
        for (const role of EventsData.eventadmin_delete2.Role) 
        {     
            await this.page.locator('div.absolute.left-0.right-0.top-full').getByText(role, { exact: true }).click();
        }
        await this.admin_roleclose.click();
        await this.admin_email.fill(EventsData.eventadmin_delete2.Email);
        await this.admin_dp.setInputFiles(EventsData.eventadmin_delete2.DP);
        await this.admin_job.fill(EventsData.eventadmin_delete2.Job);
        await this.admin_company.fill(EventsData.eventadmin_delete2.Company);
        await this.admin_password.fill(EventsData.eventadmin_delete2.Password); 
        await this.attendee_type.click();  
        await this.page.locator('select[name="attendeeType"]').selectOption(EventsData.eventadmin_delete2.Type);
    }
    async admin_create2update()
    {
        await this.admin_firstname.fill(EventsData.eventadmin_4update.First_name);
       await this.admin_lastname.fill(EventsData.eventadmin_4update.Last_name);
       await this.admin_roleopen.click();
        for (const role of EventsData.eventadmin_4update.Role) 
        {     
            await this.page.locator('div.absolute.left-0.right-0.top-full').getByText(role, { exact: true }).click();
        }
        await this.admin_roleclose.click();
        await this.admin_email.fill(EventsData.eventadmin_4update.Email);
        await this.admin_dp.setInputFiles(EventsData.eventadmin_4update.DP);
        await this.admin_job.fill(EventsData.eventadmin_4update.Job);
        await this.admin_company.fill(EventsData.eventadmin_4update.Company);
        await this.admin_password.fill(EventsData.eventadmin_4update.Password); 
        await this.attendee_type.click();  
        await this.page.locator('select[name="attendeeType"]').selectOption(EventsData.eventadmin_4update.Type);
    }
    async admin_update()
    {
       await this.admin_firstname.fill(EventsData.eventadmin_updatedata.First_name);
       await this.admin_lastname.fill(EventsData.eventadmin_updatedata.Last_name);
        await this.admin_job.fill(EventsData.eventadmin_updatedata.Job);
        await this.admin_company.fill(EventsData.eventadmin_updatedata.Company);
       
    }
    async admin_duplicate()
    {
        await this.admin_firstname.fill(EventsData.eventadmin_duplicate.First_name);
       await this.admin_lastname.fill(EventsData.eventadmin_duplicate.Last_name);
       await this.admin_roleopen.click();
        for (const role of EventsData.eventadmin_duplicate.Role) 
        {     
            await this.page.locator('div.absolute.left-0.right-0.top-full').getByText(role, { exact: true }).click();
        }
        await this.admin_roleclose.click();
        await this.admin_email.fill(EventsData.eventadmin_duplicate.Email);
        await this.admin_dp.setInputFiles(EventsData.eventadmin_duplicate.DP);
        await this.admin_job.fill(EventsData.eventadmin_duplicate.Job);
        await this.admin_company.fill(EventsData.eventadmin_duplicate.Company);
        await this.admin_password.fill(EventsData.eventadmin_duplicate.Password); 
        await this.attendee_type.click();  
        await this.page.locator('select[name="attendeeType"]').selectOption(EventsData.eventadmin_duplicate.Type);
    }
}