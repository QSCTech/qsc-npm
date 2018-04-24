import axios from 'axios'

axios.defaults.timeout = 16000;

const instance = axios.create();
axios.interceptors.request.use = instance.interceptors.request.use;

const root = `/-/verdaccio`;

const test = `https://npm.zjuqsc.com/-/verdaccio`;

export default {
    get_package_list() {
        return instance.get(`${test}/packages`);
    },
    get_package_detail(data) {
        return instance.get(`${test}/package/readme/${data}`);
    },
    search(data) {
        return instance.get(`${test}/search/${data}`);
    }
}