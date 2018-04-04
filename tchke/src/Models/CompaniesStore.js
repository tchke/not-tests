import {observable, action} from 'mobx';
import Company from './Company';

export default class CompaniesStore {
    constructor(companiesApi) {
        this.companiesApi = companiesApi;
        this.loadCompanies();
    }
    @observable companies = [];

    @action
    createCompany(id) {
        const company = new Company(id);
        this.companies.push(company);
        return company;
    }

    loadCompanies() {
        this.companiesApi.getCompanies()
            .then((response) => {
                const { data: { companies }} = response;
                companies.forEach(company => {
                    this.updateCompany(company);
                });
            });
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