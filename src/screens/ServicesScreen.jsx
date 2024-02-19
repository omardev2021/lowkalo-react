import React,{useState} from 'react'
import { useGetServicesQuery } from '../slices/servicesApiSlice';
import { BASE_URL } from '../constants';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Loader from '../components/Loader';
import { FaStar } from 'react-icons/fa';
import Meta from '../components/Meta';
import hero3 from '../assets/images/low3.png'
import hero2 from '../assets/images/low2.png'
import hero4 from '../assets/images/low4.png'
import hero5 from '../assets/images/low5.png'

function ServicesScreen() {

    const {
        data,
        isLoading,
        error,
      } = useGetServicesQuery();
      const { t ,i18n} = useTranslation();
      const [selectedOrigin, setSelectedOrigin] = useState(null);


 if(isLoading) {
   return (
     <>
          <header className="TOP-SERVICES bg-softBlue p-12 h-80 relative">
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

         <header className="TOP-SERVICES bg-softBlue p-12 h-80 relative">
      <h1 className="text-white font-dela absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold leading-tight">
      {t('ser')}
        <br />
        <hr className="opacity-100 bg-softRed w-20 mx-auto mt-4 h-2 border-4" />
      </h1>
    </header>
  
         <div className="flex flex-col md:flex-row p-5 relative" >

<div className="w-1/4  p-4  mt-4 sticky top-0">
    {/* <div className='flex space-x-3'>
    <button  className={`p-4 text-sm font-semibold ${i18n.language === 'ar' ? 'ml-3' : ''}  rounded shadow-md  border-softBlue md:text-base  ${selectedOrigin === null ? 'text-white bg-softBlue ' : 'bg-white text-softBlue'}`} onClick={()=> setSelectedOrigin(null)}>
    {t('all')}
  </button>
  <button  className={`p-4 text-sm font-semibold ${selectedOrigin === 'ksa' ? 'text-white bg-softBlue ' : 'bg-white text-softBlue'} rounded shadow-md  md:text-base `} onClick={()=> setSelectedOrigin('ksa')}>
  {t('ksa')}
  </button>
  <button  className={`p-4 text-sm font-semibold ${selectedOrigin === 'uae' ? 'text-white bg-softBlue ' : 'bg-white text-softBlue'} rounded shadow-md  md:text-base `} onClick={()=> setSelectedOrigin('uae')}>
  {t('uae')}
  </button>
  <button  className={`p-4 text-sm font-semibold ${selectedOrigin === 'kw' ? 'text-white bg-softBlue ' : 'bg-white text-softBlue'} rounded shadow-md  md:text-base `} onClick={()=> setSelectedOrigin('kw')}>
  {t('kw')}
  </button>
 
    </div> */}
<div className='sticky top-10'>
    <h2 className="my-6 text-4xl text-veryDarkBlue font-semibold font-dela"> {t('cat')}
</h2>
<ul >
{isLoading ? (
     <Loader />
      ) : error ? (
        <div>{error?.data.message || error.error}</div>
      ) : (
            data.data.map((service) => (
              <Link to={`/services/${service.type}/${service.slug}`}>
                <li >{i18n.language === 'en' ? service.name : service.name_ar}</li>
                </Link>

                ))
                )}
</ul>
</div>

    </div>

    <div className="w-full md:w-3/4  p-4  mt-4">
      <div className='flex flex-col md:flex-row md:flex-wrap '>
    
      <div id='pos' className="flex flex-col lg:flex-row items-center lg:space-x-7 mb-10 ">
        <div className="lg:w-1/2">
        <div style={{ position: 'sticky', top: '20px' }}>
          <img src={hero3} alt="Point Of Sale" className="mx-auto" />
        </div>
      </div>
      <div className="flex flex-col space-y-6 lg:w-1/2">
        
        <h3 className="text-3xl font-dela font-semibold text-center lg:text-left">
        <span className='text-sm text-purpleCustom font-dela'>Front of house</span>
        <br />
          Point Of Sale (POS)
        </h3>
        <p className="text-lg text-center lg:text-left">
        A POS is the point in your restaurant where you make a sale. It’s   designed to facilitate sales transactions at the point of purchase,  process payment, manage table, and  manage restaurants inventory beside many more .         </p>
        <div className="text-center lg:text-left">
          <Link
            to={'/services/front-of-house/point-of-sale'}
            className="px-6 py-3 font-semibold text-white bg-softBlue rounded-lg hover:bg-white hover:text-softBlue hover:border-softBlue border-2 border-transparent hover:border-2"
          >
            Learn about point of sale companies
          </Link>
        </div>
      </div>
        </div>

        <div id='pos' className="flex flex-col lg:flex-row items-center lg:space-x-7 mb-10">
        <div className="lg:w-1/2">
        <div style={{ position: 'sticky', top: '20px' }}>
          <img src={hero4} alt="Point Of Sale" className="mx-auto" />
        </div>
      </div>
      <div className="flex flex-col space-y-6 lg:w-1/2">
        <h3 className="text-3xl font-dela font-semibold text-center lg:text-left">
        <span className='text-sm text-purpleCustom font-dela'>Front of house</span>
        <br />
        Accounting Software

        </h3>
        <p className="text-lg text-center lg:text-left">
        It includes all your accounting and finance processes, allowing you to track costs and expenses across various cost categories within your Profit and Loss statement (P&L).

</p>
        <div className="text-center lg:text-left">
          <Link
            to={'/services/front-of-house/accounting'}
            className="px-6 py-3 font-semibold text-white bg-softBlue rounded-lg hover:bg-white hover:text-softBlue hover:border-softBlue border-2 border-transparent hover:border-2"
          >
            Learn about accounting companies
          </Link>
        </div>
      </div>
        </div>

        <div id='pos' className="flex flex-col lg:flex-row items-center lg:space-x-7 mb-10">
        <div className="lg:w-1/2">
        <div style={{ position: 'sticky', top: '20px' }}>
          <img src={hero4} alt="Point Of Sale" className="mx-auto" />
        </div>
      </div>
      <div className="flex flex-col space-y-6 lg:w-1/2">
        <h3 className="text-3xl font-dela font-semibold text-center lg:text-left">
        <span className='text-sm text-purpleCustom font-dela'>Front of house</span>
        <br />
        Loyalty Programs

        </h3>
        <p className="text-lg text-center lg:text-left">
        A loyalty program implemented by businesses to encourage customers to make purchases and to retain them.

</p>
        <div className="text-center lg:text-left">
          <Link
            to={'/services/front-of-house/loyalty'}
            className="px-6 py-3 font-semibold text-white bg-softBlue rounded-lg hover:bg-white hover:text-softBlue hover:border-softBlue border-2 border-transparent hover:border-2"
          >
            Learn about loyalty programs 
          </Link>
        </div>
      </div>
        </div>


        <div id='pos' className="flex flex-col lg:flex-row items-center lg:space-x-7 mb-10">
        <div className="lg:w-1/2">
        <div style={{ position: 'sticky', top: '20px' }}>
          <img src={hero5} alt="Point Of Sale" className="mx-auto" />
        </div>
      </div>
      <div className="flex flex-col space-y-6 lg:w-1/2">
        <h3 className="text-3xl font-dela font-semibold text-center lg:text-left">
        <span className='text-sm text-purpleCustom font-dela'>Front of house</span>
        <br />
        Online  Ordering ( Websit   & Mobile App)

        </h3>
        <p className="text-lg text-center lg:text-left">
        online ordering software  allows restaurants to have their own branded applications and websites
</p>
        <div className="text-center lg:text-left">
          <Link
            to={'/services/front-of-house/loyalty'}
            className="px-6 py-3 font-semibold text-white bg-softBlue rounded-lg hover:bg-white hover:text-softBlue hover:border-softBlue border-2 border-transparent hover:border-2"
          >
            Learn about online ordering programs 
          </Link>
        </div>
      </div>
        </div>
        

        
      </div>
    </div>
    </div>
    </div>
  )
}

export default ServicesScreen