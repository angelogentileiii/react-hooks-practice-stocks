import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const[stockData, setStockData] = useState([]);
  const[portfolioStocks, setPortfolioStocks] = useState([]);
  const[filteredBy, setFilteredBy] = useState('Tech');
  const[sortedBy, setSortedBy] = useState("");

  useEffect(()=> {
    fetch(`http://localhost:3001/stocks`)
      .then(response => response.json())
      .then(returnedData => {
        setStockData(returnedData)
      })
  }, [])

  function handleStockBuy(addStock){
    const portfolioStock = portfolioStocks.find(stock =>
      stock.id === addStock.id)
    if (!portfolioStock) {
      setPortfolioStocks([...portfolioStocks, addStock])
    }
  }

  function handleRemoveStock(removeStock){
    setPortfolioStocks(portfolioStocks.filter((stock)=> {
      if(stock.id !== removeStock.id) {
        return true
      }
    }))
  }

  const filteredStocks = stockData.filter((stock) => {
    if (stock.type === filteredBy){
      return true
    }
  })

  const sortedStocks = filteredStocks.sort((stocka, stockb)=> {
    if (sortedBy === "Alphabetically"){
      return stocka.name.toLowerCase().localeCompare(stockb.name.toLowerCase())
    } else {
      return stocka.price - stockb.price
    }
  })

  return (
    <div>
      <SearchBar setFilteredBy={setFilteredBy} setSortedBy={setSortedBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer 
          stocks={sortedStocks} 
          handleStockBuy={handleStockBuy} 
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
          stocks={portfolioStocks} 
          handleRemoveStock={handleRemoveStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
