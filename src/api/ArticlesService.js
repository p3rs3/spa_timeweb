import axios from 'axios';
import { apiPaths } from '../constants/apiPaths';

export default class ActiclesService {
    static async getArticles() {
        return axios.get(apiPaths.getArricles);
    }
}