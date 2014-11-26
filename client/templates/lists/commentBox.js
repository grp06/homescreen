Comments = new Meteor.Collection("commnets");

Template.commentBox.helpers({
    showCommentBox: function() {
        var itemId = this._id;
        var showCommentBox = Session.get('commentId');
        if (showCommentBox === itemId) {
            return true;
        }
    }
})

Template.commentBox.events({
    'click .submitComment': function() {
    	var submitId = this._id;
    	var d = new Date();
		var n = d.toLocaleDateString(); 	
		var r = new Date();
		var t = d.toLocaleTimeString();
		var currentUserId = Meteor.userId();
	   	var hello = Meteor.user();
      	var hello1 = hello.emails;
       	var hello2 = hello1[0]
       	var author = hello2.address
            console.log(author)

        Comments.insert({
            commentText: $('.typeComment').val(),
            date: (n + " " + t),
            postId: this._id,
            createdBy: currentUserId,
            author: author
        });
        $('.typeComment').val('');
    }

})