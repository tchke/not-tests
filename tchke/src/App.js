import React from 'react';
import { Link, Route } from 'react-router-dom';
import Companies from './Components/Companies';
import Company from './Components/Company';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Companies} />
                <Route exact path='/company/:id' component={Company} />
            </div>
        );
    }
}