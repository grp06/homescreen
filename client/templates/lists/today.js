Today = new Meteor.Collection("today");
Completed = new Meteor.Collection("completed")


if (Meteor.isClient) {

    Template.today.helpers({

        returnAllItems: function() {
            var currentUserId = Meteor.userId();
            return Today.find({
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
            return Completed.find({
                createdBy: currentUserId                
            })
        }
    })


    Template.today.events({
        'keyup .todoEntry': function(e) {
            if (e.which === 13) {
                var currentUserId = Meteor.userId();
                Today.insert({
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
            Completed.remove(selectedItem);
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
                var theItem = Today.findOne({
                    _id: this._id
                });
                var theItem2 = theItem.item;
                Completed.insert({
                    completed: theItem2,
                    createdBy: currentUserId,
                });
                var selectedItem = Session.get('selectedItem');
                Today.remove(selectedItem)
            }

        }

    })


}