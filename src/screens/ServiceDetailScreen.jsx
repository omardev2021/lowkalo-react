import React , {useState} from 'react'
import serviceImg from '../assets/images/service.webp'
import { Link } from 'react-router-dom';
import LoyaltyProgramsTable from '../components/LoyaltyProgramsTable';
import { useParams } from 'react-router-dom';
import { useGetServiceDetailsQuery } from '../slices/servicesApiSlice';

import { BASE_URL } from '../constants'
import { useTranslation } from 'react-i18next';
import { FaStar } from 'react-icons/fa';

import Meta from '../components/Meta';
import AccountingTable from '../components/AccountingTable';
import FilterButton from '../components/FilterButton';


function ServiceDetailScreen() {

    const { slug: serviceId } = useParams();

    const {
        data: service,
        isLoading,
        error,
      } = useGetServiceDetailsQuery(serviceId);
      const { t ,i18n} = useTranslation();

      const [filter, setFilter] = useState('all');

      const applyFilter = (solutions) => {
        switch (filter) {
          case 'lowestPrice':
            return [...solutions].sort((a, b) => a.price - b.price);
          case 'highestRated':
            return [...solutions].sort((a, b) => b.average_rating - a.average_rating);
          case 'local':
            return solutions.filter(sol => sol.origin === 'ksa');
          case 'global':
            return solutions.filter(sol => sol.origin !== 'ksa');
          default:
            return solutions;
        }
      };
    
      const filteredSolutions = applyFilter(service?.soluations ?? []);
      const filterOptions = ['all', 'lowestPrice', 'highestRated', 'local', 'global'];

      if(isLoading) {
        return (
         
        
        <div style={{'padding':'200px'}}> 

         <div className="spinner  mx-auto" />
         </div>  
      
        )
      }


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
                  <div className={`title absolute bottom-5 ${i18n.language === 'en' ? 'ml-10' : 'mr-10'} text-white`}>
                    <h1 className="font-bold text-5xl">{i18n.language === 'en' ? service.name : service.name_ar}</h1>
                  </div>
                </div>
              </header>


               
               
 

    <div className="container mx-auto ">
      <div className="main-content flex flex-wrap">
        <div className="md:w-1/2 p-5">
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

{isLoading ? (
       <div className="" />
      ) : error ? (
        <div>{error?.data.message || error.error}</div>
      ) : (
        service.id === 2 && (
<>
<h1 className="mb-6 mt-6 text-4xl text-veryDarkBlue font-semibold text-center pt-10">{t('table2')}</h1>


    <AccountingTable />
</>
        )
      )}



<div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="mb-6 mt-10 pt-10 text-4xl text-veryDarkBlue font-semibold text-center">{t('top')}</h1>

        {/* Filtering Section */}
        <div className="flex justify-end gap-4 mb-6">
        {filterOptions.map(option => (
          <FilterButton
            key={option}
            isActive={filter === option}
            onClick={() => setFilter(option)}
          >
            {t(option)} {/* Assuming you have translations set up for each filter option */}
          </FilterButton>
        ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoading ? (
            <div className="spinner mx-auto" />
          ) : error ? (
            <div>{error?.data.message || error.error}</div>
          ) : (
            filteredSolutions.map((sol) => (
              <div key={sol.id} className="overflow-hidden rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md m-5 p-5">
                <div className="relative overflow-hidden rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md shadow-xl">
                  <img src={`${BASE_URL}${sol.image_path}`} alt={sol.name} className="w-full sol-image" style={{height: '200px'}} />
                </div>
                <div>
                  <div className="flex justify-center items-center mt-1">
                    <h2 className="text-xl font-bold mt-2 text-center text-gray-800 mr-2">
                      {i18n.language === 'en' ? sol.name : sol.name_ar}
                    </h2>
                    <FaStar className="text-veryDarkBlue" />
                    <span className="text-gray-600 ml-1">{sol.average_rating.slice(0,3)}</span>
                  </div>
                  <p className='ml-20'>Price starts from: {sol.price} SAR</p>
                  <div className="text-center mt-3">
                    <Link to={`/soluations/${sol.id}`}>
                      <button className="py-2 px-4 text-sm font-semibold text-white bg-softBlue rounded hover:bg-softBlue-dark transition-colors duration-300">
                        {t('det')}
                      </button>
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

export default ServiceDetailScreen