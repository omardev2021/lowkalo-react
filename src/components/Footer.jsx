import React from 'react'
import en from '../assets/images/en.png'
import logoWhite from '../assets/images/lowkalo-white.png'
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
    <div className="container-fluid mx-auto">
      <div className="flex flex-wrap items-center bg-lightBlue text-white p-5">
        {/* ... (other content) */}
        <div className={`w-full sm:w-1/2 lg:w-1/4 text-center ${i18n.language === 'en' ? 'sm:text-left' : 'sm:text-right'} `}>
          <div className="footer-content my-5">
          <img src={logoWhite} width={200} alt="Logo" id="logo" />

            <a href="mailto:info@lowkalo.com" className="mb-4">
              info@lowkalo.com <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          
          </div>
        </div>
        <div className={`w-full sm:w-1/2 lg:w-1/4 text-center ${i18n.language === 'en' ? 'sm:text-left' : 'sm:text-right'} `}>
          <div className="footer-content my-5">
            <ul className="font-semibold">
              <li>{t('pages')}</li>
              <li><Link to={'/'}>{t('home')}</Link></li>
              <li><Link to={'/services'}>{t('about')}</Link></li>
              <li><Link to={'/course'}>{t('contact')}</Link></li>
            </ul>
          </div>
        </div>
        <div className={`w-full sm:w-1/2 lg:w-1/4 text-center ${i18n.language === 'en' ? 'sm:text-left' : 'sm:text-right'} `}>
          <div className="footer-content my-5">
            <ul className="font-semibold">
              <li>{t('services')}</li>
              <li><Link to={'/course'}>{t('courses')}</Link></li>
              <li><Link to={'/services'}>{t('consultations')}</Link></li>
            </ul>
          </div>
        </div>
        <div className={`w-full sm:w-1/2 lg:w-1/4 text-center ${i18n.language === 'en' ? 'sm:text-left' : 'sm:text-right'}`}>
      <div className="footer-content my-5">
        <ul className="font-semibold">
        <li>{t('joinUs')}</li>
        <li className='flex '>
        <FaFacebook className="mr-2" />
        <FaTwitter className="mr-2" /> 
        <FaInstagram className="mr-2" />
        </li>
     
        </ul>
      </div>
    </div>
        {/* ... (other content) */}
        <div className="paymentMethod mx-auto">
          <img
            src={en}
            style={{ maxWidth: '350px' }}
            alt={t('languageSelection')}
          />
        </div>
      </div>
  
      <div className="text-center p-3" style={{ backgroundColor: '#4115BA' }}>
        <span style={{ fontSize: '16px', color: '#E0F8F6' }}>
          {t('rightsReserved')}
        </span>
      </div>
    </div>
  </footer>
  )
}

export default Footer