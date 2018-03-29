import { observable, action, computed } from 'mobx';

export default class CompaniesStore {
    counter = 0;

    @observable companies = [];

    @observable currentCompanyId = null;

    @computed
    get currentCompany() {
        return companies.find((v) => v.id === this.currentCompanyId);
    }

    @action 
    addCompany(name) {
        this.companies.push({ id: ++this.counter, name });
    }

    @action
    setCurrentCompanyId(id) {
        this.currentCompanyId = id;
    }

    @action
    updateCompany(company) {
        const companyToUpdate = this.companies.find((v) => v.id === company.id);
        companyToUpdate.name = company.name;
        companyToUpdate.ogrn = company.ogrn;
        companyToUpdate.type = company.type;
        companyToUpdate.date = company.date;
        companyToUpdate.active = company.active;
    }
}