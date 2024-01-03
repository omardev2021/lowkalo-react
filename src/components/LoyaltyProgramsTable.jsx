

import React, { useState , useEffect } from 'react';
import Modal from 'react-modal';
import { FaInfo ,FaTimesCircle,FaCheckCircle,FaShoppingCart,FaQrcode,FaBuilding,FaTags, FaBusinessTime, FaChartLine, FaClipboardList, FaBalanceScale, FaInfoCircle, FaCoffee, FaPizzaSlice, FaMoneyBill, FaDollarSign, FaUserFriends, FaUserPlus, FaGift, FaPercentage, FaWallet, FaMobile, FaDesktop, FaCog, FaCommentDollar, FaUser, FaMobileAlt, FaMoneyBillAlt, FaStickyNote, FaClock, FaUsers, FaBell, FaFolderOpen, FaHeart, FaFlask, FaUserTie, FaChartBar, FaStarHalfAlt} from "react-icons/fa";
import { Tooltip } from 'react-tooltip'

import { FaPlus } from 'react-icons/fa';

import { toast } from 'react-toastify';
import { FaCreditCard, FaDownload, FaGifts, FaStar } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';


const LoyaltyProgramsTable = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t ,i18n} = useTranslation();

  // Dummy data, replace with your actual data
  const companies = [
    { id: 1, name: 'Mukafaat', logo: 'http://127.0.0.1:8000/images/mukafat-logo.webp', active: true },
    { id: 2, name: 'Green Bill', logo: 'http://127.0.0.1:8000/images/greenbill-logo.webp', active: true },
    { id: 3, name: 'UPP', logo: 'http://127.0.0.1:8000/images/upp-logo.jpg', active: true },
    { id: 4, name: 'Resal', logo: 'http://127.0.0.1:8000/images/resal-logo.jpeg', active: true },
    { id: 5, name: 'Loyapro', logo: 'http://127.0.0.1:8000/images/loyapro-logo.webp', active: false },
    { id: 6, name: 'Brand wallet', logo: 'http://127.0.0.1:8000/images/brandwallet-logo.jpg', active: false },
    { id: 7, name: 'Nugttah', logo: 'http://127.0.0.1:8000/images/nugttah-logo.png', active: false },
    { id: 8, name: 'Koinz', logo: 'http://127.0.0.1:8000/images/koinz-loyalty-logo.webp', active: false },
    { id: 9, name: 'Bonat', logo: 'http://127.0.0.1:8000/images/bonat-logo.webp', active: false },
    { id: 10, name: 'Abkhus', logo: 'http://127.0.0.1:8000/images/abkhus-logo.jpg', active: false },

  ];

  // Initialize selected companies with the first 4 active companies
  useEffect(() => {
    const initialSelectedCompanies = companies.filter((company) => company.active).slice(0, 4).map((company) => company.id);
    setSelectedCompanies(initialSelectedCompanies);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCompanySelect = (company) => {
    const isCompanySelected = selectedCompanies.includes(company.id);

    if (!isCompanySelected && selectedCompanies.length >= 4) {
      // Display toast message if trying to add more than 4 companies
      toast.error("You can't add more than 4 companies!", { autoClose: 3000 });
      return;
    }
    if (isCompanySelected && selectedCompanies.length === 1) {
      // Display toast message if trying to deselect the last company
      toast.error('At least one company must be selected!', { autoClose: 3000 });
      return;
    }

    const newSelectedCompanies = isCompanySelected
      ? selectedCompanies.filter((id) => id !== company.id)
      : [...selectedCompanies, company.id];

    setSelectedCompanies(newSelectedCompanies);
  };

  const displayCompanies = companies
    .filter((company) => selectedCompanies.includes(company.id))
    .map((company) => (
      <div key={company.id} className="md:col-span-1 bg-white border p-4 cursor-pointer md:sticky md:top-0">
        <img src={company.logo} alt={company.name} className="mb-4 mx-auto" style={{ maxWidth: '100px', borderRadius: '8px' }} />
        <h2 className="text-2xl font-semibold mb-2 text-center ">{company.name}</h2>
        <h2 className="text-2xl mx-auto font-semibold mb-2 text-center ">
          <span className="text-softBlue">7.5</span> / 10
        </h2>
        <button
          className="w-full p-2 text-sm font-semibold text-white bg-softBlue rounded-3xl shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue"
          onClick={() => alert('Show Details Clicked')}
        >
          {t('visitSite')}
        </button>
      </div>
    ));
  

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {displayCompanies}
   {/* Floating Button to Open Modal */}
       {/* Circular Button to Open Modal */}
       <button
          className='fixed bottom-8 right-8 bg-softBlue text-white p-4 rounded-full hover:bg-blue-600 focus:outline-none flex items-center justify-center'
          onClick={openModal}
        >
          <FaPlus size={24} />
        </button>
        {/* Modal for Adding Company */}
         {/* Modal for Adding Company */}
             {/* Modal for Adding Company */}
                 {/* Modal for Adding Company */}
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="modalCompany" overlayClassName="overlayCompany">
          <div className="p-4 bg-white rounded-md shadow-md" dir={`${i18n.language === 'en' ? 'ltr' : 'rtl'}`}>
            <h2 className="text-lg font-semibold  text-veryDarkBlue">{t('mo1')}</h2>
            <p className='mb-4 text-veryDarkBlue'>{t('mo2')}</p>
            <div className="grid grid-cols-2 gap-4">
              {companies.map((company) => (
                <div key={company.id} className="flex items-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className={`mr-2 cursor-pointer ${selectedCompanies.includes(company.id) ? 'border-2 border-blue-500' : ''}`}
                    style={{ maxWidth: '40px', borderRadius: '8px' }}
                    onClick={() => handleCompanySelect(company)}
                  />
                  <p className={`text-gray-800 ${selectedCompanies.includes(company.id) ? 'font-semibold' : ''}`}>{company.name}</p>
                </div>
              ))}
            </div>
            {selectedCompanies.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('mo3')}</h3>
                {selectedCompanies.map((companyId) => (
                  <div key={companyId} className="flex items-center mb-2">
                    <img
                      src={companies.find((company) => company.id === companyId)?.logo}
                      alt={companyId}
                      className="mr-2"
                      style={{ maxWidth: '40px', borderRadius: '8px' }}
                    />
                    <p className="text-gray-800 font-semibold">
                      {companies.find((company) => company.id === companyId)?.name}
                    </p>
                  </div>
                ))}
              </div>
            )}
         
            <button
          className="w-full p-2 text-sm font-semibold text-white bg-softBlue rounded-3xl shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue"
          onClick={closeModal}
        >
          {t('CloseModal')}
        </button>
          </div>
        </Modal>

        {/* Add Company Button */}
      

        {/* Feature Comparison */}
        <div className="md:col-span-4 border p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>
   {/* Preservation Section 1 */}
   <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Methods of Preservation Customers</h3>
        <div className='flex flex-row'>
          {selectedCompanies.includes(1) && (
 <div className='w-1/4'>
 <h2 className='font-bold'>Mukafat</h2>
 <ul>
   <li className='flex gap-2 mb-1 '>
     <FaCheckCircle color='#00E6A7' size={24}/>
     Points-Based

   </li>
   <li className='flex gap-2 mb-1 '>
     <FaCheckCircle color='#00E6A7' size={24}/>
     Gift-Card
   </li>
   <li className='flex gap-2 mb-1 '>
     <FaCheckCircle color='#00E6A7' size={24}/>
     Stamp card
   </li>
   <li className='flex gap-2 mb-1 '>
     <FaCheckCircle color='#00E6A7' size={24}/>
     prepaid card
   </li>
 
 </ul>
</div>
          )}

{selectedCompanies.includes(2) && (
      <div className='w-1/4'>
      <h2 className='font-bold'>Green Bill</h2>
      <ul>
        <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          Points-Based
        </li>
        <li className='flex gap-2 mb-1 '>
          <FaTimesCircle color='gray' size={24}/>
          Gift-Card
        </li>
        <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          Stamp card
        </li>
        <li className='flex gap-2 mb-1 '>
          <FaTimesCircle color='gray' size={24}/>
          prepaid card
        </li>
      
      </ul>
    </div> 
)}
         {selectedCompanies.includes(3) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>UPP Rewards</h2>
            <ul>
              <li className='flex gap-2 mb-1 '>
                <FaCheckCircle color='#00E6A7' size={24}/>
                Points-Based

              </li>
              <li className='flex gap-2 mb-1 '>
                <FaCheckCircle color='#00E6A7' size={24}/>
                Combination between point based and tier based

              </li>
              Combination between point based and tier based
              <li className='flex gap-2 mb-1 '>
                <FaTimesCircle color='gray' size={24}/>
                Gift-Card
              </li>
              <li className='flex gap-2 mb-1 '>
                <FaCheckCircle color='#00E6A7' size={24}/>
                Stamp card
              </li>
              <li className='flex gap-2 mb-1 '>
                <FaTimesCircle color='gray' size={24}/>
                prepaid card
              </li>
            
            </ul>
          </div>
         )}
          {selectedCompanies.includes(4) && (

          <div className='w-1/4'>
            <h2 className='font-bold'>Resal</h2>
            <ul>
   <li className='flex gap-2 mb-1 '>
     <FaCheckCircle color='#00E6A7' size={24}/>
     Points-Based
  

   </li>
   <li className='flex gap-2 mb-1 '>
     <FaCheckCircle color='#00E6A7' size={24}/>
     Gift-Card
   </li>
   <li className='flex gap-2 mb-1 '>
     <FaCheckCircle color='#00E6A7' size={24}/>
     Stamp card
   </li>
   <li className='flex gap-2 mb-1 '>
     <FaCheckCircle color='#00E6A7' size={24}/>
     Happy Hours
   </li>
   <li className='flex gap-2 mb-1 '>
     <FaCheckCircle color='#00E6A7' size={24}/>
     Combination between point based and tier based<FaInfo data-tooltip-id="my-tooltip-resal" data-tooltip-content="tier based is available for one calendar year , Points expire at the end of the calendar year. There is no option to carry over points to the next year" />
     <Tooltip id="my-tooltip-resal" />

   </li>
    
 
 </ul>
          </div>
          )}

{selectedCompanies.includes(5) && (

<div className='w-1/4'>
  <h2 className='font-bold'>Loyapro</h2>
  <ul>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Stamp card
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Discount Card
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Cash back Card 
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Subscription Card
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Prepaid card
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Business Card
  </li>
</ul>
</div>
)}

{selectedCompanies.includes(6) && (

<div className='w-1/4'>
  <h2 className='font-bold'>Brand Wallet</h2>
  <ul>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Stamp card
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Multi-Stamp Card
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Prepaid card
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Points-Based
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Family & Friends Card
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    VIP Card
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Discount Card
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Cash Back Card
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Gift Card
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Segment Card (Bronze/Silver/Gold)
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Coupon and Voucher (Single Use)
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Event Ticket (An easy-to-use ticketing and invitation solution for private events)
  </li>
</ul>
</div>
)}


{selectedCompanies.includes(7) && (

<div className='w-1/4'>
  <h2 className='font-bold'>Nugttah</h2>
  <ul>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Point card
  </li>

  
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Stamp Card
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Gift Card
  </li>
</ul>
</div>
)}



{selectedCompanies.includes(8) && (

<div className='w-1/4'>
  <h2 className='font-bold'>Koinz</h2>
  <ul>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Point card
  </li>


</ul>
</div>
)}

{selectedCompanies.includes(9) && (

<div className='w-1/4'>
  <h2 className='font-bold'>Bonat</h2>
  <ul>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Point card
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Vouchers
  </li>

  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Gift Cards
  </li>
  

</ul>
</div>
)}

{selectedCompanies.includes(10) && (

<div className='w-1/4'>
  <h2 className='font-bold'>أبخض </h2>
  <ul>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Point card
  </li>
  
  

</ul>
</div>
)}
        </div>
          </div>

          
     
        </div>


      

        {/* Feature Comparison */}
        <div className="md:col-span-4 border p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>
   {/* Preservation Section 1 */}
   <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Earning Points</h3>
        <div className='flex flex-row'>
        {selectedCompanies.includes(1) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Mukafat</h2>
            <ul>
              <li className='flex gap-2 mb-1 '>
                <FaShoppingCart  size={24}/>
                Buying a Product 
                

              </li>
            
            
            </ul>
          </div>
        )}
         {selectedCompanies.includes(2) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Green Bill</h2>
            <ul>
              <li className='flex gap-2 mb-1 '>
                <FaShoppingCart  size={24}/>
                Buying a Product 
                

              </li>
            
            
            </ul>
          </div>
         )}
          {selectedCompanies.includes(3) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>UPP Rewards</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
                <FaShoppingCart  size={24}/>
                Buying a Product 
                

              </li>
  <li className='flex gap-2 mb-1 '>
    <FaUserFriends  size={24} />
    Referral
    <FaInfo data-tooltip-id="my-tooltip-2" data-tooltip-content="Obtaining points by referring or directing a customer to the brand or if a purchase is made" />

    <Tooltip id="my-tooltip-2" />

  </li>
  <li className='flex gap-2 mb-1 '>
    <FaUserPlus  size={24}/>
    Registration
    <FaInfo data-tooltip-id="my-tooltip-3" data-tooltip-content="If customer information registration is complete" />

<Tooltip id="my-tooltip-3" />

  </li>
</ul>
          </div>
          )}
          {selectedCompanies.includes(4) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Resal</h2>
            <ul>
              <li className='flex gap-2 mb-1 '>
                <FaShoppingCart  size={24}/>
                Buying a Product 
                

              </li>
              <li className='flex gap-2 mb-1 '>
    <FaGift  size={24}/>
    Welcome Programme
    <FaInfo data-tooltip-id="my-tooltip-resal1" data-tooltip-content="Obtaining a certain number of points (determined by the merchant) with the first bill" />

<Tooltip id="my-tooltip-resal1" />
  </li>
            
            
            </ul>
          </div>
          )}

{selectedCompanies.includes(5) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Loyapro</h2>
            <ul>
              <li className='flex gap-2 mb-1 '>
                <FaShoppingCart  size={24}/>
                Buying a Product 
                

              </li>
            
            
            </ul>
          </div>
        )}

{selectedCompanies.includes(6) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Brand Wallet</h2>
            <ul>
              <li className='flex gap-2 mb-1 '>
                <FaShoppingCart  size={24}/>
                Buying a Product 
                

              </li>
            
            
            </ul>
          </div>
        )}

{selectedCompanies.includes(7) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Nugttah</h2>
            <ul>
              <li className='flex gap-2 mb-1 '>
                <FaShoppingCart  size={24}/>
                Buying a Product 
                

              </li>
            
            
            </ul>
          </div>
        )}

{selectedCompanies.includes(8) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Koinz</h2>
            <ul>
              <li className='flex gap-2 mb-1 '>
                <FaShoppingCart  size={24}/>
                Buying a Product 
                

              </li>
              <li className='flex gap-2 mb-1 '>
    <FaGift color='#00E6A7' size={24}/>
    Gifting
  </li>
            
            </ul>
          </div>
        )}

{selectedCompanies.includes(9) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Bonat</h2>
            <ul>
              <li className='flex gap-2 mb-1 '>
                <FaShoppingCart  size={24}/>
                Buying a Product 
                

              </li>
              <li className='flex gap-2 mb-1 '>
    <FaShoppingCart color='#00E6A7' size={24}/>
    Get points when you buy vouchers
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaMobileAlt color='#00E6A7' size={24}/>
    Get points when you order through the application
  </li>
            
            </ul>
          </div>
        )}

{selectedCompanies.includes(10) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>أبخض </h2>
            <ul>
              <li className='flex gap-2 mb-1 '>
                <FaShoppingCart  size={24}/>
                Buying a Product 
                

              </li>
 
            
            </ul>
          </div>
        )}
        </div>
          </div>

          
     
        </div>

   

        {/* Feature Comparison */}
        <div className="md:col-span-4 border p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>

          {/* Preservation Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Types of rewards</h3>
        <div className='flex flex-row'>
        {selectedCompanies.includes(1) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Mukafat</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Points
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Discounts
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Free Product
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Stamps
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Gift Card
  </li>
</ul>
          </div>
        )}
           {selectedCompanies.includes(2) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Green Bill</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Points
  </li>
  <li className='flex gap-2 mb-1 '>
  <FaTimesCircle color='gray' size={24}/>
      Discounts
  </li>
  <li className='flex gap-2 mb-1 '>
  <FaTimesCircle color='gray' size={24}/>
      Free Product
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Stamps
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Gift Card
  </li>
</ul>
          </div>
           )}
              {selectedCompanies.includes(3) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>UPP Rewards</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Points
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Discounts
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Free Product
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Stamps
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Gift Card
  </li>
            </ul>
          </div>
              )}
          {selectedCompanies.includes(4) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Resal</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaPercentage color='#00E6A7' size={24}/>
    Discounts
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    Cash Back
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaGift color='#00E6A7' size={24}/>
    Free Product
    <FaInfo data-tooltip-id="my-tooltip-resal3" data-tooltip-content="It may be specific products or products of certain categories" />

<Tooltip id="my-tooltip-resal3" />

  </li>
  <li className='flex gap-2 mb-1 '>
        <FaCheckCircle color='#00E6A7' size={24} />
        Varies depending on the type of card
      </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(5) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Loyapro</h2>
            <ul>
  
           
  <li className='flex gap-2 mb-1 '>
    <FaCreditCard color='#00E6A7' size={24}/>
    Varies depending on the type of card
  </li>

</ul>
          </div>
          )}

{selectedCompanies.includes(6) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Brand Wallet</h2>
            <ul>
  
      
  <li className='flex gap-2 mb-1 '>
    <FaCreditCard color='#00E6A7' size={24}/>
    Varies depending on the type of card
  </li>

</ul>
          </div>
          )}

{selectedCompanies.includes(7) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Nugttah</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaStar color='#00E6A7' size={24}/>
    Points
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaStickyNote color='#00E6A7' size={24}/>
    Stamp Card
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaTags color='#00E6A7' size={24}/>
    Discounts
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaGift color='#00E6A7' size={24}/>
    Free Product
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBillAlt color='#00E6A7' size={24}/>
    Cash Back
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaGifts color='#00E6A7' size={24}/>
    Gift Card
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(8) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Koinz</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaStar color='#00E6A7' size={24}/>
    Points
  </li>

  <li className='flex gap-2 mb-1 '>
    <FaTags color='#00E6A7' size={24}/>
    Discounts
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaGifts color='#00E6A7' size={24}/>
    Gift Card
  </li>
</ul>
          </div>
          )}
          
          {selectedCompanies.includes(9) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Bonat</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaStar color='#00E6A7' size={24}/>
    Points
  </li>

  <li className='flex gap-2 mb-1 '>
    <FaGift color='#00E6A7' size={24}/>
    Free Product
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaGifts color='#00E6A7' size={24}/>
    Gift Card
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(10) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>أبخض </h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaStar color='#00E6A7' size={24}/>
    Points
  </li>


  <li className='flex gap-2 mb-1 '>
    <FaGifts color='#00E6A7' size={24}/>
    Gift Card
  </li>
</ul>
          </div>
          )}
        </div>
          </div>

          {/* Earning Points Section */}
          {/* Add your comparison details for earning points */}

          {/* Rewards Section */}
          {/* Add your comparison details for types of rewards */}
        </div>


        {/* Feature Comparison */}
        <div className="md:col-span-4 border p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>

          {/* Preservation Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Membership Identifier</h3>
        <div className='flex flex-row'>

{selectedCompanies.includes(1) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Mukafat</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Plastic-Card-Based Loyalty Programs
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Digital-Card-Based Loyalty Programs
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Programs With Any Other Member Identifier (e.g. mobile number)
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Any combination of the above
  </li>
</ul>
          </div>
)}

{selectedCompanies.includes(2) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Green Bill</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaQrcode color='#00E6A7' size={24}/>
    The customer scans the QR code from the invoice
  </li>
</ul>
          </div>
)}
{selectedCompanies.includes(3) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>UPP Rewards</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaQrcode color='#00E6A7' size={24}/>
    The customer shows the QR code through the web application then convert it to a digital card
  </li>
            </ul>
          </div>
)}
          {selectedCompanies.includes(4) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Resal</h2>
            <ul>
      <li className='flex gap-2 mb-1 '>
        <FaMobile color='#00E6A7' size={24} />
        By mobile number
      </li>
      <li className='flex gap-2 mb-1 '>
        <FaQrcode color='#00E6A7' size={24} />
        The customer shows the QR code through the digital card
      </li>
      <li className='flex gap-2 mb-1 '>
        <FaWallet color='#00E6A7' size={24} />
        Digital Wallet
      </li>
    </ul>
          </div>
          )}

{selectedCompanies.includes(5) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Loyapro</h2>
            <ul>
     
      <li className='flex gap-2 mb-1 '>
        <FaQrcode color='#00E6A7' size={24} />
        The customer shows the QR code through the digital card
      </li>
      <li className='flex gap-2 mb-1 '>
        <FaWallet color='#00E6A7' size={24} />
        Digital Wallet
      </li>
    </ul>
          </div>
          )}


{selectedCompanies.includes(6) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Brand Wallet</h2>
            <ul>
     
      <li className='flex gap-2 mb-1 '>
        <FaQrcode color='#00E6A7' size={24} />
        The customer shows the QR code through the digital card
      </li>
      <li className='flex gap-2 mb-1 '>
        <FaWallet color='#00E6A7' size={24} />
        Digital Wallet
      </li>
    </ul>
          </div>
          )}

{selectedCompanies.includes(7) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Nugttah</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaQrcode color='#00E6A7' size={24}/>
    The QR code is scanned by the cashier employee by having the customer show the QR code through the mobile screen
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaDownload color='#00E6A7' size={24}/>
    Download the App
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(8) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Koinz</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaMobileAlt color='#00E6A7' size={24}/>
    Give the cashier employee a mobile number
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaDownload color='#00E6A7' size={24}/>
    Download the App
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(9) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Bonat</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaQrcode color='#00E6A7' size={24}/>
    Scan the QR code through the customer screen
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaMobileAlt color='#00E6A7' size={24}/>
    Register the mobile number through the customer screen
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaDownload color='#00E6A7' size={24}/>
    Download the App
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(10) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>ابخص</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaQrcode color='#00E6A7' size={24}/>
    Take a photo of the invoice containing the QR Code
  </li>
 
  <li className='flex gap-2 mb-1 '>
    <FaDownload color='#00E6A7' size={24}/>
    Download the App
  </li>
</ul>
          </div>
          )}
        </div>
          </div>

          {/* Earning Points Section */}
          {/* Add your comparison details for earning points */}

          {/* Rewards Section */}
          {/* Add your comparison details for types of rewards */}
        </div>

         {/* Feature Comparison */}
         <div className="md:col-span-4 border p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>

          {/* Preservation Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">The company's origins</h3>
        <div className='flex flex-row'>
        {selectedCompanies.includes(1) && (

          <div className='w-1/4'>
            <h2 className='font-bold'>Mukafat</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaBuilding color='#00E6A7' size={24}/>
    Saudi Based Company
  </li>
</ul>
          </div>
        )}
          {selectedCompanies.includes(2) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Green Bill</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaBuilding color='#00E6A7' size={24}/>
    Saudi Based Company 
  </li>
</ul>
          </div>
          )}
            {selectedCompanies.includes(3) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>UPP Rewards</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaBuilding color='#00E6A7' size={24}/>
    Lebanon Based Company - Offices in UAE
  </li>
            </ul>
          </div>
            )}
          {selectedCompanies.includes(4) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Resal</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaBuilding color='#00E6A7' size={24}/>
    Saudi Based Company
  </li>
            </ul>
          </div>
          )}

{selectedCompanies.includes(5) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Loyapro</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaBuilding color='#00E6A7' size={24}/>
    Saudi Based Company
  </li>
            </ul>
          </div>
          )}
          {selectedCompanies.includes(6) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Brand Wallet</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaBuilding color='#00E6A7' size={24}/>
    Turkey Based Company 

  </li>
            </ul>
          </div>
          )}

{selectedCompanies.includes(7) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Nugttah</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaBuilding color='#00E6A7' size={24}/>
    Saudi Based Company 

  </li>
            </ul>
          </div>
          )}

{selectedCompanies.includes(8) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Koinz</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaBuilding color='#00E6A7' size={24}/>
    Egyptian Saudi Based Company 

  </li>
            </ul>
          </div>
          )}

{selectedCompanies.includes(9) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Bonat</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaBuilding color='#00E6A7' size={24}/>
    Saudi Based Company 

  </li>
            </ul>
          </div>
          )}

{selectedCompanies.includes(10) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>ابخص</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaBuilding color='#00E6A7' size={24}/>
    Saudi Based Company 

  </li>
            </ul>
          </div>
          )}
          
        </div>
          </div>

          {/* Earning Points Section */}
          {/* Add your comparison details for earning points */}

          {/* Rewards Section */}
          {/* Add your comparison details for types of rewards */}
        </div>

          {/* Feature Comparison */}
          <div className="md:col-span-4 border p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>

          {/* Preservation Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Program Set up </h3>
        <div className='flex flex-row'>
        {selectedCompanies.includes(1) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Mukafat</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaTags color='#00E6A7' size={24}/>
    Single-Brand Loyalty Programs
  </li>
</ul>
          </div>
        )}
          {selectedCompanies.includes(2) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Green Bill</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaTags color='#00E6A7' size={24}/>
    Single-Brand Loyalty Programs
  </li>
</ul>
          </div>
          )}
            {selectedCompanies.includes(3) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>UPP Rewards</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaTags color='#00E6A7' size={24}/>
    Single-Brand Loyalty Programs
  </li>
            </ul>
          </div>
            )}
          {selectedCompanies.includes(4) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Resal</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaTags color='#00E6A7' size={24}/>
    Single-Brand Loyalty Programs
  </li>
            </ul>
          </div>
          )}

{selectedCompanies.includes(5) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Loyapro</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaTags color='#00E6A7' size={24}/>
    Single-Brand Loyalty Programs
  </li>

  <li className='flex gap-2 mb-1 '>
    <FaTags color='#00E6A7' size={24}/>
    Multi-Brands Loyalty Program
  </li>
            </ul>
          </div>
          )}

{selectedCompanies.includes(6) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Brand Wallet</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaTags color='#00E6A7' size={24}/>
    Single-Brand Loyalty Programs
  </li>

  <li className='flex gap-2 mb-1 '>
    <FaTags color='#00E6A7' size={24}/>
    Multi-Brands Loyalty Program
  </li>
            </ul>
          </div>
          )}

{selectedCompanies.includes(7) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Brand Wallet</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaTags color='#00E6A7' size={24}/>
    Single-Brand Loyalty Programs
  </li>

  <li className='flex gap-2 mb-1 '>
    <FaTags color='#00E6A7' size={24}/>
    Multi-Brands Loyalty Program
  </li>
            </ul>
          </div>
          )}

{selectedCompanies.includes(8) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Nugttah</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaTags color='#00E6A7' size={24}/>
    Single-Brand Loyalty Programs
  </li>

  <li className='flex gap-2 mb-1 '>
    <FaTags color='#00E6A7' size={24}/>
    Multi-Brands Loyalty Program
  </li>
            </ul>
          </div>
          )}

{selectedCompanies.includes(9) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Koinz</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaTags color='#00E6A7' size={24}/>
    Single-Brand Loyalty Programs
  </li>

 
            </ul>
          </div>
          )}

{selectedCompanies.includes(10) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>ابخص</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaTags color='#00E6A7' size={24}/>
    Single-Brand Loyalty Programs
  </li>

 
            </ul>
          </div>
          )}


        </div>
          </div>

          {/* Earning Points Section */}
          {/* Add your comparison details for earning points */}

          {/* Rewards Section */}
          {/* Add your comparison details for types of rewards */}
        </div>

           {/* Feature Comparison */}
           <div className="md:col-span-4 border p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>

          {/* Preservation Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Target Audience</h3>
        <div className='flex flex-row'>
        {selectedCompanies.includes(1) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Mukafat</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaBusinessTime color='#00E6A7' size={24}/>
    B2C (Business to Customer) Loyalty Programs
  </li>
</ul>
          </div>
        )}
          {selectedCompanies.includes(2) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Green Bill</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaBusinessTime color='#00E6A7' size={24}/>
    B2C (Business to Customer) Loyalty Programs
  </li>
</ul>
          </div>
          )}
            {selectedCompanies.includes(3) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>UPP Rewards</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaBusinessTime color='#00E6A7' size={24}/>
    B2C (Business to Customer) Loyalty Programs
  </li>
            </ul>
          </div>
            )}
          {selectedCompanies.includes(4) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Resal</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaBusinessTime color='#00E6A7' size={24}/>
    B2C (Business to Customer) Loyalty Programs
  </li>
            </ul>
          </div>
          )}

{selectedCompanies.includes(5) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Loyapro</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaBusinessTime color='#00E6A7' size={24}/>
    B2C (Business to Customer) Loyalty Programs
  </li>
            </ul>
          </div>
          )}

{selectedCompanies.includes(6) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Brand Wallet</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaBusinessTime color='#00E6A7' size={24}/>
    B2C (Business to Customer) Loyalty Programs
  </li>
            </ul>
          </div>
          )}

{selectedCompanies.includes(7) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Nugttah</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaBusinessTime color='#00E6A7' size={24}/>
    B2C (Business to Customer) Loyalty Programs
  </li>
            </ul>
          </div>
          )}

{selectedCompanies.includes(8) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Koinz</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaBusinessTime color='#00E6A7' size={24}/>
    B2C (Business to Customer) Loyalty Programs
  </li>
            </ul>
          </div>
          )}

{selectedCompanies.includes(9) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Bonat</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaBusinessTime color='#00E6A7' size={24}/>
    B2C (Business to Customer) Loyalty Programs
  </li>
            </ul>
          </div>
          )}


{selectedCompanies.includes(10) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>ابخص</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaBusinessTime color='#00E6A7' size={24}/>
    B2C (Business to Customer) Loyalty Programs
  </li>
            </ul>
          </div>
          )}
        </div>
          </div>

          {/* Earning Points Section */}
          {/* Add your comparison details for earning points */}

          {/* Rewards Section */}
          {/* Add your comparison details for types of rewards */}
        </div>

          {/* Feature Comparison */}
          <div className="md:col-span-4 border p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>

          {/* Preservation Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Member Based Loyalty Program </h3>
        <div className='flex flex-row'>
        {selectedCompanies.includes(1) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Mukafat</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    -
  </li>
</ul>
          </div>
        )}
          {selectedCompanies.includes(2) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Green Bill</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    -
  </li>
</ul>
          </div>
          )}
            {selectedCompanies.includes(3) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>UPP Rewards</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    -
  </li>
</ul>
          </div>
            )}
          {selectedCompanies.includes(4) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Resal</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    -
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(5) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Loyapro</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    -
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(6) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Brand Wallet</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    -
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(7) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Nugttah</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    -
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(8) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Koinz</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    -
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(9) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Bonat</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    -
  </li>
</ul>
          </div>
          )}


{selectedCompanies.includes(10) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>ابخص</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    -
  </li>
</ul>
          </div>
          )}
        
         
       
        </div>
          </div>

          {/* Earning Points Section */}
          {/* Add your comparison details for earning points */}

          {/* Rewards Section */}
          {/* Add your comparison details for types of rewards */}
        </div>


          {/* Feature Comparison */}
          <div className="md:col-span-4 border p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>

          {/* Preservation Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Reporting and Analytics</h3>
        <div className='flex flex-row'>
        {selectedCompanies.includes(1) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Mukafat</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaChartLine color='#00E6A7' size={24}/>
    Follow up the performance of the branches
  </li>
</ul>
          </div>
        )}
        {selectedCompanies.includes(2) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Green Bill</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaChartBar color='#00E6A7' size={24}/>
    Follow up the performance of the branches
  </li>
</ul>
          </div>
        )}
        {selectedCompanies.includes(3) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>UPP Rewards</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaClipboardList color='#00E6A7' size={24}/>
    Reports and analyses
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaBalanceScale color='#00E6A7' size={24}/>
    Compare the points earned with the rewards
  </li>
            </ul>
          </div>
        )}
          {selectedCompanies.includes(4) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Resal</h2>
            <ul>
      <li className='flex gap-2 mb-1 '>
        <FaDesktop color='#00E6A7' size={24} />
        Modern and User-friendly
      </li>
      <li className='flex gap-2 mb-1 '>
        <FaUserFriends color='#00E6A7' size={24} />
        Customer Behavior
      </li>
      <li className='flex gap-2 mb-1 '>
        <FaCog color='#00E6A7' size={24} />
        Processes
        <FaInfo data-tooltip-id="my-tooltip-resal5" data-tooltip-content="Purchase a replacement or visit the cashier who issued the bill (cataract the staff to encourage customers to download the application or if they reach a certain number of points" />

<Tooltip id="my-tooltip-resal5" />
      </li>
    </ul>
          </div>
          )}


  
     
   

{selectedCompanies.includes(5) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Loyapro</h2>
            <ul>
      <li className='flex gap-2 mb-1 '>
        <FaDesktop color='#00E6A7' size={24} />
        Modern and User-friendly
      </li>
    
      <li className='flex gap-2 mb-1 '>
    <FaUserFriends color='#00E6A7' size={24}/>
    Dividing customers into 3 distinct segments (Continuous, Disconnected)
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaClock color='#00E6A7' size={24}/>
    Visit customers according to time
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaChartLine color='#00E6A7' size={24}/>
    Branch performance
  </li>
    </ul>
          </div>
          )}

{selectedCompanies.includes(6) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Brand Wallet</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
        <FaDesktop color='#00E6A7' size={24} />
        Modern and User-friendly
      </li>
      <li className='flex gap-2 mb-1 '>
    <FaUsers color='#00E6A7' size={24}/>
    Divide customers into segments
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaBell color='#00E6A7' size={24}/>
    Notifications get sent from the panel
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaDownload color='#00E6A7' size={24}/>
    Download customer data easily
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(7) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Nugttah</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
        <FaDesktop color='#00E6A7' size={24} />
        Modern and User-friendly
      </li>
            <li className='flex gap-2 mb-1 '>
    <FaFolderOpen color='#00E6A7' size={24}/>
    Dividing customers into categories (loyal, promising, active, etc.).
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaClock color='#00E6A7' size={24}/>
    Customer preferences - Best time to visit
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaHeart color='#00E6A7' size={24}/>
    Customer preferences - Favorite product
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaChartLine color='#00E6A7' size={24}/>
    Revenues from orders, peak times, most visited customers, and most requested products (for the orders program)
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaFlask color='#00E6A7' size={24}/>
    Order Analytics
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(8) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Koinz</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
        <FaDesktop color='#00E6A7' size={24} />
        Modern and User-friendly
      </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(9) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Bonat</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
        <FaDesktop color='#00E6A7' size={24} />
        Modern and User-friendly
      </li>

      <li className='flex gap-2 mb-1 '>
    <FaFolderOpen color='#00E6A7' size={24}/>
    Dividing customers into categories .
  </li>

  <li className='flex gap-2 mb-1 '>
    <FaUserTie color='#00E6A7' size={24}/>
    Customer retention (number of customer visits)
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaChartBar color='#00E6A7' size={24}/>
    Analysis of reward programs with full details of customer behavior
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaClock color='#00E6A7' size={24}/>
    Visiting times per day and hour
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaDollarSign color='#00E6A7' size={24}/>
    Total revenues
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaStar color='#00E6A7' size={24}/>
    Number of points earned
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaStarHalfAlt color='#00E6A7' size={24}/>
    Average customer rating
  </li>


      <li className='flex gap-2 mb-1 '>
    <FaFlask color='#00E6A7' size={24}/>
    Order Analytics
  </li>

</ul>
          </div>
          )}


{selectedCompanies.includes(10) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>ابخص</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    -
  </li>
</ul>
          </div>
          )}
        </div>
          </div>

          {/* Earning Points Section */}
          {/* Add your comparison details for earning points */}

          {/* Rewards Section */}
          {/* Add your comparison details for types of rewards */}
        </div>

          {/* Feature Comparison */}
          <div className="md:col-span-4 border p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>

          {/* Preservation Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Integration</h3>
        <div className='flex flex-row'>
        {selectedCompanies.includes(1) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Mukafat</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Foodics
  </li>
</ul>
          </div>
        )}
        {selectedCompanies.includes(2) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Green Bill</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Foodics
  </li>
</ul>
          </div>
        )}
        {selectedCompanies.includes(3) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>UPP Rewards</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Foodics
  </li>
            </ul>
          </div>
        )}
          {selectedCompanies.includes(4) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Resal</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Foodics
  </li>
            </ul>
          </div>
          )}


    
       

{selectedCompanies.includes(5) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Loyapro</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Foodics
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Loyverse
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    flavours 

  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    zed
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(6) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Brand Wallet</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Foodics
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Loyverse
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    LS Retail
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Oracle
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(7) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Nugttah</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Foodics
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Marn
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(8) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Koinz</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Foodics
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    ratm pos
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(9) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Bonat</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Foodics
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    مرن
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Odoo
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    ratm pos
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Square POS
  </li>
</ul>
          </div>
          )}


{selectedCompanies.includes(10) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>ابخص</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Foodics
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    سلة
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    زد
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    wosul
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Easacc
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCheckCircle color='#00E6A7' size={24}/>
    Dash
  </li>
</ul>
          </div>
          )}
        </div>
          </div>

          {/* Earning Points Section */}
          {/* Add your comparison details for earning points */}

          {/* Rewards Section */}
          {/* Add your comparison details for types of rewards */}
        </div>

            {/* Feature Comparison */}
            <div className="md:col-span-4 border p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>

          {/* Preservation Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Existing Customer </h3>
        <div className='flex flex-row'>
        {selectedCompanies.includes(1) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Mukafat</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaCoffee color='#00E6A7' size={24}/>
    Caffaine Lab
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaCoffee color='#00E6A7' size={24}/>
    جوار كافيه
  </li>
</ul>
          </div>
        )}
        {selectedCompanies.includes(2) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Green Bill</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaCoffee color='#00E6A7' size={24}/>
    Caffaine Lab

  </li>
  <li className='flex gap-2 mb-1 '>
    <FaPizzaSlice color='#00E6A7' size={24}/>
    جوار كافيه
  </li>
</ul>
          </div>
        )}
        {selectedCompanies.includes(3) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>UPP Rewards</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaCoffee color='#00E6A7' size={24}/>
    Coffee Shop Repository
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaPizzaSlice color='#00E6A7' size={24}/>
    Domo Pizza
  </li>
            </ul>
          </div>
        )}
          {selectedCompanies.includes(4) && (

          <div className='w-1/4'>
            <h2 className='font-bold'>Resal</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
    <FaCoffee color='#00E6A7' size={24}/>
    فطور فارس
  </li>
            </ul>
          </div>
          )}


   
       
      
{selectedCompanies.includes(5) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Loyapro</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
  <FaCheckCircle color='#00E6A7' size={24}/>

  Oak Berry
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(6) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Brand Wallet</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
  <FaCheckCircle color='#00E6A7' size={24}/>
  1k coffee- riyadh 

  </li>
  <li className='flex gap-2 mb-1 '>
  <FaCheckCircle color='#00E6A7' size={24}/>
  Ratio cafe 
 

  </li>
  <li className='flex gap-2 mb-1 '>
  <FaCheckCircle color='#00E6A7' size={24}/>
  50 degree - Jeddah 
 

  </li>
  <li className='flex gap-2 mb-1 '>
  <FaCheckCircle color='#00E6A7' size={24}/>
  65 degree - Riyadh 

  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(7) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Nugttah</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
  <FaCheckCircle color='#00E6A7' size={24}/>
  كيان 

  </li>
  <li className='flex gap-2 mb-1 '>
  <FaCheckCircle color='#00E6A7' size={24}/>
  ليشلاز 

  </li>
  <li className='flex gap-2 mb-1 '>
  <FaCheckCircle color='#00E6A7' size={24}/>
  دوز 

  </li>
  <li className='flex gap-2 mb-1 '>
  <FaCheckCircle color='#00E6A7' size={24}/>
  صحبة 

  </li>
  <li className='flex gap-2 mb-1 '>
  <FaCheckCircle color='#00E6A7' size={24}/>
  عالم الشاهي 

  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(8) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Koinz</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
  <FaCheckCircle color='#00E6A7' size={24}/>
  المشوى العنابي 

  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(9) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Bonat</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
  <FaCheckCircle color='#00E6A7' size={24}/>
  سنابل السلام
 

  </li>
  <li className='flex gap-2 mb-1 '>
  <FaCheckCircle color='#00E6A7' size={24}/>
  Row
 

  </li>
  <li className='flex gap-2 mb-1 '>
  <FaCheckCircle color='#00E6A7' size={24}/>
  كفة
 

  </li>
</ul>
          </div>
          )}


{selectedCompanies.includes(10) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>ابخص</h2>
            <ul>
            <li className='flex gap-2 mb-1 '>
  <FaCheckCircle color='#00E6A7' size={24}/>
  ابو زيد
 

  </li>
</ul>
          </div>
          )}
        
        </div>
          </div>

          {/* Earning Points Section */}
          {/* Add your comparison details for earning points */}

          {/* Rewards Section */}
          {/* Add your comparison details for types of rewards */}
        </div>

            {/* Feature Comparison */}
            <div className="md:col-span-4 border p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>

          {/* Preservation Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Subscription Fee  </h3>
        <div className='flex flex-row'>
        {selectedCompanies.includes(1) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Mukafat</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    Main Branch: SAR 2,500
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    2nd Branch & more: SAR 600
  </li>
</ul>
          </div>
        )}
        {selectedCompanies.includes(2) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Green Bill</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    main branch: SAR 2,500

  </li>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    2nd Branch & more : SAR 600 
  </li>
 

</ul>
          </div>
        )}
        {selectedCompanies.includes(3) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>UPP Rewards</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    SAR 1,236 - 2 Branches or less
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    SAR 1,125 - 3-6 Branches
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    SAR 900 - 7-50 branches
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaDollarSign color='#00E6A7' size={24}/>
    No fees for connecting with point of sale programs
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaDollarSign color='#00E6A7' size={24}/>
    $28/month up - 2 branches
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaDollarSign color='#00E6A7' size={24}/>
    $25/month up to 3-6 branches
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaDollarSign color='#00E6A7' size={24}/>
    7-50 branches $20/branch
  </li>
</ul>
          </div>
        )}
          {selectedCompanies.includes(4) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Resal</h2>
            <ul>
      <li className='flex gap-2 mb-1 '>
        <FaBuilding color='#00E6A7' size={24} />
        Specific package (branch)
        </li>
          <li className='flex gap-2 mb-1 '>
            <FaUser color='#00E6A7' size={24} />
            10,000 customers
          </li>
          <li className='flex gap-2 mb-1 '>
            <FaCommentDollar color='#00E6A7' size={24} />
            Message after 200 riyals / 10,000 messages
          </li>
          <li className='flex gap-2 mb-1 '>
            Addition of 3,000 additional customers for 600 riyals
          </li>
        
      
      <li className='flex gap-2 mb-1 '>
        <FaCog color='#00E6A7' size={24} />
        Each additional branch
        </li>
          <li className='flex gap-2 mb-1 '>
            <FaUser color='#00E6A7' size={24} />
            10,000 customers
          </li>
          <li className='flex gap-2 mb-1 '>
            <FaCommentDollar color='#00E6A7' size={24} />
            Message after 200 riyals / 10,000 messages
          </li>
      
     
      <li className='flex gap-2 mb-1 '>
        There are no fees for connecting with point of sale programs
      </li>
      <li className='flex gap-2 mb-1 '>
        Features are available according to the package
      </li>
    </ul>
          </div>
      )}


 
     
  

{selectedCompanies.includes(5) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Loyapro</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    SAR 948/year
    <br />
    - No additional card
    <br />
    - One sub-account
    <br />
    - One additional field
    <br />
    - No link
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    SAR 1788/year
    <br />
    - Two additional cards
    <br />
    - 5 sub-accounts
    <br />
    - Three additional fields
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    SAR 3348/year
    <br />
    - There are no fees for connecting with point of sale programs
    <br />
    - Features are available according to the package
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(6) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Brand Wallet</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    Main branch price: SAR 2,750
    <br />
    - No extra cost for additional branches
    <br />
    - No subscription fees for new branches
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    Connection fees with Foodex: SAR 1,000
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(7) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Nugttah</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    Packages:
    <br />
    - SAR 700
    <br />
    - SAR 1700
    <br />
    - SAR 1950
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    Additional fee for connection: SAR 200
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    5% off pre-orders
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(8) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Koinz</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    Package: SAR 200
    <br />
    - SMS sent to customers when they sign up
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    Additional fees in the case of marketing via text messages
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    10-12% off pre-orders
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    Additional fees for connection
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    Extra charges for SMS marketing
  </li>
</ul>
          </div>
          )}

{selectedCompanies.includes(9) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>Bonat</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    Monthly: SAR 141
    <br />
    Yearly: SAR 1,692 (same price for the second additional branch)
  </li>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    Percentage off pre-orders
  </li>
</ul>
          </div>
          )}


{selectedCompanies.includes(10) && (
          <div className='w-1/4'>
            <h2 className='font-bold'>ابخص</h2>
            <ul>
  <li className='flex gap-2 mb-1 '>
    <FaMoneyBill color='#00E6A7' size={24}/>
    Free
    <br />
    The merchant charges a financial balance in exchange for the customer receiving this balance in the form of points that he exchanges by paying violations or bills.
  </li>
</ul>
          </div>
          )}
        </div>
          </div>

          {/* Earning Points Section */}
          {/* Add your comparison details for earning points */}

          {/* Rewards Section */}
          {/* Add your comparison details for types of rewards */}
        </div>

        
      </div>

    
    </div>
  );

};

export default LoyaltyProgramsTable;