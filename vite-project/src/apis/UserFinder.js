import axios from 'axios';

const baseURL = 
    process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3007/api/';

export default axios.create({
    baseURL: baseURL,
});