import React from 'react';
import { Link, Route } from 'react-router-dom';
import clone from 'lodash.clone';

import List from './Components/List';
import Item from './Components/Item';
import ItemEditor from './Components/ItemEditor';
import NewItem from './Components/NewItem';
import CompaniesStore from './Models/CompaniesStore';
import CompanyEditorStore from "./Models/CompanyEditorStore";
import DevTools from 'mobx-react-devtools';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.store = new CompaniesStore();
        this.companyEditorStore = new CompanyEditorStore();
    }

    render() {
        return (
            <div>
                <DevTools/>
                <Route exact path='/' render={this.renderCompanies} />
                <Route exact path='/company/:id' render={this.renderCompany} />
                <Route exact path='/company/edit/:id' render={this.renderCompanyEditor} />
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

    renderCompanyEditor = ({ match }) => {
        const { params } = match;
        const id = Number(params.id);
        const companyToUpdated = this.store.companies.find((v) => v.id === id);
        companyToUpdated && this.companyEditorStore.setCompanyToEdit(clone(companyToUpdated));
        return <ItemEditor store={this.companyEditorStore} onDone={this.handleDone}/>
    }

    renderNewCompany = () => {
        return <NewItem store={this.store} />
    }

    handleDone = () => {
        const updatedCompany = this.companyEditorStore.companyToEdit;
        this.store.updateCompany(updatedCompany);
        this.companyEditorStore.purge();
    }
}