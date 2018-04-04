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
    updateCompany(companyJson) {
        let company = this.companies.find((v) => v.id === companyJson.id);
        if (!company){
            company = new Company(companyJson.id);
            this.companies.push(company);
        }

        company.name = companyJson.name;
        company.ogrn = companyJson.ogrn;
        company.type = companyJson.type;
        company.date = companyJson.date;
        company.active = companyJson.active;

    }
}