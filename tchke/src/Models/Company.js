import { observable, computed } from 'mobx';

export default class Company {
    id = null;
    @observable name = '';
    @observable ogrn = '';
    @observable type = null;
    @observable date = null;
    @observable active = false;

    constructor(id) {
        this.id = id;
    }

    @computed get asJson() {
        return {
            id: this.id,
            name: this.name,
            ogrn: this.ogrn,
            type: this.type,
            date: this.date,
            active: this.active
        }
    }
}