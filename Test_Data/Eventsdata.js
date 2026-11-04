export const EventsData = {
    create_event:{ //Data for creating an event
        eventName : 'DE JAZZ CENTRALE',
        fromemailaddress : 'Dejazz',
        start_date : '2026-11-01',
        end_date : '2026-11-12',
        time_zone : 'Asia/Kolkata',
        logo : '/Users/totem/Desktop/AIEvents/Test_Data/Mediafiles/dejazz.png',
        eventcolour : '#3787d7' 
    },
    admin_psd_validation:{ //Data for checking the admin password validation while creating
        first_name : 'shyam',
        last_name : 'rajeev',
        email : 'shyam.rajeev@toobler.com',
        dp : '/Users/totem/Desktop/AIEvents/Test_Data/Mediafiles/profile_avatar.avif',
        job : 'QA',
        company : 'Toobler',
        Password : '12'
    },
    create_admin:{ //Data for admin creation
        first_name : 'Hiran',
        last_name : 'K',
        email : 'hiran.k@gmail.com',
        dp : '/Users/totem/Desktop/AIEvents/Test_Data/Mediafiles/profile_avatar.avif',
        job : 'QA',
        company : 'Toobler',
        Password : process.env.admin_createpassword
    },
    admin_editprofile:{ // Accessing admin edit page and checking the correct edit page is opened
        admin_name : 'Akhil K'
    },
    createadmin_4update:{ //Data for creating admin for later updating that admin
        first_name : 'vijay',
        last_name : 'M',
        email : 'vijay.m@gmail.com',
        dp : '/Users/totem/Desktop/AIEvents/Test_Data/Mediafiles/profile_avatar.avif',
        job : 'Test',
        company : 'Toobler',
        Password : process.env.admin_createpassword
    },
    admin_update:{ //Data that will be updated in the admin creating from createadmin_4update:
        first_name : 'Vijay Update',
        last_name : 'M Update',
        job : 'Test update',
        company : 'Toobler update',
    },
    event_name_lobbyactions:{ // Passing the event name for the lobby actions
        event_name : 'Phobos Events'
    },
    event_name_modulesettings:{ //Passing the event name for the module settings actions
        event_name : 'Phobos Events'
    },
    addingsameadmin:{ // Data for checking whether the admin with the same email can be added again
        first_name : 'shyam',
        last_name : 'rajeev',
        email : 'shyam.rajeev@toobler.com',
        dp : '/Users/totem/Desktop/AIEvents/Test_Data/Mediafiles/profile_avatar.avif',
        job : 'QA',
        company : 'Toobler',
        Password : process.env.admin_createpassword
    },
    attendee_psdvalidation:{ //Data for checking the password validaiton on adding an attendee
        email : 'binoy.m@gmail.com',
        first_name :'Binoy',
        last_name : 'M',
        job :'Dev',
        company :'Toobler',
        roles: ['Delegate', 'Speaker','Sponsor'],
        display_role :'Speaker',
        type : 'Online', //In-Person
        password : '1234'

    },
    add_attendee:{ // Data for adding an attendee
        email : 'kiran.k@gmail.com',
        first_name :'Kiran',
        last_name : 'Kumar',
        job :'Dev',
        company :'Toobler',
        roles: ['Delegate', 'Speaker','Sponsor'],
        display_role :'Speaker',
        type : 'Online', //In-Person
        password : process.env.attendee_createpassword
    },
    update_attendee:{ // Creating attendee for checking the update function
        email : 'jishnu.m@gmail.com',
        first_name :'Jishnu',
        last_name : 'M',
        job :'Dev',
        company :'Toobler',
        roles: ['Delegate', 'Speaker','Sponsor'],
        display_role :'Speaker',
        type : 'Online', //In-Person
        password : process.env.attendee_createpassword
    },
    update_attendeedata:{ // Data for updating the attendee details created in update_attendee:
        first_name :'Jishnu Update',
        last_name : 'M',
        job :'Dev update',
        company :'Toobler',
        roles: ['Delegate', 'Speaker','Sponsor'],
        display_role :'Speaker',
        type : 'In-Person', //In-Person //Online
        
    },
    delete_attendee:{ // Data for creating an attendee for checking the delete function
        email : 'navi.m@gmail.com',
        first_name :'Navi',
        last_name : 'M',
        job :'QA',
        company :'Toobler',
        roles: ['Delegate', 'Speaker'],
        display_role :'Speaker',
        type : 'Online', //In-Person
        password : process.env.attendee_createpassword
    },
    attendee_search:{ // Attendee name passing to the search field 
        Name : 'binoy'
    },
    add_role:{ // Role name for adding a new role
        Name : 'QA'
    },
    update_role:{ // Data for checking the role update function
        Name : 'Delegate',
        Updated_Name: 'Delegate Update'
    },
    search_role:{ // Data for checking the role type search function
        Name : 'QA'
    },
    delete_role:{ // Data for creating a role for checking the delete function
        Name: 'Role 2 Delete'
    },
    adding_samerole:{
        Name : 'same role'
    }


    

}