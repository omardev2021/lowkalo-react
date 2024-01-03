// ComparisonSection.js


import React, { useState } from 'react';
import Modal from 'react-modal';
import xero from '../assets/images/xero.webp'




const LoyaltyProgramsTable2 = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Dummy data, replace with your actual data
  const companies = [
    { id: 1, name: 'Company A', preservation: 'Points-Based', earningPoints: 'Stamp Card', rewards: 'Discounts', logo: 'companyA-logo.png', website: 'https://www.companyA.com' },
    { id: 2, name: 'Company B', preservation: 'Gift Card', earningPoints: 'Loyalty Program', rewards: 'Free Items', logo: 'companyB-logo.png', website: 'https://www.companyB.com' },
    { id: 3, name: 'Company C', preservation: 'Stamp Card', earningPoints: 'Gift Card', rewards: 'Cashback', logo: 'companyC-logo.png', website: 'https://www.companyC.com' },
    { id: 4, name: 'Company D', preservation: 'Points-Based', earningPoints: 'Coupon Codes', rewards: 'Exclusive Offers', logo: 'companyD-logo.png', website: 'https://www.companyD.com' },

    // ... Add more dummy data
  ];

  const handleCompanySelect = (companyId) => {
    // Toggle selected company
    setSelectedCompanies((prevSelectedCompanies) => {
      if (prevSelectedCompanies.includes(companyId)) {
        return prevSelectedCompanies.filter((id) => id !== companyId);
      } else {
        return [...prevSelectedCompanies, companyId];
      }
    });
  };

  const toggleAccordion = (companyIndex) => {
    setOpenAccordion(openAccordion === companyIndex ? null : companyIndex);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {companies.map((company, index) => (
          <div
            key={company.id}
            className={`md:col-span-1 bg-white border p-4 cursor-pointer md:sticky md:top-0 
            `}
            onClick={() => handleCompanySelect(company.id)}
          >
            <img src={xero} alt={company.name} className="mb-4 mx-auto" style={{ maxWidth: '100px', borderRadius: '8px' }} />
            <h2 className="text-lg font-semibold mb-2 text-center md:text-left">{company.name}</h2>
            <button className="w-full p-2 text-sm font-semibold text-white bg-softBlue rounded-3xl shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue"
              onClick={() => alert('Show Details Clicked')}
            >
              Show Details
            </button>
          </div>
        ))}

        {/* Add Company Button */}
        <div
          className="md:col-span-1 border p-4 cursor-pointer flex items-center justify-center bg-white "
          onClick={openModal}
        >
          <span className="text-2xl">+</span>
          <p className="ml-2">Add Company</p>
        </div>

        {/* Feature Comparison */}
        <div className="md:col-span-3 border p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>

          {/* Preservation Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Methods of Preservation Customers</h3>
            {companies.map((company, index) => (
              <div key={company.id} className="mb-4">
                <button
                  className={`text-blue-500 border-b-2 border-blue-200 py-2 w-full text-center md:text-left focus:outline-none ${openAccordion === index ? 'border-blue-500' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {company.name}
                </button>
                {openAccordion === index && (
                  <div className="ml-4">
                    <p>Preservation: {company.preservation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Earning Points Section */}
          {/* Add your comparison details for earning points */}

          {/* Rewards Section */}
          {/* Add your comparison details for types of rewards */}
        </div>

           {/* Add Company Button */}
           <div
        >
         
        </div>

        {/* Feature Comparison */}
        <div className="md:col-span-3 border p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>

          {/* Preservation Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Methods of Preservation Customers</h3>
            {companies.map((company, index) => (
              <div key={company.id} className="mb-4">
                <button
                  className={`text-blue-500 border-b-2 border-blue-200 py-2 w-full text-center md:text-left focus:outline-none ${openAccordion === index ? 'border-blue-500' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {company.name}
                </button>
                {openAccordion === index && (
                  <div className="ml-4">
                    <p>Preservation: {company.preservation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Earning Points Section */}
          {/* Add your comparison details for earning points */}

          {/* Rewards Section */}
          {/* Add your comparison details for types of rewards */}
        </div>

        
      </div>

      {/* Modal for Adding Company */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modalCompany"
        overlayClassName="overlayCompany"
      >
        <div className="p-4 bg-white rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-blue-700">Select Companies</h2>
          <div className="grid grid-cols-2 gap-4">
        {companies.map((company) => (
          <div key={company.id} className="flex items-center">
            <img
              src={xero}
              alt={company.name}
              className={`mr-2 cursor-pointer ${selectedCompanies.includes(company.id) ? 'border-2 border-blue-500' : ''}`}
              style={{ maxWidth: '40px', borderRadius: '8px' }}
              onClick={() => handleCompanySelect(company.id)}
            />
            <p className="text-gray-800">{company.name}</p>
          </div>
        ))}
      </div>
          {selectedCompanies.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Selected Companies</h3>
              {selectedCompanies.map((companyId) => (
                <div key={companyId} className="flex items-center mb-2">
                  <img src={xero} alt={companyId} className="mr-2" style={{ maxWidth: '40px', borderRadius: '8px' }} />
                  <p className="text-gray-800">{companies.find((company) => company.id === companyId)?.name}</p>
                </div>
              ))}
            </div>
          )}
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none" onClick={closeModal}>
            Close Modal
          </button>
        </div>
      </Modal>
    </div>
  );

};

export default LoyaltyProgramsTable2;