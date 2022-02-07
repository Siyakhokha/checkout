import React, { useContext } from 'react';
import { ShopifyData } from '../../Context/ShopifyData';

const OrderSummary = () => {
  const {
    quantity,
    data,
    setTotal,
    setTaxes,
    setSubtotal,
    Total,
    Taxes,
    Subtotal,
    DealId,
  } = useContext(ShopifyData);

  const { properties } = DealId;

  if (!DealId) return null;

  setTotal(Number(properties.amount.value + quantity));

  setTaxes((Total * 13.044) / 100);

  setSubtotal(Total - Taxes);
  console.log('Total', Total);
  console.log('Subtotal', Subtotal);

  return (
    <div className="card order-summary">
      <label>Order Summary</label>
      <div className="img-quantity-block">
        <img
          className="main-product-image"
          src={properties.product_image.value}
          alt={properties.product_image.value}
        />
        <span>{properties.product_quantity.value}</span>
      </div>
      <div className="order-summary-grid">
        <div className="order-line bold">
          <span>
            {properties.product_name.value &&
              properties.product_name.value.replace('(SIM Included)', '')}
          </span>
          <span>({properties.product_quantity.value})</span>
        </div>
        {Subtotal && (
          <div className="order-line">
            <span>Subtotal</span>
            <span>R{parseInt(Subtotal).toFixed(2)}</span>
            {/* <span>R{Subtotal.toFixed(2)}</span> */}
          </div>
        )}
        <div className="order-line">
          <span>Delivery</span>
          <span className="bold green">Free</span>
        </div>
        {/* <div className="order-line">
          <input type="text" placeholder="Discount Code" />
          <button onClick={ev => addDiscountCode(ev)}>Add</button>
        </div> */}
        {Taxes && (
          <div className="order-line">
            <span>Taxes</span>
            <span>R{parseInt(Taxes).toFixed(2)}</span>
          </div>
        )}
        {Total && (
          <div className="order-line bold large no-border-btm">
            <span className="upperCase">Total</span>
            <span>R {parseInt(Total).toFixed(2)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
