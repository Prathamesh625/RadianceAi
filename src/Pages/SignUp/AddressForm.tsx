import React from 'react';
import { useState } from 'react';

export const AddressForm = () => {
  const [addressData, setAddressData] = useState({
    address: '',
    state: '',
    city: '',
    pincode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData({ ...addressData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log(addressData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={addressData.address}
          onChange={handleChange}
        />
      </label>
      <label>
        State:
        <input
          type="text"
          name="state"
          value={addressData.state}
          onChange={handleChange}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={addressData.city}
          onChange={handleChange}
        />
      </label>
      <label>
        Pincode:
        <input
          type="text"
          name="pincode"
          value={addressData.pincode}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
