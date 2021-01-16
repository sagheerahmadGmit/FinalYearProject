import axios from 'axios'

const DATA_REST_API = 'http://localhost:8085/getTest';

class DataService {
    getData()
    {
        axios.get(DATA_REST_API);
    }
}

export default new DataService();