# cryptoapi
JavaScript library for cryptoapi.biz
# main
```js
async function main(){
    const {cryptoapi} = require('./cryptoapi');
    const crypto= new cryptoapi();
    let req=await crypto.currency_list("RUB",0,10)
    console.log(req)
}
main()
```
