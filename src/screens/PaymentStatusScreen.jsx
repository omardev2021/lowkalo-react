import React , {useEffect}from 'react'
import { useLocation } from 'react-router-dom';
import Failure from '../components/Failure';
import Success from '../components/Success';
import { useConfirmPaymentMutation } from '../slices/courseApiSlice';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../slices/authSlice';
import Meta from '../components/Meta';


function PaymentStatusScreen() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const dispatch = useDispatch();

    const param1 = queryParams.get('Result');
    const param2 = queryParams.get('ResponseCode');
    const [confirm] = useConfirmPaymentMutation();

    useEffect(() => {
        const confirmPayment = async () => {
          try {
            // Call the asynchronous confirm function
            const response = await confirm();
            console.log(response);
            dispatch(setCredentials({ ...response }));
            console.log(response); // Log or handle the response as needed
          } catch (error) {
            console.error(error); // Log or handle the error as needed
          }
        };
    
        // Check the condition and call the confirmPayment function when the component mounts
        if (param1 === 'Successful' && param2 === '000') {
          confirmPayment();
        }
      }, [confirm, param1, param2,dispatch]);


    


  return (
    <div>
      
<Meta />
    {param1 === 'Successful' && param2 === '000' ? (
      <Success />
    ) : (
      <Failure />
    )}
  </div>
  )
}

export default PaymentStatusScreen