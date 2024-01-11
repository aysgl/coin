import axios from 'axios';

export default class CoinModel {
    static async getCoins(pageNumber = 1, pageSize = 10) {
        const res = await axios.get(`https://api.coincap.io/v2/assets?offset=${(pageNumber - 1) * pageSize}&limit=${pageSize}`);
        return res.data.data;
    }
}
