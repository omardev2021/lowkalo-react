import { apiSlice } from './apiSlice';
import { VIDEOS_URL } from '../constants';

export const videosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVideos: builder.query({
        query: () => ({
          url: VIDEOS_URL,
        }),
        keepUnusedDataFor: 5,
      }),

      getVideoDetails: builder.query({
        query: (videoId) => ({
          url: `${VIDEOS_URL}/${videoId}`,
        }),
        keepUnusedDataFor: 5,
      }),
  }),
});

export const { useGetVideosQuery , useGetVideoDetailsQuery } = videosApiSlice;
