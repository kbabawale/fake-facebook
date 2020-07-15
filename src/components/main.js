import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Homepage from './homepage';




export default class Main extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                </Switch>
            </BrowserRouter>

        )
    }
}