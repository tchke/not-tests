import { observable, computed } from 'mobx';
import moment from 'moment';

export default class Company {
    id = null;
    @observable name = '';
    @observable ogrn = '';
    @observable type = null;
    @observable date = null;
    @observable active = false;

    constructor(id) {
        this.id = id;

        // this.saveHandler = reaction(
        //     () =>
        // );
    }

    @computed get momentDate() {
        let result = this.date ? moment(this.date) : null;
        console.log(result);
        return result;
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