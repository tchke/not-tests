import { observable, action, computed } from 'mobx';

export default class CompaniesStore {
    counter = 0;

    @observable companies = [];

    @observable currentCompanyId = null

    @computed
    get currentCompany() {
        return companies.find((v, i) => v.id === this.currentCompanyId);
    }

    @action 
    addCompany(name) {
        this.companies.push({ id: this.counter++, name });
    }

    @action
    setCurrentCompanyId(id) {
        this.currentCompanyId = id;
    }

    @action
    updateCompany(company) {
        const companyToUpdate = this.companies.find((v, i) => v.id === company.id);
        companyToUpdate.name = company.name;
    }
}