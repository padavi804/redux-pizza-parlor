import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function Header() {
  const orderTotal = useSelector(store => store.orderTotal)
  return (
    <header className="App-header">
      <h1 className="App-title">Prime Pizza</h1>
    
      <p>Total: ${orderTotal}</p>
    </header>
  );
}

export default Header;