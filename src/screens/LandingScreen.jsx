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

    const [activeSection, setActiveSection] = useState(0);

    const handleScroll = () => {
      const sections = ['pos', 'accounting', 'loyalty'];
      const windowHeight = window.innerHeight;
  
      const activeIndex = sections.findIndex((id) => {
        const element = document.getElementById(id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top < windowHeight / 2 && rect.top + rect.height > windowHeight / 2;
      });
  
      setActiveSection(activeIndex);
    };

    const circlePositions = {
        0: '25%', // First circle position
        1: '50%', // Second circle position
        2: '75%', // Third circle position
      };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    




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
        <img src={hero} alt="" className="mx-auto lg:mx-0" />
      </div>
    </div>
  
    <section id="features" className="mt-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-dela font-semibold text-veryDarkBlue text-center lg:text-5xl mb-10">
          Learn How to Manage Your Inventory
        </h2>
      </div>
    </section>
  
    <div id="panels" className="container mx-auto p-6">
      <div className="flex flex-col py-5 lg:flex-row lg:space-x-7">
        <div className="lg:w-1/2 flex justify-center">
          <img src={hero2} alt="" className="mx-auto lg:mx-0" />
        </div>
        <div className="flex flex-col space-y-6 pt-20 lg:w-1/2">
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
  <div className="container mx-auto px-6 relative">  
        <h2 className="text-4xl font-dela font-semibold text-veryDarkBlue text-center lg:text-5xl ">F&B SOLUTIONS</h2>
        
        {/* Vertical Line and Circles */}
        {/* <div className="absolute left-1/2 top-20 bottom-20 hidden lg:block">
  <div className="w-1 bg-gray-300 absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0"></div>
  <div className={`w-6 h-6 rounded-full bg-${activeSection === 0 ? 'softBlue' : 'gray-300'} absolute transform -translate-x-1/2`} style={{ top: '25%' }}></div>
  <div className={`w-6 h-6 rounded-full bg-${activeSection === 1 ? 'softBlue' : 'gray-300'} absolute transform -translate-x-1/2`} style={{ top: '50%' }}></div>
  <div className={`w-6 h-6 rounded-full bg-${activeSection === 2 ? 'softBlue' : 'gray-300'} absolute transform -translate-x-1/2`} style={{ top: '75%' }}></div>
</div> */}

        {/* POS Service */}
        <div id='pos' className="flex flex-col lg:flex-row items-center lg:space-x-7 ">
        <div className="lg:w-1/2">
        <div >
          <img src={hero3} alt="Point Of Sale" className="mx-auto" />
        </div>
      </div>
      <div className="flex flex-col space-y-6 lg:w-1/2" style={{ position: 'sticky', top: '0' }}>
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
        
        {/* Accounting Software Service */}
        <div id="accounting" className="flex flex-col lg:flex-row-reverse items-center lg:space-x-reverse lg:space-x-7 ">
        <div className="lg:w-1/2" >
        <img src={hero4} alt="Loyalty Programs" className="mx-auto" />
      </div>
      <div className="flex flex-col space-y-6 lg:w-1/2" style={{ position: 'sticky', top: '0' }}>
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
        
        {/* Loyalty Programs Service */}
        <div id="loyalty" className="flex flex-col lg:flex-row items-center lg:space-x-7 ">
        <div className="lg:w-1/2" style={{ position: 'sticky', top: '20px' }}>
        <img src={hero4} alt="Food Delivery" className="mx-auto" /> {/* Assume hero5 is your food delivery image */}
      </div>
      <div className="flex flex-col space-y-6 lg:w-1/2">
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