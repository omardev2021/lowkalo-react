import React , {useState} from 'react'
import serviceImg from '../assets/images/service.webp'
import { Link } from 'react-router-dom';
import LoyaltyProgramsTable from '../components/LoyaltyProgramsTable';
import { useParams } from 'react-router-dom';
import { useGetServiceDetailsQuery } from '../slices/servicesApiSlice';

import { BASE_URL } from '../constants'
import { useTranslation } from 'react-i18next';
import { FaStar } from 'react-icons/fa';
import Loader from '../components/Loader';
import Meta from '../components/Meta';


function ServiceDetailScreen() {

    const { slug: serviceId } = useParams();
    const [selectedOrigin, setSelectedOrigin] = useState(null);

    const {
        data: service,
        isLoading,
        error,
      } = useGetServiceDetailsQuery(serviceId);
      const { t ,i18n} = useTranslation();
  return (
<div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
        {isLoading ? (
        <div  />
      ) : error ? (
        <div>{error?.data.message || error.error}</div>
      ) : (
           <>
           {i18n.language === 'en' ? (
             <Meta title={`Lowkalo - Services - ${service.name}`} />
           ) : (
            <Meta title={`لوكالو - الخدمات - ${service.name_ar}`} />

           )}
                <header className="top-s bg-softBlue py-24 relative z-5">
                <div className="container">
                  <span className={`text-white absolute top-10 ${i18n.language === 'en' ? 'ml-10' : 'mr-10'}`}>{t('services')}/{i18n.language === 'en' ? service.name : service.name_ar}</span>
                  <div className={`title absolute bottom-0 ${i18n.language === 'en' ? 'ml-10' : 'mr-10'} text-white`}>
                    <h1 className="font-bold text-5xl">{i18n.language === 'en' ? service.name : service.name_ar}</h1>
                  </div>
                </div>
              </header>


               
               
 

    <div className="container mx-auto">
      <div className="main-content flex flex-wrap">
        <div className="md:w-1/2">
          <div className="mt-5 pt-5">
            <h1 className="text-3xl font-bold mb-4">{i18n.language === 'en' ? service.question : service.question_ar}
</h1>
            <p>{i18n.language === 'en' ? service.body : service.body_ar}

</p>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="main-content-img rounded-xl">
            <img
              src={serviceImg}
              alt=""
              className="rounded-lg md:-mt-10 z-10 p-5 "
            />
          </div>
        </div>
      </div>
    </div>
    </>
 )}
{isLoading ? (
       <div className="spinner  mx-auto" />
      ) : error ? (
        <div>{error?.data.message || error.error}</div>
      ) : (
        service.id === 6 && (
<>
<h1 className="mb-6 mt-6 text-4xl text-veryDarkBlue font-semibold text-center pt-10">{t('table')}</h1>


    <LoyaltyProgramsTable />
</>
        )
      )}


<h1 className="mb-6 mt-10 pt-10 text-4xl text-veryDarkBlue font-semibold text-center">{t('top')}</h1>
<div className='flex space-x-3 justify-center my-3'>
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
 
    </div>
    {isLoading ? (
  <div className="spinner  mx-auto" />
) : error ? (
  <div>{error?.data.message || error.error}</div>
) : (
  service.soluations
    .filter(sol => !selectedOrigin || sol.origin === selectedOrigin)
    .map((sol) => (
      <div className="flex justify-center p-4" key={sol.id}>
        <div className="max-w-4xl w-full bg-white shadow-md rounded-md overflow-hidden">
          <div className="flex">
            <div className="w-1/3">
              <img src={`${BASE_URL}${sol.image_path}`} alt={'ss'} className="object-cover w-full h-full" />
            </div>
            <div className="w-2/3 p-4">
              <Link to={'#'}>
                <h2 className="text-2xl font-bold mb-2 flex gap-1">
                  {i18n.language === 'en' ? sol.name : sol.name_ar}
                  <FaStar />{sol.average_rating.slice(0,3)}
                </h2>
              </Link>
              <p className="text-gray-700 max-w-lg">{i18n.language === 'en' ? sol.body : sol.body_ar}</p>
              <div className="mt-4">
                <Link to={`/soluations/${sol.id}`}>
                  <button className="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">
                    {t('det')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
)}


    
    </div>
  )
}

export default ServiceDetailScreen