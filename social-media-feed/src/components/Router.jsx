import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={"Home"} />
            <Route exact path="/:id" component={"Post"} />
        </Switch>
        </BrowserRouter>
    );
    }   