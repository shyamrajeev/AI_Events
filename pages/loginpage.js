export class Login
{
    constructor(page)
    {
        this.page = page
        this.emailaddress = page.getByRole('textbox', { name: 'Email Address' });
        this. password = page.locator('input[type="password"]');
        this.login_button =  page.getByRole('button', { name: /Login/i });
        this.forgot_password = page.getByRole('button', { name: 'Forgot password' })
        this.resetpassword_emailaddress = page.getByRole('textbox', { name: 'Email Address' })
        this.sendresetlink_button =  page.getByRole('button', { name: 'Send Reset Link' })
        this.backtologin_button = page.getByText('Back to login', { exact: true })
    }
    async loginURL()
    {
        await this.page.goto('/');
    }

    async login()
    {
         await this.emailaddress.fill(process.env.user_name1);
         await this.password.fill(process.env.user_password);
         await this.login_button.click();
    }
    async login_invalidcreds()
    {
         await this.emailaddress.fill(process.env.user_name1);
         await this.password.fill('invalid');
         await this.login_button.click();
    }
    async forgotpassword()
    {
        await this.forgot_password.click();
    }

    async resetpassword(email)
    {
        await this.resetpassword_emailaddress.fill(email);
        await this.sendresetlink_button.click();
    }

    async backtologinpage()
    {
        await this.backtologin_button.click();
    }
}