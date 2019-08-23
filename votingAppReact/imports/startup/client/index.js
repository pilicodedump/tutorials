// import client startup through a single index entry point
//import './useraccounts-configuration.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import Routes from './Routes';

Meteor.startup(() => {
    render(<Routes />, document.getElementById('render-target'));
});
