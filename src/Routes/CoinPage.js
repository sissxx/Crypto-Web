import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "../Routes/styles/CoinPage.css";

export const CoinPage =() => {
  let { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    Axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then(
      (res) => {
        setCoin(res.data);
      }
    );
  }, [id]);

  if (coin) {
    return (
      <div className="coinPage">
        <div className="coinPage_info">
          <h1>{coin.name}</h1>
          <img src={coin.image.large} alt="Icon" className="coinPage_icon" />
          <div className="coinPage_data">
            <div className="coinPage_row">
              <h3 className="coinPage_rowHeader">Symbol: </h3>
              <h3 className="coinPage_rowData">{coin.symbol.toUpperCase()}</h3>
            </div>
            <div className="coinPage_row">
              <h3 className="coinPage_rowHeader">Current Price: </h3>
              <h3 className="coinPage_rowData">
                $ {coin.market_data.current_price.usd.toLocaleString()}
              </h3>
            </div>
            <div className="coinPage_row">
              <h3 className="coinPage_rowHeader">Market Cap: </h3>
              <h3 className="coinPage_rowData">
                $ {coin.market_data.market_cap.usd.toLocaleString()}
              </h3>
            </div>
            <div className="coinPage_row">
              <h3 className="coinPage_rowHeader">Total Volume: </h3>
              <h3 className="coinPage_rowData">
                $ {coin.market_data.total_volume.usd.toLocaleString()}
              </h3>
            </div>
            <div className="coinPage_row">
              <h3 className="coinPage_rowHeader">High: </h3>
              <h3 className="coinPage_rowData green">
                $ {coin.market_data.high_24h.usd.toLocaleString()}
              </h3>
            </div>
            <div className="coinPage_row">
              <h3 className="coinPage_rowHeader">Low: </h3>
              <h3 className="coinPage_rowData red">
                $ {coin.market_data.low_24h.usd.toLocaleString()}
              </h3>
            </div>
          </div>
          <Link to="/">
            <div className="coinPage_button">HOME</div>
          </Link>
        </div>
      </div>
    );
  } else {
    return null; 
  }
}

