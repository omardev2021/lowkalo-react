import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link , useNavigate } from 'react-router-dom';
import ModalComponent from './ModalComponent';
import { useSelector , useDispatch} from 'react-redux';
import LanguageSelector from './LanguageSelector';
import logo from '../assets/images/lowkalo.png'
import logoWhite from '../assets/images/lowkalo-white.png'
import RegisterModal from './RegisterModal';
import { logout } from '../slices/authSlice';
import AdvancedDropdown from './AdvancedDropdown';





function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const { t, i18n } = useTranslation();
    const { authInfo } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleLogout = () => {
      navigate('/')
      dispatch(logout());
      toggleMenu()
    };
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };



    const close = () => {
      setShowModal(false);
    };

    const show = () => {
      setShowModal(true);
    };

    const close2 = () => {
      setShowModal2(false);
    };

    const show2 = () => {
      setShowModal2(true);
    };

    const handleMobileLogin = () => {
      setIsMenuOpen(false)
      setShowModal(true)
    }

    const handleMobileRgister = () => {
      setIsMenuOpen(false)
      setShowModal2(true)
    }
  return (
    <nav className="container relative mx-auto p-6 sticky" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
    <div className="flex items-center justify-between space-x-20 my-6">
      <div className="z-30">
          {/* <h1 className='font-bold text-veryDarkBlue text-2xl'>Lowkalo</h1> */}
          <Link to={'/'}>
          <img src={isMenuOpen ? logoWhite : logo} width={200} alt="Logo" id="logo" />

          </Link>
      </div>
      <div className={`hidden items-center space-x-6 uppercase text-grayishBlue md:flex `}>
  <Link to={'/'} className={`text-veryDarkBlue font-bold hover:text-softRed ${i18n.language === 'ar' ? 'ml-5' : ''}`}>
    {t('header1')}
  </Link>

  <Link to={'/course'} className="text-veryDarkBlue font-bold hover:text-softRed">
    {t('header2')}
  </Link>

  <Link to={'/services'} className="text-veryDarkBlue font-bold hover:text-softRed">
    {t('header3')}
  </Link>
</div>
<div className={`hidden space-x-3 md:flex items-center `}>
  {authInfo ? (
     <>
    
     <AdvancedDropdown />
     {authInfo.user.subscribed === 5 && (
         <Link to={'/lessons/1'} className="px-5 py-2 text-white bg-softBlue border-2 border-softBlue rounded-lg shadow-md hover:text-softBlue hover:bg-white">
         {t('watchNow')}
       </Link>
     )}
     <LanguageSelector />
   </>
  ) : (
    <>
      <button onClick={show} className={`px-5 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white ${i18n.language === 'ar' ? 'ml-3' : ''}`}>
        {t('header4')}
      </button>
      <button onClick={show2} className="px-5 py-2 text-white bg-softBlue border-2 border-softBlue rounded-lg shadow-md hover:text-softBlue hover:bg-white">
        {t('header10')}
      </button>
      <LanguageSelector />
    </>
  )}
</div>
      <button id="menu-btn" className={`z-30 block md:hidden focus:outline-none hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </div>
    <div id="menu" className={`fixed inset-0 z-20 ${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue`}>
      <div className="w-full py-3 text-center">
        <Link to={'/'} className="block hover:text-softRed" onClick={toggleMenu}>{t('header1')}</Link>
      </div>
      <div className="w-full py-3 text-center">
        <Link to={'/course'} className="block hover:text-softRed" onClick={toggleMenu}>{t('header2')}</Link>
      </div>
      <div className="w-full py-3 text-center">
        <Link to={'/services'} className="block hover:text-softRed" onClick={toggleMenu}>{t('header3')}</Link>
      </div>
      {authInfo ? (
        <>
      
      {authInfo.user.subscribed === 5 && (
        

<div className="w-full py-3 text-center">
<Link to={'/lessons/1'} className="block hover:text-softRed" onClick={toggleMenu}>{t('watchNow')}</Link>
</div>
     )}

<div className="w-full py-3 text-center" >
        <Link to={'/profile'} className="block hover:text-softRed" onClick={toggleMenu}>{t('myAccount')}</Link>
      </div>



      <div className="w-full py-3 text-center" >
        <Link  className="block hover:text-softRed"  onClick={handleLogout}>{t('logout')}</Link>
      </div>

      
      <LanguageSelector />
      </>
      ) : (
<>
<div className="w-full py-3 text-center" onClick={handleMobileLogin}>
        <Link className="block hover:text-softRed" >{t('header4')}</Link>
      </div>
      <div className="w-full py-3 text-center" onClick={handleMobileRgister}>
        <Link lassName="block hover:text-softRed">{t('header10')}</Link>
      </div>
      <LanguageSelector />
</>
      )}
    
    </div>

    <ModalComponent showModal={showModal} close={close}/>
    <RegisterModal showModal={showModal2} close={close2}/>

  </nav>
  )
}

export default Header