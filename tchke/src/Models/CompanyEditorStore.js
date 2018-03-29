import { observable, action, computed } from 'mobx';

export default class CompanyEditorStore {
    @observable companyToEdit = null;
    @observable done = false

    @action
    setCompanyToEdit(company) {
        this.companyToEdit = company;
    }

    @action
    purge() {
        this.companyToEdit = null;
    }
}