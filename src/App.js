import React, { useEffect, useContext } from 'react';
import './App.scss';
import './components/Product/Styles/PDP.scss';
import ProductDisplayPage from './components/Product/ProductDisplayPage';
import { ShopifyData } from './Context/ShopifyData';

function App() {
  const {
    pageNumber,
    quantity,
    ProductID,
    quantityRef,
    variantRef,
    getDeal,
  } = useContext(ShopifyData);

  useEffect(() => {
    quantityRef.current = quantity;
    variantRef.current = ProductID;
    getDeal();
  }, [quantity, ProductID, pageNumber]);

  return (
    <div className="ik-shop-checkout__container">
      <ProductDisplayPage />
    </div>
  );
}

export default App;
