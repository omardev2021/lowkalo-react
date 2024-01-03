import React, { useState } from 'react';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import { logout } from '../slices/authSlice';


const AdvancedDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const { authInfo } = useSelector((state) => state.auth);

    const handleLogout = () => {

        dispatch(logout());
      };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative inline-block mt-2 ${i18n.language === 'ar' ? 'ml-5' : ''}`}>
      <button onClick={handleToggle} className="text-white focus:outline-none">
        <FaUser className="text-xl" size={30} color='#150a42'/>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md " style={{'z-index':'1000'}}>
          <Link
           to={'/profile'}
            className="block px-4 py-2 hover:bg-gray-200"
      
          >
            {t('myAccount')}
          </Link>
          <Link
           
            className="block px-4 py-2 hover:bg-gray-200"
            onClick={handleLogout}
          >
            {t('logout')}
          </Link>
          {authInfo.user.role_id === 17 && (
  <Link
  to={'/admin/reviews'}  
  className="block px-4 py-2 hover:bg-gray-200"

>
  Admin
</Link>
          )}
        
        </div>
      )}
    </div>
  );
};

export default AdvancedDropdown;