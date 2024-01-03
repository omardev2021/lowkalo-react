import React , {useState , useEffect} from 'react'
import loginImage from '../assets/images/loginm.png'
import { setCredentials } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useRequestLoginMutation } from '../slices/userApiSlice';
import { useLoginMutation } from '../slices/userApiSlice';
import {  useNavigate } from 'react-router-dom';


import { useTranslation } from 'react-i18next';



const ModalComponent = ({ showModal , close }) => {
    const [emailMode, setEmailMode] = useState(true);
    const [otp, setOtp] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { authInfo } = useSelector((state) => state.auth);
    const { t ,i18n} = useTranslation();



    const [email, setEmail] = useState('');
    const [requestLogin, { isLoading, error }] = useRequestLoginMutation();
    const [login, { isLoading:isLoading2, error2 }] = useLoginMutation();


    // useEffect(() => {
    //     if (userInfo) {
    //       navigate('/');
    //     }
    //   }, [navigate, userInfo]);


    const sendOtp = async (e) => {
        try {
            e.preventDefault();
            await requestLogin({
              email,
             
            }).unwrap();
      
         setEmailMode(false);
           
          
          } catch (err) {
            
            if(i18n.language === 'en') {
              toast.error('please check your email');

            } else {
              toast.error('الرجاء التحقق من البريد الالكتروني');

            }
          }

    };
    
    const loginHandler = async (e) => {
        try {
            e.preventDefault();
            const res = await login({
              email,
              otp
             
            }).unwrap();
      
      dispatch(setCredentials({ ...res }));
      
      close();
      window.location.reload(false);
          } catch (err) {
            if(i18n.language === 'en') {
              toast.error('otp is not correct');

            } else {
              toast.error('رمز التحقق غير صحيح');

            }
          }

    };
  return (
    <>
      {showModal && (
     <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-black flex items-center justify-center" style={{ zIndex: '1000' }} >
     <div className="bg-white w-96 h-96 p-10 rounded-lg relative flex flex-col items-center justify-center">
     <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
              onClick={close}
            >
              <FaTimes />
            </button>
       <div className="justify-center">
         <img src={loginImage} alt="User" width="60" className="text-center" />
       </div>
       <h5 className="py-3 text-center">{t('authModal1')}</h5>
         <div className="mb-3">
             {emailMode && (
                 <form onSubmit={sendOtp}>
                <label htmlFor="">{t('authModal2')}</label>
                <input
                     type="email"
                     name="email"
                     className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500 shadow-md"
                  placeholder={t('authModal5')}
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}

                   />
                        <div className="flex items-center justify-center mt-3">
                          {isLoading ? (
    <button type='submit' className="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">
    <div className='spinner'/>
  </button>
                          ) : (
                            <button type='submit' className="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">
                            {t('authModal3')}
                          </button>
                          )}
  
    </div>
                   </form>
             )
             }

{!emailMode && (
                 <form onSubmit={loginHandler}>
                <label htmlFor="">{t('authModal6')}</label>
                <input
                     type="text"
                     name="otp"
                     className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500 shadow-md"
                     placeholder={t('authModal7')}
                     value={otp}
                     onChange={(e) => setOtp(e.target.value)}
                   />
                        <div className="flex items-center justify-center mt-3">
                        {isLoading2 ? (
    <button type='submit' className="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">
    <div className='spinner'/>
  </button>
                          ) : (
                            <button type='submit' className="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">
                            {t('authModal3')}
                          </button>
                          )}
    </div>
                   </form>

             )
             }
          
           {/* Displaying validation error */}
           {/* {errors.email && <span className="text-danger">{errors.email}</span>} */}
         </div>
         
    

     </div>
   </div>
      )}
    </>
  );
};

export default ModalComponent;
