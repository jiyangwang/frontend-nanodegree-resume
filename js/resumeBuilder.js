/*
This is empty on purpose! Your code to build the resume will go here.
*/

// var awesomeThoughts = "I am Jiyang, I am AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);

// var s = "audacity";
// s = s[1].toUpperCase() + s.slice(2);

// function incrementLastArrayElement(_array)  {
//     var newArray = [];
//     newArray = _array.slice(0);
//     var lastNumber = newArray.pop();
//     newArray.push(lastNumber + 1);
//     return newArray;
// }

var bio = {
	"name": "Jiyang Wang",
	"role": "Front End Engineer",
	"contacts": {
		"mobile": "408-766-4684",
		"email": "jiyang.wang.us@gmail.com",
		"github": "https://github.com/jiyangwang",
		"linkedin": "https://www.linkedin.com/in/jiyang-wang-87533b113",
		"website": "jiyangwang.us",
		"location": "Mountain View"
	},
	"welcomeMessage": "Ni Hao!",
	"skills": ["backbone", "angular", "react"],
	"bioPic": "images/fry.jpg"
}

var education = {
	"schools": [
		{
			"name": "SJSU",
			"city": "San Jose",
			"degree": "Master",
			"major": ["EE"],
			"dates": 2016
		},
		{
			"name": "BUCT",
			"city": "Beijing",
			"degree": "Bachelor",
			"major": ["EE"],
			"dates": 2014
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Engineer",
			"school": "Udacity",
			"dates": 2017,
			"url": "https://classroom.udacity.com/nanodegrees/nd001"
		}
	]
}

var work = {
	"jobs": [
		{
			"start": "2016-01-01",
			"employer": "Yanset",
			"title": "Front End Engineer",
			"dates": "2016-01-01",
			"location": "San Jose",
			"description": "Angular.js Application"
		},
		{
			"start": "2016-11-14",
			"employer": "BroadVision Inc.",
			"title": "Front End Engineer",
			"dates": "2016-11-14",
			"location": "Mountain View",
			"description": "Backbone.js Application"
		}
	]	
}

var projects = {
	"projects": [
		{
			"title": "Training Center",
			"dates": "2016",
			"description": "Worked in an agile team to create training center platform which provides live coding courses for subscribers, deployed on Apache HTTP Server.",
			"image": "images/trainingcenter-small.png"
		}
	]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}

$("#main").append(work["position"]);
$("#main").prepend(education.name);

function inName(name) {
	name = name.trim().split(" ");
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return name[0] + " " + name[1];
}

function displayWork() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}

projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedProjectDates = HTMLprojectTitle.replace("%data%", projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		$(".project-entry:last").append(formattedProjectImage);
	}
}

displayWork();
projects.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);