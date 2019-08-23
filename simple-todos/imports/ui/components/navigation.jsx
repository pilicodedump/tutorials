import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navigation = () => (
    <nav>
        <NavLink to="/" activeClassName="active">App</NavLink>
        <NavLink to="/one" activeClassName="active">Page One</NavLink>
        <NavLink to="/two" activeClassName="active">Page Two</NavLink>
        <NavLink to="/hello/pili" activeClassName="active">Hello</NavLink>
    </nav>
);

export default Navigation;
