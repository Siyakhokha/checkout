import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { customStyles } from '../SelectCustomStyles/SelectCustomStyles';
import warningtriangle from '../../images/warningtriangle.svg';

const DeliveryDetails = ({
  fieldDetailsValid,
  deliveryDetailsRef,
  showElipsis,
  ramData,
  setRamData,
  formDataObject,

  canSetNextBtnActive,
}) => {
  const [Province, setProvince] = useState(null);

  useEffect(() => {
    if (formDataObject.current.province.value) {
      setProvince({
        value: formDataObject.current.province.value,
        label: formDataObject.current.province.value,
      });
    }
  }, []);

  const setSelectedRamZoneId = item => {
    if (item.area) {
      formDataObject.current.city.value = item.area;
      formDataObject.current.postalcode.value = `${item.postalCode}`;
      formDataObject.current.suburb.value = `${item.suburb}`;
      formDataObject.current['city'].isValid = true;
      formDataObject.current['postalcode'].isValid = true;
      formDataObject.current['suburb'].isValid = true;

      deliveryDetailsRef.current.querySelector('input[name="suburb"]').value =
        item.suburb;

      deliveryDetailsRef.current.querySelector(
        'input[name="postalcode"]',
      ).value = item.postalCode;
    }

    deliveryDetailsRef.current.querySelector('input[name="suburb"]').value =
      item.suburb;

    deliveryDetailsRef.current.querySelector('input[name="postalcode"]').value =
      item.postalCode;
    formDataObject.current['postalcode'].isValid = true;
    formDataObject.current['suburb'].isValid = true;
    setRamData(null);

    formDataObject.current.ramZoneId.value = item.ramZoneId;
    formDataObject.current.ramZoneId.isValid = true;
  };

  const provinceSelect = input => {
    setProvince(input);
    formDataObject.current['province'].value = input.value;
    formDataObject.current['province'].isValid = true;

    formDataObject.current['postalcode'].isValid = true;
    formDataObject.current['suburb'].isValid = true;
    canSetNextBtnActive();
  };

  return (
    <section
      className="form-container delivery-details-form"
      ref={deliveryDetailsRef}
    >
      <div className="input-item select-item country">
        <label for="country">Country</label>
        <input
          type="text"
          name="country"
          id="country"
          defaultValue={formDataObject.current.country.value}
          required
          readOnly
        />
      </div>

      <div className="input-item complexBuilding">
        <label for="complexBuilding">Complex / Building (Optional)</label>
        <input
          type="text"
          name="complexBuilding"
          id="complexBuilding"
          placeholder="Type in here"
          defaultValue={formDataObject.current.complexBuilding.value}
          onBlur={event => fieldDetailsValid(event)}
        />
        <div className="errorMsg">
          <img src={warningtriangle} alt="error" />
          <span>
            Complex / Building should be 2-30 characters and shouldn't include
            any special characters!
          </span>
        </div>
      </div>
      <div className="input-item streetAddress">
        <label for="streetAddress" className="required">
          Street Address
        </label>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="1 Nokwe Ave, Umhlanga"
          required
          onBlur={event => fieldDetailsValid(event)}
          defaultValue={formDataObject.current.streetAddress.value}
        />
        <div className="errorMsg">
          <img src={warningtriangle} alt="error" />
          <span>
            Street Address should be 2-30 characters and shouldn't include any
            special characters!
          </span>
        </div>
      </div>

      <div className="input-item select-item suburb">
        <label for="suburb">Suburb</label>
        <input
          type="text"
          name="suburb"
          id="suburb"
          required
          autoComplete="nope"
          onKeyUpCapture={event => fieldDetailsValid(event)}
          defaultValue={formDataObject.current.suburb.value}
        />
        {showElipsis && (
          <div className="pulse-container">
            <div className="dot-pulse"></div>
          </div>
        )}
      </div>
      {ramData !== null && (
        <div className="suburbs-list-block">
          <span>Please select...</span>
          {ramData.map(item => (
            <div
              className="zone-item"
              onClick={() => setSelectedRamZoneId(item)}
            >
              {item.suburb && `${item.suburb} - `}
              {item.area && `${item.area} - `}
              {item.postalCode && item.postalCode}
            </div>
          ))}
        </div>
      )}
      <div className="input-item select-item city">
        <label for="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          required
          autoComplete="nope"
          defaultValue={formDataObject.current.city.value}
          onBlur={event => fieldDetailsValid(event)}
        />
        <div className="errorMsg">
          <img src={warningtriangle} alt="error" />
          <span>
            City should be 2-30 characters and shouldn't include any special
            characters or numbers!
          </span>
        </div>
      </div>
      <div className="input-item select-item province">
        <label for="province">Province</label>
        <Select
          options={[
            { value: 'Eastern Cape', label: 'Eastern Cape' },
            { value: 'Free State', label: 'Free State' },
            { value: 'Gauteng', label: 'Gauteng' },
            { value: 'KwaZulu-Natal', label: 'KwaZulu-Natal' },
            { value: 'Limpopo', label: 'Limpopo' },
            { value: 'Mpumalanga', label: 'Mpumalanga' },
            { value: 'Northern Cape', label: 'Northern Cape' },
            { value: 'North West', label: 'North West' },
            { value: 'Western Cape', label: 'Western Cape' },
          ]}
          styles={customStyles}
          onChange={value => provinceSelect(value)}
          value={Province}
        />
      </div>
      <div className="input-item postalcode">
        <label for="postalcode" className="required">
          Postal Code
        </label>
        <input
          type="text"
          name="postalcode"
          id="postalcode"
          placeholder="4319"
          required
          onKeyUpCapture={event => fieldDetailsValid(event)}
          defaultValue={formDataObject.current.postalcode.value}
        />
        <div className="errorMsg">
          <img src={warningtriangle} alt="error" />
          <span>
            Postal Code should be 4 characters and shouldn't include any special
            characters or letters!
          </span>
        </div>
      </div>
    </section>
  );
};

export default DeliveryDetails;
