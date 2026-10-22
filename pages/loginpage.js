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
        await this.page.goto('https://aievents.brandingnext.com/login');
    }

    async login(email, password)
    {
         await this.emailaddress.fill(email);
         await this.password.fill(password);
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