import "../App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

import Coin from "../Components/Coin";
import '../Routes/styles/trade.css'

export const Trade = () => {
  const [coins, setCoins] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    refreshPage();
  }, []);

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchVal.toLowerCase())
  );

  const handleSearch = (ev) => {
    setSearchVal(ev.target.value);
  };

  const refreshPage = () => {
    setIsLoading(true);
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    ).then((res) => {
      setIsLoading(false);
      setCoins(res.data);
    });
  };

  return (
    <div className="trade_container">
      <div className="header_container">
        <h1>Today's Featured Exchange</h1>
        <div className="search_button">
          <input type="text" placeholder="Search for Crypto value" onChange={handleSearch} />
          <i className="fa-solid fa-arrows-rotate" onClick={refreshPage}></i>
        </div>
      </div>

      <div className="coin_container">
        {isLoading && <h1 className="loadingMssg">Loading...</h1>}
        {filterCoins.map((coins, i) => {
          return (
            <Coin key={i}
              id={coins.id}
              icon={coins.image}
              coinName={coins.name}
              coinSymbol={coins.symbol}
              price={coins.current_price}
              marketCap={coins.market_cap}
              priceChange={coins.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
}

