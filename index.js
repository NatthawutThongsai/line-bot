'use strict';

const line = require('@line/bot-sdk');
const express = require('express');
const config = require('./config.json');
const fetch = require("node-fetch");
// create LINE SDK client
const client = new line.Client(config);

const app = express();
const apiKey = "f54d49b8-70f2-4802-8052-81d6f49457cc";
let url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${apiKey}`;

// webhook callback
const testJSON=  {
  "status": {
    "timestamp": "2021-08-04T07:24:23.479Z",
    "error_code": 0,
    "error_message": null,
    "elapsed": 26,
    "credit_count": 1,
    "notice": null,
    "total_count": 5919
  },
  "data": [
    {
      "id": 1,
      "name": "Bitcoin",
      "symbol": "BTC",
      "slug": "bitcoin",
      "num_market_pairs": 8937,
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
      "circulating_supply": 18775818,
      "total_supply": 18775818,
      "platform": null,
      "cmc_rank": 1,
      "last_updated": "2021-08-04T07:24:04.000Z",
      "quote": {
        "USD": {
          "price": 37788.63014178384,
          "volume_24h": 23941057457.751007,
          "percent_change_1h": -0.31283565,
          "percent_change_24h": -1.8722418,
          "percent_change_7d": -5.01778088,
          "percent_change_30d": 10.66554707,
          "percent_change_60d": -0.30192916,
          "percent_change_90d": -33.41990221,
          "market_cap": 709512442011.4476,
          "last_updated": "2021-08-04T07:24:04.000Z"
        }
      }
    },
    {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "num_market_pairs": 5636,
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
      "circulating_supply": 116963678.0615,
      "total_supply": 116963678.0615,
      "platform": null,
      "cmc_rank": 2,
      "last_updated": "2021-08-04T07:23:28.000Z",
      "quote": {
        "USD": {
          "price": 2482.7722068240464,
          "volume_24h": 19197985471.71121,
          "percent_change_1h": -0.29807386,
          "percent_change_24h": -0.04433492,
          "percent_change_7d": 8.92951359,
          "percent_change_30d": 9.42568676,
          "percent_change_60d": -11.71809672,
          "percent_change_90d": -27.42476712,
          "market_cap": 290394169099.0076,
          "last_updated": "2021-08-04T07:23:28.000Z"
        }
      }
    },
    {
      "id": 825,
      "name": "Tether",
      "symbol": "USDT",
      "slug": "tether",
      "num_market_pairs": 16267,
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
      "last_updated": "2021-08-04T07:24:03.000Z",
      "quote": {
        "USD": {
          "price": 1.00024182502663,
          "volume_24h": 48616663251.14344,
          "percent_change_1h": 0.00728121,
          "percent_change_24h": -0.00530208,
          "percent_change_7d": 0.00747784,
          "percent_change_30d": -0.00690205,
          "percent_change_60d": -0.05226366,
          "percent_change_90d": 0.02296656,
          "market_cap": 62015114274.62338,
          "last_updated": "2021-08-04T07:24:03.000Z"
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
      "last_updated": "2021-08-04T07:23:31.000Z",
      "quote": {
        "USD": {
          "price": 321.23877431704915,
          "volume_24h": 1214400140.2841876,
          "percent_change_1h": -0.3812671,
          "percent_change_24h": -0.39065533,
          "percent_change_7d": 2.97235848,
          "percent_change_30d": 7.40525495,
          "percent_change_60d": -24.35524363,
          "percent_change_90d": -49.68549028,
          "market_cap": 54012135361.94157,
          "last_updated": "2021-08-04T07:23:31.000Z"
        }
      }
    },
    {
      "id": 2010,
      "name": "Cardano",
      "symbol": "ADA",
      "slug": "cardano",
      "num_market_pairs": 283,
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
      "circulating_supply": 32081199013.891,
      "total_supply": 32959337588.354,
      "platform": null,
      "cmc_rank": 5,
      "last_updated": "2021-08-04T07:23:37.000Z",
      "quote": {
        "USD": {
          "price": 1.33096821649984,
          "volume_24h": 2103447598.2891407,
          "percent_change_1h": -0.40681771,
          "percent_change_24h": 3.83493009,
          "percent_change_7d": 4.3446908,
          "percent_change_30d": -6.00806181,
          "percent_change_60d": -25.25717815,
          "percent_change_90d": -9.42205684,
          "market_cap": 42699056234.69493,
          "last_updated": "2021-08-04T07:23:37.000Z"
        }
      }
    },
    {
      "id": 52,
      "name": "XRP",
      "symbol": "XRP",
      "slug": "xrp",
      "num_market_pairs": 629,
      "date_added": "2013-08-04T00:00:00.000Z",
      "tags": [
        "medium-of-exchange",
        "enterprise-solutions",
        "binance-chain",
        "arrington-xrp-capital",
        "galaxy-digital-portfolio",
        "a16z-portfolio",
        "pantera-capital-portfolio"
      ],
      "max_supply": 100000000000,
      "circulating_supply": 46312443360,
      "total_supply": 99990333192,
      "platform": null,
      "cmc_rank": 6,
      "last_updated": "2021-08-04T07:23:27.000Z",
      "quote": {
        "USD": {
          "price": 0.70748075763849,
          "volume_24h": 2637567216.615876,
          "percent_change_1h": -0.35032369,
          "percent_change_24h": -1.94458387,
          "percent_change_7d": 4.33142682,
          "percent_change_30d": 5.03132648,
          "percent_change_60d": -29.02888562,
          "percent_change_90d": -56.89365048,
          "market_cap": 32765162516.42246,
          "last_updated": "2021-08-04T07:23:27.000Z"
        }
      }
    },
    {
      "id": 3408,
      "name": "USD Coin",
      "symbol": "USDC",
      "slug": "usd-coin",
      "num_market_pairs": 1424,
      "date_added": "2018-10-08T00:00:00.000Z",
      "tags": [
        "medium-of-exchange",
        "stablecoin",
        "stablecoin-asset-backed"
      ],
      "max_supply": null,
      "circulating_supply": 27475099973.31857,
      "total_supply": 27475099973.31857,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
      },
      "cmc_rank": 7,
      "last_updated": "2021-08-04T07:23:27.000Z",
      "quote": {
        "USD": {
          "price": 1.00039974895591,
          "volume_24h": 2612018001.9679832,
          "percent_change_1h": 0.01181059,
          "percent_change_24h": 0.02640798,
          "percent_change_7d": 0.02443663,
          "percent_change_30d": 0.01301281,
          "percent_change_60d": 0.00344979,
          "percent_change_90d": 0.04463403,
          "market_cap": 27486083115.846428,
          "last_updated": "2021-08-04T07:23:27.000Z"
        }
      }
    },
    {
      "id": 74,
      "name": "Dogecoin",
      "symbol": "DOGE",
      "slug": "dogecoin",
      "num_market_pairs": 376,
      "date_added": "2013-12-15T00:00:00.000Z",
      "tags": [
        "mineable",
        "pow",
        "scrypt",
        "medium-of-exchange",
        "memes",
        "payments",
        "doggone-doggerel"
      ],
      "max_supply": null,
      "circulating_supply": 130716630118.54915,
      "total_supply": 130716630118.54915,
      "platform": null,
      "cmc_rank": 8,
      "last_updated": "2021-08-04T07:23:47.000Z",
      "quote": {
        "USD": {
          "price": 0.19576813263756,
          "volume_24h": 997782351.5950032,
          "percent_change_1h": -0.29908809,
          "percent_change_24h": -1.43200751,
          "percent_change_7d": -4.43498643,
          "percent_change_30d": -19.00122355,
          "percent_change_60d": -50.10012024,
          "percent_change_90d": -67.78263158,
          "market_cap": 25590150582.982998,
          "last_updated": "2021-08-04T07:23:47.000Z"
        }
      }
    },
    {
      "id": 6636,
      "name": "Polkadot",
      "symbol": "DOT",
      "slug": "polkadot-new",
      "num_market_pairs": 231,
      "date_added": "2020-08-19T00:00:00.000Z",
      "tags": [
        "substrate",
        "polkadot",
        "binance-chain",
        "polkadot-ecosystem",
        "three-arrows-capital-portfolio",
        "polychain-capital-portfolio",
        "blockchain-capital-portfolio",
        "boostvc-portfolio",
        "cms-holdings-portfolio",
        "coinfund-portfolio",
        "fabric-ventures-portfolio",
        "fenbushi-capital-portfolio",
        "hashkey-capital-portfolio",
        "kinetic-capital",
        "1confirmation-portfolio",
        "placeholder-ventures-portfolio",
        "pantera-capital-portfolio",
        "exnetwork-capital-portfolio"
      ],
      "max_supply": null,
      "circulating_supply": 980701645.2563608,
      "total_supply": 1096425801.6815486,
      "platform": null,
      "cmc_rank": 9,
      "last_updated": "2021-08-04T07:23:36.000Z",
      "quote": {
        "USD": {
          "price": 17.23181572880379,
          "volume_24h": 1193486346.9474726,
          "percent_change_1h": -1.1390681,
          "percent_change_24h": -0.99928113,
          "percent_change_7d": 22.11115853,
          "percent_change_30d": 11.1418425,
          "percent_change_60d": -34.43489727,
          "percent_change_90d": -55.58936406,
          "market_cap": 16899270035.992313,
          "last_updated": "2021-08-04T07:23:36.000Z"
        }
      }
    },
    {
      "id": 7083,
      "name": "Uniswap",
      "symbol": "UNI",
      "slug": "uniswap",
      "num_market_pairs": 292,
      "date_added": "2020-09-17T00:00:00.000Z",
      "tags": [
        "decentralized-exchange",
        "defi",
        "dao",
        "yield-farming",
        "amm",
        "coinbase-ventures-portfolio",
        "three-arrows-capital-portfolio",
        "governance",
        "blockchain-capital-portfolio",
        "defiance-capital",
        "alameda-research-portfolio",
        "a16z-portfolio",
        "pantera-capital-portfolio",
        "parafi-capital",
        "paradigm-xzy-screener"
      ],
      "max_supply": 1000000000,
      "circulating_supply": 587382848.8549924,
      "total_supply": 1000000000,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
      },
      "cmc_rank": 10,
      "last_updated": "2021-08-04T07:23:19.000Z",
      "quote": {
        "USD": {
          "price": 21.08056778708103,
          "volume_24h": 423540526.3459848,
          "percent_change_1h": -1.20414159,
          "percent_change_24h": -0.0874173,
          "percent_change_7d": 12.03717013,
          "percent_change_30d": 4.60577232,
          "percent_change_60d": -23.41303599,
          "percent_change_90d": -49.21217387,
          "market_cap": 12382363962.256437,
          "last_updated": "2021-08-04T07:23:19.000Z"
        }
      }
    },
    {
      "id": 4687,
      "name": "Binance USD",
      "symbol": "BUSD",
      "slug": "binance-usd",
      "num_market_pairs": 923,
      "date_added": "2019-09-20T00:00:00.000Z",
      "tags": [
        "stablecoin",
        "stablecoin-asset-backed",
        "binance-chain",
        "binance-smart-chain"
      ],
      "max_supply": null,
      "circulating_supply": 12047209455.05,
      "total_supply": 12047209455.05,
      "platform": {
        "id": 1839,
        "name": "Binance Chain",
        "symbol": "BNB",
        "slug": "binance-coin",
        "token_address": "BUSD-BD1"
      },
      "cmc_rank": 11,
      "last_updated": "2021-08-04T07:24:01.000Z",
      "quote": {
        "USD": {
          "price": 1.00035963886439,
          "volume_24h": 3267609284.359397,
          "percent_change_1h": 0.01633253,
          "percent_change_24h": 0.00371355,
          "percent_change_7d": 0.03885138,
          "percent_change_30d": 0.02125497,
          "percent_change_60d": -0.02213796,
          "percent_change_90d": 0.03427785,
          "market_cap": 12051542099.777483,
          "last_updated": "2021-08-04T07:24:01.000Z"
        }
      }
    },
    {
      "id": 1975,
      "name": "Chainlink",
      "symbol": "LINK",
      "slug": "chainlink",
      "num_market_pairs": 539,
      "date_added": "2017-09-20T00:00:00.000Z",
      "tags": [
        "platform",
        "defi",
        "oracles",
        "smart-contracts",
        "substrate",
        "polkadot",
        "polkadot-ecosystem",
        "avalanche-ecosystem",
        "solana-ecosystem",
        "framework-ventures",
        "polygon-ecosystem"
      ],
      "max_supply": 1000000000,
      "circulating_supply": 443009553.9174637,
      "total_supply": 1000000000,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x514910771af9ca656af840dff83e8264ecf986ca"
      },
      "cmc_rank": 12,
      "last_updated": "2021-08-04T07:23:33.000Z",
      "quote": {
        "USD": {
          "price": 23.19962405480339,
          "volume_24h": 1307109160.2023,
          "percent_change_1h": -1.05295232,
          "percent_change_24h": 1.35524937,
          "percent_change_7d": 20.82719813,
          "percent_change_30d": 24.537896,
          "percent_change_60d": -22.74610683,
          "percent_change_90d": -50.37242422,
          "market_cap": 10277655103.57131,
          "last_updated": "2021-08-04T07:23:33.000Z"
        }
      }
    },
    {
      "id": 1831,
      "name": "Bitcoin Cash",
      "symbol": "BCH",
      "slug": "bitcoin-cash",
      "num_market_pairs": 559,
      "date_added": "2017-07-23T00:00:00.000Z",
      "tags": [
        "mineable",
        "pow",
        "sha-256",
        "marketplace",
        "medium-of-exchange",
        "store-of-value",
        "enterprise-solutions",
        "payments",
        "binance-chain"
      ],
      "max_supply": 21000000,
      "circulating_supply": 18807968.75,
      "total_supply": 18807968.75,
      "platform": null,
      "cmc_rank": 13,
      "last_updated": "2021-08-04T07:24:06.000Z",
      "quote": {
        "USD": {
          "price": 529.1483238899028,
          "volume_24h": 1798025626.0768309,
          "percent_change_1h": -0.03498609,
          "percent_change_24h": -0.51457063,
          "percent_change_7d": 6.43057014,
          "percent_change_30d": 2.7964771,
          "percent_change_60d": -23.15716551,
          "percent_change_90d": -59.89171756,
          "market_cap": 9952205139.83617,
          "last_updated": "2021-08-04T07:24:06.000Z"
        }
      }
    },
    {
      "id": 5426,
      "name": "Solana",
      "symbol": "SOL",
      "slug": "solana",
      "num_market_pairs": 105,
      "date_added": "2020-04-10T00:00:00.000Z",
      "tags": [
        "dpos",
        "platform",
        "solana-ecosystem",
        "cms-holdings-portfolio",
        "kinetic-capital",
        "alameda-research-portfolio",
        "multicoin-capital-portfolio"
      ],
      "max_supply": null,
      "circulating_supply": 272637427.57725775,
      "total_supply": 494519161.74206734,
      "platform": null,
      "cmc_rank": 14,
      "last_updated": "2021-08-04T07:23:26.000Z",
      "quote": {
        "USD": {
          "price": 33.64036560179833,
          "volume_24h": 459376980.1567219,
          "percent_change_1h": -0.73682967,
          "percent_change_24h": 0.95171416,
          "percent_change_7d": 20.90070356,
          "percent_change_30d": -0.87415661,
          "percent_change_60d": -20.24727228,
          "percent_change_90d": -22.80959136,
          "market_cap": 9171622740.432764,
          "last_updated": "2021-08-04T07:23:26.000Z"
        }
      }
    },
    {
      "id": 2,
      "name": "Litecoin",
      "symbol": "LTC",
      "slug": "litecoin",
      "num_market_pairs": 709,
      "date_added": "2013-04-28T00:00:00.000Z",
      "tags": [
        "mineable",
        "pow",
        "scrypt",
        "medium-of-exchange",
        "binance-chain"
      ],
      "max_supply": 84000000,
      "circulating_supply": 66752614.51538747,
      "total_supply": 66752614.51538747,
      "platform": null,
      "cmc_rank": 15,
      "last_updated": "2021-08-04T07:24:05.000Z",
      "quote": {
        "USD": {
          "price": 136.81585037597523,
          "volume_24h": 1238643707.3692284,
          "percent_change_1h": -0.19837823,
          "percent_change_24h": -1.31524456,
          "percent_change_7d": 1.84809751,
          "percent_change_30d": -2.13581335,
          "percent_change_60d": -26.13366607,
          "percent_change_90d": -59.0072661,
          "market_cap": 9132815719.742405,
          "last_updated": "2021-08-04T07:24:05.000Z"
        }
      }
    },
    {
      "id": 3717,
      "name": "Wrapped Bitcoin",
      "symbol": "WBTC",
      "slug": "wrapped-bitcoin",
      "num_market_pairs": 264,
      "date_added": "2019-01-30T00:00:00.000Z",
      "tags": [
        "medium-of-exchange",
        "defi",
        "wrapped-tokens"
      ],
      "max_supply": null,
      "circulating_supply": 192574.22484399,
      "total_supply": 192574.22484399,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
      },
      "cmc_rank": 16,
      "last_updated": "2021-08-04T07:23:37.000Z",
      "quote": {
        "USD": {
          "price": 37809.311811301704,
          "volume_24h": 328234188.3810867,
          "percent_change_1h": -0.27379129,
          "percent_change_24h": -1.64410338,
          "percent_change_7d": -4.58808483,
          "percent_change_30d": 10.6028406,
          "percent_change_60d": -0.34291044,
          "percent_change_90d": -33.46607504,
          "market_cap": 7281098913.946141,
          "last_updated": "2021-08-04T07:23:37.000Z"
        }
      }
    },
    {
      "id": 3890,
      "name": "Polygon",
      "symbol": "MATIC",
      "slug": "polygon",
      "num_market_pairs": 226,
      "date_added": "2019-04-28T00:00:00.000Z",
      "tags": [
        "platform",
        "enterprise-solutions",
        "state-channels",
        "coinbase-ventures-portfolio",
        "binance-launchpad",
        "binance-labs-portfolio",
        "polygon-ecosystem"
      ],
      "max_supply": 10000000000,
      "circulating_supply": 6434735794,
      "total_supply": 10000000000,
      "platform": null,
      "cmc_rank": 17,
      "last_updated": "2021-08-04T07:23:35.000Z",
      "quote": {
        "USD": {
          "price": 1.01685241774645,
          "volume_24h": 437350975.42959255,
          "percent_change_1h": -0.46805578,
          "percent_change_24h": -0.21397734,
          "percent_change_7d": 0.03864316,
          "percent_change_30d": -9.81313008,
          "percent_change_60d": -40.05616041,
          "percent_change_90d": 31.19728734,
          "market_cap": 6543176649.688522,
          "last_updated": "2021-08-04T07:23:35.000Z"
        }
      }
    },
    {
      "id": 1321,
      "name": "Ethereum Classic",
      "symbol": "ETC",
      "slug": "ethereum-classic",
      "num_market_pairs": 273,
      "date_added": "2016-07-24T00:00:00.000Z",
      "tags": [
        "mineable",
        "pow",
        "ethash",
        "platform",
        "smart-contracts",
        "dcg-portfolio"
      ],
      "max_supply": 210700000,
      "circulating_supply": 128741612.79542607,
      "total_supply": 210700000,
      "platform": null,
      "cmc_rank": 18,
      "last_updated": "2021-08-04T07:24:07.000Z",
      "quote": {
        "USD": {
          "price": 49.03296895351217,
          "volume_24h": 1966731010.3213234,
          "percent_change_1h": -0.22527532,
          "percent_change_24h": -1.14624271,
          "percent_change_7d": 0.69988496,
          "percent_change_30d": -11.44984442,
          "percent_change_60d": -27.15824695,
          "percent_change_90d": -47.54381175,
          "market_cap": 6312583503.223211,
          "last_updated": "2021-08-04T07:24:07.000Z"
        }
      }
    },
    {
      "id": 512,
      "name": "Stellar",
      "symbol": "XLM",
      "slug": "stellar",
      "num_market_pairs": 350,
      "date_added": "2014-08-05T00:00:00.000Z",
      "tags": [
        "medium-of-exchange",
        "enterprise-solutions",
        "decentralized-exchange",
        "smart-contracts",
        "hashkey-capital-portfolio"
      ],
      "max_supply": 50001806812,
      "circulating_supply": 23404278593.992683,
      "total_supply": 50001802937.77713,
      "platform": null,
      "cmc_rank": 19,
      "last_updated": "2021-08-04T07:24:01.000Z",
      "quote": {
        "USD": {
          "price": 0.26669999200044,
          "volume_24h": 461381387.7071507,
          "percent_change_1h": -0.51384418,
          "percent_change_24h": -1.59284706,
          "percent_change_7d": -0.76999035,
          "percent_change_30d": 2.27487859,
          "percent_change_60d": -34.00397568,
          "percent_change_90d": -56.33355635,
          "market_cap": 6241920913.793918,
          "last_updated": "2021-08-04T07:24:01.000Z"
        }
      }
    },
    {
      "id": 2416,
      "name": "THETA",
      "symbol": "THETA",
      "slug": "theta",
      "num_market_pairs": 73,
      "date_added": "2018-01-17T00:00:00.000Z",
      "tags": [
        "media",
        "collectibles-nfts",
        "content-creation",
        "video",
        "huobi-capital"
      ],
      "max_supply": 1000000000,
      "circulating_supply": 1000000000,
      "total_supply": 1000000000,
      "platform": null,
      "cmc_rank": 20,
      "last_updated": "2021-08-04T07:23:29.000Z",
      "quote": {
        "USD": {
          "price": 5.83552699715632,
          "volume_24h": 228901435.21879366,
          "percent_change_1h": -0.05846402,
          "percent_change_24h": 1.64837172,
          "percent_change_7d": -4.92524114,
          "percent_change_30d": -5.00424608,
          "percent_change_60d": -41.03075858,
          "percent_change_90d": -47.37409103,
          "market_cap": 5835526997.15632,
          "last_updated": "2021-08-04T07:23:29.000Z"
        }
      }
    },
    {
      "id": 4172,
      "name": "Terra",
      "symbol": "LUNA",
      "slug": "terra-luna",
      "num_market_pairs": 74,
      "date_added": "2019-07-26T00:00:00.000Z",
      "tags": [
        "cosmos-ecosystem",
        "store-of-value",
        "defi",
        "payments",
        "stablecoin-algorithmically-stabilized",
        "coinbase-ventures-portfolio",
        "binance-labs-portfolio",
        "solana-ecosystem",
        "arrington-xrp-capital",
        "hashkey-capital-portfolio",
        "kinetic-capital",
        "huobi-capital",
        "pantera-capital-portfolio"
      ],
      "max_supply": null,
      "circulating_supply": 414939090.92527175,
      "total_supply": 995541968.904518,
      "platform": null,
      "cmc_rank": 21,
      "last_updated": "2021-08-04T07:23:29.000Z",
      "quote": {
        "USD": {
          "price": 14.01837464000858,
          "volume_24h": 945930370.6500489,
          "percent_change_1h": 1.24527164,
          "percent_change_24h": 14.50087227,
          "percent_change_7d": 50.14036645,
          "percent_change_30d": 142.53143287,
          "percent_change_60d": 102.99387187,
          "percent_change_90d": -18.23975079,
          "market_cap": 5816771629.375044,
          "last_updated": "2021-08-04T07:23:29.000Z"
        }
      }
    },
    {
      "id": 4943,
      "name": "Dai",
      "symbol": "DAI",
      "slug": "multi-collateral-dai",
      "num_market_pairs": 523,
      "date_added": "2019-11-22T00:00:00.000Z",
      "tags": [
        "defi",
        "stablecoin",
        "ethereum",
        "binance-smart-chain",
        "avalanche-ecosystem",
        "polygon-ecosystem"
      ],
      "max_supply": null,
      "circulating_supply": 5682449406.750076,
      "total_supply": 5682449895.589222,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x6b175474e89094c44da98b954eedeac495271d0f"
      },
      "cmc_rank": 22,
      "last_updated": "2021-08-04T07:23:32.000Z",
      "quote": {
        "USD": {
          "price": 1.00064128420579,
          "volume_24h": 410358443.29416007,
          "percent_change_1h": 0.01494479,
          "percent_change_24h": 0.00494372,
          "percent_change_7d": -0.07670158,
          "percent_change_30d": -0.05695087,
          "percent_change_60d": -0.1488187,
          "percent_change_90d": 0.06295748,
          "market_cap": 5686093471.804826,
          "last_updated": "2021-08-04T07:23:32.000Z"
        }
      }
    },
    {
      "id": 3077,
      "name": "VeChain",
      "symbol": "VET",
      "slug": "vechain",
      "num_market_pairs": 141,
      "date_added": "2017-08-22T00:00:00.000Z",
      "tags": [
        "logistics",
        "data-provenance",
        "iot",
        "smart-contracts",
        "fenbushi-capital-portfolio"
      ],
      "max_supply": 86712634466,
      "circulating_supply": 64315576989,
      "total_supply": 86712634466,
      "platform": null,
      "cmc_rank": 23,
      "last_updated": "2021-08-04T07:23:49.000Z",
      "quote": {
        "USD": {
          "price": 0.08485606161772,
          "volume_24h": 527477097.07846755,
          "percent_change_1h": -0.51323177,
          "percent_change_24h": 0.93273612,
          "percent_change_7d": 3.29443193,
          "percent_change_30d": -0.6781673,
          "percent_change_60d": -39.84340719,
          "percent_change_90d": -58.73372886,
          "market_cap": 5457566563.957798,
          "last_updated": "2021-08-04T07:23:49.000Z"
        }
      }
    },
    {
      "id": 8916,
      "name": "Internet Computer",
      "symbol": "ICP",
      "slug": "internet-computer",
      "num_market_pairs": 62,
      "date_added": "2021-03-23T00:00:00.000Z",
      "tags": [
        "platform",
        "distributed-computing",
        "polychain-capital-portfolio",
        "exnetwork-capital-portfolio"
      ],
      "max_supply": 469213710,
      "circulating_supply": 136899213.55,
      "total_supply": 471635342.61086535,
      "platform": null,
      "cmc_rank": 24,
      "last_updated": "2021-08-04T07:23:17.000Z",
      "quote": {
        "USD": {
          "price": 38.07093855686882,
          "volume_24h": 185687976.5734851,
          "percent_change_1h": -1.68895836,
          "percent_change_24h": -0.78354258,
          "percent_change_7d": -8.44239118,
          "percent_change_30d": -16.15103617,
          "percent_change_60d": -66.97678781,
          "percent_change_90d": 0,
          "market_cap": 5211881547.545713,
          "last_updated": "2021-08-04T07:23:17.000Z"
        }
      }
    },
    {
      "id": 2280,
      "name": "Filecoin",
      "symbol": "FIL",
      "slug": "filecoin",
      "num_market_pairs": 148,
      "date_added": "2017-12-13T00:00:00.000Z",
      "tags": [
        "mineable",
        "distributed-computing",
        "filesharing",
        "storage",
        "polychain-capital-portfolio",
        "blockchain-capital-portfolio",
        "boostvc-portfolio",
        "dcg-portfolio",
        "hashkey-capital-portfolio",
        "a16z-portfolio",
        "winklevoss-capital",
        "pantera-capital-portfolio"
      ],
      "max_supply": null,
      "circulating_supply": 94045398,
      "total_supply": 94045398,
      "platform": null,
      "cmc_rank": 25,
      "last_updated": "2021-08-04T07:23:30.000Z",
      "quote": {
        "USD": {
          "price": 54.66547455738045,
          "volume_24h": 321008431.8691873,
          "percent_change_1h": -0.69624062,
          "percent_change_24h": 1.91465503,
          "percent_change_7d": 10.11602013,
          "percent_change_30d": -4.71262115,
          "percent_change_60d": -40.83937319,
          "percent_change_90d": -65.3347741,
          "market_cap": 5141036311.607718,
          "last_updated": "2021-08-04T07:23:30.000Z"
        }
      }
    },
    {
      "id": 1958,
      "name": "TRON",
      "symbol": "TRX",
      "slug": "tron",
      "num_market_pairs": 509,
      "date_added": "2017-09-13T00:00:00.000Z",
      "tags": [
        "media",
        "payments"
      ],
      "max_supply": null,
      "circulating_supply": 71659657369.49,
      "total_supply": 100850743811.662,
      "platform": null,
      "cmc_rank": 26,
      "last_updated": "2021-08-04T07:23:36.000Z",
      "quote": {
        "USD": {
          "price": 0.06441550539338,
          "volume_24h": 843094548.6730958,
          "percent_change_1h": -0.07241413,
          "percent_change_24h": 1.01776054,
          "percent_change_7d": 7.14504025,
          "percent_change_30d": -2.50590906,
          "percent_change_60d": -19.26883206,
          "percent_change_90d": -54.2119915,
          "market_cap": 4615993045.772146,
          "last_updated": "2021-08-04T07:23:36.000Z"
        }
      }
    },
    {
      "id": 328,
      "name": "Monero",
      "symbol": "XMR",
      "slug": "monero",
      "num_market_pairs": 167,
      "date_added": "2014-05-21T00:00:00.000Z",
      "tags": [
        "mineable",
        "pow",
        "medium-of-exchange",
        "privacy",
        "ringct",
        "boostvc-portfolio",
        "electric-capital-portfolio",
        "galaxy-digital-portfolio"
      ],
      "max_supply": null,
      "circulating_supply": 17966225.28873058,
      "total_supply": 17966225.28873058,
      "platform": null,
      "cmc_rank": 27,
      "last_updated": "2021-08-04T07:23:29.000Z",
      "quote": {
        "USD": {
          "price": 224.90991005917311,
          "volume_24h": 164580878.96836445,
          "percent_change_1h": -0.71393047,
          "percent_change_24h": -3.15716443,
          "percent_change_7d": -0.38695331,
          "percent_change_30d": 6.70981475,
          "percent_change_60d": -23.65510554,
          "percent_change_90d": -44.89990647,
          "market_cap": 4040782113.7912364,
          "last_updated": "2021-08-04T07:23:29.000Z"
        }
      }
    },
    {
      "id": 7278,
      "name": "Aave",
      "symbol": "AAVE",
      "slug": "aave",
      "num_market_pairs": 262,
      "date_added": "2020-10-02T00:00:00.000Z",
      "tags": [
        "defi",
        "dao",
        "yield-farming",
        "three-arrows-capital-portfolio",
        "governance",
        "lending-borowing",
        "blockchain-capital-portfolio",
        "defiance-capital",
        "framework-ventures",
        "alameda-research-portfolio",
        "pantera-capital-portfolio",
        "parafi-capital",
        "polygon-ecosystem"
      ],
      "max_supply": 16000000,
      "circulating_supply": 12933022.47935722,
      "total_supply": 16000000,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9"
      },
      "cmc_rank": 28,
      "last_updated": "2021-08-04T07:23:50.000Z",
      "quote": {
        "USD": {
          "price": 303.8041028812917,
          "volume_24h": 261734863.15585005,
          "percent_change_1h": -0.80065806,
          "percent_change_24h": -1.29667799,
          "percent_change_7d": 2.42289206,
          "percent_change_30d": 11.39614058,
          "percent_change_60d": -22.31330136,
          "percent_change_90d": -33.24076006,
          "market_cap": 3929105291.8846993,
          "last_updated": "2021-08-04T07:23:50.000Z"
        }
      }
    },
    {
      "id": 1765,
      "name": "EOS",
      "symbol": "EOS",
      "slug": "eos",
      "num_market_pairs": 435,
      "date_added": "2017-07-01T00:00:00.000Z",
      "tags": [
        "medium-of-exchange",
        "enterprise-solutions",
        "smart-contracts",
        "binance-chain",
        "fenbushi-capital-portfolio",
        "galaxy-digital-portfolio"
      ],
      "max_supply": null,
      "circulating_supply": 955755925.753,
      "total_supply": 1031839670.8033,
      "platform": null,
      "cmc_rank": 29,
      "last_updated": "2021-08-04T07:23:30.000Z",
      "quote": {
        "USD": {
          "price": 3.96417358379376,
          "volume_24h": 823006445.9850979,
          "percent_change_1h": -0.31095731,
          "percent_change_24h": 0.37506398,
          "percent_change_7d": 5.84717892,
          "percent_change_30d": 0.49449056,
          "percent_change_60d": -36.07561977,
          "percent_change_90d": -55.01385571,
          "market_cap": 3788782393.424393,
          "last_updated": "2021-08-04T07:23:30.000Z"
        }
      }
    },
    {
      "id": 7186,
      "name": "PancakeSwap",
      "symbol": "CAKE",
      "slug": "pancakeswap",
      "num_market_pairs": 109,
      "date_added": "2020-09-25T00:00:00.000Z",
      "tags": [
        "decentralized-exchange",
        "defi",
        "yield-farming",
        "binance-chain",
        "amm",
        "binance-smart-chain"
      ],
      "max_supply": null,
      "circulating_supply": 204540870.50908583,
      "total_supply": 204540870.50908583,
      "platform": {
        "id": 1839,
        "name": "Binance Smart Chain",
        "symbol": "BNB",
        "slug": "binance-coin",
        "token_address": "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
      },
      "cmc_rank": 30,
      "last_updated": "2021-08-04T07:24:04.000Z",
      "quote": {
        "USD": {
          "price": 16.07190192608973,
          "volume_24h": 393494645.5870437,
          "percent_change_1h": -0.37760291,
          "percent_change_24h": 1.21600065,
          "percent_change_7d": 9.22369644,
          "percent_change_30d": 18.91959413,
          "percent_change_60d": -23.43166642,
          "percent_change_90d": -56.90788642,
          "market_cap": 3287360810.6990466,
          "last_updated": "2021-08-04T07:24:04.000Z"
        }
      }
    },
    {
      "id": 4195,
      "name": "FTX Token",
      "symbol": "FTT",
      "slug": "ftx-token",
      "num_market_pairs": 74,
      "date_added": "2019-07-31T00:00:00.000Z",
      "tags": [
        "marketplace",
        "centralized-exchange",
        "derivatives",
        "cms-holdings-portfolio",
        "kinetic-capital",
        "alameda-research-portfolio",
        "pantera-capital-portfolio",
        "exnetwork-capital-portfolio"
      ],
      "max_supply": 352170015,
      "circulating_supply": 94346957.523749,
      "total_supply": 345219293.590976,
      "platform": {
        "id": 1839,
        "name": "Binance Chain",
        "symbol": "BNB",
        "slug": "binance-coin",
        "token_address": "FTT-F11"
      },
      "cmc_rank": 31,
      "last_updated": "2021-08-04T07:24:06.000Z",
      "quote": {
        "USD": {
          "price": 34.73867733477173,
          "volume_24h": 59571644.7240542,
          "percent_change_1h": -0.48741255,
          "percent_change_24h": -4.50604313,
          "percent_change_7d": 11.24289784,
          "percent_change_30d": 31.51782668,
          "percent_change_60d": -5.37475729,
          "percent_change_90d": -39.13618246,
          "market_cap": 3277488514.9349303,
          "last_updated": "2021-08-04T07:24:06.000Z"
        }
      }
    },
    {
      "id": 3635,
      "name": "Crypto.com Coin",
      "symbol": "CRO",
      "slug": "crypto-com-coin",
      "num_market_pairs": 112,
      "date_added": "2018-12-14T00:00:00.000Z",
      "tags": [
        "medium-of-exchange",
        "cosmos-ecosystem",
        "centralized-exchange",
        "mobile",
        "payments"
      ],
      "max_supply": 30263013692,
      "circulating_supply": 25263013692,
      "total_supply": 30263013692,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b"
      },
      "cmc_rank": 32,
      "last_updated": "2021-08-04T07:23:33.000Z",
      "quote": {
        "USD": {
          "price": 0.12038913942935,
          "volume_24h": 25428219.41778908,
          "percent_change_1h": -0.2698697,
          "percent_change_24h": -0.39850909,
          "percent_change_7d": -2.34565133,
          "percent_change_30d": 2.42874464,
          "percent_change_60d": -4.08773908,
          "percent_change_90d": -34.37933459,
          "market_cap": 3041392477.771766,
          "last_updated": "2021-08-04T07:23:33.000Z"
        }
      }
    },
    {
      "id": 6719,
      "name": "The Graph",
      "symbol": "GRT",
      "slug": "the-graph",
      "num_market_pairs": 147,
      "date_added": "2020-12-17T00:00:00.000Z",
      "tags": [
        "ai-big-data",
        "enterprise-solutions",
        "defi",
        "binance-smart-chain",
        "coinbase-ventures-portfolio",
        "solana-ecosystem",
        "analytics",
        "coinfund-portfolio",
        "dcg-portfolio",
        "fabric-ventures-portfolio",
        "framework-ventures",
        "ledgerprime-portfolio",
        "multicoin-capital-portfolio",
        "parafi-capital",
        "polygon-ecosystem"
      ],
      "max_supply": 10057044431,
      "circulating_supply": 4715735200,
      "total_supply": 10000000000,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
      },
      "cmc_rank": 33,
      "last_updated": "2021-08-04T07:24:01.000Z",
      "quote": {
        "USD": {
          "price": 0.6344012721546,
          "volume_24h": 90426367.44126095,
          "percent_change_1h": -0.33933431,
          "percent_change_24h": -3.6831256,
          "percent_change_7d": 13.2037922,
          "percent_change_30d": -15.5518165,
          "percent_change_60d": -24.21269548,
          "percent_change_90d": -58.67205948,
          "market_cap": 2991668410.0242267,
          "last_updated": "2021-08-04T07:24:01.000Z"
        }
      }
    },
    {
      "id": 1376,
      "name": "Neo",
      "symbol": "NEO",
      "slug": "neo",
      "num_market_pairs": 240,
      "date_added": "2016-09-08T00:00:00.000Z",
      "tags": [
        "platform",
        "enterprise-solutions",
        "smart-contracts"
      ],
      "max_supply": 100000000,
      "circulating_supply": 70538831,
      "total_supply": 100000000,
      "platform": null,
      "cmc_rank": 34,
      "last_updated": "2021-08-04T07:23:31.000Z",
      "quote": {
        "USD": {
          "price": 41.35292493811123,
          "volume_24h": 310048921.45586425,
          "percent_change_1h": -0.50566336,
          "percent_change_24h": -1.94476863,
          "percent_change_7d": 23.7363588,
          "percent_change_30d": 13.47280264,
          "percent_change_60d": -30.43153853,
          "percent_change_90d": -63.61445258,
          "market_cap": 2916986983.5651135,
          "last_updated": "2021-08-04T07:23:31.000Z"
        }
      }
    },
    {
      "id": 3957,
      "name": "UNUS SED LEO",
      "symbol": "LEO",
      "slug": "unus-sed-leo",
      "num_market_pairs": 17,
      "date_added": "2019-05-21T00:00:00.000Z",
      "tags": [
        "marketplace",
        "centralized-exchange",
        "discount-token",
        "payments",
        "arrington-xrp-capital",
        "kinetic-capital",
        "alameda-research-portfolio"
      ],
      "max_supply": null,
      "circulating_supply": 953954130,
      "total_supply": 985239504,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3"
      },
      "cmc_rank": 35,
      "last_updated": "2021-08-04T07:23:36.000Z",
      "quote": {
        "USD": {
          "price": 3.00630554115634,
          "volume_24h": 1921727.29029561,
          "percent_change_1h": 0.20595624,
          "percent_change_24h": -1.19900191,
          "percent_change_7d": 6.39684474,
          "percent_change_30d": 17.6894243,
          "percent_change_60d": 10.70411614,
          "percent_change_90d": 2.3724984,
          "market_cap": 2867877587.0279756,
          "last_updated": "2021-08-04T07:23:36.000Z"
        }
      }
    },
    {
      "id": 4023,
      "name": "Bitcoin BEP2",
      "symbol": "BTCB",
      "slug": "bitcoin-bep2",
      "num_market_pairs": 48,
      "date_added": "2019-06-18T00:00:00.000Z",
      "tags": [
        "binance-chain"
      ],
      "max_supply": null,
      "circulating_supply": 73113.21552638,
      "total_supply": 80501,
      "platform": {
        "id": 1839,
        "name": "Binance Chain",
        "symbol": "BNB",
        "slug": "binance-coin",
        "token_address": "BTCB-1DE"
      },
      "cmc_rank": 36,
      "last_updated": "2021-08-04T07:23:37.000Z",
      "quote": {
        "USD": {
          "price": 37835.73674202321,
          "volume_24h": 32287905.08232368,
          "percent_change_1h": -0.56233042,
          "percent_change_24h": -1.47540672,
          "percent_change_7d": -4.64885913,
          "percent_change_30d": 10.45334626,
          "percent_change_60d": -0.24460678,
          "percent_change_90d": -33.05903675,
          "market_cap": 2766292375.0189176,
          "last_updated": "2021-08-04T07:23:37.000Z"
        }
      }
    },
    {
      "id": 1518,
      "name": "Maker",
      "symbol": "MKR",
      "slug": "maker",
      "num_market_pairs": 227,
      "date_added": "2017-01-29T00:00:00.000Z",
      "tags": [
        "store-of-value",
        "defi",
        "dao",
        "polychain-capital-portfolio",
        "governance",
        "lending-borowing",
        "dragonfly-capital-portfolio",
        "electric-capital-portfolio",
        "a16z-portfolio",
        "1confirmation-portfolio",
        "placeholder-ventures-portfolio",
        "pantera-capital-portfolio",
        "paradigm-xzy-screener"
      ],
      "max_supply": 1005577,
      "circulating_supply": 991328.38195493,
      "total_supply": 991328.38195493,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
      },
      "cmc_rank": 37,
      "last_updated": "2021-08-04T07:23:56.000Z",
      "quote": {
        "USD": {
          "price": 2771.752597844581,
          "volume_24h": 104697796.59574486,
          "percent_change_1h": -0.43607817,
          "percent_change_24h": -1.26218377,
          "percent_change_7d": 4.65659782,
          "percent_change_30d": 0.7583181,
          "percent_change_60d": -28.22526287,
          "percent_change_90d": -46.96928524,
          "market_cap": 2747717018.0006423,
          "last_updated": "2021-08-04T07:23:56.000Z"
        }
      }
    },
    {
      "id": 3794,
      "name": "Cosmos",
      "symbol": "ATOM",
      "slug": "cosmos",
      "num_market_pairs": 179,
      "date_added": "2019-03-14T00:00:00.000Z",
      "tags": [
        "platform",
        "cosmos-ecosystem",
        "content-creation",
        "interoperability",
        "binance-chain",
        "polychain-capital-portfolio",
        "dragonfly-capital-portfolio",
        "hashkey-capital-portfolio",
        "1confirmation-portfolio",
        "paradigm-xzy-screener",
        "exnetwork-capital-portfolio"
      ],
      "max_supply": null,
      "circulating_supply": 219179467.005044,
      "total_supply": 276964070.005044,
      "platform": null,
      "cmc_rank": 38,
      "last_updated": "2021-08-04T07:23:31.000Z",
      "quote": {
        "USD": {
          "price": 12.04692147469359,
          "volume_24h": 139786959.3205696,
          "percent_change_1h": -0.01103143,
          "percent_change_24h": -0.68518028,
          "percent_change_7d": 3.18548411,
          "percent_change_30d": -4.67180617,
          "percent_change_60d": -25.72000941,
          "percent_change_90d": -52.04475728,
          "market_cap": 2640437827.87496,
          "last_updated": "2021-08-04T07:23:31.000Z"
        }
      }
    },
    {
      "id": 2011,
      "name": "Tezos",
      "symbol": "XTZ",
      "slug": "tezos",
      "num_market_pairs": 168,
      "date_added": "2017-10-06T00:00:00.000Z",
      "tags": [
        "pos",
        "platform",
        "enterprise-solutions",
        "collectibles-nfts",
        "smart-contracts",
        "polychain-capital-portfolio",
        "boostvc-portfolio",
        "winklevoss-capital"
      ],
      "max_supply": null,
      "circulating_supply": 854759230.601477,
      "total_supply": 884703168.486943,
      "platform": null,
      "cmc_rank": 39,
      "last_updated": "2021-08-04T07:23:37.000Z",
      "quote": {
        "USD": {
          "price": 3.01303155313769,
          "volume_24h": 92604707.65755308,
          "percent_change_1h": -0.5916152,
          "percent_change_24h": -1.96626908,
          "percent_change_7d": 6.57460448,
          "percent_change_30d": 1.840408,
          "percent_change_60d": -18.25383776,
          "percent_change_90d": -54.37272328,
          "market_cap": 2575416532.137945,
          "last_updated": "2021-08-04T07:23:37.000Z"
        }
      }
    },
    {
      "id": 4256,
      "name": "Klaytn",
      "symbol": "KLAY",
      "slug": "klaytn",
      "num_market_pairs": 52,
      "date_added": "2020-03-30T00:00:00.000Z",
      "tags": [
        "platform",
        "enterprise-solutions"
      ],
      "max_supply": null,
      "circulating_supply": 2492477305,
      "total_supply": 10636814704,
      "platform": null,
      "cmc_rank": 40,
      "last_updated": "2021-08-04T07:23:29.000Z",
      "quote": {
        "USD": {
          "price": 1.02880092321576,
          "volume_24h": 119565714.97144973,
          "percent_change_1h": 0.09049411,
          "percent_change_24h": 1.1806966,
          "percent_change_7d": 0.66977071,
          "percent_change_30d": 0.18326897,
          "percent_change_60d": -25.54953318,
          "percent_change_90d": -55.15643836,
          "market_cap": 2564262952.478329,
          "last_updated": "2021-08-04T07:23:29.000Z"
        }
      }
    },
    {
      "id": 4030,
      "name": "Algorand",
      "symbol": "ALGO",
      "slug": "algorand",
      "num_market_pairs": 138,
      "date_added": "2019-06-20T00:00:00.000Z",
      "tags": [
        "pos",
        "platform",
        "research",
        "smart-contracts",
        "arrington-xrp-capital",
        "kinetic-capital",
        "usv-portfolio",
        "multicoin-capital-portfolio",
        "exnetwork-capital-portfolio"
      ],
      "max_supply": 10000000000,
      "circulating_supply": 3172883099.635298,
      "total_supply": 5668342737.278328,
      "platform": null,
      "cmc_rank": 41,
      "last_updated": "2021-08-04T07:23:11.000Z",
      "quote": {
        "USD": {
          "price": 0.80441053631448,
          "volume_24h": 58937514.48016991,
          "percent_change_1h": -0.33342838,
          "percent_change_24h": 0.3790502,
          "percent_change_7d": -5.61716643,
          "percent_change_30d": -6.66876194,
          "percent_change_60d": -25.88741304,
          "percent_change_90d": -44.69086323,
          "market_cap": 2552300595.84078,
          "last_updated": "2021-08-04T07:23:11.000Z"
        }
      }
    },
    {
      "id": 3602,
      "name": "Bitcoin SV",
      "symbol": "BSV",
      "slug": "bitcoin-sv",
      "num_market_pairs": 186,
      "date_added": "2018-11-09T00:00:00.000Z",
      "tags": [
        "mineable",
        "pow",
        "sha-256",
        "medium-of-exchange",
        "store-of-value",
        "state-channels"
      ],
      "max_supply": 21000000,
      "circulating_supply": 18805132.89423905,
      "total_supply": 18805132.89423905,
      "platform": null,
      "cmc_rank": 42,
      "last_updated": "2021-08-04T07:23:28.000Z",
      "quote": {
        "USD": {
          "price": 135.00676168758395,
          "volume_24h": 301623346.86822027,
          "percent_change_1h": -0.25978587,
          "percent_change_24h": -5.18978816,
          "percent_change_7d": 1.37168001,
          "percent_change_30d": -7.79098697,
          "percent_change_60d": -23.92587741,
          "percent_change_90d": -66.03533825,
          "market_cap": 2538820095.155877,
          "last_updated": "2021-08-04T07:23:28.000Z"
        }
      }
    },
    {
      "id": 6945,
      "name": "Amp",
      "symbol": "AMP",
      "slug": "amp",
      "num_market_pairs": 54,
      "date_added": "2020-09-08T00:00:00.000Z",
      "tags": [
        
      ],
      "max_supply": 92547638199,
      "circulating_supply": 42227702186,
      "total_supply": 99213408535,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xff20817765cb7f73d4bde2e66e067e58d11095c2"
      },
      "cmc_rank": 43,
      "last_updated": "2021-08-04T07:23:35.000Z",
      "quote": {
        "USD": {
          "price": 0.05977276243706,
          "volume_24h": 34065358.34554942,
          "percent_change_1h": -0.40894228,
          "percent_change_24h": -3.34543532,
          "percent_change_7d": -13.39245928,
          "percent_change_30d": 8.17815577,
          "percent_change_60d": 29.66070323,
          "percent_change_90d": -5.858592,
          "market_cap": 2524066411.026697,
          "last_updated": "2021-08-04T07:23:35.000Z"
        }
      }
    },
    {
      "id": 5994,
      "name": "SHIBA INU",
      "symbol": "SHIB",
      "slug": "shiba-inu",
      "num_market_pairs": 123,
      "date_added": "2020-08-01T00:00:00.000Z",
      "tags": [
        "memes",
        "doggone-doggerel"
      ],
      "max_supply": null,
      "circulating_supply": 394796000000000,
      "total_supply": 1000000000000000,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce"
      },
      "cmc_rank": 44,
      "last_updated": "2021-08-04T07:23:36.000Z",
      "quote": {
        "USD": {
          "price": 0.00000616255075,
          "volume_24h": 177537652.84763935,
          "percent_change_1h": -0.13786857,
          "percent_change_24h": -1.43759265,
          "percent_change_7d": -0.62729998,
          "percent_change_30d": -27.35258731,
          "percent_change_60d": -32.40609219,
          "percent_change_90d": 274.90230339,
          "market_cap": 2432950385.8970003,
          "last_updated": "2021-08-04T07:23:36.000Z"
        }
      }
    },
    {
      "id": 6783,
      "name": "Axie Infinity",
      "symbol": "AXS",
      "slug": "axie-infinity",
      "num_market_pairs": 95,
      "date_added": "2020-08-31T00:00:00.000Z",
      "tags": [
        "collectibles-nfts",
        "gaming",
        "binance-launchpad",
        "metaverse",
        "defiance-capital",
        "play-to-earn"
      ],
      "max_supply": 270000000,
      "circulating_supply": 60907500,
      "total_supply": 270000000,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xbb0e17ef65f82ab018d8edd776e8dd940327b28b"
      },
      "cmc_rank": 45,
      "last_updated": "2021-08-04T07:23:37.000Z",
      "quote": {
        "USD": {
          "price": 39.34155534826262,
          "volume_24h": 438449094.3891505,
          "percent_change_1h": 1.92906319,
          "percent_change_24h": 1.89602414,
          "percent_change_7d": -15.2679282,
          "percent_change_30d": 392.28597054,
          "percent_change_60d": 776.50342291,
          "percent_change_90d": 380.11446478,
          "market_cap": 2396195782.3743052,
          "last_updated": "2021-08-04T07:23:37.000Z"
        }
      }
    },
    {
      "id": 1720,
      "name": "IOTA",
      "symbol": "MIOTA",
      "slug": "iota",
      "num_market_pairs": 58,
      "date_added": "2017-06-13T00:00:00.000Z",
      "tags": [
        "dag",
        "medium-of-exchange",
        "iot",
        "sharing-economy"
      ],
      "max_supply": 2779530283,
      "circulating_supply": 2779530283,
      "total_supply": 2779530283,
      "platform": null,
      "cmc_rank": 46,
      "last_updated": "2021-08-04T07:23:34.000Z",
      "quote": {
        "USD": {
          "price": 0.84547457207837,
          "volume_24h": 34993649.72877988,
          "percent_change_1h": -0.37114609,
          "percent_change_24h": -3.27479203,
          "percent_change_7d": 0.32994165,
          "percent_change_30d": 1.5754317,
          "percent_change_60d": -37.36834066,
          "percent_change_90d": -59.74248547,
          "market_cap": 2350022176.5982957,
          "last_updated": "2021-08-04T07:23:34.000Z"
        }
      }
    },
    {
      "id": 5805,
      "name": "Avalanche",
      "symbol": "AVAX",
      "slug": "avalanche",
      "num_market_pairs": 69,
      "date_added": "2020-07-13T00:00:00.000Z",
      "tags": [
        "defi",
        "smart-contracts",
        "polychain-capital-portfolio",
        "avalanche-ecosystem",
        "cms-holdings-portfolio",
        "dragonfly-capital-portfolio"
      ],
      "max_supply": 720000000,
      "circulating_supply": 173462362.53287187,
      "total_supply": 386966300.88287187,
      "platform": null,
      "cmc_rank": 47,
      "last_updated": "2021-08-04T07:23:29.000Z",
      "quote": {
        "USD": {
          "price": 12.52482014495925,
          "volume_24h": 50869148.384642,
          "percent_change_1h": -0.39373194,
          "percent_change_24h": -1.50796854,
          "percent_change_7d": 4.45249118,
          "percent_change_30d": 3.51854932,
          "percent_change_60d": -34.37699773,
          "percent_change_90d": -66.88116046,
          "market_cap": 2172584892.643938,
          "last_updated": "2021-08-04T07:23:29.000Z"
        }
      }
    },
    {
      "id": 5692,
      "name": "Compound",
      "symbol": "COMP",
      "slug": "compound",
      "num_market_pairs": 224,
      "date_added": "2020-06-16T00:00:00.000Z",
      "tags": [
        "defi",
        "dao",
        "yield-farming",
        "coinbase-ventures-portfolio",
        "three-arrows-capital-portfolio",
        "polychain-capital-portfolio",
        "lending-borowing",
        "dragonfly-capital-portfolio",
        "alameda-research-portfolio",
        "a16z-portfolio",
        "pantera-capital-portfolio",
        "paradigm-xzy-screener"
      ],
      "max_supply": 10000000,
      "circulating_supply": 5395222.77097694,
      "total_supply": 10000000,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xc00e94cb662c3520282e6f5717214004a7f26888"
      },
      "cmc_rank": 48,
      "last_updated": "2021-08-04T07:24:01.000Z",
      "quote": {
        "USD": {
          "price": 394.9242901472673,
          "volume_24h": 171278700.58403832,
          "percent_change_1h": -0.04053989,
          "percent_change_24h": 0.51195503,
          "percent_change_7d": 1.1742623,
          "percent_change_30d": -6.70102835,
          "percent_change_60d": -4.96814094,
          "percent_change_90d": -47.52891075,
          "market_cap": 2130704523.0144405,
          "last_updated": "2021-08-04T07:24:01.000Z"
        }
      }
    },
    {
      "id": 7129,
      "name": "TerraUSD",
      "symbol": "UST",
      "slug": "terrausd",
      "num_market_pairs": 100,
      "date_added": "2020-09-21T00:00:00.000Z",
      "tags": [
        "stablecoin"
      ],
      "max_supply": null,
      "circulating_supply": 2049298472.066957,
      "total_supply": 2049298472.066957,
      "platform": null,
      "cmc_rank": 49,
      "last_updated": "2021-08-04T07:23:11.000Z",
      "quote": {
        "USD": {
          "price": 1.00322387331448,
          "volume_24h": 42844698.13066229,
          "percent_change_1h": 0.09025,
          "percent_change_24h": 0.21938944,
          "percent_change_7d": 0.31289509,
          "percent_change_30d": 0.31541154,
          "percent_change_60d": 0.29841578,
          "percent_change_90d": 0.06517315,
          "market_cap": 2055905150.7244585,
          "last_updated": "2021-08-04T07:23:11.000Z"
        }
      }
    },
    {
      "id": 3155,
      "name": "Quant",
      "symbol": "QNT",
      "slug": "quant",
      "num_market_pairs": 60,
      "date_added": "2018-08-10T00:00:00.000Z",
      "tags": [
        "platform",
        "interoperability"
      ],
      "max_supply": 14612493,
      "circulating_supply": 12072738,
      "total_supply": 14612493.080826,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x4a220e6096b25eadb88358cb44068a3248254675"
      },
      "cmc_rank": 50,
      "last_updated": "2021-08-04T07:24:07.000Z",
      "quote": {
        "USD": {
          "price": 164.53803636958773,
          "volume_24h": 83041156.74278276,
          "percent_change_1h": -2.30819751,
          "percent_change_24h": 7.60353734,
          "percent_change_7d": 74.14767391,
          "percent_change_30d": 105.80443245,
          "percent_change_60d": 258.34249232,
          "percent_change_90d": 331.27004888,
          "market_cap": 1986424604.1245039,
          "last_updated": "2021-08-04T07:24:07.000Z"
        }
      }
    },
    {
      "id": 3718,
      "name": "BitTorrent",
      "symbol": "BTT",
      "slug": "bittorrent",
      "num_market_pairs": 140,
      "date_added": "2019-01-31T00:00:00.000Z",
      "tags": [
        "platform",
        "distributed-computing",
        "filesharing",
        "storage",
        "binance-launchpad",
        "binance-labs-portfolio"
      ],
      "max_supply": null,
      "circulating_supply": 659952625000,
      "total_supply": 990000000000,
      "platform": {
        "id": 1958,
        "name": "Tron",
        "symbol": "TRX",
        "slug": "tron",
        "token_address": "1002000"
      },
      "cmc_rank": 51,
      "last_updated": "2021-08-04T07:23:33.000Z",
      "quote": {
        "USD": {
          "price": 0.0029805278327,
          "volume_24h": 300162603.850138,
          "percent_change_1h": -0.99623076,
          "percent_change_24h": 4.80924576,
          "percent_change_7d": 5.72132064,
          "percent_change_30d": 11.6108373,
          "percent_change_60d": -30.60497488,
          "percent_change_90d": -57.88438918,
          "market_cap": 1967007167.0759258,
          "last_updated": "2021-08-04T07:23:33.000Z"
        }
      }
    },
    {
      "id": 4642,
      "name": "Hedera Hashgraph",
      "symbol": "HBAR",
      "slug": "hedera-hashgraph",
      "num_market_pairs": 55,
      "date_added": "2019-09-17T00:00:00.000Z",
      "tags": [
        "dag",
        "marketplace",
        "enterprise-solutions",
        "payments",
        "dcg-portfolio"
      ],
      "max_supply": 50000000000,
      "circulating_supply": 9294752689,
      "total_supply": 50000000000,
      "platform": null,
      "cmc_rank": 52,
      "last_updated": "2021-08-04T07:23:46.000Z",
      "quote": {
        "USD": {
          "price": 0.21028596613592,
          "volume_24h": 153894808.866778,
          "percent_change_1h": -0.16583527,
          "percent_change_24h": 1.24729194,
          "percent_change_7d": 5.44752958,
          "percent_change_30d": 10.80498662,
          "percent_change_60d": -12.06392868,
          "percent_change_90d": -30.86435809,
          "market_cap": 1954556049.2008052,
          "last_updated": "2021-08-04T07:23:46.000Z"
        }
      }
    },
    {
      "id": 6892,
      "name": "Elrond",
      "symbol": "EGLD",
      "slug": "elrond-egld",
      "num_market_pairs": 44,
      "date_added": "2020-09-04T00:00:00.000Z",
      "tags": [
        "binance-smart-chain",
        "binance-launchpad",
        "binance-labs-portfolio",
        "electric-capital-portfolio",
        "exnetwork-capital-portfolio"
      ],
      "max_supply": 31415926,
      "circulating_supply": 19239147.8311242,
      "total_supply": 22181604,
      "platform": null,
      "cmc_rank": 53,
      "last_updated": "2021-08-04T07:24:03.000Z",
      "quote": {
        "USD": {
          "price": 100.29378575787197,
          "volume_24h": 77951064.81795493,
          "percent_change_1h": -0.35271054,
          "percent_change_24h": 0.80377202,
          "percent_change_7d": 19.20854697,
          "percent_change_30d": 11.20672029,
          "percent_change_60d": -2.32378268,
          "percent_change_90d": -48.87889282,
          "market_cap": 1929566970.738798,
          "last_updated": "2021-08-04T07:24:03.000Z"
        }
      }
    },
    {
      "id": 4157,
      "name": "THORChain",
      "symbol": "RUNE",
      "slug": "thorchain",
      "num_market_pairs": 50,
      "date_added": "2019-07-23T00:00:00.000Z",
      "tags": [
        "cosmos-ecosystem",
        "decentralized-exchange",
        "defi",
        "multicoin-capital-portfolio",
        "exnetwork-capital-portfolio"
      ],
      "max_supply": 500000000,
      "circulating_supply": 234399657.16348216,
      "total_supply": 461668422.2248116,
      "platform": {
        "id": 1839,
        "name": "Binance Chain",
        "symbol": "BNB",
        "slug": "binance-coin",
        "token_address": "RUNE-B1A"
      },
      "cmc_rank": 54,
      "last_updated": "2021-08-04T07:23:42.000Z",
      "quote": {
        "USD": {
          "price": 7.38423172718209,
          "volume_24h": 160835801.02575403,
          "percent_change_1h": -1.8401932,
          "percent_change_24h": 2.30508873,
          "percent_change_7d": 84.83493082,
          "percent_change_30d": 22.34006113,
          "percent_change_60d": -39.64511185,
          "percent_change_90d": -58.79777438,
          "market_cap": 1730861385.2671897,
          "last_updated": "2021-08-04T07:23:42.000Z"
        }
      }
    },
    {
      "id": 5034,
      "name": "Kusama",
      "symbol": "KSM",
      "slug": "kusama",
      "num_market_pairs": 97,
      "date_added": "2019-12-12T00:00:00.000Z",
      "tags": [
        "substrate",
        "polkadot-ecosystem",
        "cms-holdings-portfolio",
        "kinetic-capital",
        "1confirmation-portfolio"
      ],
      "max_supply": null,
      "circulating_supply": 8470098.05726206,
      "total_supply": 9651217.45126206,
      "platform": null,
      "cmc_rank": 55,
      "last_updated": "2021-08-04T07:23:58.000Z",
      "quote": {
        "USD": {
          "price": 201.14752940260885,
          "volume_24h": 106613316.47743332,
          "percent_change_1h": -1.27285978,
          "percent_change_24h": 2.13485623,
          "percent_change_7d": 7.62338031,
          "percent_change_30d": -0.40415451,
          "percent_change_60d": -54.94647075,
          "percent_change_90d": -51.87413979,
          "market_cap": 1703739298.0161002,
          "last_updated": "2021-08-04T07:23:58.000Z"
        }
      }
    },
    {
      "id": 1168,
      "name": "Decred",
      "symbol": "DCR",
      "slug": "decred",
      "num_market_pairs": 54,
      "date_added": "2016-02-10T00:00:00.000Z",
      "tags": [
        "mineable",
        "hybrid-pow-pos",
        "blake256",
        "medium-of-exchange",
        "store-of-value",
        "privacy",
        "dao",
        "placeholder-ventures-portfolio"
      ],
      "max_supply": 21000000,
      "circulating_supply": 13182403.57775673,
      "total_supply": 13182403.57775673,
      "platform": null,
      "cmc_rank": 56,
      "last_updated": "2021-08-04T07:23:30.000Z",
      "quote": {
        "USD": {
          "price": 128.9521187504899,
          "volume_24h": 24173380.52415518,
          "percent_change_1h": 0.14946647,
          "percent_change_24h": -0.07481921,
          "percent_change_7d": -5.99705331,
          "percent_change_30d": -5.01679405,
          "percent_change_60d": -10.71198634,
          "percent_change_90d": -33.39420629,
          "market_cap": 1699898871.5757687,
          "last_updated": "2021-08-04T07:23:30.000Z"
        }
      }
    },
    {
      "id": 2502,
      "name": "Huobi Token",
      "symbol": "HT",
      "slug": "huobi-token",
      "num_market_pairs": 118,
      "date_added": "2018-02-03T00:00:00.000Z",
      "tags": [
        "marketplace",
        "centralized-exchange",
        "discount-token",
        "payments",
        "kinetic-capital",
        "alameda-research-portfolio",
        "multicoin-capital-portfolio"
      ],
      "max_supply": 500000000,
      "circulating_supply": 167856506.25441208,
      "total_supply": 500000000,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x6f259637dcd74c767781e37bc6133cd6a68aa161"
      },
      "cmc_rank": 57,
      "last_updated": "2021-08-04T07:24:07.000Z",
      "quote": {
        "USD": {
          "price": 10.09188583410288,
          "volume_24h": 135766679.34840947,
          "percent_change_1h": -0.09523517,
          "percent_change_24h": 0.60527306,
          "percent_change_7d": -7.25909177,
          "percent_change_30d": -3.7749771,
          "percent_change_60d": -39.40854265,
          "percent_change_90d": -58.47208334,
          "market_cap": 1693988697.6309028,
          "last_updated": "2021-08-04T07:24:07.000Z"
        }
      }
    },
    {
      "id": 1274,
      "name": "Waves",
      "symbol": "WAVES",
      "slug": "waves",
      "num_market_pairs": 149,
      "date_added": "2016-06-02T00:00:00.000Z",
      "tags": [
        "lpos",
        "platform",
        "smart-contracts"
      ],
      "max_supply": null,
      "circulating_supply": 105808096,
      "total_supply": 105808096,
      "platform": null,
      "cmc_rank": 58,
      "last_updated": "2021-08-04T07:23:30.000Z",
      "quote": {
        "USD": {
          "price": 15.6815888059139,
          "volume_24h": 87682963.37367253,
          "percent_change_1h": -0.60796465,
          "percent_change_24h": -2.30047286,
          "percent_change_7d": 5.69693416,
          "percent_change_30d": -7.30244582,
          "percent_change_60d": 4.25469785,
          "percent_change_90d": -53.76808282,
          "market_cap": 1659239053.8086634,
          "last_updated": "2021-08-04T07:23:30.000Z"
        }
      }
    },
    {
      "id": 131,
      "name": "Dash",
      "symbol": "DASH",
      "slug": "dash",
      "num_market_pairs": 325,
      "date_added": "2014-02-14T00:00:00.000Z",
      "tags": [
        "mineable",
        "hybrid-pow-pos",
        "x11",
        "medium-of-exchange",
        "privacy",
        "masternodes",
        "dao"
      ],
      "max_supply": 18900000,
      "circulating_supply": 10265015.53779684,
      "total_supply": 10265015.53779684,
      "platform": null,
      "cmc_rank": 59,
      "last_updated": "2021-08-04T07:23:27.000Z",
      "quote": {
        "USD": {
          "price": 152.42178523688182,
          "volume_24h": 229986022.98187637,
          "percent_change_1h": -0.71951737,
          "percent_change_24h": -2.40698972,
          "percent_change_7d": 0.31303233,
          "percent_change_30d": 13.40783174,
          "percent_change_60d": -23.04987902,
          "percent_change_90d": -60.60364039,
          "market_cap": 1564611993.7553248,
          "last_updated": "2021-08-04T07:23:27.000Z"
        }
      }
    },
    {
      "id": 4847,
      "name": "Stacks",
      "symbol": "STX",
      "slug": "stacks",
      "num_market_pairs": 32,
      "date_added": "2019-10-28T00:00:00.000Z",
      "tags": [
        "arrington-xrp-capital",
        "blockchain-capital-portfolio",
        "dcg-portfolio",
        "fabric-ventures-portfolio",
        "hashkey-capital-portfolio",
        "huobi-capital",
        "usv-portfolio"
      ],
      "max_supply": 1818000000,
      "circulating_supply": 1185356099.542743,
      "total_supply": 1352464600,
      "platform": null,
      "cmc_rank": 60,
      "last_updated": "2021-08-04T07:23:31.000Z",
      "quote": {
        "USD": {
          "price": 1.28125587933047,
          "volume_24h": 119144262.10973908,
          "percent_change_1h": -0.53708747,
          "percent_change_24h": -10.810417,
          "percent_change_7d": 14.60977509,
          "percent_change_30d": 54.99709225,
          "percent_change_60d": 22.07304437,
          "percent_change_90d": -37.51628004,
          "market_cap": 1518744471.6393733,
          "last_updated": "2021-08-04T07:23:31.000Z"
        }
      }
    },
    {
      "id": 4066,
      "name": "Chiliz",
      "symbol": "CHZ",
      "slug": "chiliz",
      "num_market_pairs": 159,
      "date_added": "2019-07-01T00:00:00.000Z",
      "tags": [
        "sports",
        "collectibles-nfts",
        "content-creation",
        "payments"
      ],
      "max_supply": 8888888888,
      "circulating_supply": 5893953676.641027,
      "total_supply": 8888888888,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x3506424f91fd33084466f402d5d97f05f8e3b4af"
      },
      "cmc_rank": 61,
      "last_updated": "2021-08-04T07:23:32.000Z",
      "quote": {
        "USD": {
          "price": 0.25580568375077,
          "volume_24h": 125878959.99405141,
          "percent_change_1h": -0.37257988,
          "percent_change_24h": -1.17875931,
          "percent_change_7d": 2.23101515,
          "percent_change_30d": 6.38314319,
          "percent_change_60d": -9.47216283,
          "percent_change_90d": -49.66659432,
          "market_cap": 1507706850.2485228,
          "last_updated": "2021-08-04T07:23:32.000Z"
        }
      }
    },
    {
      "id": 3822,
      "name": "Theta Fuel",
      "symbol": "TFUEL",
      "slug": "theta-fuel",
      "num_market_pairs": 19,
      "date_added": "2019-03-28T00:00:00.000Z",
      "tags": [
        "media",
        "content-creation",
        "payments"
      ],
      "max_supply": null,
      "circulating_supply": 5301214400,
      "total_supply": 5301214400,
      "platform": null,
      "cmc_rank": 62,
      "last_updated": "2021-08-04T07:23:35.000Z",
      "quote": {
        "USD": {
          "price": 0.28430242196065,
          "volume_24h": 52862779.85727318,
          "percent_change_1h": 0.08247714,
          "percent_change_24h": -2.50333017,
          "percent_change_7d": -14.59537098,
          "percent_change_30d": -21.26921379,
          "percent_change_60d": -41.69974188,
          "percent_change_90d": -27.69648102,
          "market_cap": 1507148093.2526739,
          "last_updated": "2021-08-04T07:23:35.000Z"
        }
      }
    },
    {
      "id": 873,
      "name": "NEM",
      "symbol": "XEM",
      "slug": "nem",
      "num_market_pairs": 108,
      "date_added": "2015-04-01T00:00:00.000Z",
      "tags": [
        "poi",
        "medium-of-exchange",
        "payments",
        "smart-contracts"
      ],
      "max_supply": 8999999999,
      "circulating_supply": 8999999999,
      "total_supply": 8999999999,
      "platform": null,
      "cmc_rank": 63,
      "last_updated": "2021-08-04T07:23:36.000Z",
      "quote": {
        "USD": {
          "price": 0.15931349756269,
          "volume_24h": 61021226.3762892,
          "percent_change_1h": -0.55156851,
          "percent_change_24h": -1.57094925,
          "percent_change_7d": 1.26780899,
          "percent_change_30d": 20.48456738,
          "percent_change_60d": -18.17657675,
          "percent_change_90d": -58.64175759,
          "market_cap": 1433821477.9048965,
          "last_updated": "2021-08-04T07:23:36.000Z"
        }
      }
    },
    {
      "id": 1437,
      "name": "Zcash",
      "symbol": "ZEC",
      "slug": "zcash",
      "num_market_pairs": 238,
      "date_added": "2016-10-29T00:00:00.000Z",
      "tags": [
        "mineable",
        "pow",
        "equihash",
        "medium-of-exchange",
        "privacy",
        "zero-knowledge-proofs",
        "binance-chain",
        "boostvc-portfolio",
        "dcg-portfolio",
        "electric-capital-portfolio",
        "fenbushi-capital-portfolio",
        "hashkey-capital-portfolio",
        "winklevoss-capital",
        "placeholder-ventures-portfolio",
        "pantera-capital-portfolio"
      ],
      "max_supply": 21000000,
      "circulating_supply": 12352556.25,
      "total_supply": 12352556.25,
      "platform": null,
      "cmc_rank": 64,
      "last_updated": "2021-08-04T07:23:32.000Z",
      "quote": {
        "USD": {
          "price": 114.59495458920895,
          "volume_24h": 200529667.21982408,
          "percent_change_1h": -0.33503112,
          "percent_change_24h": 2.95256238,
          "percent_change_7d": 11.90961771,
          "percent_change_30d": -0.34182097,
          "percent_change_60d": -28.87848249,
          "percent_change_90d": -58.75383219,
          "market_cap": 1415540622.5293992,
          "last_updated": "2021-08-04T07:23:32.000Z"
        }
      }
    },
    {
      "id": 2700,
      "name": "Celsius",
      "symbol": "CEL",
      "slug": "celsius",
      "num_market_pairs": 49,
      "date_added": "2018-05-18T00:00:00.000Z",
      "tags": [
        "exnetwork-capital-portfolio"
      ],
      "max_supply": 695658160,
      "circulating_supply": 238863519.826,
      "total_supply": 695658160,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d"
      },
      "cmc_rank": 65,
      "last_updated": "2021-08-04T07:23:34.000Z",
      "quote": {
        "USD": {
          "price": 5.7293266901935,
          "volume_24h": 8474137.56721993,
          "percent_change_1h": -0.16051632,
          "percent_change_24h": -2.4616444,
          "percent_change_7d": -3.8643009,
          "percent_change_30d": -14.33834306,
          "percent_change_60d": -27.88078499,
          "percent_change_90d": -7.37585815,
          "market_cap": 1368527139.452666,
          "last_updated": "2021-08-04T07:23:34.000Z"
        }
      }
    },
    {
      "id": 2563,
      "name": "TrueUSD",
      "symbol": "TUSD",
      "slug": "trueusd",
      "num_market_pairs": 207,
      "date_added": "2018-03-06T00:00:00.000Z",
      "tags": [
        "store-of-value",
        "stablecoin",
        "stablecoin-asset-backed",
        "avalanche-ecosystem"
      ],
      "max_supply": null,
      "circulating_supply": 1257445005.6538587,
      "total_supply": 1257445005.6538587,
      "platform": {
        "id": 1839,
        "name": "Binance Chain",
        "symbol": "BNB",
        "slug": "binance-coin",
        "token_address": "TUSDB-888"
      },
      "cmc_rank": 66,
      "last_updated": "2021-08-04T07:23:56.000Z",
      "quote": {
        "USD": {
          "price": 1.00068257355107,
          "volume_24h": 91688411.6141228,
          "percent_change_1h": 0.03595573,
          "percent_change_24h": 0.05017872,
          "percent_change_7d": 0.07291507,
          "percent_change_30d": 0.03546644,
          "percent_change_60d": 0.00746818,
          "percent_change_90d": 0.149367,
          "market_cap": 1258303304.3566432,
          "last_updated": "2021-08-04T07:23:56.000Z"
        }
      }
    },
    {
      "id": 5665,
      "name": "Helium",
      "symbol": "HNT",
      "slug": "helium",
      "num_market_pairs": 22,
      "date_added": "2020-06-05T00:00:00.000Z",
      "tags": [
        "mineable",
        "enterprise-solutions",
        "distributed-computing",
        "iot",
        "usv-portfolio",
        "multicoin-capital-portfolio"
      ],
      "max_supply": 223000000,
      "circulating_supply": 92929953.2327688,
      "total_supply": 223000000,
      "platform": null,
      "cmc_rank": 67,
      "last_updated": "2021-08-04T07:23:33.000Z",
      "quote": {
        "USD": {
          "price": 13.01541696799798,
          "volume_24h": 13560400.36991539,
          "percent_change_1h": 0.18421771,
          "percent_change_24h": 0.49133695,
          "percent_change_7d": 14.1294828,
          "percent_change_30d": -1.79824798,
          "percent_change_60d": -13.48333833,
          "percent_change_90d": -30.5639232,
          "market_cap": 1209522090.141038,
          "last_updated": "2021-08-04T07:23:33.000Z"
        }
      }
    },
    {
      "id": 1966,
      "name": "Decentraland",
      "symbol": "MANA",
      "slug": "decentraland",
      "num_market_pairs": 167,
      "date_added": "2017-09-17T00:00:00.000Z",
      "tags": [
        "platform",
        "collectibles-nfts",
        "gaming",
        "payments",
        "metaverse",
        "boostvc-portfolio",
        "dcg-portfolio",
        "fabric-ventures-portfolio",
        "kinetic-capital",
        "polygon-ecosystem",
        "play-to-earn"
      ],
      "max_supply": null,
      "circulating_supply": 1690636444.8448062,
      "total_supply": 2194131627.320146,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942"
      },
      "cmc_rank": 68,
      "last_updated": "2021-08-04T07:23:31.000Z",
      "quote": {
        "USD": {
          "price": 0.68496375255631,
          "volume_24h": 77421911.7373748,
          "percent_change_1h": -0.12813506,
          "percent_change_24h": 1.11465161,
          "percent_change_7d": -1.7457251,
          "percent_change_30d": 22.51913279,
          "percent_change_60d": -22.58869555,
          "percent_change_90d": -51.09222049,
          "market_cap": 1158024683.4693575,
          "last_updated": "2021-08-04T07:23:31.000Z"
        }
      }
    },
    {
      "id": 5864,
      "name": "yearn.finance",
      "symbol": "YFI",
      "slug": "yearn-finance",
      "num_market_pairs": 234,
      "date_added": "2020-07-18T00:00:00.000Z",
      "tags": [
        "defi",
        "yield-farming",
        "yield-aggregator",
        "yearn-partnerships",
        "three-arrows-capital-portfolio",
        "polychain-capital-portfolio",
        "governance",
        "blockchain-capital-portfolio",
        "framework-ventures",
        "alameda-research-portfolio",
        "parafi-capital"
      ],
      "max_supply": 36666,
      "circulating_supply": 36635.43982673,
      "total_supply": 36666,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e"
      },
      "cmc_rank": 69,
      "last_updated": "2021-08-04T07:23:35.000Z",
      "quote": {
        "USD": {
          "price": 31378.323786654248,
          "volume_24h": 170444585.86599687,
          "percent_change_1h": -0.30341614,
          "percent_change_24h": 1.19730804,
          "percent_change_7d": 4.84953503,
          "percent_change_30d": -3.54166646,
          "percent_change_60d": -29.23071878,
          "percent_change_90d": -41.02112654,
          "market_cap": 1149558692.9496224,
          "last_updated": "2021-08-04T07:23:35.000Z"
        }
      }
    },
    {
      "id": 2130,
      "name": "Enjin Coin",
      "symbol": "ENJ",
      "slug": "enjin-coin",
      "num_market_pairs": 173,
      "date_added": "2017-11-01T00:00:00.000Z",
      "tags": [
        "media",
        "collectibles-nfts",
        "gaming",
        "ethereum",
        "metaverse"
      ],
      "max_supply": 1000000000,
      "circulating_supply": 834331121.3990188,
      "total_supply": 1000000000,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c"
      },
      "cmc_rank": 70,
      "last_updated": "2021-08-04T07:23:27.000Z",
      "quote": {
        "USD": {
          "price": 1.3409699711352,
          "volume_24h": 107366441.51981251,
          "percent_change_1h": -0.28213097,
          "percent_change_24h": -2.67129008,
          "percent_change_7d": 0.86719836,
          "percent_change_30d": 17.75440016,
          "percent_change_60d": -15.61123895,
          "percent_change_90d": -46.23997702,
          "market_cap": 1118812979.7796412,
          "last_updated": "2021-08-04T07:23:27.000Z"
        }
      }
    },
    {
      "id": 2682,
      "name": "Holo",
      "symbol": "HOT",
      "slug": "holo",
      "num_market_pairs": 93,
      "date_added": "2018-04-29T00:00:00.000Z",
      "tags": [
        "platform",
        "distributed-computing",
        "filesharing",
        "storage"
      ],
      "max_supply": null,
      "circulating_supply": 172673864847.79962,
      "total_supply": 177619433541.14133,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x6c6ee5e31d828de241282b9606c8e98ea48526e2"
      },
      "cmc_rank": 71,
      "last_updated": "2021-08-04T07:23:29.000Z",
      "quote": {
        "USD": {
          "price": 0.0061857461231,
          "volume_24h": 78664798.35314256,
          "percent_change_1h": 0.11039221,
          "percent_change_24h": 0.4934007,
          "percent_change_7d": -0.65895495,
          "percent_change_30d": 2.98848612,
          "percent_change_60d": -31.3250599,
          "percent_change_90d": -58.10919587,
          "market_cap": 1068116690.0429698,
          "last_updated": "2021-08-04T07:23:29.000Z"
        }
      }
    },
    {
      "id": 3897,
      "name": "OKB",
      "symbol": "OKB",
      "slug": "okb",
      "num_market_pairs": 47,
      "date_added": "2019-04-30T00:00:00.000Z",
      "tags": [
        "marketplace",
        "centralized-exchange",
        "discount-token",
        "alameda-research-portfolio"
      ],
      "max_supply": null,
      "circulating_supply": 60000000,
      "total_supply": 300000000,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x75231f58b43240c9718dd58b4967c5114342a86c"
      },
      "cmc_rank": 72,
      "last_updated": "2021-08-04T07:24:03.000Z",
      "quote": {
        "USD": {
          "price": 17.35161441372354,
          "volume_24h": 488354029.0966443,
          "percent_change_1h": 0.3631076,
          "percent_change_24h": -2.24559602,
          "percent_change_7d": -1.89435651,
          "percent_change_30d": 65.39191,
          "percent_change_60d": 0.43626279,
          "percent_change_90d": -51.90790993,
          "market_cap": 1041096864.8234123,
          "last_updated": "2021-08-04T07:24:03.000Z"
        }
      }
    },
    {
      "id": 4558,
      "name": "Flow",
      "symbol": "FLOW",
      "slug": "flow",
      "num_market_pairs": 40,
      "date_added": "2021-01-27T00:00:00.000Z",
      "tags": [
        "collectibles-nfts",
        "coinbase-ventures-portfolio",
        "coinfund-portfolio",
        "dcg-portfolio",
        "ledgerprime-portfolio",
        "a16z-portfolio"
      ],
      "max_supply": 1344157523,
      "circulating_supply": 50946679,
      "total_supply": 1365946679,
      "platform": null,
      "cmc_rank": 73,
      "last_updated": "2021-08-04T07:23:36.000Z",
      "quote": {
        "USD": {
          "price": 20.4224010317331,
          "volume_24h": 87538789.62986952,
          "percent_change_1h": -0.7319447,
          "percent_change_24h": -3.48547075,
          "percent_change_7d": 10.20657127,
          "percent_change_30d": 93.30371251,
          "percent_change_60d": 32.91058182,
          "percent_change_90d": -34.41823563,
          "market_cap": 1040453509.772975,
          "last_updated": "2021-08-04T07:23:36.000Z"
        }
      }
    },
    {
      "id": 2586,
      "name": "Synthetix",
      "symbol": "SNX",
      "slug": "synthetix-network-token",
      "num_market_pairs": 209,
      "date_added": "2018-03-14T00:00:00.000Z",
      "tags": [
        "services",
        "decentralized-exchange",
        "defi",
        "derivatives",
        "dao",
        "yield-farming",
        "coinbase-ventures-portfolio",
        "three-arrows-capital-portfolio",
        "governance",
        "synthetics",
        "defiance-capital",
        "framework-ventures",
        "alameda-research-portfolio",
        "parafi-capital"
      ],
      "max_supply": 212424133,
      "circulating_supply": 114841533.01197928,
      "total_supply": 215258834.2449152,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f"
      },
      "cmc_rank": 74,
      "last_updated": "2021-08-04T07:23:33.000Z",
      "quote": {
        "USD": {
          "price": 9.03961461225467,
          "volume_24h": 81149380.01309226,
          "percent_change_1h": -0.34773168,
          "percent_change_24h": -0.9032937,
          "percent_change_7d": -2.10405989,
          "percent_change_30d": -0.62906533,
          "percent_change_60d": -30.43163176,
          "percent_change_90d": -47.44753809,
          "market_cap": 1038123199.908815,
          "last_updated": "2021-08-04T07:23:33.000Z"
        }
      }
    },
    {
      "id": 6758,
      "name": "SushiSwap",
      "symbol": "SUSHI",
      "slug": "sushiswap",
      "num_market_pairs": 251,
      "date_added": "2020-08-28T00:00:00.000Z",
      "tags": [
        "decentralized-exchange",
        "defi",
        "dao",
        "yield-farming",
        "amm",
        "yearn-partnerships",
        "governance",
        "avalanche-ecosystem",
        "blockchain-capital-portfolio",
        "defiance-capital",
        "alameda-research-portfolio",
        "pantera-capital-portfolio",
        "polygon-ecosystem"
      ],
      "max_supply": 250000000,
      "circulating_supply": 127244443,
      "total_supply": 230413187.59620404,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2"
      },
      "cmc_rank": 75,
      "last_updated": "2021-08-04T07:23:34.000Z",
      "quote": {
        "USD": {
          "price": 8.01491880984149,
          "volume_24h": 175529219.8455003,
          "percent_change_1h": -0.63146619,
          "percent_change_24h": 0.07354412,
          "percent_change_7d": -2.32908942,
          "percent_change_30d": 5.01110938,
          "percent_change_60d": -35.19677747,
          "percent_change_90d": -44.00976996,
          "market_cap": 1019853879.6485033,
          "last_updated": "2021-08-04T07:23:34.000Z"
        }
      }
    },
    {
      "id": 6535,
      "name": "NEAR Protocol",
      "symbol": "NEAR",
      "slug": "near-protocol",
      "num_market_pairs": 48,
      "date_added": "2020-08-11T00:00:00.000Z",
      "tags": [
        "platform",
        "staking",
        "coinbase-ventures-portfolio",
        "coinfund-portfolio",
        "electric-capital-portfolio",
        "fabric-ventures-portfolio",
        "kinetic-capital"
      ],
      "max_supply": 1000000000,
      "circulating_supply": 422907287,
      "total_supply": 1000000000,
      "platform": null,
      "cmc_rank": 76,
      "last_updated": "2021-08-04T07:24:00.000Z",
      "quote": {
        "USD": {
          "price": 2.28958756166712,
          "volume_24h": 33312106.58916975,
          "percent_change_1h": -0.29599661,
          "percent_change_24h": 0.6418585,
          "percent_change_7d": 2.45176065,
          "percent_change_30d": 4.0725192,
          "percent_change_60d": -32.51316071,
          "percent_change_90d": -55.11859164,
          "market_cap": 968283264.053587,
          "last_updated": "2021-08-04T07:24:00.000Z"
        }
      }
    },
    {
      "id": 1697,
      "name": "Basic Attention Token",
      "symbol": "BAT",
      "slug": "basic-attention-token",
      "num_market_pairs": 261,
      "date_added": "2017-06-01T00:00:00.000Z",
      "tags": [
        "marketing",
        "content-creation",
        "defi",
        "payments",
        "dcg-portfolio",
        "1confirmation-portfolio",
        "pantera-capital-portfolio"
      ],
      "max_supply": 1500000000,
      "circulating_supply": 1489043083.9673505,
      "total_supply": 1500000000,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x0d8775f648430679a709e98d2b0cb6250d2887ef"
      },
      "cmc_rank": 77,
      "last_updated": "2021-08-04T07:23:34.000Z",
      "quote": {
        "USD": {
          "price": 0.640149066031,
          "volume_24h": 111356238.3968236,
          "percent_change_1h": -0.05974034,
          "percent_change_24h": 0.81476472,
          "percent_change_7d": 14.49999287,
          "percent_change_30d": 10.26755877,
          "percent_change_60d": -21.5177747,
          "percent_change_90d": -52.69576395,
          "market_cap": 953209539.4816192,
          "last_updated": "2021-08-04T07:23:34.000Z"
        }
      }
    },
    {
      "id": 2634,
      "name": "XinFin Network",
      "symbol": "XDC",
      "slug": "xinfin-network",
      "num_market_pairs": 32,
      "date_added": "2018-04-12T00:00:00.000Z",
      "tags": [
        
      ],
      "max_supply": null,
      "circulating_supply": 12285185290.45,
      "total_supply": 37685185290.45,
      "platform": null,
      "cmc_rank": 78,
      "last_updated": "2021-08-04T07:23:16.000Z",
      "quote": {
        "USD": {
          "price": 0.07476111069973,
          "volume_24h": 4057694.12458632,
          "percent_change_1h": -0.06276189,
          "percent_change_24h": -3.52296777,
          "percent_change_7d": -7.40808495,
          "percent_change_30d": -34.87919453,
          "percent_change_60d": 28.57893777,
          "percent_change_90d": -17.79818163,
          "market_cap": 918454097.4660271,
          "last_updated": "2021-08-04T07:23:16.000Z"
        }
      }
    },
    {
      "id": 2694,
      "name": "Nexo",
      "symbol": "NEXO",
      "slug": "nexo",
      "num_market_pairs": 49,
      "date_added": "2018-05-01T00:00:00.000Z",
      "tags": [
        "services",
        "payments",
        "arrington-xrp-capital"
      ],
      "max_supply": 1000000000,
      "circulating_supply": 560000011,
      "total_supply": 1000000000,
      "platform": {
        "id": 1839,
        "name": "Binance Chain",
        "symbol": "BNB",
        "slug": "binance-coin",
        "token_address": "NEXO-A84"
      },
      "cmc_rank": 79,
      "last_updated": "2021-08-04T07:23:30.000Z",
      "quote": {
        "USD": {
          "price": 1.63654540289925,
          "volume_24h": 10219201.49976993,
          "percent_change_1h": -0.21845406,
          "percent_change_24h": -5.43141789,
          "percent_change_7d": -3.96419401,
          "percent_change_30d": 7.74745257,
          "percent_change_60d": -26.58309134,
          "percent_change_90d": -55.3051223,
          "market_cap": 916465443.6255795,
          "last_updated": "2021-08-04T07:23:30.000Z"
        }
      }
    },
    {
      "id": 2083,
      "name": "Bitcoin Gold",
      "symbol": "BTG",
      "slug": "bitcoin-gold",
      "num_market_pairs": 67,
      "date_added": "2017-10-23T00:00:00.000Z",
      "tags": [
        "mineable",
        "medium-of-exchange",
        "payments"
      ],
      "max_supply": 21000000,
      "circulating_supply": 17513923.589,
      "total_supply": 17513923.589,
      "platform": null,
      "cmc_rank": 80,
      "last_updated": "2021-08-04T07:24:04.000Z",
      "quote": {
        "USD": {
          "price": 52.27183185818433,
          "volume_24h": 48069735.3712249,
          "percent_change_1h": -0.83206685,
          "percent_change_24h": -5.56468618,
          "percent_change_7d": 13.37741177,
          "percent_change_30d": 10.49634114,
          "percent_change_60d": -11.82554173,
          "percent_change_90d": -64.21441893,
          "market_cap": 915484869.0212963,
          "last_updated": "2021-08-04T07:24:04.000Z"
        }
      }
    },
    {
      "id": 3330,
      "name": "Paxos Standard",
      "symbol": "PAX",
      "slug": "paxos-standard",
      "num_market_pairs": 158,
      "date_added": "2018-09-27T00:00:00.000Z",
      "tags": [
        "store-of-value",
        "stablecoin",
        "stablecoin-asset-backed"
      ],
      "max_supply": null,
      "circulating_supply": 911488268.59,
      "total_supply": 911488268.59,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x8e870d67f660d95d5be530380d0ec0bd388289e1"
      },
      "cmc_rank": 81,
      "last_updated": "2021-08-04T07:24:08.000Z",
      "quote": {
        "USD": {
          "price": 1.00042606568969,
          "volume_24h": 104987974.44110613,
          "percent_change_1h": 0.02315893,
          "percent_change_24h": 0.03519166,
          "percent_change_7d": 0.05377028,
          "percent_change_30d": 0.0135427,
          "percent_change_60d": 0.00147655,
          "percent_change_90d": 0.1582767,
          "market_cap": 911876622.4678011,
          "last_updated": "2021-08-04T07:24:08.000Z"
        }
      }
    },
    {
      "id": 2469,
      "name": "Zilliqa",
      "symbol": "ZIL",
      "slug": "zilliqa",
      "num_market_pairs": 112,
      "date_added": "2018-01-25T00:00:00.000Z",
      "tags": [
        "mineable",
        "platform",
        "payments",
        "smart-contracts",
        "polychain-capital-portfolio",
        "kinetic-capital"
      ],
      "max_supply": 21000000000,
      "circulating_supply": 11563699961.86494,
      "total_supply": 14855167114.86494,
      "platform": null,
      "cmc_rank": 82,
      "last_updated": "2021-08-04T07:23:51.000Z",
      "quote": {
        "USD": {
          "price": 0.0776581567672,
          "volume_24h": 49114457.75677882,
          "percent_change_1h": -0.61103618,
          "percent_change_24h": -1.47402318,
          "percent_change_7d": 3.02303277,
          "percent_change_30d": -2.97367694,
          "percent_change_60d": -43.04173234,
          "percent_change_90d": -63.51330419,
          "market_cap": 898015624.4473723,
          "last_updated": "2021-08-04T07:23:51.000Z"
        }
      }
    },
    {
      "id": 2394,
      "name": "Telcoin",
      "symbol": "TEL",
      "slug": "telcoin",
      "num_market_pairs": 25,
      "date_added": "2018-01-14T00:00:00.000Z",
      "tags": [
        "medium-of-exchange",
        "polygon-ecosystem"
      ],
      "max_supply": 100000000000,
      "circulating_supply": 54157110195.29,
      "total_supply": 100000000000,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x467bccd9d29f223bce8043b84e8c8b282827790f"
      },
      "cmc_rank": 83,
      "last_updated": "2021-08-04T07:24:00.000Z",
      "quote": {
        "USD": {
          "price": 0.01591277601506,
          "volume_24h": 18282728.61051055,
          "percent_change_1h": -2.29722281,
          "percent_change_24h": -4.60521703,
          "percent_change_7d": -17.47440945,
          "percent_change_30d": -33.98775975,
          "percent_change_60d": -53.33443661,
          "percent_change_90d": -62.36534896,
          "market_cap": 861789964.160572,
          "last_updated": "2021-08-04T07:24:00.000Z"
        }
      }
    },
    {
      "id": 5567,
      "name": "Celo",
      "symbol": "CELO",
      "slug": "celo",
      "num_market_pairs": 39,
      "date_added": "2020-05-22T00:00:00.000Z",
      "tags": [
        "pos",
        "zero-knowledge-proofs",
        "mobile",
        "payments",
        "smart-contracts",
        "coinbase-ventures-portfolio",
        "polychain-capital-portfolio",
        "dragonfly-capital-portfolio",
        "electric-capital-portfolio",
        "a16z-portfolio"
      ],
      "max_supply": 1000000000,
      "circulating_supply": 286702568,
      "total_supply": 1000000000,
      "platform": null,
      "cmc_rank": 84,
      "last_updated": "2021-08-04T07:23:45.000Z",
      "quote": {
        "USD": {
          "price": 2.93307004333533,
          "volume_24h": 41437607.93820188,
          "percent_change_1h": 1.64189446,
          "percent_change_24h": 12.10363593,
          "percent_change_7d": 14.36871457,
          "percent_change_30d": -9.36262949,
          "percent_change_60d": -13.63365785,
          "percent_change_90d": -44.60092482,
          "market_cap": 840918713.5481104,
          "last_updated": "2021-08-04T07:23:45.000Z"
        }
      }
    },
    {
      "id": 2087,
      "name": "KuCoin Token",
      "symbol": "KCS",
      "slug": "kucoin-token",
      "num_market_pairs": 33,
      "date_added": "2017-10-24T00:00:00.000Z",
      "tags": [
        "marketplace",
        "centralized-exchange",
        "discount-token"
      ],
      "max_supply": 170118638,
      "circulating_supply": 80118638,
      "total_supply": 170118638,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xf34960d9d60be18cc1d5afc1a6f012a723a28811"
      },
      "cmc_rank": 85,
      "last_updated": "2021-08-04T07:24:06.000Z",
      "quote": {
        "USD": {
          "price": 10.2644456753692,
          "volume_24h": 25384119.15225678,
          "percent_change_1h": -2.9675468,
          "percent_change_24h": 5.26816484,
          "percent_change_7d": 7.57101562,
          "percent_change_30d": 32.84585392,
          "percent_change_60d": 11.01247588,
          "percent_change_90d": -28.12615291,
          "market_cap": 822373407.3355706,
          "last_updated": "2021-08-04T07:24:06.000Z"
        }
      }
    },
    {
      "id": 1727,
      "name": "Bancor",
      "symbol": "BNT",
      "slug": "bancor",
      "num_market_pairs": 227,
      "date_added": "2017-06-18T00:00:00.000Z",
      "tags": [
        "marketplace",
        "decentralized-exchange",
        "defi",
        "payments",
        "amm",
        "kinetic-capital"
      ],
      "max_supply": null,
      "circulating_supply": 237394202.63074294,
      "total_supply": 237394202.63074294,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c"
      },
      "cmc_rank": 86,
      "last_updated": "2021-08-04T07:23:34.000Z",
      "quote": {
        "USD": {
          "price": 3.40600669555348,
          "volume_24h": 44257164.00390556,
          "percent_change_1h": -0.59667534,
          "percent_change_24h": -0.85501445,
          "percent_change_7d": 6.14579308,
          "percent_change_30d": 3.30344101,
          "percent_change_60d": -28.64349378,
          "percent_change_90d": -54.32289434,
          "market_cap": 808566243.64589,
          "last_updated": "2021-08-04T07:23:34.000Z"
        }
      }
    },
    {
      "id": 3945,
      "name": "Harmony",
      "symbol": "ONE",
      "slug": "harmony",
      "num_market_pairs": 40,
      "date_added": "2019-06-01T00:00:00.000Z",
      "tags": [
        "platform",
        "enterprise-solutions",
        "scaling",
        "smart-contracts",
        "binance-launchpad",
        "binance-labs-portfolio",
        "hashkey-capital-portfolio"
      ],
      "max_supply": 12600000000,
      "circulating_supply": 10423990624.793129,
      "total_supply": 13126814624.793139,
      "platform": null,
      "cmc_rank": 87,
      "last_updated": "2021-08-04T07:23:19.000Z",
      "quote": {
        "USD": {
          "price": 0.07451231497588,
          "volume_24h": 18621729.37683066,
          "percent_change_1h": 0.4920862,
          "percent_change_24h": 0.84295103,
          "percent_change_7d": 2.20280522,
          "percent_change_30d": 15.21741554,
          "percent_change_60d": -26.83873184,
          "percent_change_90d": -41.90073581,
          "market_cap": 776715672.7402058,
          "last_updated": "2021-08-04T07:23:19.000Z"
        }
      }
    },
    {
      "id": 6950,
      "name": "Perpetual Protocol",
      "symbol": "PERP",
      "slug": "perpetual-protocol",
      "num_market_pairs": 64,
      "date_added": "2020-09-08T00:00:00.000Z",
      "tags": [
        "decentralized-exchange",
        "defi",
        "derivatives",
        "amm",
        "three-arrows-capital-portfolio",
        "cms-holdings-portfolio",
        "alameda-research-portfolio",
        "multicoin-capital-portfolio"
      ],
      "max_supply": null,
      "circulating_supply": 44129076.70886427,
      "total_supply": 150000000,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xbc396689893d065f41bc2c6ecbee5e0085233447"
      },
      "cmc_rank": 88,
      "last_updated": "2021-08-04T07:23:18.000Z",
      "quote": {
        "USD": {
          "price": 17.32227962061048,
          "volume_24h": 109739094.82352343,
          "percent_change_1h": 1.24561943,
          "percent_change_24h": 17.01726485,
          "percent_change_7d": 73.32259724,
          "percent_change_30d": 93.14105983,
          "percent_change_60d": 62.86506511,
          "percent_change_90d": 103.65917961,
          "market_cap": 764416206.1503162,
          "last_updated": "2021-08-04T07:23:18.000Z"
        }
      }
    },
    {
      "id": 1684,
      "name": "Qtum",
      "symbol": "QTUM",
      "slug": "qtum",
      "num_market_pairs": 187,
      "date_added": "2017-05-24T00:00:00.000Z",
      "tags": [
        "platform",
        "smart-contracts",
        "kinetic-capital"
      ],
      "max_supply": 107822406,
      "circulating_supply": 98585378.7260568,
      "total_supply": 103619182,
      "platform": null,
      "cmc_rank": 89,
      "last_updated": "2021-08-04T07:23:29.000Z",
      "quote": {
        "USD": {
          "price": 7.53883904694526,
          "volume_24h": 213180372.6365079,
          "percent_change_1h": -0.38230855,
          "percent_change_24h": -1.83872238,
          "percent_change_7d": 16.99030838,
          "percent_change_30d": 5.39125512,
          "percent_change_60d": -35.82379961,
          "percent_change_90d": -58.85652389,
          "market_cap": 743219302.5978836,
          "last_updated": "2021-08-04T07:23:29.000Z"
        }
      }
    },
    {
      "id": 1042,
      "name": "Siacoin",
      "symbol": "SC",
      "slug": "siacoin",
      "num_market_pairs": 55,
      "date_added": "2015-08-26T00:00:00.000Z",
      "tags": [
        "mineable",
        "pow",
        "blake2b",
        "platform",
        "distributed-computing",
        "filesharing",
        "storage",
        "dragonfly-capital-portfolio",
        "fenbushi-capital-portfolio",
        "paradigm-xzy-screener"
      ],
      "max_supply": null,
      "circulating_supply": 48406642992,
      "total_supply": 48406642992,
      "platform": null,
      "cmc_rank": 90,
      "last_updated": "2021-08-04T07:23:49.000Z",
      "quote": {
        "USD": {
          "price": 0.01517267703063,
          "volume_24h": 61871154.54920187,
          "percent_change_1h": -0.35562143,
          "percent_change_24h": 1.4280129,
          "percent_change_7d": 17.14285738,
          "percent_change_30d": 13.04677953,
          "percent_change_60d": -24.26348137,
          "percent_change_90d": -62.88024006,
          "market_cap": 734458360.2546251,
          "last_updated": "2021-08-04T07:23:49.000Z"
        }
      }
    },
    {
      "id": 3783,
      "name": "Ankr",
      "symbol": "ANKR",
      "slug": "ankr",
      "num_market_pairs": 72,
      "date_added": "2019-03-06T00:00:00.000Z",
      "tags": [
        "platform",
        "enterprise-solutions",
        "defi",
        "filesharing",
        "staking",
        "substrate",
        "binance-chain",
        "polkadot-ecosystem",
        "pantera-capital-portfolio",
        "polygon-ecosystem"
      ],
      "max_supply": 10000000000,
      "circulating_supply": 7662899377.791667,
      "total_supply": 10000000000,
      "platform": {
        "id": 1839,
        "name": "Binance Chain",
        "symbol": "BNB",
        "slug": "binance-coin",
        "token_address": "ANKR-E97"
      },
      "cmc_rank": 91,
      "last_updated": "2021-08-04T07:23:38.000Z",
      "quote": {
        "USD": {
          "price": 0.09368718520056,
          "volume_24h": 69899027.49852853,
          "percent_change_1h": -0.24052751,
          "percent_change_24h": -6.36508569,
          "percent_change_7d": 8.45530207,
          "percent_change_30d": 27.52795306,
          "percent_change_60d": -12.40034622,
          "percent_change_90d": -42.67811707,
          "market_cap": 717915473.180424,
          "last_updated": "2021-08-04T07:23:38.000Z"
        }
      }
    },
    {
      "id": 1896,
      "name": "0x",
      "symbol": "ZRX",
      "slug": "0x",
      "num_market_pairs": 218,
      "date_added": "2017-08-16T00:00:00.000Z",
      "tags": [
        "platform",
        "decentralized-exchange",
        "defi",
        "dao",
        "substrate",
        "polkadot",
        "polkadot-ecosystem",
        "polychain-capital-portfolio",
        "governance",
        "blockchain-capital-portfolio",
        "boostvc-portfolio",
        "fabric-ventures-portfolio",
        "kinetic-capital",
        "placeholder-ventures-portfolio",
        "pantera-capital-portfolio"
      ],
      "max_supply": 1000000000,
      "circulating_supply": 845341601.7894509,
      "total_supply": 1000000000,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xe41d2489571d322189246dafa5ebde1f4699f498"
      },
      "cmc_rank": 92,
      "last_updated": "2021-08-04T07:23:54.000Z",
      "quote": {
        "USD": {
          "price": 0.83737013323052,
          "volume_24h": 83349830.83291179,
          "percent_change_1h": -0.22460194,
          "percent_change_24h": 5.99584333,
          "percent_change_7d": 19.56192685,
          "percent_change_30d": 20.65002594,
          "percent_change_60d": -26.43407483,
          "percent_change_90d": -55.09201114,
          "market_cap": 707863809.7157336,
          "last_updated": "2021-08-04T07:23:54.000Z"
        }
      }
    },
    {
      "id": 2566,
      "name": "Ontology",
      "symbol": "ONT",
      "slug": "ontology",
      "num_market_pairs": 138,
      "date_added": "2018-03-08T00:00:00.000Z",
      "tags": [
        "enterprise-solutions",
        "identity",
        "binance-smart-chain",
        "polkadot-ecosystem",
        "huobi-capital"
      ],
      "max_supply": 1000000000,
      "circulating_supply": 877927426,
      "total_supply": 1000000000,
      "platform": null,
      "cmc_rank": 93,
      "last_updated": "2021-08-04T07:23:30.000Z",
      "quote": {
        "USD": {
          "price": 0.79310459642475,
          "volume_24h": 89189512.99080387,
          "percent_change_1h": -0.7197102,
          "percent_change_24h": 0.59211741,
          "percent_change_7d": 13.41538561,
          "percent_change_30d": 12.37918765,
          "percent_change_60d": -31.50816642,
          "percent_change_90d": -62.68340354,
          "market_cap": 696288276.8879496,
          "last_updated": "2021-08-04T07:23:30.000Z"
        }
      }
    },
    {
      "id": 109,
      "name": "DigiByte",
      "symbol": "DGB",
      "slug": "digibyte",
      "num_market_pairs": 100,
      "date_added": "2014-02-06T00:00:00.000Z",
      "tags": [
        "mineable",
        "pow",
        "multiple-algorithms",
        "medium-of-exchange",
        "collectibles-nfts",
        "iot",
        "payments"
      ],
      "max_supply": 21000000000,
      "circulating_supply": 14548429205.13911,
      "total_supply": 14548429205.13911,
      "platform": null,
      "cmc_rank": 94,
      "last_updated": "2021-08-04T07:24:07.000Z",
      "quote": {
        "USD": {
          "price": 0.04765642806248,
          "volume_24h": 22810552.02040254,
          "percent_change_1h": -0.76110703,
          "percent_change_24h": -2.11597625,
          "percent_change_7d": 10.90593288,
          "percent_change_30d": 6.14342064,
          "percent_change_60d": -32.96381081,
          "percent_change_90d": -67.29612336,
          "market_cap": 693326169.8367951,
          "last_updated": "2021-08-04T07:24:07.000Z"
        }
      }
    },
    {
      "id": 2499,
      "name": "SwissBorg",
      "symbol": "CHSB",
      "slug": "swissborg",
      "num_market_pairs": 8,
      "date_added": "2018-02-02T00:00:00.000Z",
      "tags": [
        "asset-management",
        "staking"
      ],
      "max_supply": null,
      "circulating_supply": 1000000000,
      "total_supply": 1000000000,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xba9d4199fab4f26efe3551d490e3821486f135ba"
      },
      "cmc_rank": 95,
      "last_updated": "2021-08-04T07:23:32.000Z",
      "quote": {
        "USD": {
          "price": 0.68963469581928,
          "volume_24h": 1390823.06778939,
          "percent_change_1h": -0.05375959,
          "percent_change_24h": -1.94828652,
          "percent_change_7d": -5.02339785,
          "percent_change_30d": 13.01486782,
          "percent_change_60d": -13.62756153,
          "percent_change_90d": -49.12376827,
          "market_cap": 689634695.81928,
          "last_updated": "2021-08-04T07:23:32.000Z"
        }
      }
    },
    {
      "id": 2577,
      "name": "Ravencoin",
      "symbol": "RVN",
      "slug": "ravencoin",
      "num_market_pairs": 82,
      "date_added": "2018-03-10T00:00:00.000Z",
      "tags": [
        "mineable",
        "platform",
        "crowdfunding"
      ],
      "max_supply": 21000000000,
      "circulating_supply": 9352600000,
      "total_supply": 9352600000,
      "platform": null,
      "cmc_rank": 96,
      "last_updated": "2021-08-04T07:24:01.000Z",
      "quote": {
        "USD": {
          "price": 0.07187388824042,
          "volume_24h": 116342433.01998438,
          "percent_change_1h": -0.54709003,
          "percent_change_24h": 12.33694838,
          "percent_change_7d": 19.01344423,
          "percent_change_30d": 33.56694396,
          "percent_change_60d": -13.96301986,
          "percent_change_90d": -58.30424318,
          "market_cap": 672207727.1573521,
          "last_updated": "2021-08-04T07:24:01.000Z"
        }
      }
    },
    {
      "id": 8335,
      "name": "Mdex",
      "symbol": "MDX",
      "slug": "mdex",
      "num_market_pairs": 58,
      "date_added": "2021-01-27T00:00:00.000Z",
      "tags": [
        "decentralized-exchange",
        "defi",
        "yield-farming",
        "amm",
        "binance-smart-chain",
        "heco-ecosystem"
      ],
      "max_supply": null,
      "circulating_supply": 592889933.3086,
      "total_supply": 1000000000,
      "platform": {
        "id": 2502,
        "name": "Heco",
        "symbol": "HT",
        "slug": "huobi-token",
        "token_address": "0x25d2e80cb6b86881fd7e07dd263fb79f4abe033c"
      },
      "cmc_rank": 97,
      "last_updated": "2021-08-04T07:23:30.000Z",
      "quote": {
        "USD": {
          "price": 1.13883632494608,
          "volume_24h": 44331119.21113136,
          "percent_change_1h": 1.47494236,
          "percent_change_24h": 0.2864226,
          "percent_change_7d": -2.98774681,
          "percent_change_30d": -31.38434407,
          "percent_change_60d": -51.33627107,
          "percent_change_90d": -62.36261539,
          "market_cap": 675204592.7466924,
          "last_updated": "2021-08-04T07:23:30.000Z"
        }
      }
    },
    {
      "id": 1698,
      "name": "Horizen",
      "symbol": "ZEN",
      "slug": "horizen",
      "num_market_pairs": 66,
      "date_added": "2017-06-01T00:00:00.000Z",
      "tags": [
        "mineable",
        "pow",
        "medium-of-exchange",
        "enterprise-solutions",
        "content-creation",
        "privacy",
        "masternodes",
        "sidechain",
        "dcg-portfolio"
      ],
      "max_supply": 21000000,
      "circulating_supply": 11371493.75,
      "total_supply": 11371493.75,
      "platform": null,
      "cmc_rank": 98,
      "last_updated": "2021-08-04T07:23:31.000Z",
      "quote": {
        "USD": {
          "price": 57.75440226866354,
          "volume_24h": 33006205.61314825,
          "percent_change_1h": -0.40762367,
          "percent_change_24h": 3.2826462,
          "percent_change_7d": 5.07913044,
          "percent_change_30d": -10.99875901,
          "percent_change_60d": -45.60344034,
          "percent_change_90d": -49.4384136,
          "market_cap": 656753824.4330933,
          "last_updated": "2021-08-04T07:23:31.000Z"
        }
      }
    },
    {
      "id": 2099,
      "name": "ICON",
      "symbol": "ICX",
      "slug": "icon",
      "num_market_pairs": 70,
      "date_added": "2017-10-27T00:00:00.000Z",
      "tags": [
        "platform",
        "enterprise-solutions",
        "interoperability",
        "kinetic-capital",
        "pantera-capital-portfolio"
      ],
      "max_supply": null,
      "circulating_supply": 653943095.7432431,
      "total_supply": 800460000,
      "platform": null,
      "cmc_rank": 99,
      "last_updated": "2021-08-04T07:24:07.000Z",
      "quote": {
        "USD": {
          "price": 0.9764093148241,
          "volume_24h": 38856615.56334904,
          "percent_change_1h": -0.62625184,
          "percent_change_24h": -0.36275669,
          "percent_change_7d": 15.07652192,
          "percent_change_30d": 19.63401452,
          "percent_change_60d": -18.99868912,
          "percent_change_90d": -59.83165036,
          "market_cap": 638516130.0486108,
          "last_updated": "2021-08-04T07:24:07.000Z"
        }
      }
    },
    {
      "id": 1817,
      "name": "Voyager Token",
      "symbol": "VGX",
      "slug": "voyager-token",
      "num_market_pairs": 7,
      "date_added": "2017-07-18T00:00:00.000Z",
      "tags": [
        "asset-management",
        "wallet"
      ],
      "max_supply": 222295209,
      "circulating_supply": 222295208,
      "total_supply": 222295208.238,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x5af2be193a6abca9c8817001f45744777db30756"
      },
      "cmc_rank": 100,
      "last_updated": "2021-08-04T07:23:35.000Z",
      "quote": {
        "USD": {
          "price": 2.84977740301532,
          "volume_24h": 13003825.89456789,
          "percent_change_1h": 0.51116606,
          "percent_change_24h": -1.35059746,
          "percent_change_7d": 39.53890781,
          "percent_change_30d": 29.78336211,
          "percent_change_60d": 3.20583899,
          "percent_change_90d": -29.28113782,
          "market_cap": 633491860.5569904,
          "last_updated": "2021-08-04T07:23:35.000Z"
        }
      }
    }
  ]
};

app.get('/test',(req,res)=>{
  // const result = testJSON.find(item =>item.name =="bitcoin");
  // res.send(testJSON)
  fetch(url)
    .then((res) => {
     return res.json()
    })
    .then((json) => {
      // Do something with the returned data.
      res.send(json['data']);

    });
});

app.get('/',(req,res)=>{
  res.send("test heroku");      
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

function handleText(message, replyToken) {
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

const port = config.port;
app.listen(port, () => {
  console.log(`Server is runing at port: ${port}`);
});
