import React, { useContext } from 'react';
import { ShopifyData } from '../../Context/ShopifyData';
import chevron from '../../images/chevron.svg';
import editPencil from '../../images/edit-pencil.svg';

import { Views } from '../../utils/Views';

const OrderReview = ({ goToView, formDataObject }) => {
  const { step, DealId } = useContext(ShopifyData);

  if (!DealId) return null;
  const { properties } = DealId;

  return (
    <>
      {(step == 1 || step == 2) && (
        <div className="card order-review margin-top-20">
          <label>Order Review</label>
          {/* <button className="card-acc-toggle expanded">
            <img src={chevron} alt="chevron" />
          </button> */}
          <div className="order-review-content">
            <section>
              <label>Personal Details</label>
              {/* {(step == 1 || step == 2) && (
                <button
                  className="edit-actions"
                  onClick={() => goToView(Views.personal)}
                >
                  <img src={editPencil} />
                  <span>Edit</span>
                </button>
              )} */}
              <div className="detail-items-block">
                <span>{`${properties.contacts_name.value} ${properties.contacts_last_name.value}`}</span>
                <span>{`${properties.contacts_email.value}`}</span>
                <span>{`${properties.contacts_phone_number.value}`}</span>
              </div>
            </section>
            <section>
              <label>Delivery Address</label>
              {/* {step == 2 && (
                <button
                  className="edit-actions"
                  onClick={() => goToView(Views.delivery)}
                >
                  <img src={editPencil} />
                  <span>Edit</span>
                </button>
              )} */}
              <div className="detail-items-block">
                <span>{`${properties.country.value}`}</span>
                <span>{`${properties.complex___building_name.value}`}</span>
                <span>{`${properties.street_address.value}`}</span>
                <span>{`${properties.suburb.value}`}</span>
                <span>{`${properties.provice.value}`}</span>
                <span>{`${properties.postal_code.value}`}</span>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderReview;
