export class Lobby {
    constructor(page, eventName) {
        this.page = page;
        this.eventName = eventName;
        this.search_box = page.getByRole('textbox', { name: 'Search Events' });
        this.event_titles = page.locator('h3');
    }

    /**
     * Resolves the target event name, prioritizing the method parameter over the constructor value.
     */
    _resolveEventName(eventName) {
        const name = eventName || this.eventName;
        if (!name) {
            throw new Error('Event name must be specified either when instantiating Lobby or when calling the method.');
        }
        return name;
    }

    /**
     * Locates the card container for the specific event.
     */
    getEventCard(eventName) {
        const name = this._resolveEventName(eventName);
        return this.page.locator('.bg-white.rounded-2xl').filter({
            has: this.page.getByRole('heading', { name: name, exact: true })
        });
    }

    /**
     * Locates the "Enter Event" button within the specific event's card.
     */
    enter_event_button(eventName) {
        return this.getEventCard(eventName).getByRole('button', { name: 'Enter Event' });
    }

    /**
     * Locates the "Enter Admin" button for the specific event.
     */
    admin_button(eventName) {
        const name = this._resolveEventName(eventName);
        return this.page.getByRole('button', { name: `Enter Admin for ${name}` });
    }

    /**
     * Locates the "Open Module Settings" button for the specific event.
     */
    module_settings_button(eventName) {
        const name = this._resolveEventName(eventName);
        return this.page.getByRole('button', { name: `Open Module Settings for ${name}` });
    }

    async search(eventName) {
        await this.search_box.fill(eventName);
    }

    async enter_event(eventName) {
        await this.enter_event_button(eventName).click();
    }

    async event_admin(eventName) {
        await this.admin_button(eventName).click();
    }

    async module_setting(eventName) {
        await this.module_settings_button(eventName).click();
    }
    
}