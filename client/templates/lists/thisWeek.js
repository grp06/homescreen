ThisWeek = new Meteor.Collection("thisWeek");
CompletedThisWeek = new Meteor.Collection("completedThisWeek")


if (Meteor.isClient) {

    Template.thisWeek.helpers({

        returnAllItems: function() {
            var currentUserId = Meteor.userId();
            return ThisWeek.find({
                createdBy: currentUserId
            })

        },
        highlightedItem: function() {
            var itemId = this._id;
            var selectedItem = Session.get('selectedItem');
            if (selectedItem === itemId) {
                return 'selected'
            }
        },
        returnCompletedItems: function() {
        	var currentUserId = Meteor.userId();
            return CompletedThisWeek.find({
                createdBy: currentUserId                

            })
        }
    })




    Template.thisWeek.events({
        'keyup .todoEntry': function(e) {
            if (e.which === 13) {
                var currentUserId = Meteor.userId();
                ThisWeek.insert({
                    item: $('.todoEntry').val(),
                    createdBy: currentUserId
                });
                $('.todoEntry').val('');
            }
        },
        'click .itemSelect': function() {
            var itemId = this._id;
            Session.set('selectedItem', itemId);
            var selectedItem = Session.get('selectedItem')
            console.log(selectedItem)
        },
        'click .removeTodoItem': function() {
            var selectedItem = Session.get('selectedItem');
            CompletedThisWeek.remove(selectedItem);
        },
        'click .completedSelect': function() {
            var itemId = this._id;
            Session.set('selectedItem', itemId);
            var selectedItem = Session.get('selectedItem')
            console.log(selectedItem)

        },
        'keyup .completeItem': function(e) {
            if (e.which === 13) {
                var currentUserId = Meteor.userId();                
                console.log(this._id)
                var theItem = ThisWeek.findOne({
                    _id: this._id
                });
                var theItem2 = theItem.item;
                CompletedThisWeek.insert({
                    completed: theItem2,
                    createdBy: currentUserId,

                });
                var selectedItem = Session.get('selectedItem');
                ThisWeek.remove(selectedItem)
            }

        }

    })


}