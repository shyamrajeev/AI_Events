import { expect } from '@playwright/test';
import { escape } from 'node:querystring';

export class AdminRedirection
{
    constructor(page)
    {
        this.page = page;
        this.event_settings = page.locator('span:has-text("EVENT SETTINGS")');
        this.event_details =  page.locator('span:has-text("Events Details")');
        this.details = page.locator('button').filter({ hasText: 'Details' }).first();
        this.eventdetails_networking = page.locator(':text-is("Networking")');
        this.location = page.locator('button:has-text("Locations")');
        this.homepage_builder = page.locator('span:has-text("Homepage Builder")');
        this.registration_page =  page.locator('span:has-text("Registration Page")');
        this.general_settings = page.locator('button:has-text("General Settings")');
        this.demographic_fields =  page.locator('button:has-text("Demographic Fields")');
        this.consent_capture = page.locator('button:has-text("Consent Capture")');
        this.custom_questions = page.locator('button:has-text("Custom Questions")');
        this.registration_url = page.locator('button:has-text("Registration URLs")');
        this.event_library =  page.locator('span:has-text("Event Library")');
        this.advery_placement = page.locator('span:has-text("Advert Placements")');
        this.web_navigation = page.locator('span:has-text("Web Navigation")')
        this.agenda_tab = page.locator(':text-is("AGENDA")');
        this.agenda_stage = page.locator('span:has-text("Stages")');
        this.agenda_session = page.locator('span:has-text("Sessions")');
        this.agenda_sessionpolls =  page.locator('button:has-text("Session Polls")');
        this.agenda_ondemand = page.locator('span:has-text("On Demand")');
        this.networking = page.locator('span:has-text("NETWORKING")');
        this.onlie_tables = page.locator('span:has-text("Online Tables")');
        this.online_meeting = page.locator('span:has-text("Online Meetings")');
        this.users_tab =  page.locator(':text-is("USERS")');
        this.users_attendees = page.locator('span:has-text("Attendees")');
        this.users_speakers =  page.locator('span:has-text("Speakers")');
        this.users_admin = page.locator('span:has-text("Admins")');
        this.users_roletype =  page.locator('span:has-text("Role Types")')
        this.filters = page.locator('span').filter({ hasText: 'FILTERS' });
        this.interest_filters = page.locator('span:has-text("Interests")');
        this.filter_groups =  page.locator('span:has-text("Filter Groups")');
        this.filter_filters = page.getByRole('button', { name: 'Filters', exact: true });
        this.communication = page.locator(':text-is("COMMUNICATIONS")') ;
        this.campaign = page.locator('span:has-text("Campaigns")');
        this.email_campaign = page.locator('button').filter({ hasText: 'Campaigns' }).first();
        this.email_template = page.locator('button:has-text("Templates")');
        this.spex_sponsor = page.locator('span:has-text("SPEX & SPONSERS")');
        this.exhibitor =  page.locator('span:has-text("Exhibitors")');
        this.zone = page.locator('span:has-text("Zones")');
        this.category =  page.locator(':text-is("Categories")');
        this.sponsor = page.locator('span:has-text("Sponsors")');
        this.sponsor_category = page.locator('span:has-text("Sponsor Categories")');
        this.hosted_buyer = page.locator('span:has-text("HOSTED BUYER")');
        this.programs = page.locator('span:has-text("Programs")');
        this.profile_icon = page.locator("button[class='flex items-center space-x-3 focus:outline-none hover:opacity-90 transition-opacity cursor-pointer text-left'] svg");
        this.enterevent = page.locator('span:has-text("Enter Event")');
        this.back2lobby = page.locator('span:has-text("Back to Lobby")');
        this.logout = page.locator('span:has-text("Logout")');
    }

    async eventdetails()
    {
        await this.page.waitForTimeout(2000);
        if(await this.page.locator('span:has-text("Events Details")').isVisible())
        {
        await expect(this.page.locator('h1:has-text("Event Details")')).toBeVisible();
        await this.details.click();
        await expect(this.page.locator('h2:has-text("Details")')).toBeVisible();
        await this.eventdetails_networking.click();
        await expect(this.page.locator('h2:has-text("Networking")')).toBeVisible();
        await this.location.click();
        await expect(this.page.locator('h2:has-text("Locations")')).toBeVisible();
        }
        else
        {
            await this.page.waitForTimeout(2000);
        await this.event_settings.click();
        await this.event_details.click();
        await expect(this.page.locator('h1:has-text("Event Details")')).toBeVisible();
        await this.details.click();
        await expect(this.page.locator('h2:has-text("Details")')).toBeVisible();
        await this.networking.click();
        await expect(this.page.locator('h2:has-text("Networking")')).toBeVisible();
        await this.location.click();
        await expect(this.page.locator('h2:has-text("Locations")')).toBeVisible();

        }
        
    }
    async homepagebuilder()
    {
        await this.homepage_builder.click();
        await expect(this.page.locator('h1:has-text("Homepage Builder")')).toBeVisible();
    }
    async registrationpage()
    {
        await this.registration_page.click();
        await expect(this.page.locator('h1:has-text("Registration")')).toBeVisible();
        await this.general_settings.click();
        await expect(this.page.locator('div').filter({ hasText: 'General Settings' }).first()).toBeVisible();
        await this.demographic_fields.click();
        await expect(this.page.locator('div').filter({ hasText: 'Demographic Fields' }).first()).toBeVisible();
        await this.consent_capture.click();
        await expect(this.page.locator('h2:has-text("Consent Capture")')).toBeVisible();
        await this.custom_questions.click();
        await expect(this.page.locator('div').filter({ hasText: 'Custom Questions' }).first()).toBeVisible();
        await this.registration_url.click();
        await expect(this.page.locator('div').filter({ hasText: 'Registration URLs' }).first()).toBeVisible();
    }
    async eventlibrary()
    {
        await this.event_library.click();
        await expect(this.page.locator('h1:has-text("Media Library")')).toBeVisible();
    }
    async adverts()
    {
        await this.advery_placement.click();
        await expect(this.page.locator('h1:has-text("Advert Placements")')).toBeVisible();
    }
    async webnavigation()
    {
        await this.web_navigation.click();
        await expect(this.page.locator('h1:has-text("Web Navigation")')).toBeVisible();
    }
    async agendastage()
    {
        await this.agenda_tab.click();
        await this.agenda_stage.click();
        await expect(this.page.locator('h1:has-text("Stages")')).toBeVisible();
    }
    async agendasession()
    {
        await this.agenda_session.click();
        await expect(this.page.locator('h1:has-text("Sessions")')).toBeVisible();
    }
    async agendasessionpoll()
    {
        await this.agenda_sessionpolls.click();
        await expect(this.page.locator('h1:has-text("Session Polls")')).toBeVisible();
    }
    async agendaondemand()
    {
        await this.agenda_ondemand.click();
        await expect(this.page.locator('h1:has-text("On Demand")')).toBeVisible();
    }
    async networkingtables()
    {
        await this.networking.click();
        await this.onlie_tables.click();
        await expect(this.page.locator('h1:has-text("Online Networking Tables")')).toBeVisible();
    }
    async meetings()
    {
        await this.online_meeting.click();
        await expect(this.page.locator('h1:has-text("Online Meetings")')).toBeVisible();
    }
    async attendeeuser()
    {
        await this.users_tab.click();
        await this.users_attendees.click();
        await expect(this.page.locator('h1:has-text("Attendees")')).toBeVisible();
    }
    async speakeruser()
    {
        await this.users_speakers.click();
        await expect(this.page.locator('h1:has-text("Speakers")')).toBeVisible();
    }
    async adminuser()
    {
        await this.users_admin.click();
        await expect(this.page.locator('h1:has-text("Admins")')).toBeVisible();
    }
    async roletype()
    {
        await this.users_roletype.click();
        await expect(this.page.locator('h1:has-text("Role Types")')).toBeVisible();
    }
    async filtersection()
    {
        await this.filters.click();
        await this.interest_filters.click();
        await expect(this.page.locator('h1:has-text("Interests")')).toBeVisible();
        await this.filter_groups.click();
        await expect(this.page.locator('h1:has-text("Filter Groups")')).toBeVisible();
        await this.filter_filters.click();
        await expect(this.page.locator('h1:has-text("Filters")')).toBeVisible();
    }
    async campaigns()
    {
        await this.communication.click();
        await this.campaign.click();
        await this.email_campaign.click();
        await expect(this.page.locator('h1:has-text("Email Campaigns")')).toBeVisible();
        await this.email_template.click();
        await expect(this.page.locator('h1:has-text("Email Templates")')).toBeVisible();
    }
    async expo()
    {
        await this.spex_sponsor.click();
        await this.exhibitor.click();
        await expect(this.page.locator('h1:has-text("Exhibitors")')).toBeVisible();
        await this.zone.click();
        await expect(this.page.locator('h1:has-text("Exhibitor Zones")')).toBeVisible();
        await this.category.click();
        await expect(this.page.locator('h1:has-text("Exhibitor Categories")')).toBeVisible();
    }
    async sponsorpages()
    {
        await this.sponsor.click();
        await expect(this.page.locator('h1:has-text("Sponsors")')).toBeVisible();
        await this.sponsor_category.click();
        await expect(this.page.locator('h1:has-text("Sponsor Categories")')).toBeVisible();
    }
    async hosted()
    {
        await this.hosted_buyer.click();
        await this.programs.click();
        await expect(this.page.locator('h1:has-text("Hosted Buyer Programs")')).toBeVisible();
    }
    async evententer()
    {
        await this.profile_icon.click();
        await this.enterevent.click();
    }
    async tolobby()
    {
        await this.profile_icon.click();
        await this.back2lobby.click();
    }
    async userlogout()
    {
        await this.profile_icon.click();
        await this.logout.click();
    }
}