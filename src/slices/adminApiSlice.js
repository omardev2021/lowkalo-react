import { apiSlice } from './apiSlice';




export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
  
    getReviews: builder.query({
        query: () => ({
          url: '/api/all-reviews',
        }),
        keepUnusedDataFor: 5,
      }),

      confirm: builder.mutation({
        query: (data) => ({
          url: '/api/review-confirm',
          method: 'POST',
          body: data,
        }),
      }),


      
  }),
});

export const { useGetReviewsQuery , useConfirmMutation} = adminApiSlice;
