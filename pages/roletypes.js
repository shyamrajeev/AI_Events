import { EventsData } from "../Test_Data/Eventsdata";

export class RoleTypes
{
    constructor(page)
        {
            this.page = page;
            this.users_icon = page.locator("//button[@title='Users']//*[name()='svg']");
            this.roletypes = page.getByRole('button', { name: 'Role Types' });
            this.addrole_btn = page.getByRole('button', { name: '+ Add Role' });
            this.submit_btn = page.getByRole('button', { name: 'Submit' });
            this.display_name = page.getByRole('textbox', { name: 'Display name' });
            this.search = page.getByRole('textbox', { name: 'Search' });
            this.organiser_toggle = page.getByRole('row', { name: /Organiser/ }).locator('label.switch');
            this.delegate_toggle = page.getByRole('row', { name: /Delegate/ }).locator('label.switch');
            this.sponsor_toggle = page.getByRole('row', { name: /Sponsor/ }).locator('label.switch');
            this.speaker_toggle = page.getByRole('row', { name: /Speaker/ }).locator('label.switch');
            this.exhibitor_toggle = page.getByRole('row', { name: /Exhibitor/ }).locator('label.switch');


        }
    async access_roletypespage()
    {
        await this.users_icon.click();
        await this.roletypes.click();
    } 
    
    async addrole_button()
    {
        await this.addrole_btn.click();
    }
    async submit()
    {
        await this.submit_btn.click();
    }
    async add_role()
    {
        await this.display_name.fill(EventsData.add_role.Name);
    }
    async search_role()
    {
        await this.search.fill(EventsData.search_role.Name);
    }
    async empty_rolesearch()
    {
        await this.search.fill('No Role');
    }
    async edit_role()
    {
        await this.search.fill(EventsData.update_role.Name);
    }
    async update_role()
    {
        await this.display_name.fill(EventsData.update_role.Updated_Name);
        await this.submit_btn.click();
    }
    async delete_role()
    {
        await this.page.waitForTimeout(2000);
        await this.display_name.fill(EventsData.delete_role.Name);
        await this.page.waitForTimeout(2000);
        await this.page.getByLabel('Don’t add automatically anywhere there are role type permissions').click();
        await this.page.waitForTimeout(2000);
        await this.submit_btn.click();
    }
    async samerole_add()
    {
        await this.page.waitForTimeout(2000);
        await this.display_name.fill(EventsData.adding_samerole.Name);
        await this.page.waitForTimeout(2000);
        await this.page.getByLabel('Don’t add automatically anywhere there are role type permissions').click();
        await this.page.waitForTimeout(2000);
        await this.submit_btn.click();
    }
}