import axios from 'axios'
import { baseUrl } from './Constens/Constens'
const instance = axios.create({
    baseURL: baseUrl,
});


export default instance