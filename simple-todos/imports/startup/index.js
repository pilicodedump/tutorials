import './accounts-config.js';

import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import Home from '../ui/layouts/home';

Meteor.startup(() => {
  render(<Home />, document.getElementById('render-target'));
});
