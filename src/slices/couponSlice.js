import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    discountInfo: localStorage.getItem('discountInfo')
    ? JSON.parse(localStorage.getItem('discountInfo'))
    : null,
};

const couponSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {
    setCoupon: (state, action) => {
      state.discountInfo = action.payload;
      localStorage.setItem('discountInfo', JSON.stringify(action.payload));
    },
    removeCoupon: (state, action) => {
        state.discountInfo = null; // or whatever default value you want
        localStorage.removeItem('discountInfo'); // Corrected key to match what you used when setting
      },
  },
});

export const { setCoupon , removeCoupon} = couponSlice.actions;

export default couponSlice.reducer;
