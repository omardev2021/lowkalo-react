import React, { useState , useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import hero from '../assets/images/low1.png'
import hero2 from '../assets/images/low2.png'
import hero3 from '../assets/images/low3.png'
import hero4 from '../assets/images/low4.png'
import FAQ from '../components/FAQ';
import {  useNewsletterMutation} from '../slices/userApiSlice';
import { toast } from 'react-toastify';
function LandingScreen() {
    const { t ,i18n} = useTranslation();

    const [newsLetter] = useNewsletterMutation();
    const [email,setEmail] = useState('')


 
      
    




    const letterHandler = async (e) => {
      e.preventDefault()
      try {
    
          const res = await newsLetter({
            email
          }).unwrap();
    console.log(res)
        
    toast.success(res);   

        } catch (err) {
          toast.error('You have already subscribed to our newsletter');
         
          
        }
  }



  return (
    <>
    <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:space-x-10">
      <div className="flex flex-col space-y-6 lg:w-1/2">
        <span className="text-lg font-dela font-semibold text-purpleCustom text-center lg:text-left">
          Connecting separate ideas into one.
        </span>
        <h1 className="text-4xl font-dela text-veryDarkBlue text-center lg:text-5xl lg:text-left">
          Everything <br /> Related to the <br /> F&B <br /> BUSINESS.
        </h1>
        <p className="text-lg lg:text-xl text-center lg:text-left">
          {t('hero2')}
        </p>
      </div>
      <div className="lg:w-1/2">
        <img src={hero} alt="" className="mx-auto lg:mx-0 transition-transform duration-500 ease-in-out scale-110 -mt-10" />
      </div>
    </div>
  
    <section id="features" className="mt-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-dela font-semibold text-veryDarkBlue text-center lg:text-5xl mb-10">
          Learn How to Manage Your Inventory
        </h2>
      </div>
    </section>
  
    <div id="panels" className="container mx-auto p-6" style={{ position: 'relative' }}>
      <div className="flex flex-col py-5 lg:flex-row lg:space-x-7 sticky-section">
        <div className="lg:w-1/2 flex justify-center">
          <img src={hero2} alt="" className="mx-auto lg:mx-0" />
        </div>
        <div className="flex flex-col space-y-6 pt-20 lg:w-1/2 sticky-section">
          <h3 className="text-3xl font-dela font-semibold text-center lg:text-left">
            Beginner Guide on Managing your Inventory
          </h3>
          <p className="text-lg lg:text-left">
            Knowing product and raw materials costs are key to the success of your restaurant. Your proper knowledge of their impact on profits is fundamental to success in this highly competitive sector.
          </p>
          <div className="mx-auto lg:mx-0">
            <Link
              to={'/course'}
              className="px-6 py-3 font-semibold text-white bg-softBlue rounded-lg hover:bg-white hover:text-softBlue hover:border-softBlue border-2 border-transparent hover:border-2"
            >
              {t('more')}
            </Link>
          </div>
        </div>
      </div>
    </div>
    <section id="solutions" className="mt-5 mb-10 relative">
  <div className="container mx-auto px-6 ">  
        <h2 className="text-4xl font-dela font-semibold text-veryDarkBlue text-center lg:text-5xl ">F&B SOLUTIONS</h2>
        

        {/* POS Service */}
        <div id='all' style={{ position: 'relative' }}>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-7 ">
        <div className="lg:w-1/2 " >
       
          <img src={hero3}  alt="Point Of Sale" className="mx-auto" />

      </div>
      <div className="flex flex-col space-y-6 lg:w-1/2 sticky-section" >
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

      <div id="accounting" className="flex flex-col lg:flex-row-reverse items-center lg:space-x-reverse lg:space-x-7 " >
        <div className="lg:w-1/2" >
        <img src={hero4} alt="Loyalty Programs" className="mx-auto" />
      </div>
      <div className="flex flex-col space-y-6 lg:w-1/2 sticky-section" >
        <h3 className="text-3xl font-dela font-semibold text-center lg:text-left">
        <span className='text-sm text-purpleCustom font-dela'>Front of house</span>
        <br />
        Accounting Software 
        </h3>
        <p className="text-lg text-center lg:text-left">
        It includes all your accounting and finance processes, allowing you to track costs and expenses across various cost categories within your Profit and Loss statement (P&L).        </p>
        <div className="text-center lg:text-left">
          <Link
            to={'/services/front-of-house/accounting'}
            className="px-6 py-3 font-semibold text-white bg-softBlue rounded-lg hover:bg-white hover:text-softBlue hover:border-softBlue border-2 border-transparent hover:border-2"
          >
            Learn about accounting programs
          </Link>
        </div>
      </div>
        </div>

        <div id="loyalty" className="flex flex-col lg:flex-row items-center lg:space-x-7 ">
        <div className="lg:w-1/2" style={{ position: 'sticky', top: '20px' }}>
        <img src={hero4} alt="Food Delivery" className="mx-auto" /> {/* Assume hero5 is your food delivery image */}
      </div>
      <div className="flex flex-col space-y-6 lg:w-1/2 sticky-section">
        <h3 className="text-3xl font-dela font-semibold text-center lg:text-left">
        <span className='text-sm text-purpleCustom font-dela'>Front of house</span>
        <br />
        Loyalty Programs 
        </h3>
        <p className="text-lg text-center lg:text-left">
        A loyalty program implemented by businesses to encourage customers to make purchases and to retain them.        </p>
        <div className="text-center lg:text-left">
          <Link
            to={'/services/front-of-house/loyalty'}
            className="px-6 py-3  font-semibold text-white bg-softBlue rounded-lg hover:bg-white hover:text-softBlue hover:border-softBlue border-2 border-transparent hover:border-2"
          >
            Explore loyalty programs
          </Link>
        </div>
      </div>
        </div>
        </div>
        
        {/* Accounting Software Service */}
        
        
        {/* Loyalty Programs Service */}
        

        {/* Show All Services Button */}
        <div className="mt-10 text-center">
          <Link to={'/services'} className="px-8 py-4 font-semibold text-white bg-softBlue rounded-lg shadow-lg hover:bg-softBlue hover:text-white hover:border-softBlue border-2 border-transparent hover:border-2 transition-all duration-300">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  
 

<FAQ />

<section id="newsletter" className="bg-softBlue -mb-3">
      <div className="max-w-lg mx-auto py-24">
   
        <h2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl">
        {t('home14')}
        </h2>

        <form onSubmit={(e) => letterHandler(e)} className="flex flex-col items-start justify-center max-w-2xl mx-auto space-y-6 text-base px-6 md:flex-row md:space-y-0 md:space-x-4 md:px-0">
          <div className="flex flex-col justify-between items-center mx-auto md:flex-row md:mx-0">
            <input
              type="email"
              className="flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg border-1 border-white focus:outline-none md:mr-3 md:mb-0"
              placeholder={t('home15')}
              value={email} onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="submit"
              className="inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none bg-softRed hover:opacity-90"
              value={t('home16')}
            />
          </div>
        </form>
      </div>
    </section>
  </>
  )
}

export default LandingScreen