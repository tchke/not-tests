import React from 'react';
import { Route } from 'react-router-dom';
import clone from 'lodash.clone';
import uuid from 'uuid';

import List from './Components/List';
import Item from './Components/Item';
import ItemEditor from './Components/ItemEditor';
import CompaniesStore from './Models/CompaniesStore';
import CompanyEditorStore from "./Models/CompanyEditorStore";
import Company from './Models/Company';
import DevTools from 'mobx-react-devtools';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.store = new CompaniesStore();
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
    };

    renderCompany = ({ match }) => {
        const { params } = match;   
        return <Item store={this.store} id={params.id} />;
    };

    renderCompanyEditor = ({ match }) => {
        const { params: { id } } = match;
        const companyToUpdated = this.store.companies.find((v) => v.id === id);
        if (!companyToUpdated) {
            return null;
        }
        this.companyModel = new CompanyEditorStore(clone(companyToUpdated));
        return <ItemEditor model={this.companyModel} onDone={this.handleDone}/>
    };

    renderNewCompany = () => {
        this.companyModel = new CompanyEditorStore(new Company(uuid.v4()));
        return <ItemEditor model={this.companyModel} onDone={this.handleDone}/>
        //return <NewItem store={this.store} />
    };

    handleDone = () => {
        if (this.companyModel) {
            this.store.updateCompany(this.companyModel);
            this.companyModel.purge();
        }
    }
}