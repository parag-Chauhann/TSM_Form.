import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    contactDesignation: '',
    emailAddress: '',
    phoneNumber: '',
    companyAddress: '',
    city: '',
    country: '',
    industrySector: '',
    serviceRequest: '',
    subServices: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleServiceChange = (e) => {
    const selectedService = e.target.value;
    const subServicesForSelected = serviceData[selectedService] || [];
    setFormData({
      ...formData,
      serviceRequest: selectedService,
      subServices: '',
      subServicesForSelected,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const serviceData = {
    Service1: ['SubService1A', 'SubService1B', 'SubService1C'],
    Service2: ['SubService2A', 'SubService2B'],
    // Add more services and their related sub-services as needed
  };

  return (
    <div className='main'>
      <div className='navbar'>
        <img
          src='https://www.thesafetymaster.com/wp-content/uploads/2022/11/thesafetymaster-1.png'
          alt='logo'
        />
        <h3>Safety Solutions Inquiry & Service Request Form</h3>
      </div>

      <div className='form'>
        <form onSubmit={handleSubmit}>
          <label>
            Company Name:
            <input
              type='text'
              name='companyName'
              value={formData.companyName}
              onChange={handleChange}
            />
          </label>
          <label>
            Name of Contact Person:
            <input
              type='text'
              name='contactName'
              value={formData.contactName}
              onChange={handleChange}
            />
          </label>
          <label>
            Contact Person's Designation:
            <input
              type='text'
              name='contactDesignation'
              value={formData.contactDesignation}
              onChange={handleChange}
            />
          </label>
          <label>
            Email Address:
            <input
              type='email'
              name='emailAddress'
              value={formData.emailAddress}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type='tel'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>
          <label>
            Company Address:
            <input
              type='text'
              name='companyAddress'
              value={formData.companyAddress}
              onChange={handleChange}
            />
          </label>
          <label>
            City:
            <input
              type='text'
              name='city'
              value={formData.city}
              onChange={handleChange}
            />
          </label>
          <label>
            Country:
            <input
              type='text'
              name='country'
              value={formData.country}
              onChange={handleChange}
            />
          </label>
          <label>
            Industry/Sector:
            <input
              type='text'
              name='industrySector'
              value={formData.industrySector}
              onChange={handleChange}
            />
          </label>
          <label>
            Service Request Details:
            <select
              name='serviceRequest'
              onChange={handleServiceChange}
              value={formData.serviceRequest}
            >
              <option value=''>Select Service</option>
              <option value='Service1'>Service 1</option>
              <option value='Service2'>Service 2</option>
              {/* Add more main service options as needed */}
            </select>
            {formData.serviceRequest && (
              <select
                name='subServices'
                onChange={handleChange}
                value={formData.subServices}
              >
                <option value=''>Select Sub-Service</option>
                {formData.subServicesForSelected.map((subService) => (
                  <option key={subService} value={subService}>
                    {subService}
                  </option>
                ))}
              </select>
            )}
          </label>

          {/* Preferred Communication Method */}
          {/* File Upload Option */}
          {/* Consent or Agreement Checkbox */}
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
