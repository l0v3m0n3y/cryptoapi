class cryptoapi{
    constructor(){
        this.api = "https://cryptoapi.biz"
        this.headers={"Accept-Encoding":"gzip","Connection":"Keep-Alive","Host":"cryptoapi.biz","User-Agent":"okhttp/5.0.0-alpha.12"}
    }
    async ohlc_metrics(id,currency){
        let req=await fetch(`${this.api}/ohlc_metrics?id=${id}&time=daily&currency=${currency}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async currency_list(currency,start,size){
        let req=await fetch(`${this.api}/currency/v3/get_list`,{method:"POST",body:JSON.stringify({"currency1":currency,"fields":["p_1h","p_24h","p_7d","m1","v1","s"],"from":start,"order":"asc","sort":"rank","sparkline":"daily","to":size}),headers: this.headers});
        return req.json();
    }
}
module.exports = {cryptoapi};