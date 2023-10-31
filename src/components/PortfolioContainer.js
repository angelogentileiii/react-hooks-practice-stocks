import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, handleRemoveStock }) {
  const portfolioList = stocks.map((stock) => {
    const {id} = stock;
    return <Stock key={id} stock={stock} onStockClick={handleRemoveStock} />
  })
  

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioList}
      {
        //render your portfolio stocks here
      }
    </div>
  );
}

export default PortfolioContainer;
