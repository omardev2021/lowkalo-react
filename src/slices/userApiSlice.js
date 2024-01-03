import { apiSlice } from './apiSlice';
import { USERS_URL } from '../constants';

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    requestLogin: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/request-auth`,
        method: 'POST',
        body: data,
      }),
    }),
    requestRegister: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/request-register`,
        method: 'POST',
        body: data,
      }),
    }),
    

    login: builder.mutation({
        query: (data) => ({
          url: `${USERS_URL}/login`,
          method: 'POST',
          body: data,
        }),
      }),

      newsletter: builder.mutation({
        query: (data) => ({
          url: `${USERS_URL}/letter`,
          method: 'POST',
          body: data,
        }),
      }),
  }),
});

export const { useRequestLoginMutation , useLoginMutation , useRequestRegisterMutation , useNewsletterMutation} = usersApiSlice;
