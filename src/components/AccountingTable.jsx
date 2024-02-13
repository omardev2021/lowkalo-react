
import React, { useState , useEffect } from 'react';
import Modal from 'react-modal';
import { FaInfo ,FaTimesCircle,FaCheckCircle,FaShoppingCart,FaQrcode,FaBuilding,FaTags, FaBusinessTime, FaChartLine, FaClipboardList, FaBalanceScale, FaCoffee, FaPizzaSlice, FaMoneyBill, FaDollarSign, FaUserFriends, FaUserPlus, FaGift, FaPercentage, FaWallet, FaMobile, FaDesktop, FaCog, FaCommentDollar, FaUser, FaMobileAlt, FaMoneyBillAlt, FaStickyNote, FaClock, FaUsers, FaBell, FaFolderOpen, FaHeart, FaFlask, FaUserTie, FaChartBar, FaStarHalfAlt} from "react-icons/fa";
import { Tooltip } from 'react-tooltip'

import { FaPlus } from 'react-icons/fa';

import { toast } from 'react-toastify';
import { FaCreditCard, FaDownload, FaGifts, FaStar } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';


function AccountingTable() {
    const [selectedCompanies, setSelectedCompanies] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { t ,i18n} = useTranslation();

    const [currentSection, setCurrentSection] = useState('');

    const handleSectionChange = (sectionId) => {
        setCurrentSection(sectionId);
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };
  
    // Dummy data, replace with your actual data
    const companies = [
      { id: 1, name: 'Xero', logo: 'https://api.lowkalo.com/images/2023040906270.webp', active: true },
      { id: 2, name: 'QuickBooks', logo: 'https://api.lowkalo.com/images/202304090635m6.webp', active: true },
      { id: 3, name: 'Qoyod', logo: 'https://api.lowkalo.com/images/qu.jpg', active: true },
      { id: 4, name: 'Dafater', logo: 'https://api.lowkalo.com/images/202304090623777.png', active: false },
      { id: 5, name: 'Add', logo: 'https://api.lowkalo.com/images/202304090633m4.webp', active: true },
      { id: 6, name: 'Vom', logo: 'https://api.lowkalo.com/images/202304090630m2.jpg', active: false },
      { id: 7, name: 'McLedger', logo: 'https://api.lowkalo.com/images/202304090636m7.jpg', active: false },
      { id: 8, name: 'SMACC', logo: 'https://api.lowkalo.com/images/smacc-logo.svg', active: false },
      { id: 9, name: 'Medaderp', logo: 'https://api.lowkalo.com/images/medad-logo.png', active: false },


    ];
  
    // Initialize selected companies with the first 4 active companies
    useEffect(() => {
      const initialSelectedCompanies = companies.filter((company) => company.active).slice(0, 4).map((company) => company.id);
      setSelectedCompanies(initialSelectedCompanies);

      const handleScroll = () => {
        const sections = document.querySelectorAll('.section');
        const scrollPosition = window.scrollY + 200; // Add some offset to make sure the section is fully in view
        let activeSectionId = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                activeSectionId = section.id;
            }
        });

        setCurrentSection(activeSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };

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
        <div key={company.id} className="md:col-span-1 bg-white border p-4 cursor-pointer md:sticky md:top-20">
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
  <div className="md:col-span-1 border p-4 bg-white md:sticky md:top-0">
    <ul className="flex flex-row">
        <li>
            <button className={`flex items-center justify-between w-full py-2 px-4 ${currentSection === 'essential-features' ? 'font-bold text-veryDarkBlue bg-softRed' : 'text-gray-700 hover:text-veryDarkBlue hover:bg-softRed'}`} onClick={() => handleSectionChange('essential-features')}>
                <span>Essential Features and Functionality</span>
                {/* Add arrow icon or indicator for hover effect */}
            </button>
        </li>
        <li>
            <button className={`flex items-center justify-between w-full py-2 px-4 ${currentSection === 'vat-invoices' ? 'font-bold text-veryDarkBlue bg-softRed' : 'text-gray-700 hover:text-veryDarkBlue hover:bg-softRed'}`} onClick={() => handleSectionChange('vat-invoices')}>
                <span>Preparation of VAT and Invoices</span>
                {/* Add arrow icon or indicator for hover effect */}
            </button>
        </li>

        <li>
            <button className={`flex items-center justify-between w-full py-2 px-4 ${currentSection === 'functionality' ? 'font-bold text-veryDarkBlue bg-softRed' : 'text-gray-700 hover:text-veryDarkBlue hover:bg-softRed'}`} onClick={() => handleSectionChange('functionality')}>
                <span>Essential Features and Functionality</span>
                {/* Add arrow icon or indicator for hover effect */}
            </button>
        </li>
        {/* Add more navigation buttons for other sections */}
    </ul>
</div>
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


          {/* Essential Features Section */}
          <div id="essential-features" className="md:col-span-4  p-4  section ">
          <h1 className="mb-6 mt-6 text-4xl text-veryDarkBlue font-semibold text-center pt-10 w-100">Essential Features and Functionality</h1>

                {/* Feature Comparison */}
          <div className="md:col-span-4 border p-4 bg-white">
            <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>
     {/* Preservation Section 1 */}
     <div className="mb-8 ">
              <h3 className="text-xl font-semibold mb-2">Preparation of the basic Financial Statement</h3>
          <div className='flex flex-row '>
            {selectedCompanies.includes(1) && (
   <div className='w-1/4 ' style={{'marginLeft':'100px'}} >
   <h2 className='font-bold'>Xero</h2>
   <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
            )}
  
  {selectedCompanies.includes(2) && (
        <div className='w-1/4'  style={{'marginLeft':'100px'}}>
        <h2 className='font-bold'>QuickBooks</h2>
        <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
      
      </div> 
  )}
           {selectedCompanies.includes(3) && (
            <div className='w-1/4'  style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Qoyod</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
             
            </div>
           )}
            {selectedCompanies.includes(4) && (
  
            <div className='w-1/4'  style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Dafater</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>

            </div>
            )}
  
  {selectedCompanies.includes(5) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Add</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
  )}
  
  {selectedCompanies.includes(6) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Vom</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  {selectedCompanies.includes(7) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>McLedger</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  

  

  

          </div>
            </div>
  
            
       
          </div>

          <div className="md:col-span-4 border p-4 bg-white">
            <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>
     {/* Preservation Section 1 */}
     <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Preparation of VAT</h3>
          <div className='flex flex-row'>
            {selectedCompanies.includes(1) && (
   <div className='w-1/4' style={{'marginLeft':'100px'}} style={{'marginLeft':'100px'}}>
   <h2 className='font-bold'>Xero</h2>
   <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
            )}
  
  {selectedCompanies.includes(2) && (
        <div className='w-1/4' style={{'marginLeft':'100px'}}>
        <h2 className='font-bold'>QuickBooks</h2>
        <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
      
      </div> 
  )}
           {selectedCompanies.includes(3) && (
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Qoyod</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
             
            </div>
           )}
            {selectedCompanies.includes(4) && (
  
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Dafater</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>

            </div>
            )}
  
  {selectedCompanies.includes(5) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Add</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
  )}
  
  {selectedCompanies.includes(6) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Vom</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  {selectedCompanies.includes(7) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>McLedger</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  

  

  

          </div>
            </div>
  
            
       
          </div>

          <div className="md:col-span-4 border p-4 bg-white">
            <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>
     {/* Preservation Section 1 */}
     <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Manage Account Receivable</h3>
          <div className='flex flex-row'>
            {selectedCompanies.includes(1) && (
   <div className='w-1/4' style={{'marginLeft':'100px'}} style={{'marginLeft':'100px'}}>
   <h2 className='font-bold'>Xero</h2>
   <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
            )}
  
  {selectedCompanies.includes(2) && (
        <div className='w-1/4' style={{'marginLeft':'100px'}}>
        <h2 className='font-bold'>QuickBooks</h2>
        <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
      
      </div> 
  )}
           {selectedCompanies.includes(3) && (
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Qoyod</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
             
            </div>
           )}
            {selectedCompanies.includes(4) && (
  
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Dafater</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>

            </div>
            )}
  
  {selectedCompanies.includes(5) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Add</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
  )}
  
  {selectedCompanies.includes(6) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Vom</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  {selectedCompanies.includes(7) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>McLedger</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  

  

  

          </div>
            </div>
  
            
       
          </div>

          <div className="md:col-span-4 border p-4 bg-white">
            <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>
     {/* Preservation Section 1 */}
     <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Manage Account Payable</h3>
          <div className='flex flex-row'>
            {selectedCompanies.includes(1) && (
   <div className='w-1/4' style={{'marginLeft':'100px'}} style={{'marginLeft':'100px'}}>
   <h2 className='font-bold'>Xero</h2>
   <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
            )}
  
  {selectedCompanies.includes(2) && (
        <div className='w-1/4' style={{'marginLeft':'100px'}}>
        <h2 className='font-bold'>QuickBooks</h2>
        <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
      
      </div> 
  )}
           {selectedCompanies.includes(3) && (
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Qoyod</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
             
            </div>
           )}
            {selectedCompanies.includes(4) && (
  
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Dafater</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>

            </div>
            )}
  
  {selectedCompanies.includes(5) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Add</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
  )}
  
  {selectedCompanies.includes(6) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Vom</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  {selectedCompanies.includes(7) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>McLedger</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  

  

  

          </div>
            </div>
  
            
       
          </div>

          

          

            </div>

            {/* Preparation of VAT and Invoices Section */}
            <div id="vat-invoices" className="md:col-span-4  p-4  section ">
            <h1 className="mb-6 mt-6 text-4xl text-veryDarkBlue font-semibold text-center pt-10 w-100">Preparation of VAT and Invoices</h1>

            <div className="md:col-span-4 border p-4 bg-white">
            <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>
     {/* Preservation Section 1 */}
     <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Invoices</h3>
          <div className='flex flex-row'>
            {selectedCompanies.includes(1) && (
   <div className='w-1/4' style={{'marginLeft':'100px'}} style={{'marginLeft':'100px'}}>
   <h2 className='font-bold'>Xero</h2>
   <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
            )}
  
  {selectedCompanies.includes(2) && (
        <div className='w-1/4' style={{'marginLeft':'100px'}}>
        <h2 className='font-bold'>QuickBooks</h2>
        <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
      
      </div> 
  )}
           {selectedCompanies.includes(3) && (
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Qoyod</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
             
            </div>
           )}
            {selectedCompanies.includes(4) && (
  
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Dafater</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>

            </div>
            )}
  
  {selectedCompanies.includes(5) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Add</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
  )}
  
  {selectedCompanies.includes(6) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Vom</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  {selectedCompanies.includes(7) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>McLedger</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  

  

  

          </div>
            </div>
  
            
       
          </div>

          <div className="md:col-span-4 border p-4 bg-white">
            <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>
     {/* Preservation Section 1 */}
     <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Manage Account Receivable</h3>
          <div className='flex flex-row'>
            {selectedCompanies.includes(1) && (
   <div className='w-1/4' style={{'marginLeft':'100px'}} style={{'marginLeft':'100px'}}>
   <h2 className='font-bold'>Xero</h2>
   <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
            )}
  
  {selectedCompanies.includes(2) && (
        <div className='w-1/4' style={{'marginLeft':'100px'}}>
        <h2 className='font-bold'>QuickBooks</h2>
        <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
      
      </div> 
  )}
           {selectedCompanies.includes(3) && (
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Qoyod</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
             
            </div>
           )}
            {selectedCompanies.includes(4) && (
  
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Dafater</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>

            </div>
            )}
  
  {selectedCompanies.includes(5) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Add</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
  )}
  
  {selectedCompanies.includes(6) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Vom</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  {selectedCompanies.includes(7) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>McLedger</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  

  

  

          </div>
            </div>
  
            
       
          </div>

          <div className="md:col-span-4 border p-4 bg-white">
            <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>
     {/* Preservation Section 1 */}
     <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Manage Account Payable</h3>
          <div className='flex flex-row'>
            {selectedCompanies.includes(1) && (
   <div className='w-1/4' style={{'marginLeft':'100px'}} style={{'marginLeft':'100px'}}>
   <h2 className='font-bold'>Xero</h2>
   <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
            )}
  
  {selectedCompanies.includes(2) && (
        <div className='w-1/4' style={{'marginLeft':'100px'}}>
        <h2 className='font-bold'>QuickBooks</h2>
        <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
      
      </div> 
  )}
           {selectedCompanies.includes(3) && (
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Qoyod</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
             
            </div>
           )}
            {selectedCompanies.includes(4) && (
  
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Dafater</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>

            </div>
            )}
  
  {selectedCompanies.includes(5) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Add</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
  )}
  
  {selectedCompanies.includes(6) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Vom</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  {selectedCompanies.includes(7) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>McLedger</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  

  

  

          </div>
            </div>
  
            
       
          </div>

            </div>

            <div id="functionality" className="md:col-span-4  p-4  section ">
            <h1 className="mb-6 mt-6 text-4xl text-veryDarkBlue font-semibold text-center pt-10 w-100">Essential Features and Functionality
</h1>

            <div className="md:col-span-4 border p-4 bg-white">
            <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>
     {/* Preservation Section 1 */}
     <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Web access</h3>
          <div className='flex flex-row'>
            {selectedCompanies.includes(1) && (
   <div className='w-1/4' style={{'marginLeft':'100px'}} style={{'marginLeft':'100px'}}>
   <h2 className='font-bold'>Xero</h2>
   <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
            )}
  
  {selectedCompanies.includes(2) && (
        <div className='w-1/4' style={{'marginLeft':'100px'}}>
        <h2 className='font-bold'>QuickBooks</h2>
        <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
      
      </div> 
  )}
           {selectedCompanies.includes(3) && (
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Qoyod</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
             
            </div>
           )}
            {selectedCompanies.includes(4) && (
  
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Dafater</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>

            </div>
            )}
  
  {selectedCompanies.includes(5) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Add</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
  )}
  
  {selectedCompanies.includes(6) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Vom</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  {selectedCompanies.includes(7) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>McLedger</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  

  

  

          </div>
            </div>
  
            
       
          </div>

          <div className="md:col-span-4 border p-4 bg-white">
            <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>
     {/* Preservation Section 1 */}
     <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Create customized Invoices</h3>
          <div className='flex flex-row'>
            {selectedCompanies.includes(1) && (
   <div className='w-1/4' style={{'marginLeft':'100px'}} style={{'marginLeft':'100px'}}>
   <h2 className='font-bold'>Xero</h2>
   <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
            )}
  
  {selectedCompanies.includes(2) && (
        <div className='w-1/4' style={{'marginLeft':'100px'}}>
        <h2 className='font-bold'>QuickBooks</h2>
        <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
      
      </div> 
  )}
           {selectedCompanies.includes(3) && (
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Qoyod</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
             
            </div>
           )}
            {selectedCompanies.includes(4) && (
  
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Dafater</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>

            </div>
            )}
  
  {selectedCompanies.includes(5) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Add</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
  )}
  
  {selectedCompanies.includes(6) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Vom</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  {selectedCompanies.includes(7) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>McLedger</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  

  

  

          </div>
            </div>
  
            
       
          </div>

          <div className="md:col-span-4 border p-4 bg-white">
            <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>
     {/* Preservation Section 1 */}
     <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Generate reports by responsibility Level</h3>
          <div className='flex flex-row'>
            {selectedCompanies.includes(1) && (
   <div className='w-1/4' style={{'marginLeft':'100px'}} style={{'marginLeft':'100px'}}>
   <h2 className='font-bold'>Xero</h2>
   <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
            )}
  
  {selectedCompanies.includes(2) && (
        <div className='w-1/4' style={{'marginLeft':'100px'}}>
        <h2 className='font-bold'>QuickBooks</h2>
        <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
      
      </div> 
  )}
           {selectedCompanies.includes(3) && (
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Qoyod</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
             
            </div>
           )}
            {selectedCompanies.includes(4) && (
  
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Dafater</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>

            </div>
            )}
  
  {selectedCompanies.includes(5) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Add</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
  )}
  
  {selectedCompanies.includes(6) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Vom</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  {selectedCompanies.includes(7) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>McLedger</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  

  

  

          </div>
            </div>
  
            
       
          </div>

          <div className="md:col-span-4 border p-4 bg-white">
            <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>
     {/* Preservation Section 1 */}
     <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Multi Platform Browser access</h3>
          <div className='flex flex-row'>
            {selectedCompanies.includes(1) && (
   <div className='w-1/4' style={{'marginLeft':'100px'}} style={{'marginLeft':'100px'}}>
   <h2 className='font-bold'>Xero</h2>
   <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
            )}
  
  {selectedCompanies.includes(2) && (
        <div className='w-1/4' style={{'marginLeft':'100px'}}>
        <h2 className='font-bold'>QuickBooks</h2>
        <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
      
      </div> 
  )}
           {selectedCompanies.includes(3) && (
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Qoyod</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
             
            </div>
           )}
            {selectedCompanies.includes(4) && (
  
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Dafater</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>

            </div>
            )}
  
  {selectedCompanies.includes(5) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Add</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
  )}
  
  {selectedCompanies.includes(6) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Vom</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  {selectedCompanies.includes(7) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>McLedger</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  

  

  

          </div>
            </div>
  
            
       
          </div>

          <div className="md:col-span-4 border p-4 bg-white">
            <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>
     {/* Preservation Section 1 */}
     <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Mobile Expense</h3>
          <div className='flex flex-row'>
            {selectedCompanies.includes(1) && (
   <div className='w-1/4' style={{'marginLeft':'100px'}} style={{'marginLeft':'100px'}}>
   <h2 className='font-bold'>Xero</h2>
   <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
            )}
  
  {selectedCompanies.includes(2) && (
        <div className='w-1/4' style={{'marginLeft':'100px'}}>
        <h2 className='font-bold'>QuickBooks</h2>
        <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
      
      </div> 
  )}
           {selectedCompanies.includes(3) && (
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Qoyod</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
             
            </div>
           )}
            {selectedCompanies.includes(4) && (
  
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Dafater</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>

            </div>
            )}
  
  {selectedCompanies.includes(5) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Add</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
  )}
  
  {selectedCompanies.includes(6) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Vom</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  {selectedCompanies.includes(7) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>McLedger</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  

  

  

          </div>
            </div>
  
            
       
          </div>

          <div className="md:col-span-4 border p-4 bg-white">
            <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>
     {/* Preservation Section 1 */}
     <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Tracking</h3>
          <div className='flex flex-row'>
            {selectedCompanies.includes(1) && (
   <div className='w-1/4' style={{'marginLeft':'100px'}} style={{'marginLeft':'100px'}}>
   <h2 className='font-bold'>Xero</h2>
   <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
            )}
  
  {selectedCompanies.includes(2) && (
        <div className='w-1/4' style={{'marginLeft':'100px'}}>
        <h2 className='font-bold'>QuickBooks</h2>
        <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
      
      </div> 
  )}
           {selectedCompanies.includes(3) && (
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Qoyod</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
             
            </div>
           )}
            {selectedCompanies.includes(4) && (
  
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Dafater</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>

            </div>
            )}
  
  {selectedCompanies.includes(5) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Add</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
  )}
  
  {selectedCompanies.includes(6) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Vom</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  {selectedCompanies.includes(7) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>McLedger</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  

  

  

          </div>
            </div>
  
            
       
          </div>

          <div className="md:col-span-4 border p-4 bg-white">
            <h2 className="text-lg font-semibold mb-4">Feature Comparison</h2>
     {/* Preservation Section 1 */}
     <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">% of features in the software</h3>
          <div className='flex flex-row'>
            {selectedCompanies.includes(1) && (
   <div className='w-1/4' style={{'marginLeft':'100px'}} style={{'marginLeft':'100px'}}>
   <h2 className='font-bold'>Xero</h2>
   <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
            )}
  
  {selectedCompanies.includes(2) && (
        <div className='w-1/4' style={{'marginLeft':'100px'}}>
        <h2 className='font-bold'>QuickBooks</h2>
        <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
      
      </div> 
  )}
           {selectedCompanies.includes(3) && (
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Qoyod</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
             
            </div>
           )}
            {selectedCompanies.includes(4) && (
  
            <div className='w-1/4' style={{'marginLeft':'100px'}}>
              <h2 className='font-bold'>Dafater</h2>
              <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>

            </div>
            )}
  
  {selectedCompanies.includes(5) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Add</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
   
  </div>
  )}
  
  {selectedCompanies.includes(6) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>Vom</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  {selectedCompanies.includes(7) && (
  
  <div className='w-1/4' style={{'marginLeft':'100px'}}>
    <h2 className='font-bold'>McLedger</h2>
    <ul>
   <li className='flex gap-2 mb-1 '>
          <FaCheckCircle color='#00E6A7' size={24}/>
          example
        </li>
   </ul>
  
  </div>
  )}
  
  
  

  

  

          </div>
            </div>
  
            
       
          </div>

            </div>


            
  
          {/* Add Company Button */}
        
  
        
  
          
        </div>
  
      
      </div>
    );
  
}

export default AccountingTable