import { useState } from 'react';

var axios = require('axios');
import { showLoader, changeLoaderText } from './ikLoader/js/ik-ui-loader';

export const completeOrder = (
  formDataObject,
  quantity,
  ProductID,
  ModuleDataObject,
  data,
  Total,
  Taxes,
  payment_link,
) => {
  if (!payment_link) return null;

  const createOrderPaymentLink = () => {
    location = payment_link;
  };

  createOrderPaymentLink();
};
