import {EventsData} from '../Test_Data/Eventsdata';
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
         getsearchTerm()
         {
            const searchTerm = 'Shyam';
            return searchTerm;
         }
         async search_admin()
         {
            
            await this.envadmin_searchbox.fill(this.getsearchTerm());
            
         }
         
         async open_edit_admin(adminName)
         {
            const adminRow = this.page.locator('table.stage-table tbody tr').filter({ has: this.page.getByText(adminName, { exact: true }) });
            await adminRow.locator('td').last().getByRole('button').click();
            await this.page.getByText('Edit Profile', { exact: true }).click();
         }
         async fill_details_passwordvalidation()
         {
            await this.admin_firstname.fill(EventsData.admin_psd_validation.first_name);
            await this.admin_lastname.fill(EventsData.admin_psd_validation.last_name);
            await this.admin_email.fill(EventsData.admin_psd_validation.email);
            await this.fileInput.setInputFiles(EventsData.admin_psd_validation.dp);
            await this.admin_job.fill(EventsData.admin_psd_validation.job);
            await this.admin_company.fill(EventsData.admin_psd_validation.company);
            await this.admin_password.fill(EventsData.admin_psd_validation.Password);
         }
         async fill_details()
         {
            await this.admin_firstname.fill(EventsData.create_admin.first_name);
            await this.admin_lastname.fill(EventsData.create_admin.last_name);
            await this.admin_email.fill(EventsData.create_admin.email);
            await this.fileInput.setInputFiles(EventsData.create_admin.dp);
            await this.admin_job.fill(EventsData.create_admin.job);
            await this.admin_company.fill(EventsData.create_admin.company);
            await this.admin_password.fill(EventsData.create_admin.Password);
         }
         async add_admin()
         {
            await this.add_button.click();
         }
         async search_emptystate()
         {
            await this.envadmin_searchbox.fill('No User');
 
           }
           async admin_detailsbeforeupdate()
           {
            await this.admin_firstname.fill(EventsData.createadmin_4update.first_name);
            await this.admin_lastname.fill(EventsData.createadmin_4update.last_name);
            await this.admin_email.fill(EventsData.createadmin_4update.email);
            await this.fileInput.setInputFiles(EventsData.createadmin_4update.dp);
            await this.admin_job.fill(EventsData.createadmin_4update.job);
            await this.admin_company.fill(EventsData.createadmin_4update.company);
            await this.admin_password.fill(EventsData.createadmin_4update.Password);
           }
           async admin_detailsafterupdate()
           {
            await this.admin_firstname.fill(EventsData.admin_update.first_name);
            await this.admin_lastname.fill(EventsData.admin_update.last_name);
            await this.admin_job.fill(EventsData.admin_update.job);
            await this.admin_company.fill(EventsData.admin_update.company);
            
           }
           async admin_update()
           {
            await this.update_button.click();
           }
}