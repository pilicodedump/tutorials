import React from 'react';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import { NavLink } from 'react-router-dom';
import IsRole from '../utilities/IsRole';


const MainLayout = ({children}) => (
    <div className="main-layout">
        <header>
            <h1><NavLink to="/">Level Up Voting</NavLink></h1>
            <LoginButtons />
            <ul>
                <li><NavLink to="/about">About</NavLink></li>
                <IsRole role="admin"><li>
                    <NavLink to="/users">UserAdmin</NavLink>
                </li></IsRole>
            </ul>
        </header>
        {children}
    </div>
);

export default MainLayout;
