import { apiSlice } from './apiSlice';
import { SOLUATIONS_URL } from '../constants';


const getTokenFromLocalStorage = () => {
  const userInfo = localStorage.getItem('authInfo');
  if (userInfo) {
    const parsedUserInfo = JSON.parse(userInfo);
    return parsedUserInfo.token;
  }
  return null; // Return null if the token doesn't exist
};


const token = getTokenFromLocalStorage();


export const soluationsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    

      getSoluationDetails: builder.query({
        query: (soluationId) => ({
          url: `${SOLUATIONS_URL}/${soluationId}`,
        }),
        keepUnusedDataFor: 5,
      }),

      saveReview: builder.mutation({
        query: (review) => ({
          url: `${SOLUATIONS_URL}/save-review`,
          method: 'POST',
          body: { ...review },
          headers: {
              Authorization: `Bearer ${token}`,
              ContentType: 'multipart/form-data'
            },
        }),
      }),
  }),
});

export const {  useGetSoluationDetailsQuery ,useSaveReviewMutation} = soluationsApiSlice;
