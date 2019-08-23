import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import Items from '../Items';

Meteor.methods({
    insertNewItem(itemOne, itemTwo) {
        Items.insert({
            itemOne: {
                text: itemOne,
                value: 0,
            },
            itemTwo: {
                text: itemTwo,
                value: 0,
            }
        });
        Roles.addUsersToRoles(Meteor.userId(), 'submitter');
    },

    voteOnItem(item, position) {
        check(item, Object);
        let lastUpdated = new Date();
        if(Meteor.userId()){
            if(position === 'itemOne') {
                Items.update(item._id, {
                    $inc: {
                        'itemOne.value': 1
                    },
                    $set: {
                        lastUpdated
                    }
                })
            } else {
                Items.update(item._id, {
                    $inc: {
                        'itemTwo.value': 1
                    },
                    $set: {
                        lastUpdated
                    }
                })
            }
            Roles.addUsersToRoles(Meteor.userId(), 'voter');
        }
    }
});
