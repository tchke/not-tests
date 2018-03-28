import React from 'react';
import { Link, Route } from 'react-router-dom';
import List from './Components/List';
import Item from './Components/Item';
import NewItem from './Components/NewItem';
import CompaniesStore from './Models/CompaniesStore';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.store = new CompaniesStore();
    }

    render() {
        return (
            <div>
                <Route exact path='/' render={this.renderCompanies} />
                <Route exact path='/company/:id' render={this.renderCompany} />
                <Route exact path='/newcompany' render={this.renderNewCompany} />
            </div>
        );
    }

    renderCompanies = () => {
        return <List store={this.store} />;
    }

    renderCompany = ({ match }) => {
        const { params } = match;   
        return <Item store={this.store} id={params.id} />;
    }

    renderNewCompany = () => {
        return <NewItem store={this.store} />
    }
}