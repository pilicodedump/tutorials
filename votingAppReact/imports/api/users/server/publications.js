import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

Meteor.publish('users', () => ([
  Meteor.users.find({}, { fields: { emails: 1, roles: 1, profile: 1 } }),
  Roles.getAllRoles(),
]));

Meteor.publish('users.roles', () => Roles.getAllRoles());

Meteor.publish('currentUser', function() {
    return Meteor.users.find({_id: this.userId}, {
        fields: {
            roles: 1,
        }
    });
});
