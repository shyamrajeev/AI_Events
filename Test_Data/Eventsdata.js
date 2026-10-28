export const EventsData = {
    create_event:{
        eventName : 'Phobos Events',
        fromemailaddress : 'phobosevents',
        start_date : '2026-11-01',
        end_date : '2026-11-12',
        time_zone : 'Asia/Kolkata',
        logo : '/Users/totem/Desktop/AIEvents/Test_Data/Mediafiles/phobos.jpg',
        eventcolour : '#3787d7' 
    },
    admin_psd_validation:{
        first_name : 'shyam',
        last_name : 'rajeev',
        email : 'shyam.rajeev@toobler.com',
        dp : '/Users/totem/Desktop/AIEvents/Test_Data/Mediafiles/profile_avatar.avif',
        job : 'QA',
        company : 'Toobler',
        Password : '12'
    },
    create_admin:{
        first_name : 'Abhi',
        last_name : 'K',
        email : 'abhi.k@gmail.com',
        dp : '/Users/totem/Desktop/AIEvents/Test_Data/Mediafiles/profile_avatar.avif',
        job : 'QA',
        company : 'Toobler',
        Password : process.env.admin_createpassword
    },
    admin_editprofile:{
        admin_name : 'Sreethin Babu E'
    },
    createadmin_4update:{
        first_name : 'Deepak',
        last_name : 'M',
        email : 'deepak.m@gmail.com',
        dp : '/Users/totem/Desktop/AIEvents/Test_Data/Mediafiles/profile_avatar.avif',
        job : 'Test',
        company : 'Toobler',
        Password : process.env.admin_createpassword
    },
    admin_update:{
        first_name : 'Deepak Update',
        last_name : 'Deepak Update',
        job : 'Test update',
        company : 'Toobler update',
    },
    event_name_lobbyactions:{
        event_name : 'Star Events'
    }
}