Template.commentContent.helpers({

    returnCommentText: function() {
        return Comments.find({postId: this._id});
        
    }


})