export class Module_setting
{
    constructor(page)
    {
        this.page = page;
        this.spex_toggle = page.getByRole('switch', { name: 'Toggle Spex' });
        this.agenda_toggle = page.getByRole('switch', { name: 'Toggle Agenda' });
        this.networking_toggle = page.getByRole('switch', { name: 'Toggle Networking' });
        this.registration_toggle = page.getByRole('switch', { name: 'Toggle Registration' });
        this.notification_toggle = page.getByRole('switch', { name: 'Toggle Notification' });
        this.survey_toggle = page.getByRole('switch', { name: 'Toggle Survey' });
        this.emails_toggle = page.getByRole('switch', { name: 'Toggle Emails' });
        this.cancel_button = page.getByRole('button', { name: 'Cancel' });
        this.savechanges_button = page.getByRole('button', { name: 'Save Changes' });
    }
    /**
     * Locates the "Open Module Settings" button for the specific event.
     */
    module_settings_button(eventName) {
        const name = this._resolveEventName(eventName);
        return this.page.getByRole('button', { name: `Open Module Settings for ${name}` });
    }

    _resolveEventName(eventName) {
        if (!eventName) {
            throw new Error('Event name must be specified when locating module settings.');
        }
        return eventName;
    }

    async coretoggles()
    {
        await this.spex_toggle.click();
        await this.agenda_toggle.click();
        await this.networking_toggle.click();
    }

    async registrationtoggle()
    {
        await this.registration_toggle.click();
    }

    async communicationtoggles()
    {
        await this.notification_toggle.click();
        await this.survey_toggle.click();
        await this.emails_toggle.click();
    }

    async savechanges()
    {
        await this.savechanges_button.click();
    }

    async toggleOnIfOff(toggle, toggleName) {
        const status = await toggle.getAttribute('aria-checked');

        if (status === 'false') {
            await toggle.click();
            console.log(`${toggleName}: Toggle was OFF. Turned it ON.`);
        } else if (status === 'true') {
            console.log(`${toggleName}: Toggle is already ON. Skipping.`);
        } else {
            throw new Error(`Unable to determine ${toggleName} toggle status.`);
        }
    }

    async coretogglesOnIfOff() {
        await this.toggleOnIfOff(this.spex_toggle, 'Spex');
        await this.toggleOnIfOff(this.agenda_toggle, 'Agenda');
        await this.toggleOnIfOff(this.networking_toggle, 'Networking');
    }

    async registrationtoggleOnIfOff()
    {
        await this.toggleOnIfOff(this.registration_toggle, 'Registration');
    }

    async communicationtogglesOnIfOff()
    {
        await this.toggleOnIfOff(this.notification_toggle,'Notification');
        await this.toggleOnIfOff(this.survey_toggle,'Survey');
        await this.toggleOnIfOff(this.emails_toggle,'Emails');
    }

    async toggleOffIfOn(toggle, toggleName) {
        const status = await toggle.getAttribute('aria-checked');

        if (status === 'true') {
            await toggle.click();
            console.log(`${toggleName}: Toggle was OFF. Turned it ON.`);
        } else if (status === 'false') {
            console.log(`${toggleName}: Toggle is already ON. Skipping.`);
        } else {
            throw new Error(`Unable to determine ${toggleName} toggle status.`);
        }
    }

    async coretogglesOffIfOn() {
        await this.toggleOffIfOn(this.spex_toggle, 'Spex');
        await this.toggleOffIfOn(this.agenda_toggle, 'Agenda');
        await this.toggleOffIfOn(this.networking_toggle, 'Networking');
    }

    async registrationtoggleOffIfOn()
    {
        await this.toggleOffIfOn(this.registration_toggle, 'Registration');
    }

    async communicationtogglesOffIfOn()
    {
        await this.toggleOffIfOn(this.notification_toggle,'Notification');
        await this.toggleOffIfOn(this.survey_toggle,'Survey');
        await this.toggleOffIfOn(this.emails_toggle,'Emails');
    }
}