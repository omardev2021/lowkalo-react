import { apiSlice } from './apiSlice';
import { COURSE_URL } from '../constants';


// Create a function to retrieve the token from local storage
const getTokenFromLocalStorage = () => {
    const userInfo = localStorage.getItem('authInfo');
    if (userInfo) {
      const parsedUserInfo = JSON.parse(userInfo);
      return parsedUserInfo.token;
    }
    return null; // Return null if the token doesn't exist
  };


  const token = getTokenFromLocalStorage();

export const courseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    createOrder: builder.mutation({
        query: (data) => ({
          url: COURSE_URL,
          method: 'POST',
          body: { ...data },
          headers: {
              Authorization: `Bearer ${token}`,
            },
        }),
      }),

        
    confirmPayment: builder.mutation({
        query: () => ({
          url: `${COURSE_URL}/payment-status`,
          method: 'POST',
          headers: {
              Authorization: `Bearer ${token}`,
            },
        }),
      }),

      saveComment: builder.mutation({
        query: (comment) => ({
          url: `${COURSE_URL}/save-comment`,
          method: 'POST',
          body: { ...comment },
          headers: {
              Authorization: `Bearer ${token}`,
            },
        }),
      }),
    
  }),
});

export const { useCreateOrderMutation , useConfirmPaymentMutation,useSaveCommentMutation} = courseApiSlice;
