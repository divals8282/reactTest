class courenciesSDK {
    constructor() {
        this.startPoint = `https://api.exchangeratesapi.io`;
        this.base = 'USD';

    }
    setBase(base) {
        this.base = base;
    }
    async getHistoricalDate(date) {
        var request = await fetch(this.startPoint + `/${date}?base=${this.base}`); 
        try {
            var data = await request.json();
            return await data;
        }
        catch {
            return false;
        }
    }
    async getLatestCourencies() {
        var request = await fetch(this.startPoint + `/latest?base=${this.base}`);
        try{
            var data = await request.json();
            return data;
        }
        catch {
            return false;
        }
    }
}
let CourenciesSDK = new courenciesSDK();
export default CourenciesSDK;