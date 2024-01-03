import { apiSlice } from './apiSlice';
import { COUPONS_URL } from '../constants';

export const couponApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    check: builder.mutation({
      query: (data) => ({
        url: `${COUPONS_URL}/check`,
        method: 'POST',
        body: data,
      }),
    }),

    
   
  }),
});

export const { useCheckMutation} = couponApiSlice;

