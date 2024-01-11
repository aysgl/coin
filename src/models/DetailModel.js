import axios from 'axios';

export default class DetailModel {
    constructor(coin) {
        this.coin = coin;
        this.infoFields = [
            {
                label: "marketCapUsd",
                value: coin?.detail.marketCapUsd
            },
            {
                label: "maxSupply",
                value: coin?.detail.maxSupply
            },
            {
                label: "priceUsd",
                value: coin?.detail.priceUsd
            },
            {
                label: "changePercent24Hr",
                value: coin?.detail.changePercent24Hr
            },
            {
                label: "volumeUsd24Hr",
                value: coin?.detail.volumeUsd24Hr
            },
        ]

        const monthYearLabels = coin?.history?.map(i => new Date(i.date).toLocaleDateString('default', { month: 'long', year: 'numeric' }));

        this.chartData = {
            type: "line",
            labels: monthYearLabels || [],
            datasets: [
                {
                    id: 1,
                    label: "",
                    borderColor: coin?.detail?.changePercent24Hr > 0 ? "#198754" : "#dc3545",
                    backgroundColor: coin?.detail?.changePercent24Hr > 0 ? "#198754" : "#dc3545",
                    data: coin?.history.map(i => i.priceUsd)
                }
            ]
        };

        const lastThreeMonthsData = coin?.history?.slice(-90).filter((item) => {
            const itemDate = new Date(item.date);
            return itemDate;
        });

        const monthYearLabelsTwo = coin?.history?.slice(-90).map(i => new Date(i.date).toLocaleDateString('default', { month: 'long', year: 'numeric' }));

        this.chartDataTwo = {
            type: "line",
            labels: monthYearLabelsTwo || [],
            datasets: [
                {
                    id: 1,
                    label: "",
                    borderColor: coin?.detail?.changePercent24Hr > 0 ? "#198754" : "#dc3545" || [],
                    backgroundColor: coin?.detail?.changePercent24Hr > 0 ? "#198754" : "#dc3545" || [],
                    data: lastThreeMonthsData?.map((i) => i.priceUsd.slice(-90)),
                    barThickness: 2,
                },
            ],
        };



    }
    static async getCoin(id) {
        const detailres = await axios.get(`https://api.coincap.io/v2/assets/${id}`);

        const historyres = await axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`);

        return {
            detail: detailres.data.data,
            history: historyres.data.data
        }

    }
}