import axios from 'axios'

const DATA_REST_API = 'http://localhost:8085/getTest';

module.exports = {
    entry: '../app.js',
    output: {
        filename: 'bundle.js'
    },
    externals: ['axios'],
    resolve: {
        alias: {
            'js-data-angular': '../dist/js-data-angular.js'
        }
    }
};


class DataService {
    getData()
    {
        return axios.get(DATA_REST_API);
    }
}

export default new DataService();