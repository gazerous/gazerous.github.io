// ############OBJECTS BEGIN###############
//###BIO B
var bio = {
    "name" : "Vladimir Korobeynikov",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "111-111-1111",
        "email" : "email@email.com",
        "github" : "somegithub",
        "twitter" : "@none",
        "location" : "Brooklyn, New York"
    },
    "welcomeMessage": "Welcome message thingy is working I guess.",
    "skills" : [
        "great" , "does stuff" , "does more stuff", "all the stuff"
    ],
    "bioPic" : "images/temp.gif",
    "display" : function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);

        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);

        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedTwitter);

        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);

        var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedBiopic);

        var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedwelcomeMsg);

        $("#header").append(HTMLskillsStart);

        for (skill in bio.skills) {

            var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#header").append(formattedSkills);
        }
    }
};
//###BIO E

//###EDUCATION B
var education = {
    "schools": [
        {
            "name" : "Random College Name",
            "location" : "Queens, NY",
            "degree" : "Some random degree",
            "majors" : ["schools majors"],
            "dates" : 2005,
            "url" : "url to schools webpage"
        },
        {
            "name" : "John Jay College",
            "location" : "New York, NY",
            "degree" : "some random degree 2",
            "majors" : ["schools2 majors"],
            "dates" : 2010,
            "url" : "url to schools webpage"
        }
    ],
    "onlineCourses":[
        {
            "title" : "Front-End Web Developer",
            "schools" : "Udacity",
            "dates" : 2016,
            "url" : "www.udacity.com/nanodegrees/nd001"
        },
        {
            "title" : "Senior Web Developer",
            "schools" : "Udacity",
            "dates" : 2016,
            "url" : "www.udacity.com/nanodegrees/nd802"
        }
    ],
    "display" : function() {
        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);

            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            $(".education-entry:last").prepend(formattedName + formattedDegree);

            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedDates);

            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedLocation);

            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedMajor);

        }

        $("#education").append(HTMLonlineClasses);

        for (course in education.onlineCourses){
            $("#education").append(HTMLschoolStart);

            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);

            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].schools);
            $(".education-entry:last").append(formattedTitle + formattedSchool);

            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedDates);

            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".education-entry:last").append(formattedURL);

        }
    }
};
//###EDUCATION E

//###WORK B
var work = {
    "jobs": [
        {
            "employer" : "Amalg analytics",
            "title" : "Tech Guy",
            "dates" : "March 2013 - Present",
            "location" : "New York, NY",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis blandit nisi, a feugiat justo ullamcorper ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices dictum dolor sit amet molestie"
        },
        {
            "employers" : "company 2",
            "title" : "Tech Dude",
            "dates" : "April 215 - January 2016",
            "location" : "Seattle, WA",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis blandit nisi, a feugiat justo ullamcorper ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices dictum dolor sit amet molestie"
        }
    ],
    "display" : function() {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

            $(".work-entry:last").append(formattedEmployer + formattedTitle); // combines the titles

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};
//###WORK E

//###PROJECTS B
var projects = {
    "projects": [
        {
        "title" : "Amalgamated Analytics website",
        "dates" : "2013 - Present",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis blandit nisi, a feugiat justo ullamcorper ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices dictum dolor sit amet molestie",
        "images": [
            "images/temp.gif", "images/temp.gif"
                 ]
        }
   ],
    "display" : function() {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var pTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(pTitle);

            var pDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(pDates);

            var pDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(pDescription);

            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var pImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(pImage);
                }
            }
        }
    }
};
//###PROJECTS E
//##############OBJECTS END##########

// ##########DISPLAY FUNCTIONS BEGIN#####################
bio.display();
work.display();
projects.display();
education.display();
// ##########DISPOLAY FUNCTIONS END#####################

//###########GOOGLE MAPS BEGIN######################
$("#mapDiv").append(googleMap);
//###########GOOGLE MAPS END###################


