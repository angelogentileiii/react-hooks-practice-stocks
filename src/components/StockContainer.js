import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleStockBuy }) {
        
  const stockList = stocks.map((stock) => {
    const {id} = stock
    return <Stock key={id} stock={stock} onStockClick={handleStockBuy}/>
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
      {/* render stock list here*/}
    </div>
  );
}

export default StockContainer;
