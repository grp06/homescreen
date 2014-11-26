TextSnippets = new Meteor.Collection("textSnippets");


if (Meteor.isClient) {

    Template.textSnippets.helpers({
        returnAllItems: function() {
            var currentUserId = Meteor.userId();
            return TextSnippets.find({}, {sort: {total: -1}
            });
            return TextSnippets.findOne(total);


        },
        highlightedItem: function() {
            var itemId = this._id;
            var selectedItem = Session.get('selectedItem');
            if (selectedItem === itemId) {
                return 'selectedSnippet'
            }

        },
        showCommentBox: function(){
        	var itemId = this._id;
        	var showCommentBox = Session.get('commentId');
        	if (showCommentBox === itemId){
        		return true;
        	}
        }
        
    })

    Template.textSnippets.events({
        'keyup .snippetEntry': function(e) {
            if (e.which === 13) {
                var currentUserId = Meteor.userId();
        	   	var hello = Meteor.user();
      			var hello1 = hello.emails;
       			var hello2 = hello1[0]
       			var author = hello2.address
           		console.log(author)
                TextSnippets.insert({
                    item: $('.snippetEntry').val(),
                    createdBy: currentUserId,
                    total: 0,
                    author: author
                });
                $('.snippetEntry').val('');
            }
        },
        'click .snippetBox': function() {
            var itemId = this._id;
            Session.set('selectedItem', itemId);
            var selectedItem = Session.get('selectedItem');
            console.log(this._id)
        },
        'click .removeSnippet': function() {
            var selectedItem = Session.get('selectedItem');
            TextSnippets.remove(selectedItem);
        },
        'click .upvote': function() {
            TextSnippets.update({_id: this._id}, {$inc: {total: 1}});
        },
        'click .downvote': function() {
            TextSnippets.update({_id: this._id}, {$inc: {total: -1}});

        },
        'click .addComment': function(){
        	var itemId = this._id;
        	Session.set('commentId', itemId)
        }
    })

}