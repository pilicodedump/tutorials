import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainLayout from '../../ui/layouts/MainLayout';
import App from '../../ui/components/App';
import About from '../../ui/pages/About';
import UserAdmin from '../../ui/pages/users';

const Routes = () => (
    <Router>
        <MainLayout>
            <Switch>
                <Route exact path="/" component={ App } />
                <Route path="/items/:id" component={ App } />
                <Route path="/about" component={ About } />
                <Route path="/users" component={ UserAdmin } />
            </Switch>
        </MainLayout>
    </Router>
);

export default Routes;
