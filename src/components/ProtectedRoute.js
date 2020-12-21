import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({component: Component, loggedIn, ...rest}) => {
    return (
        <Route {...rest} render={props => 
           loggedIn ?
            <Component {...props} {...rest}/> 
            :
            <Redirect to="login"/>
        } />
    )
}

export default ProtectedRoute;