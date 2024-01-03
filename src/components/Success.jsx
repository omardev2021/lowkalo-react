import React from 'react'
import { Link } from 'react-router-dom';
import successImage from '../assets/images/success-image.png';
import { useTranslation } from 'react-i18next';


function Success() {
  const { t ,i18n} = useTranslation();

  return (
    <div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <img src={successImage} width={700} alt="Success" className=" mx-auto" />
      <h1 className="text-4xl font-semibold text-veryDarkBlue mb-4">{t('paymentSuccess.title')}</h1>
      <p className="text-gray-600 mb-8">{t('paymentSuccess.message')}</p>
      <div >
        <Link to="/" className="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue mr-2"> {t('paymentSuccess.goToHome')}</Link>
      
        <Link to="/lessons/1" className="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue"> {t('paymentSuccess.goToCourse')}</Link>


      </div>
    </div>
  </div>
  )
}

export default Success