export const SubmitDataPersonal = DataPersonal => {
  var xhr = new XMLHttpRequest();
  var url =
    'https://api.hsforms.com/submissions/v3/integration/submit/6412394/84efb5ce-4177-4a7f-abb0-9b8a53c2224e';

  // Example request JSON:
  var data = {
    submittedAt: Date.now(),
    fields: [
      {
        objectTypeId: '0-1',
        name: 'email',
        value: DataPersonal.current.email.value,
      },

      {
        objectTypeId: '0-1',
        name: 'firstname',
        value: DataPersonal.current.firstName.value,
      },
      {
        objectTypeId: '0-1',
        name: 'lastname',
        value: DataPersonal.current.lastName.value,
      },

      {
        objectTypeId: '0-1',
        name: 'mobilephone',
        value: DataPersonal.current.cellNumber.value,
      },
    ],
    context: {
      //hutk: ':hutk',  include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
      pageUri: window.location.href,
      pageName: document.title,
    },
    legalConsentOptions: {
      // Include this object when GDPR options are enabledt
      consent: {
        consentToProcess: true,
        text:
          'I agree to allow Example Company to store and process my personal data.',
        communications: [
          {
            value: true,
            subscriptionTypeId: 999,
            text:
              'I agree to receive marketing communications from Example Company.',
          },
        ],
      },
    },
  };

  var final_data = JSON.stringify(data);

  xhr.open('POST', url);
  // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log('200 : ', xhr.responseText); // Returns a 200 response if the submission is successful.
    } else if (xhr.readyState == 4 && xhr.status == 400) {
      console.log('400 : ', xhr.responseText); // Returns a 400 error the submission is rejected.
    } else if (xhr.readyState == 4 && xhr.status == 403) {
      console.log('403 : ', xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.
    } else if (xhr.readyState == 4 && xhr.status == 404) {
      console.log('404 : ', xhr.responseText); //Returns a 404 error if the formGuid isn't found
    }
  };

  // Sends the request

  xhr.send(final_data);
};

export const SubmitDeliveryDetails = DeliveryDetails => {
  var xhr = new XMLHttpRequest();
  var url =
    'https://api.hsforms.com/submissions/v3/integration/submit/6412394/06f38d41-e4f5-455c-b030-7cec51a62039';

  // Example request JSON:
  var data = {
    submittedAt: Date.now(),
    fields: [
      {
        objectTypeId: '0-1',
        name: 'email',
        value: DeliveryDetails.current.email.value,
      },

      {
        objectTypeId: '0-1',
        name: 'complex___building',
        value: DeliveryDetails.current.complexBuilding.value,
      },
      {
        objectTypeId: '0-1',
        name: 'address',
        value: DeliveryDetails.current.streetAddress.value,
      },

      {
        objectTypeId: '0-1',
        name: 'delivery_suburb',
        value: DeliveryDetails.current.suburb.value,
      },
      {
        objectTypeId: '0-1',
        name: 'city',
        value: DeliveryDetails.current.city.value,
      },
      {
        objectTypeId: '0-1',
        name: 'country',
        value: 'South Africa',
      },
      {
        objectTypeId: '0-1',
        name: 'delivery_province',
        value: DeliveryDetails.current.province.value,
      },
      {
        objectTypeId: '0-1',
        name: 'delivery_postal_code',
        value: DeliveryDetails.current.postalcode.value,
      },
    ],
    context: {
      //hutk: ':hutk',  include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
      pageUri: window.location.href,
      pageName: document.title,
    },
    legalConsentOptions: {
      // Include this object when GDPR options are enabledt
      consent: {
        consentToProcess: true,
        text:
          'I agree to allow Example Company to store and process my personal data.',
        communications: [
          {
            value: true,
            subscriptionTypeId: 999,
            text:
              'I agree to receive marketing communications from Example Company.',
          },
        ],
      },
    },
  };

  var final_data = JSON.stringify(data);

  xhr.open('POST', url);
  // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log('200 : ', xhr.responseText); // Returns a 200 response if the submission is successful.
    } else if (xhr.readyState == 4 && xhr.status == 400) {
      console.log('400 : ', xhr.responseText); // Returns a 400 error the submission is rejected.
    } else if (xhr.readyState == 4 && xhr.status == 403) {
      console.log('403 : ', xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.
    } else if (xhr.readyState == 4 && xhr.status == 404) {
      console.log('404 : ', xhr.responseText); //Returns a 404 error if the formGuid isn't found
    }
  };

  // Sends the request

  xhr.send(final_data);
};
