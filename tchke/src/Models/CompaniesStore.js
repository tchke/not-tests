import {observable, action} from 'mobx';
import Company from './Company';

export default class CompaniesStore {
    @observable companies = [];

    @action
    createCompany(id) {
        const company = new Company(id);
        this.companies.push(company);
        return company;
    }

    @action
    updateCompany(company) {
        const companyToUpdate = this.companies.find((v) => v.id === company.id);
        if (companyToUpdate) {
            companyToUpdate.name = company.name;
            companyToUpdate.ogrn = company.ogrn;
            companyToUpdate.type = company.type;
            companyToUpdate.date = company.date;
            companyToUpdate.active = company.active;
        } else {
            this.companies.push({
                id: company.id,
                name: company.name,
                ogrn: company.ogrn,
                type: company.type,
                date: company.date,
                active: company.active
            });
        }
    }
}