import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './navigations';

// добавляем navbar нужным компонентам
export const NavigationRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => (
            <div>
                <Navigation />
                <Component {...props} />
            </div>
        )}
        />
    )
}