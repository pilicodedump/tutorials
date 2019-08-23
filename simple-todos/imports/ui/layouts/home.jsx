import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

import App from '../components/App';

import Hello from '../pages/hello';
import One from '../pages/one';
import Two from '../pages/two';
import NotFound from '../pages/not-found';

import Navigation from '../components/navigation';

const Home = () => (
    <Router>
        <div>
            <Navigation />
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/one" component={One}/>
                    <Route path="/two" component={Two}/>
                    <Route path="/hello/:name" component={Hello}/>
                    <Route component={NotFound}/>
                </Switch>
          </div>
    </Router>
);

export default Home;
