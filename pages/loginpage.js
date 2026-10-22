export class Login
{
    constructor(page)
    {
        this.page = page
        this.emailaddress = page.getByRole('textbox', { name: 'Email Address' });
        this. password = page.locator('input[type="password"]');
        this.login_button =  page.getByRole('button', { name: /Login/i });
    }
    async loginURL()
    {
        await this.page.goto('https://aievents.brandingnext.com/login');
    }

    async login(email, password)
    {
         await this.emailaddress.fill(email);
         await this.password.fill(password);
         await this.login_button.click();
    }
}