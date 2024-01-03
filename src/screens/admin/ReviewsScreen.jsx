// ReviewsScreen.js

import React, { useState } from 'react';
import Loader from '../../components/Loader';
import { useGetReviewsQuery , useConfirmMutation } from '../../slices/adminApiSlice';
import { BASE_URL } from '../../constants';
import { toast } from 'react-toastify';


const ReviewsScreen = () => {
//   const [reviews, setReviews] = useState(dummyData);


  const {
    data: reviews,
    isLoading,
    error,
    refetch:loadReviews
  } = useGetReviewsQuery();

  const [confirm, { isLoading:isLoading10 }] = useConfirmMutation();


  const confirmReview = async (reviewId) => {
    try {
       
        await confirm({review:reviewId}).unwrap();
    

  toast.success('review confirmed!')

  loadReviews()
        
        } catch (err) {
          
          toast.error(err.message);
        }
 
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">Admin Page - Reviews</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* {reviews.map((review) => (
          <div key={review.id} className="border p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">{review.title}</h3>
            <p className="mb-2">{review.body}</p>
            <p>Status: {review.status === 0 ? 'Pending' : 'Confirmed'}</p>
            {review.status === 0 && (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                onClick={() => confirmReview(review.id)}
              >
                Confirm
              </button>
            )}
          </div>
        ))} */}


{
  isLoading ? (
    <Loader />
  ) : error ? (
    <div>{error?.data.message || error.error}</div>
  ) : reviews.length === 0 ? (
    <div className='p-20 mt-20'>No reviews yet.</div>
  ) : (
    reviews.map((review) => (
      <div key={review.id} className="border p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">over all satisfaction score: {review.rate}</h3>
        <p className="mb-2">review: {review.notes}</p>
        <p className="mb-2">user: {review.user.name}</p>
        <p className="mb-2">soluation: {review.soluation.name}</p>
        <p className="mb-2">receipt: <a href={`${BASE_URL}${review.image_path}`} target={'_blank'} rel="noreferrer">SHOW</a></p>
        <p>Status: {review.status === 0 ? 'Pending' : 'Confirmed'}</p>
        {review.status === 0 && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            onClick={() => confirmReview(review.id)}
          >
            Confirm
          </button>
        )}
      </div>
    ))
  )
}
      </div>
    </div>
  );
};

export default ReviewsScreen;