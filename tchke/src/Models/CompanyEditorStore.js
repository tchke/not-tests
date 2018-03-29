import { observable, action, computed } from 'mobx';
import moment from 'moment';

export default class CompanyEditorStore {
    constructor(company) {
        this.id = company.id;
        this.name = company.name;
        this.ogrn = company.ogrn;
        this.type = company.type;
        this.date = company.date;
        this.active = company.active;
    }

    id = null;
    @observable name = null;
    @observable ogrn = null;
    @observable type = null;
    @observable date = null;
    @observable active = null;
    @computed
    get momentDate() {
        return moment(this.date);
    }

    @action
    purge() {
        this.id = null;
        this.name = null;
        this.ogrn = null;
        this.type = null;
        this.date = null;
        this.active = null;
    }
}