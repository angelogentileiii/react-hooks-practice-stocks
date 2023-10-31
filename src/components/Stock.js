import React from "react";

function Stock({ stock, onStockClick }) {
  const {name, price} = stock;

  function handleClickEvent(){
    onStockClick(stock)
  }

  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={handleClickEvent}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
