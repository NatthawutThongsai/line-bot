'use strict';

const line = require('@line/bot-sdk');
const express = require('express');
const config = require('./config.json');
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
// create LINE SDK client
const client = new line.Client(config);
///CONNECT TO FIREBASE
const firebase = require("firebase/app")
require("firebase/firestore")
var firebaseConfig = {
  apiKey: "AIzaSyCRE0-JQxCB1ay30WBVlBjFSMcvRzZf9dw",
  authDomain: "line-bot-b61d5.firebaseapp.com",
  projectId: "line-bot-b61d5",
  storageBucket: "line-bot-b61d5.appspot.com",
  messagingSenderId: "416924540295",
  appId: "1:416924540295:web:82601f4533e4a045ac0722",
  measurementId: "G-FKJXZXXESP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Firestore
let firestore = firebase.firestore()
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
const apiKey = "f54d49b8-70f2-4802-8052-81d6f49457cc";
let url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${apiKey}`;


async function searchPrice(search){
    var toSearch = search;
    let response = await fetch(url);
    let results = [];
    let responseJson = await response.json().then((json) => {
      for(var i=0; i<Object.values(json.data).length; i++) {
            if(json.data[i]['symbol']===toSearch.toUpperCase()||json.data[i]['name']===toSearch){
                results.push(json.data[i]);
                break;
            }
        }
    })
    return results[0];
  
}
app.get('/firebase',(req,res)=>{
  firestore.collection("cryptoPrice").add({ 
    name: "ada",
    price: 1.37666,
    id: 1,
    percent: 1.96
});
  res.send('complete');
});

// const rp = require('request-promise');
// const url2 = 'https://xn--42cah7d0cxcvbbb9x.com/';


// app.get('/scraping',(req,res)=>{
//   rp(url2)
//   .then(function(html){
//     //success!
//     res.send(html);
//   })
//   .catch(function(err){
//     //handle error
//   });
// });
app.get('/',(req,res)=>{
  res.send('heroku test');
});
const coinList = [  "BTC","ETH","USDT","BNB","ADA","XRP","USDC","DOGE","DOT","UNI","BUSD",
                   "LINK","BCH","SOL","LTC","WBTC","THETA","MATIC","ETC","XLM","LUNA","VET",
                    "ICP","DAI","FIL","TRX","AAVE","XMR","EOS","FTT","CAKE","CRO","GRT","MKR",
                    "NEO","BTCB","LEO","ATOM","XTZ","KLAY","ALGO","BSV","AXS","AMP","COMP","MIOTA",
                    "SHIB","AVAX","BTT","EGLD","QNT","UST","HBAR","KSM","RUNE","HT","DCR","WAVES",
                    "TFUEL","DASH","STX","CHZ","XEM","ZEC","CEL","HNT","TUSD","MANA","OKB","YFI",
                    "ENJ","SNX","SUSHI","HOT","FLOW","NEAR","NEXO","BAT","ZIL","BTG","XDC","TEL",
                    "PAX","BNT","KCS","CELO","ONE","QTUM","VGX","SC","DGB","RVN","ZRX","ONT","ANKR",
                    "MDX","ZEN","CHSB","ICX","FTM"];
app.get('/test',(req,res)=>{
    var search = "ada";
    res.send(coinList.includes(search.toUpperCase()));
    var results = searchPrice(search);
    results.then(function(result){
      console.log(result)
      if(results){
        res.send(result)
      }
      res.send('not found')
    })
    
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
  if(coinList.includes(search.toUpperCase())){
    var results = await searchPrice(search);
    console.log(results)
    return replyText(replyToken, results.symbol+"\nPrice: "+results.quote.USD.price.toFixed(5)+"\nPercent change 24hr: "+results.quote.USD.percent_change_24h.toFixed(2)+"%");
  }
  return replyText(replyToken, message.text);
  
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
