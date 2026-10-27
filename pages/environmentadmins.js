export class Admin
{
    constructor(page)
        {
            this.page = page;
            this.admin_navigation = page.getByText('Admin', { exact: true });
            this.envadmin_tab =  page.getByRole('button', { name: 'Environment Admins' });
            this.envadmin_searchbox = page.getByRole('textbox', { name: 'Search by name or email...' });
            this.addadmin_button = page.getByRole('button', { name: '+ Add Admin' });
            this.admin_firstname = page.getByRole('textbox', { name: 'First Name *' });
            this.admin_lastname = page.getByRole('textbox', { name: 'Last Name *' });
            this.admin_email =page.getByRole('textbox', { name: 'Email *' });
            this.admin_photo = page.getByText('UPLOAD PHOTO', { exact: true });
            this.admin_job =  page.getByRole('textbox', { name: 'Job *' });
            this.admin_company =  page.getByRole('textbox', { name: 'Company *' });
            this.admin_password = page.getByLabel('Password *');
            this.add_button =  page.getByText('Add', { exact: true });
            this.fileInput = page.locator('input[type="file"]');
            this.update_button = page.getByText('Update', { exact: true });
        }

        async access_EnvAdmins()
        {
            await this.admin_navigation.click();
            await this.envadmin_tab.click();
         }
         async addadmin_page()
         {
            await this.addadmin_button.click();
         }
         async search_admin(searchTerm)
         {
            await this.envadmin_searchbox.fill(searchTerm);
         }
         async open_edit_admin(adminName)
         {
            const adminRow = this.page.locator('table.stage-table tbody tr')
                .filter({ has: this.page.getByText(adminName, { exact: true }) });
            await adminRow.locator('td').last().getByRole('button').click();
            await this.page.getByText('Edit Profile', { exact: true }).click();
         }
         async fill_details_passwordvalidation()
         {
            await this.admin_firstname.fill('Shyam');
            await this.admin_lastname.fill('Rajeev');
            await this.admin_email.fill('shyam.rajeev@toobler.com');
            await this.fileInput.setInputFiles('/Users/totem/Desktop/AIEvents/Test_Data/profile_avatar.avif');
            await this.admin_job.fill('QA');
            await this.admin_company.fill('Toobler');
            await this.admin_password.fill('pass');
         }
         async fill_details({ firstName, lastName, email })
         {
            await this.admin_firstname.fill(firstName);
            await this.admin_lastname.fill(lastName);
            await this.admin_email.fill(email);
            await this.fileInput.setInputFiles('/Users/totem/Desktop/AIEvents/Test_Data/profile_avatar.avif');
            await this.admin_job.fill('QA');
            await this.admin_company.fill('Toobler');
            await this.admin_password.fill('password@12345');
         }
         async add_admin()
         {
            await this.add_button.click();
         }
         async search_emptystate()
         {
            await this.envadmin_searchbox.fill('No User');
 
           }
           async admin_detailsbeforeupdate({ firstName, lastName, email })
           {
            await this.admin_firstname.fill(firstName);
            await this.admin_lastname.fill(lastName);
            await this.admin_email.fill(email);
            await this.fileInput.setInputFiles('/Users/totem/Desktop/AIEvents/Test_Data/profile_avatar.avif');
            await this.admin_job.fill('QA');
            await this.admin_company.fill('Toobler');
            await this.admin_password.fill('password@12345');
           }
           async admin_detailsafterupdate({ firstName, lastName, job, company })
           {
            await this.admin_firstname.fill(firstName);
            await this.admin_lastname.fill(lastName);
            await this.admin_job.fill(job);
            await this.admin_company.fill(company);
            
           }
           async admin_update()
           {
            await this.update_button.click();
           }
}