CoolLinks = new Meteor.Collection("coolLinks");


if (Meteor.isClient) {

	Template.coolLinks.helpers({

		returnAllItems: function () {
			return CoolLinks.find({
			})
		},
		highlightedItem: function () {
			var itemId = this._id;
			var selectedItem = Session.get('selectedItem');
			if (selectedItem === itemId) {
				return 'selectedLink'
			}
		}
	})
	


	Template.coolLinks.events({
		'keyup .snippetEntry': function (e) {
			if (e.which === 13) {
				var currentUserId = Meteor.userId();
				CoolLinks.insert({
					item: $('.snippetEntry').val(),
					createdBy: currentUserId
				});
				$('.snippetEntry').val('');
			}
		},
		'click .linkSelect': function () {
			var itemId = this._id;
			Session.set('selectedItem', itemId);
			var selectedItem = Session.get('selectedItem')
			console.log(selectedItem)
		},
		'click .removeLink': function () {
			var selectedItem = Session.get('selectedItem');
			CoolLinks.remove(selectedItem);
		}
	})

	
}