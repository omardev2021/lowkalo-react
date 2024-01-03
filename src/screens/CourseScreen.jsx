import React , {useState , useEffect } from 'react'
import en from '../assets/images/en.png'
import { useTranslation } from 'react-i18next';
import CourseAccordion from '../components/CourseAccordion';
import hero from '../assets/images/main-image.png'
import { useSelector , useDispatch} from 'react-redux';
import { useCreateOrderMutation } from '../slices/courseApiSlice';
import {  Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {FaCreditCard, FaTrash} from 'react-icons/fa';
import { setCoupon , removeCoupon} from '../slices/couponSlice';
import { useCheckMutation } from '../slices/couponApiSlice';


import Meta from '../components/Meta';

function CourseScreen() {

  const [couponCode, setCouponCode] = useState('');

  const [price, setPrice] = useState(75);


      const { t ,i18n} = useTranslation();
      const { authInfo } = useSelector((state) => state.auth);
      const [activeTab, setActiveTab] = useState('panel-1');

      const [order, { isLoading }] = useCreateOrderMutation();

      const [check] = useCheckMutation();

      const dispatch = useDispatch();
      const {discountInfo} = useSelector((state) => state.discount);

      const handleRemove = () => {
        dispatch(removeCoupon());
      }


      const handleTabClick = (tab) => {
        setActiveTab(tab);
      };

      const handleOrder = async () => {
        try {
          console.log(price);
          
            const res = await order({price}).unwrap();
      console.log(res.payment);

    //   navigate(res.data.payment);
    window.location.href = res.payment;

       
          
          } catch (err) {
            
            toast.error(err.message);
          }
      }




  const handleApplyCoupon = async () => {
    try {
      // Add logic to apply the coupon
      const res = await check({coupon:couponCode}).unwrap();
      dispatch(setCoupon({ ...res }));
      if(i18n.language === 'en') {
        toast.success('coupon applied successfully.');

      } else {
        toast.success('تم تطبيق الكوبون بنجاح');

      }
      // You can add further logic here, e.g., make an API call to validate the coupon
    } catch (error) {
      if(i18n.language === 'en') {
        toast.error('Coupon is incorrect');
 
      } else {
        toast.error('الكوبون غير صحيح');
      }
    }
  };




  useEffect(() => {
    if(discountInfo) {
      const dis = discountInfo.coupon_discount
      const amount = 75 * dis /100
      const last = 75 - amount
      setPrice(last);
            
    } else {
      setPrice(75)
    }
    
  }, [discountInfo]);

  return (
    <div>
           <Meta title={t('courseTitle')} />

           <div className="container-fluid box text-center w-50">
      <h1 className="text-3xl font-semibold text-veryDarkBlue  ">{t('cou1')}</h1>
    </div>

    <div className="flex flex-col md:flex-row p-5" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>

    <div className="w-full md:w-3/4  p-4  mt-4">

    <div className="flex">
  <div className="w-1/2">
    <div className="flex">
      <div className="w-1/3 mr-5">
        <h5 className="text-co">{t('cou2')}</h5>
        <p className="text-co2">{t('cou3')}</p>
      </div>
      <div className="w-1/3 ">
        <h5 className="text-co">{t('cou4')}</h5>
        <p className="text-co2">{t('cou5')}</p>
      </div>
      <div className="w-1/3">
        <h5 className="text-co">{t('cou6')}</h5>
        <p className="text-co2">{t('cou7')}</p>
      </div>
    </div>
  </div>
  <div className="w-1/2">
    {/* Content for the second column */}
  </div>
</div>

<div className="flex flex-row justify-center mt-5 w-100 mb-6 gap-4 border-b md:space-x-10 md:flex-row">
          <div
            className={`flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab ${activeTab === 'panel-1' ? 'sm:border-softRed sm:border-b-4 md:border-softRed md:border-b-4' : ''}`}
            data-target="panel-1"
            onClick={() => handleTabClick('panel-1')}
          >
            <div className="py-5 " data-target="panel-1">
            {t('cou8')}
            </div>
          </div>
          <div
            className={`flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab ${activeTab === 'panel-2' ? 'sm:border-softRed sm:border-b-4 md:border-softRed md:border-b-4' : ''}`}
            data-target="panel-2"
            onClick={() => handleTabClick('panel-2')}
          >
            <div className="py-5" data-target="panel-2">
            {t('cou9')}
            </div>
          </div>
          <div
            className={`flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab ${activeTab === 'panel-3' ? 'sm:border-softRed sm:border-b-4 md:border-softRed md:border-b-4' : ''}`}
            data-target="panel-3"
            onClick={() => handleTabClick('panel-3')}
          >
            <div className="py-5" data-target="panel-3">
            {t('cou10')}
            </div>
          </div>
        </div>


        <div id="panels" className="container ">
          <div
            className={` p-5   panel panel-1 ${activeTab === 'panel-1' ? '' : 'hidden'}`}
          >
       <h1 className="text-3xl font-semibold text-veryDarkBlue  ">{t('cou11')}
</h1>

<img
          src={en}
          style={{ maxWidth: '350px' }}
          className=''
          alt="Language Selection"
        />


          </div>
          <div
            className={`py-5 p-5  panel panel-2 ${activeTab === 'panel-2' ? '' : 'hidden'}`}
          >
        <h4 className="font-bold text-2xl text-veryDarkBlue">{t('aboutCourse')}</h4>
      <p className="text-gray-500">{t('importantElements')}</p>

      <h4 className="font-bold text-2xl text-veryDarkBlue">{t('courseTopics')}</h4>
      <ul className="list-disc mx-4 text-gray-500">
        {t('courseTopicsList', { returnObjects: true }).map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>

      <br />

      <h4 className="font-bold text-2xl text-veryDarkBlue">{t('requirements')}</h4>
      <p className="text-gray-500">{t('requirementsDetails')}</p>

      <br />

      <h4 className="font-bold text-2xl text-veryDarkBlue">{t('forWhom')}</h4>
      <ul className="list-disc mx-3 text-gray-500">
        {t('forWhomList', { returnObjects: true }).map((audience, index) => (
          <li key={index}>{audience}</li>
        ))}
      </ul>
           
          </div>
          <div
            className={` py-5  panel panel-3 ${activeTab === 'panel-3' ? '' : 'hidden'}`}
          >
         
    <CourseAccordion />
          </div>
        </div>
    </div>

    <div className="w-full md:w-1/4  p-4   mt-4">
        {/* right side */}
    <div className="card bg-white  shadow-xl text-center mx-auto mt-12 w-80 px-3 py-5 rounded-lg" >
      <img src={hero} className="card-img-top" alt="Course cover" />
      <div className="card-body">
        <h5 className="text-xl font-bold my-5">{t('courseName')}</h5>
       
        


    
        {authInfo ? (
  <>
    {(authInfo.user.subscribed === 5) ? (
      // Content to display when authInfo is true and user.type is 13
      <Link to={'/lessons/1'} className="p-4 flex items-center justify-center text-md w-full mt-10 font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">
        
        {t('watchNow')}
      </Link>
    ) : (
      <>
      {discountInfo ? (
        <>
<div className="flex items-center mx-auto justify-center">
  <span className="text-2xl font-bold my-5 text-veryDarkBlue line-through">75 {t('sar')}</span>
  <span className="ml-2"><FaTrash color='black' onClick={handleRemove}/></span>
</div>      
          <span className="text-2xl font-bold my-5 text-veryDarkBlue">{price} {t('sar')}</span>
          <div className=" mb-3">
        <input
          type="text"
          className="form-control discount w-2/3 border p-1"
          placeholder={t('couponInfo')}
          id="coupon_name2"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}

        />
        <button className=" w-1/3 p-2 my-5 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-sm hover:bg-white hover:text-gray-600"   onClick={handleApplyCoupon}>
          {t('apply')}
        </button>
      </div>
        </>
      ) : (
        <>
        <span className="text-2xl font-bold my-5 text-veryDarkBlue">{price} {t('sar')}</span>
        <div className=" mb-3">
        <input
          type="text"
          className="form-control discount w-2/3 border p-1"
          placeholder={t('couponInfo')}
          id="coupon_name2"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}

        />
        <button className=" w-1/3 p-2 my-5 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-sm hover:bg-white hover:text-gray-600"   onClick={handleApplyCoupon}>
          {t('apply')}
        </button>
      </div>
      </>
      )}
      {isLoading ? (
  <button onClick={handleOrder} className="p-4 flex items-center justify-center text-md w-full mt-10 font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">
   <div className="spinner" />
</button>
      ) : (
        <button onClick={handleOrder} className="p-4 flex items-center justify-center text-md w-full mt-10 font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">
        <FaCreditCard className='mr-2'/>
        {t('cou18')} 
      </button>
      )}
          
      </>
    )}
  </>
) : (
  // Content to display when authInfo is not true
  <>
   {discountInfo ? (
          <>
<div className="flex items-center mx-auto justify-center">
  <span className="text-2xl font-bold my-5 text-veryDarkBlue line-through">75 {t('sar')}</span>
  <span className="ml-2"><FaTrash color='black' onClick={handleRemove}/></span>
</div>      
            <span className="text-2xl font-bold my-5 text-veryDarkBlue">{price} {t('sar')} </span>
            
            <div className=" mb-3">
          <input
            type="text"
            className="form-control discount w-2/3 border p-1"
            placeholder={t('couponInfo')}
            id="coupon_name2"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}

          />
          <button className=" w-1/3 p-2 my-5 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-sm hover:bg-white hover:text-gray-600"   onClick={handleApplyCoupon}>
            {t('apply')}
          </button>
        </div>
          </>
        ) : (
          <>
          <span className="text-2xl font-bold my-5 text-veryDarkBlue">{price} {t('sar')}</span>
          <div className=" mb-3">
          <input
            type="text"
            className="form-control discount w-2/3 border p-1"
            placeholder={t('couponInfo')}
            id="coupon_name2"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}

          />
          <button className=" w-1/3 p-2 my-5 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-sm hover:bg-white hover:text-gray-600"   onClick={handleApplyCoupon}>
            {t('apply')}
          </button>
        </div>
        </>
        )}
    <button onClick={handleOrder} disabled className="p-4 flex items-center justify-center text-md w-full mt-10 font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue cursor-not-allowed">
      <FaCreditCard className='mr-2'/>
      {t('cou18')}
    </button>
    <br />
    <span style={{color:'red'}}>Please login first to complete the payment</span>
  </>
)}
 



    
      </div>
    </div>
</div>

        </div>
    </div>
  )
}

export default CourseScreen