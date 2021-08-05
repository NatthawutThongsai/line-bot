'use strict';

const line = require('@line/bot-sdk');
const express = require('express');
const config = require('./config.json');
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
// create LINE SDK client
const client = new line.Client(config);

const app = express();

//Here we are configuring express to use body-parser as middle-ware.
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
const apiKey = "f54d49b8-70f2-4802-8052-81d6f49457cc";
let url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${apiKey}`;

// webhook callback
const testJSON=  {
  "status": {
      "timestamp": "2021-08-05T03:16:15.892Z",
      "error_code": 0,
      "error_message": null,
      "elapsed": 31,
      "credit_count": 1,
      "notice": null,
      "total_count": 5931
  },
  "data": [
      {
          "id": 1,
          "name": "Bitcoin",
          "symbol": "BTC",
          "slug": "bitcoin",
          "num_market_pairs": 8936,
          "date_added": "2013-04-28T00:00:00.000Z",
          "tags": [
              "mineable",
              "pow",
              "sha-256",
              "store-of-value",
              "state-channels",
              "coinbase-ventures-portfolio",
              "three-arrows-capital-portfolio",
              "polychain-capital-portfolio",
              "binance-labs-portfolio",
              "arrington-xrp-capital",
              "blockchain-capital-portfolio",
              "boostvc-portfolio",
              "cms-holdings-portfolio",
              "dcg-portfolio",
              "dragonfly-capital-portfolio",
              "electric-capital-portfolio",
              "fabric-ventures-portfolio",
              "framework-ventures",
              "galaxy-digital-portfolio",
              "huobi-capital",
              "alameda-research-portfolio",
              "a16z-portfolio",
              "1confirmation-portfolio",
              "winklevoss-capital",
              "usv-portfolio",
              "placeholder-ventures-portfolio",
              "pantera-capital-portfolio",
              "multicoin-capital-portfolio",
              "paradigm-xzy-screener"
          ],
          "max_supply": 21000000,
          "circulating_supply": 18776518,
          "total_supply": 18776518,
          "platform": null,
          "cmc_rank": 1,
          "last_updated": "2021-08-05T03:14:03.000Z",
          "quote": {
              "USD": {
                  "price": 39412.12109134681,
                  "volume_24h": 25484476553.322758,
                  "percent_change_1h": -0.02818502,
                  "percent_change_24h": 3.54016317,
                  "percent_change_7d": -0.82215023,
                  "percent_change_30d": 16.21691141,
                  "percent_change_60d": 9.10256472,
                  "percent_change_90d": -29.5133234,
                  "market_cap": 740022401089.853,
                  "last_updated": "2021-08-05T03:14:03.000Z"
              }
          }
      },
      {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "num_market_pairs": 5640,
          "date_added": "2015-08-07T00:00:00.000Z",
          "tags": [
              "mineable",
              "pow",
              "smart-contracts",
              "ethereum",
              "coinbase-ventures-portfolio",
              "three-arrows-capital-portfolio",
              "polychain-capital-portfolio",
              "binance-labs-portfolio",
              "arrington-xrp-capital",
              "blockchain-capital-portfolio",
              "boostvc-portfolio",
              "cms-holdings-portfolio",
              "dcg-portfolio",
              "dragonfly-capital-portfolio",
              "electric-capital-portfolio",
              "fabric-ventures-portfolio",
              "framework-ventures",
              "hashkey-capital-portfolio",
              "kinetic-capital",
              "huobi-capital",
              "alameda-research-portfolio",
              "a16z-portfolio",
              "1confirmation-portfolio",
              "winklevoss-capital",
              "usv-portfolio",
              "placeholder-ventures-portfolio",
              "pantera-capital-portfolio",
              "multicoin-capital-portfolio",
              "paradigm-xzy-screener"
          ],
          "max_supply": null,
          "circulating_supply": 116974725.4365,
          "total_supply": 116974725.4365,
          "platform": null,
          "cmc_rank": 2,
          "last_updated": "2021-08-05T03:15:06.000Z",
          "quote": {
              "USD": {
                  "price": 2706.047640777327,
                  "volume_24h": 25822058981.15349,
                  "percent_change_1h": 0.39380065,
                  "percent_change_24h": 7.97805254,
                  "percent_change_7d": 18.51821469,
                  "percent_change_30d": 21.16774823,
                  "percent_change_60d": 0.70955531,
                  "percent_change_90d": -21.06111432,
                  "market_cap": 316539179798.0164,
                  "last_updated": "2021-08-05T03:15:06.000Z"
              }
          }
      },
      {
          "id": 825,
          "name": "Tether",
          "symbol": "USDT",
          "slug": "tether",
          "num_market_pairs": 16319,
          "date_added": "2015-02-25T00:00:00.000Z",
          "tags": [
              "payments",
              "stablecoin",
              "stablecoin-asset-backed",
              "avalanche-ecosystem",
              "solana-ecosystem"
          ],
          "max_supply": null,
          "circulating_supply": 62000121093.688835,
          "total_supply": 64469737785.68351,
          "platform": {
              "id": 1027,
              "name": "Ethereum",
              "symbol": "ETH",
              "slug": "ethereum",
              "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
          },
          "cmc_rank": 3,
          "last_updated": "2021-08-05T03:14:11.000Z",
          "quote": {
              "USD": {
                  "price": 1.00006593163054,
                  "volume_24h": 55834050837.61894,
                  "percent_change_1h": 0.00779299,
                  "percent_change_24h": -0.02985259,
                  "percent_change_7d": -0.02631982,
                  "percent_change_30d": -0.07060556,
                  "percent_change_60d": -0.03263579,
                  "percent_change_90d": 0.02378109,
                  "market_cap": 62004208862.76622,
                  "last_updated": "2021-08-05T03:14:11.000Z"
              }
          }
      },
      {
          "id": 1839,
          "name": "Binance Coin",
          "symbol": "BNB",
          "slug": "binance-coin",
          "num_market_pairs": 541,
          "date_added": "2017-07-25T00:00:00.000Z",
          "tags": [
              "marketplace",
              "centralized-exchange",
              "payments",
              "binance-smart-chain",
              "alameda-research-portfolio",
              "multicoin-capital-portfolio"
          ],
          "max_supply": 168137036,
          "circulating_supply": 168137036,
          "total_supply": 168137036,
          "platform": null,
          "cmc_rank": 4,
          "last_updated": "2021-08-05T03:14:08.000Z",
          "quote": {
              "USD": {
                  "price": 334.1129909041521,
                  "volume_24h": 1308777403.424377,
                  "percent_change_1h": 0.05436002,
                  "percent_change_24h": 3.53348084,
                  "percent_change_7d": 6.80875929,
                  "percent_change_30d": 9.51982033,
                  "percent_change_60d": -15.93101414,
                  "percent_change_90d": -45.94478688,
                  "market_cap": 56176767979.7191,
                  "last_updated": "2021-08-05T03:14:08.000Z"
              }
          }
      },
      {
          "id": 2010,
          "name": "Cardano",
          "symbol": "ADA",
          "slug": "cardano",
          "num_market_pairs": 284,
          "date_added": "2017-10-01T00:00:00.000Z",
          "tags": [
              "mineable",
              "dpos",
              "pos",
              "platform",
              "research",
              "smart-contracts",
              "staking",
              "binance-smart-chain"
          ],
          "max_supply": 45000000000,
          "circulating_supply": 32081189956.85,
          "total_supply": 32959337588.354,
          "platform": null,
          "cmc_rank": 5,
          "last_updated": "2021-08-05T03:15:07.000Z",
          "quote": {
              "USD": {
                  "price": 1.37750581867497,
                  "volume_24h": 1859094466.8728018,
                  "percent_change_1h": -0.06917185,
                  "percent_change_24h": 2.40772992,
                  "percent_change_7d": 8.29928366,
                  "percent_change_30d": -3.24643751,
                  "percent_change_60d": -18.0187792,
                  "percent_change_90d": -13.39252724,
                  "market_cap": 44192025835.57788,
                  "last_updated": "2021-08-05T03:15:07.000Z"
              }
          }
      }
  ]
};


async function searchPrice(search){
    var toSearch = search;
    let response = await fetch(url);
    let results = [];
    let responseJson = await response.json().then((json) => {
      for(var i=0; i<Object.values(json.data).length; i++) {
            if(json.data[i]['symbol']===toSearch.toUpperCase()||json.data[i]['name']===toSearch){
                results.push(json.data[i]);
            }
          }
    })
    return results[0];
  
}
app.get('/',(req,res)=>{
  res.send('heroku');
  // var search = "ada";
  // var results = searchPrice(search);
  // results.then(function(result){
  //   console.log(result)
  //   if(results){
  //     res.send('not found')
  //   }
  //   res.send(result.quote.USD.price.toString())
  // })
  // console.log('results')
  // res.send(results[0])
    
});
app.get('/test',(req,res)=>{
    var results = [];
    var toSearch = "eth";
    fetch(url)
      .then((res) => {
      return res.json()
      })
      .then((json) => {
        for(var i=0; i<Object.values(json.data).length; i++) {
          if(json.data[i]['symbol']===toSearch.toUpperCase()||json.data[i]['name']===toSearch){
              results.push(json.data[i]);
          }
        }
        res.send(results[0].quote);
      });
    //res.send(results);
    
});


app.post('/webhook', line.middleware(config), (req, res) => {
  // req.body.events should be an array of events
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  // handle events separately
  Promise.all(req.body.events.map(event => {
    console.log('event', event);
    // check verify webhook event
    if (event.replyToken === '00000000000000000000000000000000' ||
      event.replyToken === 'ffffffffffffffffffffffffffffffff') {
      return;
    }
    return handleEvent(event);
  }))
    .then(() => res.end())
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// simple reply function
const replyText = (token, texts) => {
  texts = Array.isArray(texts) ? texts : [texts];
  return client.replyMessage(
    token,
    texts.map((text) => ({ type: 'text', text }))
  );
};

// callback function to handle a single event
function handleEvent(event) {
  switch (event.type) {
    case 'message':
      const message = event.message;
      switch (message.type) {
        case 'text':
          return handleText(message, event.replyToken);
        case 'image':
          return handleImage(message, event.replyToken);
        case 'video':
          return handleVideo(message, event.replyToken);
        case 'audio':
          return handleAudio(message, event.replyToken);
        case 'location':
          return handleLocation(message, event.replyToken);
        case 'sticker':
          return handleSticker(message, event.replyToken);
        default:
          throw new Error(`Unknown message: ${JSON.stringify(message)}`);
      }

    case 'follow':
      return replyText(event.replyToken, 'Got followed event');

    case 'unfollow':
      return console.log(`Unfollowed this bot: ${JSON.stringify(event)}`);

    case 'join':
      return replyText(event.replyToken, `Joined ${event.source.type}`);

    case 'leave':
      return console.log(`Left: ${JSON.stringify(event)}`);

    case 'postback':
      let data = event.postback.data;
      return replyText(event.replyToken, `Got postback: ${data}`);

    case 'beacon':
      const dm = `${Buffer.from(event.beacon.dm || '', 'hex').toString('utf8')}`;
      return replyText(event.replyToken, `${event.beacon.type} beacon hwid : ${event.beacon.hwid} with device message = ${dm}`);

    default:
      throw new Error(`Unknown event: ${JSON.stringify(event)}`);
  }
}

async function handleText(message, replyToken) {

  var search = message.text;
  var results = await searchPrice(search);
  if(results){
    return replyText(replyToken, results.quote.USD.price);
  }else{
    return replyText(replyToken, message.text);
  }
}

function handleImage(message, replyToken) {
  return replyText(replyToken, 'Got Image');
}

function handleVideo(message, replyToken) {
  return replyText(replyToken, 'Got Video');
}

function handleAudio(message, replyToken) {
  return replyText(replyToken, 'Got Audio');
}

function handleLocation(message, replyToken) {
  return replyText(replyToken, 'Got Location');
}

function handleSticker(message, replyToken) {
  return replyText(replyToken, 'Got Sticker');
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is runing at port: ${port}`);
});
