import React from "react";
import "../Components/styles/coin.css";
import { useHistory } from "react-router-dom";

const Coin = (
  props
) => {
  let history = useHistory();
  return (

    <div className="coin">
      <img src={props.icon} alt="icon" />
      <h1 className="coinName">{props.coinName}</h1>
      <p className="coinSymbol">{props.coinSymbol}</p>
      <p className="coinPrice">$ {props.price.toFixed(2)}</p>
      {props.priceChange < 0 ? (
        <p className="priceChange red">{props.priceChange.toFixed(2)}%</p>
      ) : (
        <p className="priceChange green">{props.priceChange.toFixed(2)}%</p>
      )}
      <p className="coinVolume">$ {props.marketCap.toLocaleString()}</p>
      <button onClick={() => {
          history.push(`/CoinPage/${props.id}`);
      }}>
        Details
      </button>
    </div>

  );
};

export default Coin;
