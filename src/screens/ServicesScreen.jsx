import React,{useState} from 'react'
import { useGetServicesQuery } from '../slices/servicesApiSlice';
import { BASE_URL } from '../constants';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Loader from '../components/Loader';
import { FaStar } from 'react-icons/fa';
import Meta from '../components/Meta';

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
    <Loader />
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
      <h1 className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold leading-tight">
      {t('ser')}
        <br />
        <hr className="opacity-100 bg-softRed w-20 mx-auto mt-4 h-2 border-4" />
      </h1>
    </header>
  
         <div className="flex flex-col md:flex-row p-5" >

<div className="w-1/4  p-4  mt-4 ">
    <div className='flex space-x-3'>
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

    <h2 className="my-6 text-4xl text-veryDarkBlue font-semibold "> {t('cat')}
</h2>
<ul>
{isLoading ? (
     <Loader />
      ) : error ? (
        <div>{error?.data.message || error.error}</div>
      ) : (
            data.data.map((service) => (
              <Link to={`/services/${service.type}/${service.slug}`}>
                <li>{i18n.language === 'en' ? service.name : service.name_ar}</li>
                </Link>

                ))
                )}
</ul>


    </div>

    <div className="w-full md:w-3/4  p-4  mt-4">
      <div className='flex flex-col md:flex-row md:flex-wrap '>
      {isLoading ? (
       <Loader />
      ) : error ? (
        <div>{error?.data.message || error.error}</div>
      ) : (
            data.data.map((service) => (
                
                <div className='w-full md:w-1/2 p-5'>
                <div className="flex flex-col bg-white w-full pb-6 space-y-4 text-center rounded-lg shadow-lg">
                    {/* Image */}
                    <div className=" bg-softBlue p-5">
                      
                      <h5 className={`text-xl font-bold text-white  ${i18n.language === 'en' ? 'text-left' : 'text-right'}`}>{i18n.language === 'en' ? service.name : service.name_ar}</h5>
               
                      <p className={`${i18n.language === 'en' ? 'text-left' : 'text-right'} text-white pt-2`}>{i18n.language === 'en' ? service.short : service.short_ar}
          </p>
                
                    </div>
                    {
  selectedOrigin
    ? service.soluations
        .filter(sol => sol.origin === selectedOrigin)
        .map((sol, index) =>
          index < 3 ? (
            <React.Fragment key={sol.id}>
              <div className='flex flex-row space-x-10'>
                <div className='w-1/3 p-5'>
                  <img src={`${BASE_URL}${sol.image_path}`} width='100' alt='' />
                </div>
                <div className='w-2/3 mt-10'>
                  <h5 className={`${i18n.language === 'en' ? 'text-left' : 'text-right'} font-bold text-x`}>
                    {i18n.language === 'en' ? sol.name : sol.name_ar}
                  </h5>
                  <p className={`${i18n.language === 'en' ? 'text-left' : 'text-right'}`}>
                    {i18n.language === 'en' ? sol.body : sol.body_ar}
                  </p>
                </div>
              </div>
              <div className='bg-dots bg-repeat-x px-6 pt-6 capitalize'></div>
            </React.Fragment>
          ) : null
        ) 
    : service.soluations.map((sol, index) =>
        index < 3 ? (
          <React.Fragment key={sol.id}>
            <div className='flex flex-row space-x-10'>
              <div className='w-1/3 p-5'>
                <img src={`${BASE_URL}${sol.image_path}`} width='100' alt='' />
              </div>
              <div className='w-2/3 mt-10'>
                <h5 className={`${i18n.language === 'en' ? 'text-left' : 'text-right'} font-bold text-xl flex gap-1`}>
                  {i18n.language === 'en' ? sol.name : sol.name_ar}
                  <FaStar />{sol.average_rating.slice(0,3)}
                </h5>
                <p className={`${i18n.language === 'en' ? 'text-left' : 'text-right'}`}>
                  {i18n.language === 'en' ? sol.body : sol.body_ar}
                </p>
              </div>
            </div>
            <div className='bg-dots bg-repeat-x px-6 pt-6 capitalize'></div>
          </React.Fragment>
        ) : null
      )
}
         
                    
          
          
                    
          
                    
          
          
          
                    {/* Dots */}
                    <div className="px-6 pt-6 capitalize">
                      <Link
                        to={`/services/${service.type}/${service.slug}`}
                        className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softRed hover:text-black hover:bg-white border-softRed"
                      >
                        {t('browse')}
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