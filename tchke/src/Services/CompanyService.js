import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios/*, { delayResponse: 2000 }*/);

mock.onGet('/companies').reply(200, {
    companies: [
        {
            id: 'db2969d6-f570-4224-85d9-6eeee83556a0',
            name: 'Company 1',
            ogrn: 'ogrnOfCompany',
            type: 'ooo',
            date: new Date().toISOString(),
            active: true
        },
        {
            id: 'f9933fac-9811-413d-b275-f5c4516ddeb8',
            name: 'Company 2',
            ogrn: 'ogrnOfCompany',
            type: 'ip',
            date: new Date().toISOString(),
            active: true
        }
    ]
});

export default class CompanyService {
    getCompanies() {
        return axios.get('/companies');
    }
}