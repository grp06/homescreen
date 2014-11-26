Today = new Meteor.Collection("today");

ThisWeek = new Meteor.Collection("thisWeek");

CoolLinks = new Meteor.Collection("coolLinks");

TextSnippets = new Meteor.Collection("textSnippets");

Comments = new Meteor.Collection("commnets");

Completed = new Meteor.Collection("completed")

CompletedThisWeek = new Meteor.Collection("completedThisWeek")



// On server startup, start at total: 0 if the database is empty.
if (Meteor.isServer) {
	Meteor.startup(function () {});
}
