import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { PageHeader, Row, Table, Label, FormGroup, Checkbox, Alert } from 'react-bootstrap';

class Users extends Component {
    constructor(props) {
        super(props);
        this.authorizeAccess = this.authorizeAccess.bind(this);
        this.handleChangeRole = this.handleChangeRole.bind(this);
    }

    checkIfCurrentUser(mappedUserId, currentUserId) {
        return mappedUserId === currentUserId;
    }

    handleChangeRole(_id, role, hasRole) {
        Meteor.call('users.changeRole', { _id, role, hasRole }, (error) => {
            if (error) {
                    <Alert bsStyle="danger">
                    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
                    </Alert>
                // Meteor.alert(error.reason, 'danger');
            } else {
                <Alert bsStyle="success">
                <strong>Holy guacamole!</strong> Role Updated
                </Alert>
                // Meteor.alert('Role updated!', 'success');
            }
        });
    }

    authorizeAccess() {
        if (!Roles.userIsInRole(this.props.currentUser, ['admin'])) {
          <Redirect to="/"/>
        }
    }

    componentDidUpdate() {
        this.authorizeAccess();
    }

    componentWillMount() {
        this.authorizeAccess();
    }

    render() {
        let count = 0;
        const { users, currentUser, applicationRoles } = this.props;
        return (<div className="users">
            <PageHeader>Users</PageHeader>
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email Address</th>
                        <th>Verified</th>
                        <th>Roles</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(({ _id, emails, roles, profile }) => {
                    const isCurrentUser = this.checkIfCurrentUser(_id, currentUser._id);
                    return (<tr key={_id}>
                        <td className="vertical-align" width="5%">
                            {++count}
                        </td>
                        <td className="vertical-align" width="40%">
                            {isCurrentUser ? <Label bsStyle="success">You!</Label> : ''}
                            {emails ? emails[0].address : profile.name}
                        </td>
                        <td className="vertical-align" width="10%">
                            {emails ? (emails[0].verified ? "Yes" : "No") : "Other Login"}
                        </td>
                        <td className="vertical-align" width="45%">
                            <FormGroup controlId="roles">
                            {applicationRoles.map((role) => {
                                return(
                                    <Checkbox
                                        key={role._id}
                                        name={role.name}
                                        disabled={isCurrentUser}
                                        checked={Roles.userIsInRole(_id, role.name)}
                                        inline
                                        onChange={(event) => { this.handleChangeRole(_id, event.target.name, !event.target.value); }}>
                                        {role.name}
                                    </Checkbox>
                                );
                            })}
                            </FormGroup>
                        </td>
                    </tr>);
                    })}
                </tbody>
            </Table>
        </div>
        );
    }
};

Users.propTypes = {
  users: PropTypes.array,
  currentUser: PropTypes.object,
  applicationRoles: PropTypes.array,
};


export default createContainer(({props}) => {
    let usersSub = Meteor.subscribe('users');
    const usersArray = Meteor.users.find().fetch();
    // const isReady = usersSub.ready() && Roles.usersSub.ready();
    const currentUser = Meteor.user();
    const applicationRoles = Roles.getAllRoles().fetch();

    return {
        // ready: isReady,
        users: usersArray,
        currentUser: currentUser,
        applicationRoles: applicationRoles,
    }
}, Users);
