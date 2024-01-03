import React from 'react'
import { Link } from 'react-router-dom';
import FailImage from '../assets/images/fail-image.png';

function Failure() {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <img src={FailImage} width={700} alt="Success" className=" mx-auto" />
      <h1 className="text-4xl font-semibold text-veryDarkBlue mb-4">Payment Rejected</h1>
      <p className="text-gray-600 mb-8">Please check your payment method and try again later</p>
      <div >
        <Link to="/" className="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue mr-2">Go To Home</Link>
      


      </div>
    </div>
  </div>
  )
}

export default Failure