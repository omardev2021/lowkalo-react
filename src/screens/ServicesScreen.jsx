import React, { useState, useEffect, useRef } from 'react';
import { useGetServicesQuery } from '../slices/servicesApiSlice';
import { BASE_URL } from '../constants';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Loader from '../components/Loader';
import Meta from '../components/Meta';
import hero3 from '../assets/images/low3.png'


import { createRef } from 'react';

function ServicesScreen() {

    const {
        data,
        isLoading,
        error,
      } = useGetServicesQuery();
      const { t ,i18n} = useTranslation();
      const [selectedOrigin, setSelectedOrigin] = useState(null);

      const [activeService, setActiveService] = useState(null);
      const serviceRefs = useRef([]);

      const [showAll, setShowAll] = useState(false);
      
    
      const toggleShowAll = () => {
        setShowAll(!showAll);
      };
    
      // Initialize refs array to match the number of services
      useEffect(() => {
        if (data && data.data) {
          serviceRefs.current = data.data.map((_, i) => serviceRefs.current[i] ?? createRef());
        }
      }, [data]);
    
      // Scroll event listener to update active service
      useEffect(() => {
        const handleScroll = () => {
          const offsets = serviceRefs.current.map((ref) => {
            if (ref.current) {
              return ref.current.getBoundingClientRect().top + window.scrollY;
            }
            return null;
          });
    
          const pageOffset = window.scrollY + window.innerHeight / 2; // Adjust as needed
          const activeIndex = offsets.findIndex((offset, index) => {
            if (index < offsets.length - 1) {
              return pageOffset >= offset && pageOffset < offsets[index + 1];
            }
            return pageOffset >= offset;
          });
    
          setActiveService(activeIndex);
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialize on component mount
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [data]);

      
 if(isLoading) {
   return (
     <>
          <header className="TOP-SERVICES bg-softBlue p-10 h-60 relative">
      <h1 className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold leading-tight">
      {t('ser')}
        <br />
        <hr className="opacity-100 bg-softRed w-20 mx-auto mt-4 h-2 border-4" />
      </h1>
    </header>
    <div className="flex flex-col md:flex-row p-5 items-center" >
    <div className="spinner  mx-auto" />
      </div>
     </>
   )
 }
// if(isLoading) {
//   return (
//     <Loader className='p-5'/>
//   )
// }
  return (
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
                 <Meta title={t('servicesTitle')} />

         <header className="TOP-SERVICES bg-softBlue p-10 h-60 relative">
      <h1 className="text-white font-dela absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold leading-tight">
      {t('ser')}
        <br />
        <hr className="opacity-100 bg-softRed w-20 mx-auto mt-4 h-2 border-4" />
      </h1>
    </header>
  
         <div className="flex flex-col md:flex-row p-5 relative" >

         <div className="w-1/4 p-4 mt-4 md:sticky md:top-0 ">
      <div className="md:sticky md:top-10">
        <h2 className="my-6 text-4xl text-veryDarkBlue font-semibold font-dela">
          {t('cat')}
        </h2>
        <ul>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <div>{error?.data.message || error.error}</div>
          ) : (
            data.data.map((service, index) => (
              <a key={index} href={`#service-${index}`}>
                <li
                  className={`flex items-center gap-2 ${
                    activeService === index
                      ? 'text-softBlue font-bold'
                      : 'text-gray-800'
                  } hover:text-softBlue cursor-pointer`}
                >
                  {activeService === index && (
                    <span className="text-softBlue">●</span>
                  )}
                  {i18n.language === 'en'
                    ? service.name
                    : service.name_ar}
                </li>
              </a>
            )).slice(0, showAll ? data.data.length : 15) // Slicing based on showAll state
          )}
        </ul>
        {data.data.length > 5 && (
          <button
            onClick={toggleShowAll}
            className="text-gray-500 hover:text-gray-800 flex items-center mt-2"
          >
            <span className="mr-2">
              {showAll ? 'Show Less' : 'Show More'}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 6.293a1 1 0 011.414 0L10 8.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414zM10 16a1 1 0 01-1-1V5a1 1 0 112 0v10a1 1 0 01-1 1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </div>

    <div className="w-full md:w-3/4  p-4  mt-4">
      <div className='flex flex-col md:flex-row md:flex-wrap '>

      {isLoading ? (
     <Loader />
      ) : error ? (
        <div>{error?.data.message || error.error}</div>
      ) : (
            data.data.map((service,index) => (
              <div key={service.id} id={`service-${index}`} ref={serviceRefs.current[index]} className="flex flex-col lg:flex-row items-center lg:space-x-7 mb-10 ">
              <div className="lg:w-1/2">
              <div style={{ position: 'sticky', top: '20px' }}>
                <img src={service?.image_path ? `${BASE_URL}${service.image_path}` : hero3} alt="Point Of Sale" className="mx-auto" />
              </div>
            </div>
            <div className="flex flex-col space-y-6 lg:w-1/2">
              
              <h3 className={`text-3xl font-dela font-semibold text-center ${i18n.language === 'en' ? 'lg:text-left' : 'lg:text-right'}`}>
              <span className='text-sm text-purpleCustom font-dela'>{t('front')}</span>
              <br />
                {i18n.language === 'en' ? service.name : service.name_ar}
              </h3>
              <p className={`text-lg text-center multi-line-ellipsis ${i18n.language === 'en' ? 'lg:text-left' : 'lg:text-right'}`}>
              {i18n.language === 'en' ? service.body : service.body_ar}   </p>
              <div className={`text-center ${i18n.language === 'en' ? 'lg:text-left' : 'lg:text-right'}`}>
                <Link
                  to={`/services/${service.type}/${service.slug}`}
                  className="px-6 py-3 font-semibold text-white bg-softBlue rounded-lg hover:bg-white hover:text-softBlue hover:border-softBlue border-2 border-transparent hover:border-2"
                >
                  <span className='font-semibold'>{service.name}</span> companies
                </Link>
              </div>
            </div>
              </div>

                ))
                )}
    
  

 

        
      </div>
    </div>
    </div>
    </div>
  )
}

export default ServicesScreen