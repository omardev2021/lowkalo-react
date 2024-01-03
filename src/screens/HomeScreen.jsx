import React, { useState } from 'react';
import hero from '../assets/images/main-image.png'
import logos from '../assets/images/logos.png'
import qu from '../assets/images/qu.jpeg'
import daf from '../assets/images/daf.png'
import xero from '../assets/images/xero.webp'
import FAQ from '../components/FAQ';
import { useTranslation } from 'react-i18next';
import { useGetServicesQuery } from '../slices/servicesApiSlice';
import Loader from '../components/Loader';
import { BASE_URL } from '../constants';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

import {  useNewsletterMutation} from '../slices/userApiSlice';
import { toast } from 'react-toastify';
import Meta from '../components/Meta';



function HomeScreen() {
    const [activeTab, setActiveTab] = useState('panel-1');
    const { t ,i18n} = useTranslation();
    const [newsLetter, { isLoading:isLoading20 }] = useNewsletterMutation();
    const [email,setEmail] = useState('')

    const {
      data,
      isLoading,
      error,
    } = useGetServicesQuery();


    const letterHandler = async (e) => {
      e.preventDefault()
      try {
    
          const res = await newsLetter({
            email
          }).unwrap();
    console.log(res)
        
    toast.success(res);   

        } catch (err) {
          toast.error('You have already subscribed to our newsletter');
         
          
        }
  }

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  return (
    <>
     <Meta title={t('metaTitle')} description={t('metaDes')}/>
 <section id="hero" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
 
 {i18n.language === 'ar' ? (

<div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
<div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
  <h1 className="text-3xl font-semibold text-veryDarkBlue  lg:text-6xl lg:text-righ">
  {t('hero1')}
  </h1>
  <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-right lg:mt-0 lg:mx-0">
  {t('hero2')}
</p>
  <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
    <Link to={'/course'} className="p-4 text-sm ml-3 font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">
    {t('hero3')}
    </Link>
    <Link to={'/services'} className="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600">
    {t('hero4')}
    </Link>
  </div>
</div>
<div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
  <div className="bg-hero-ar"></div>
  <img src={hero} alt="" className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible" />
</div>
</div>
 ) : (
  <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
  <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
    <h1 className="text-3xl font-semibold text-veryDarkBlue text-center lg:text-6xl lg:text-left">
    {t('hero1')}
    </h1>
    <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
    {t('hero2')}
 </p>
    <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
      <Link to={'/course'} className="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">
      {t('hero3')}
      </Link>
      <Link to={'/services'} className="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600">
      {t('hero4')}
      </Link>
    </div>
  </div>
  <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
    <div className="bg-hero"></div>
    <img src={hero} alt="" className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible" />
  </div>
</div>
 )}

   
    </section>

    <section id="features">
      <div className="container mx-auto mt-16 px-6">
        <h2 className="mb-6 text-4xl text-veryDarkBlue font-semibold text-center">{t('home1')}
</h2>
        <p className="max-w-md mx-auto text-center text-grayishBlue">
        {t('home2')}
</p>
      </div>
    </section>
    
    {i18n.language === 'ar' ? (
      <section id="tabs" dir="rtl">
      <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
        <div className="bg-tabs-ar"></div>
        <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
          <div
            className={`flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab ${activeTab === 'panel-1' ? 'sm:border-softRed sm:border-b-4 md:border-softRed md:border-b-4' : ''}`}
            data-target="panel-1"
            onClick={() => handleTabClick('panel-1')}
          >
            <div className="py-5 " data-target="panel-1">
            {t('home3')}
            </div>
          </div>
          <div
            className={`flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab ${activeTab === 'panel-2' ? 'sm:border-softRed sm:border-b-4 md:border-softRed md:border-b-4' : ''}`}
            data-target="panel-2"
            onClick={() => handleTabClick('panel-2')}
          >
            <div className="py-5" data-target="panel-2">
            {t('home4')}
            </div>
          </div>
          <div
            className={`flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab ${activeTab === 'panel-3' ? 'sm:border-softRed sm:border-b-4 md:border-softRed md:border-b-4' : ''}`}
            data-target="panel-3"
            onClick={() => handleTabClick('panel-3')}
          >
            <div className="py-5" data-target="panel-3">
            {t('home5')}
            </div>
          </div>
        </div>

        <div id="panels" className="container mx-auto">
          <div
            className={`flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1 ${activeTab === 'panel-1' ? '' : 'hidden'}`}
          >
            <div className="flex justify-center md:w-1/2">
              <img
                src={hero}
                alt=""
                className="relative z-10"
              />
            </div>
            <div className="flex flex-col space-y-8 md:w-1/2">
              <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-right">
              {t('home6')}

              </h3>
              <p className="max-w-md text-center text-grayishBlue md:text-right">
              {t('home7')}
              </p>
              <div className="mx-auto md:mx-0">
                <Link
                  to={'/course'}
                  className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                >
                  {t('more')}
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col py-5 md:flex-row md:space-x-7 panel panel-2 ${activeTab === 'panel-2' ? '' : 'hidden'}`}
          >
            <div className="flex justify-center md:w-1/2">
              <img
                src={logos}
                alt=""
                className="relative z-10"
              />
            </div>
            <div className="flex flex-col space-y-8 md:w-1/2">
              <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-right">
              {t('home8')}              </h3>
              <p className="max-w-md text-center text-grayishBlue md:text-right">
              {t('home9')}
</p>
              <div className="mx-auto md:mx-0">
                <Link
                   to={'/course'}
                  className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                >
                  {t('more')}
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col py-5 md:flex-row md:space-x-7 panel panel-3 ${activeTab === 'panel-3' ? '' : 'hidden'}`}
          >
            <div className="flex justify-center md:w-1/2">
              <img
                src="images/illustration-features-tab-3.svg"
                alt=""
                className="relative z-10"
              />
            </div>
            <div className="flex flex-col space-y-8 md:w-1/2">
              <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-right">
              {t('home10')}              </h3>
              <p className="max-w-md text-center text-grayishBlue md:text-right">
              {t('home11')}              </p>
              <div className="mx-auto md:mx-0">
                <Link
                  to={'/course'}
                  className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                >
                  {t('more')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    ) : (
      <section id="tabs" >
      <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
        <div className="bg-tabs"></div>
        <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
          <div
            className={`flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab ${activeTab === 'panel-1' ? 'sm:border-softRed sm:border-b-4 md:border-softRed md:border-b-4' : ''}`}
            data-target="panel-1"
            onClick={() => handleTabClick('panel-1')}
          >
            <div className="py-5 " data-target="panel-1">
            {t('home3')}
            </div>
          </div>
          <div
            className={`flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab ${activeTab === 'panel-2' ? 'sm:border-softRed sm:border-b-4 md:border-softRed md:border-b-4' : ''}`}
            data-target="panel-2"
            onClick={() => handleTabClick('panel-2')}
          >
            <div className="py-5" data-target="panel-2">
            {t('home4')}
            </div>
          </div>
          <div
            className={`flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab ${activeTab === 'panel-3' ? 'sm:border-softRed sm:border-b-4 md:border-softRed md:border-b-4' : ''}`}
            data-target="panel-3"
            onClick={() => handleTabClick('panel-3')}
          >
            <div className="py-5" data-target="panel-3">
            {t('home5')}
            </div>
          </div>
        </div>

        <div id="panels" className="container mx-auto">
          <div
            className={`flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1 ${activeTab === 'panel-1' ? '' : 'hidden'}`}
          >
            <div className="flex justify-center md:w-1/2">
              <img
                src={hero}
                alt=""
                className="relative z-10"
              />
            </div>
            <div className="flex flex-col space-y-8 md:w-1/2">
              <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
              {t('home6')}

              </h3>
              <p className="max-w-md text-center text-grayishBlue md:text-left">
              {t('home7')}
              </p>
              <div className="mx-auto md:mx-0">
                <Link
                   to={'/course'}
                  className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                >
                  {t('more')}
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col py-5 md:flex-row md:space-x-7 panel panel-2 ${activeTab === 'panel-2' ? '' : 'hidden'}`}
          >
            <div className="flex justify-center md:w-1/2">
              <img
                src={logos}
                alt=""
                className="relative z-10"
              />
            </div>
            <div className="flex flex-col space-y-8 md:w-1/2">
              <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
              {t('home8')}              </h3>
              <p className="max-w-md text-center text-grayishBlue md:text-left">
              {t('home9')}
</p>
              <div className="mx-auto md:mx-0">
                <Link
                  to={'/course'}
                  className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                >
                  {t('more')}
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col py-5 md:flex-row md:space-x-7 panel panel-3 ${activeTab === 'panel-3' ? '' : 'hidden'}`}
          >
            <div className="flex justify-center md:w-1/2">
              <img
                src="images/illustration-features-tab-3.svg"
                alt=""
                className="relative z-10"
              />
            </div>
            <div className="flex flex-col space-y-8 md:w-1/2">
              <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
              {t('home10')}              </h3>
              <p className="max-w-md text-center text-grayishBlue md:text-left">
              {t('home11')}              </p>
              <div className="mx-auto md:mx-0">
                <Link
             to={'/course'}
                  className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                >
                  {t('more')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )}
{/* dddd */}


    <section id="download" className="pb-16">
      <div className="container mx-auto px-6">
        <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
        {t('home12')}
        </h2>
        <p className="max-w-lg mx-auto text-center text-grayishBlue">
          {t('serTitle')}
        </p>
      </div>
    </section>

    <section id="download-boxes" >
      <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
        
         {isLoading ? (
          <Loader />
         ) : error ? (
           <div>{error?.data.message || error.error}</div>
         ) : (
        data.data.map((service,index) =>
        index < 2 && (
          <div className="flex flex-col bg-white w-full pb-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/2" dir={`${i18n.language === 'en' ? 'ltr' : 'rtl'}`}>
          {/* Image */}
          <div className=" bg-softBlue p-5">
            
          <h5 className={`text-xl font-bold text-white  ${i18n.language === 'en' ? 'text-left' : 'text-right'}`}>{i18n.language === 'en' ? service.name : service.name_ar}</h5>
               
               <p className={`${i18n.language === 'en' ? 'text-left' : 'text-right'} text-white pt-2`}>{i18n.language === 'en' ? service.short : service.short_ar}
</p>
      
          </div>
          {service.soluations.map((sol,index) =>
            index < 3 && (
              <>
            <div className='flex flex-row space-x-10'>
                <div className='w-1/3 p-5'>
                  <img src={`${BASE_URL}${sol.image_path}`} width='100' alt='' />
                </div>
                <div className='w-2/3 mt-10'>
                  <h5 className={`${i18n.language === 'en' ? 'text-left' : 'text-right'} font-bold text-x flex gap-1`}>
                    {i18n.language === 'en' ? sol.name : sol.name_ar}
                    <FaStar />{sol.average_rating.slice(0,3)}
                  </h5>
                  <p className={`${i18n.language === 'en' ? 'text-left' : 'text-right'} overflow-hidden whitespace-nowrap max-w-[200px] overflow-ellipsis`}>
                    {i18n.language === 'en' ? sol.body : sol.body_ar}
                  </p>
                </div>
              </div>
          
          <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize"></div>
          </>
            )
          
          )}

 

          
          
       
          



          {/* Dots */}
          <div className=" bg-repeat-x px-6 pt-6 capitalize">
            <Link
              to={`/services/${service.type}/${service.slug}`}
              className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softRed hover:text-black hover:bg-white border-softRed"
            >
              {t('browse')}
            </Link>
          </div>
        </div>

        )
        ))
        }
    

  
      </div>
    </section>

    <div className="flex justify-center items-center mt-10">
  <Link to={'/services'} className="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">
  {t('home13')}
  </Link>
</div>


   

    <FAQ />

    <section id="newsletter" className="bg-softBlue -mb-3">
      <div className="max-w-lg mx-auto py-24">
   
        <h2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl">
        {t('home14')}
        </h2>

        <form onSubmit={(e) => letterHandler(e)} className="flex flex-col items-start justify-center max-w-2xl mx-auto space-y-6 text-base px-6 md:flex-row md:space-y-0 md:space-x-4 md:px-0">
          <div className="flex flex-col justify-between items-center mx-auto md:flex-row md:mx-0">
            <input
              type="email"
              className="flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg border-1 border-white focus:outline-none md:mr-3 md:mb-0"
              placeholder={t('home15')}
              value={email} onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="submit"
              className="inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none bg-softRed hover:opacity-90"
              value={t('home16')}
            />
          </div>
        </form>
      </div>
    </section>
    
    </>
  )
}

export default HomeScreen