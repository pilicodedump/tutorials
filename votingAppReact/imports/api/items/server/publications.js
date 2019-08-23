import { Meteor } from 'meteor/meteor';

import Items from '../Items';

Meteor.publish('allItems', function() {
    return Items.find({}, {
        limit: 50,
        sort: { lastUpdated: 1 }
    });
});
