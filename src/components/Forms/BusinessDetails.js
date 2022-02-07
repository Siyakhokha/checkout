import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { customStyles } from '../SelectCustomStyles/SelectCustomStyles';
import warningtriangle from '../../images/warningtriangle.svg';

import './BusinessDetails.scss';

const BusinessDetails = ({
  fieldDetailsValid,
  paymentDetailsRef,
  formDataObject,
}) => {
  const [Provincebiz, setProvincebiz] = useState(null);

  useEffect(() => {
    if (formDataObject.current.provincebiz.value) {
      setProvincebiz({
        value: formDataObject.current.provincebiz.value,
        label: formDataObject.current.provincebiz.value,
      });
    }
  }, []);

  const provinceSelectBiz = input => {
    setProvincebiz(input);
    formDataObject.current['provincebiz'].value = input.value;
    formDataObject.current['provincebiz'].isValid = true;
  };

  return (
    <section
      className="form-container delivery-details-form-business"
      ref={paymentDetailsRef}
    >
      <div className="input-item select-item countrybiz">
        <label for="countrybiz">Country</label>
        <input
          type="text"
          name="countrybiz"
          id="countrybiz"
          value="South Africa"
          required
          readOnly
        />
      </div>

      <div className="input-item complexBuildingbiz">
        <label for="complexBuildingbiz">Complex / Building (Optional)</label>
        <input
          type="text"
          name="complexBuildingbiz"
          id="complexBuildingbiz"
          placeholder="Type in here"
          onBlur={event => fieldDetailsValid(event)}
          defaultValue={formDataObject.current.complexBuildingbiz.value}
        />
        <div className="errorMsg">
          <img src={warningtriangle} alt="error" />
          <span></span>
        </div>
      </div>
      <div className="input-item streetAddressbiz">
        <label for="streetAddressbiz" className="required">
          Street Address
        </label>
        <input
          type="text"
          name="streetAddressbiz"
          id="streetAddressbiz"
          placeholder="1 Nokwe Ave, Umhlanga"
          required
          onBlur={event => fieldDetailsValid(event)}
          defaultValue={formDataObject.current.streetAddressbiz.value}
        />
        <div className="errorMsg">
          <img src={warningtriangle} alt="error" />
          <span>Please type in your street address</span>
        </div>
      </div>
      <div className="input-item select-item suburbbiz">
        <label for="suburbbiz">Suburb</label>
        <input
          type="text"
          name="suburbbiz"
          id="suburbbiz"
          required
          defaultValue={formDataObject.current.suburbbiz.value}
          onKeyUpCapture={event => fieldDetailsValid(event)}
        />
        <div className="errorMsg">
          <img src={warningtriangle} alt="error" />
          <span></span>
        </div>
      </div>
      <div className="input-item select-item citybiz">
        <label for="citybiz">City</label>
        <input
          type="text"
          name="citybiz"
          id="citybiz"
          required
          autoComplete="nope"
          onBlur={event => fieldDetailsValid(event)}
          defaultValue={formDataObject.current.citybiz.value}
        />
        <div className="errorMsg">
          <img src={warningtriangle} alt="error" />
          <span>Please select your city</span>
        </div>
      </div>

      <div className="input-item select-item province-biz">
        <label for="province-biz">Province</label>
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
          onChange={value => provinceSelectBiz(value)}
          value={Provincebiz}
        />
      </div>

      <div className="input-item postalcodebiz">
        <label for="postalcodebiz" className="required">
          Postal Code
        </label>
        <input
          type="text"
          name="postalcodebiz"
          id="postalcodebiz"
          placeholder="4319"
          required
          onKeyUpCapture={event => fieldDetailsValid(event)}
          onBlur={event => fieldDetailsValid(event)}
          defaultValue={formDataObject.current.postalcodebiz.value}
        />
        <div className="errorMsg">
          <img src={warningtriangle} alt="error" />
          <span>Please type in your postal code</span>
        </div>
      </div>
    </section>
  );
};

export default BusinessDetails;
