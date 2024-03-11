import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RatingSelect from '../components/RatingSelect';

import ver from '../assets/images/ver.png'

import Button from '../components/Button';
import {FaUser , FaStar} from 'react-icons/fa'
import { useGetSoluationDetailsQuery } from '../slices/soluationsApiSlice';
import { useParams } from 'react-router-dom';
import { BASE_URL , SOLUATIONS_URL } from '../constants'

import { toast } from 'react-toastify';
import axios from 'axios';
import {  useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { useTranslation } from 'react-i18next';
import Meta from '../components/Meta';


const SoluationDetail = () => {
  const { t ,i18n} = useTranslation();

    const [rating,setRating] = useState(10)
    const [newComment,setNewComment] = useState('')
    const [uploadedImage, setUploadedImage] = useState(null);
    const { authInfo } = useSelector((state) => state.auth);

    // const [btnDisabled,setBtnDisabled] = useState(true)
    const { id: soluationId } = useParams();
    // const [uploadedImage, setUploadedImage] = useState(null);

    const {
        data: soluation,
        isLoading,
        error,
      } = useGetSoluationDetailsQuery(soluationId);

      if (isLoading) {
        return (
          <div className='p-5'>
         <div className="spinner  mx-auto" />
          </div>
        )
      }


      const handleFileChange = async (e) => {
        const file = e.target.files[0];
    
        // Check if the file is an image (you can add more specific MIME types if needed)
        if (file && file.type.startsWith('image/')) {
          // Read the file and update the state
          const dataUrl = await readFileAsDataURL(file);
          setUploadedImage({ file, dataUrl });
        } else {
          console.error('Invalid file type. Please select an image.');
        }
      };

      const readFileAsDataURL = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
    
          reader.onload = () => {
            resolve(reader.result);
          };
    
          reader.onerror = (error) => {
            reject(error);
          };
    
          reader.readAsDataURL(file);
        });
      };
    
      
      
    
      const btnDisabled = !rating || !newComment || !uploadedImage || !authInfo ;


      const handleCommentSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (uploadedImage) {
          formData.append('image_path', uploadedImage.file);
        }
        formData.append('soluationId', soluationId);
        formData.append('notes', newComment);
        formData.append('rate', rating);
        const bearerToken = authInfo.token;
        console.log(authInfo.token)
        axios.post(`${BASE_URL}${SOLUATIONS_URL}/save-review`, formData, {
          headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'multipart/form-data', // Ensure you set the content type for FormData
          },
        })
                    .then(response => {
              
                toast.success('receipt submitted successfully')
                setNewComment('')
                setRating("10")
            
            })
            .catch(error => {
              if(i18n.language === 'en') {
                toast.error('The review has already been submitted')

              } else {
                toast.error('تم تسليم التقييم بالفعل')

              }
            });
    };
    
  return (
      
    <> 
         {isLoading ? (
       <Loader />
      ) : error ? (
        <div>{error?.data.message || error.error}</div>
      ) : (
          <div>

{i18n.language === 'en' ? (
             <Meta title={`Lowkalo - Soluations - ${soluation.name}`} />
           ) : (
            <Meta title={`لوكالو - الحلول - ${soluation.name_ar}`} />

           )}


    {/* first card */}
                    <div className="flex justify-center p-4" dir={`${i18n.language === 'en' ? 'ltr' : 'rtl'}`}>
      <div className="max-w-4xl w-full bg-white shadow-md rounded-md overflow-hidden">
        <div className="flex flex-col">
          <div className="">
            <img  src={`${BASE_URL}${soluation.image_path}`} className="sol-image w-full h-full max-h-[400px]" alt='soluation' />
          </div>
          <div className=" p-4">
          <Link to={'#'}>              <h2 className="text-2xl font-bold mb-2 flex gap-1">
               {i18n.language === 'en' ? soluation.name : soluation.name_ar}
               <FaStar />{soluation.average_rating.slice(0,3)}
              </h2>
            </Link>
            <p className="text-gray-700 ">{i18n.language === 'en' ? soluation.body : soluation.body_ar}</p>
            <div className="mt-4">
      <h2 className="text-2xl font-bold my-5">{t('how')}</h2>
      <form onSubmit={(e)=>handleCommentSubmit(e)}>
      <RatingSelect select={(rating) => setRating(rating)} />

          {/* Image Upload */}
          <div className="mb-4 input-group">
        <label htmlFor="fileInput" className="cursor-pointer">
          {uploadedImage ? (
            <img src={uploadedImage.dataUrl} alt="Uploaded" className='image-fluid w-20' />
          ) : (
            <p>{t('form1')}</p>
          )}
        </label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
      
      {/* <div {...getRootProps()} className="mb-4 input-group">
          <input {...getInputProps()} />
          {uploadedImage ? (
            <p>Image loaded: {uploadedImage.name}</p>
          ) : (
            <p>Drag 'n' drop an image here, or click to select an image</p>
          )}
        </div> */}

      <div className="input-group">
        {/* Image Upload */}
       

        {/* Text Input */}
        <input
          className="my-input"
          placeholder={t('form2')}
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />


        {/* Submit Button */}
        <Button type="submit" isDisabled={btnDisabled}>
        {t('form3')}
        </Button>
      
      </div>
      </form>
      {!authInfo &&
            <p className='mt-2' style={{color:'red'}}>*Please login in order to submit a review</p>

      }
    </div>
          </div>
        </div>
      </div>
    </div>

    {soluation && (
  <div className="mt-8">
    
    {soluation.reviews && soluation.reviews.length > 0 ? (
      soluation.reviews
        .filter((review) => review.status === 5)
        .map((rev) => (
          <div key={rev.id} className="card bg-white text-black shadow-md rounded-lg p-10 m-4 relative max-w-4xl mx-auto">
            <div className="num-display">{rev.rate}</div>
            <div className="text-display">{rev.notes}</div>
            <div className="flex items-center space-x-2 mt-4">
              <div className="flex items-center">
                <FaUser className="w-6 h-6 mr-2 " />
                <span>{rev.user.name}</span>
              </div>
              <div className="flex items-center justify-center">
                <img src={ver} className='w-6 h-6 mr-2' alt="Verified" />
                <span>Verified Purchase</span>
              </div>
            </div>
          </div>
        ))
    ) : (
      <div className="bg-gray-100 text-gray-600 p-8 rounded-md text-center">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 5v14m0-14s-4 4-4 8h8s-4-4-4-8z"
          ></path>
        </svg>
        <p>No confirmed reviews yet.</p>
      </div>
    )}
  </div>
)}


{/* second card */}

    </div>
    )}
    </>
  );
};

export default SoluationDetail;