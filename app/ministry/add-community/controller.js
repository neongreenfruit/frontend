import Ember from "ember";
import IsUpdateDisabled from "hospitalrun/mixins/is-update-disabled";
export default Ember.ObjectController.extend(IsUpdateDisabled, {
    needs: 'ministry/edit',

    actions: {
        cancel: function() {
            //this.get('model').rollback();
            this.send('closeModal');
        },

        update: function() {
            var isNew = this.get('isNew'),
            newCommunity = this.getProperties('eventName', 'date', 'type', 'location', 'numberPastorChurch', 'numberParticipants');
            newCommunity.save().then(function() {
                if (isNew) {    
                    this.get('editController').send('addCommunity', newCommunity);
                } else {
                    this.send('closeModal');
                }
            }.bind(this));      
        }
    },
    
    editController: Ember.computed.alias('controllers.ministry/edit'),
    showUpdateButton: true,
    
    title: function() {
        if (this.get('isNew')) {            
            return 'Add Community Event';
        } else {
            return 'Edit Community Event';
        }
    }.property('isNew'),
    
    updateButtonAction: 'update',
    updateButtonText: function() {
        var isNew = this.get('isNew');
        if (isNew) {
            return 'Add';
        } else {
            return 'Update';
        }
    }.property('isNew'),

});
