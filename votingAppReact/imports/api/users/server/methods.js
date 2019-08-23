import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';

Meteor.methods({
  'users.changeRole': function usersChangeRole(update) {
    check(update, { _id: String, role: String, hasRole: Boolean });

    if (Roles.userIsInRole(this.userId, ['admin'])) {
        if (update.hasRole === "on"){
            Roles.addUsersToRoles(update._id, update.role);
        } else {
            Roles.removeUsersFromRoles(update._id, update.role);
        }

    } else {
      throw new Meteor.Error('500', 'Ha! Nice try, slick.');
    }
  },
});
