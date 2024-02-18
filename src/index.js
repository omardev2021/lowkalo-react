import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  
} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import store from './store';

import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';
import LessonScreen from './screens/LessonScreen';
import CourseScreen from './screens/CourseScreen';
import ServicesScreen from './screens/ServicesScreen';
import ServiceDetailScreen from './screens/ServiceDetailScreen';
import PaymentStatusScreen from './screens/PaymentStatusScreen';
import SoluationDetail from './screens/SoluationDetail';
import ProfileScreen from './screens/ProfileScreen';
import AdminRoute from './components/AdminRoute';
import ReviewsScreen from './screens/admin/ReviewsScreen';
import LandingScreen from './screens/LandingScreen';
import CategoriesScreen from './screens/CategoriesScreen';
// import 'react-tooltip/dist/react-tooltip.css'




const router = createBrowserRouter(
  createRoutesFromElements(
<Route path='/' element={<App />}>
      <Route index={true} path='/' element={<LandingScreen />} />
      <Route path='/lessons/:id' element={<LessonScreen />} />
      <Route path='/course' element={<CourseScreen />} />
      <Route path='/services' element={<ServicesScreen />} />
      <Route path='/soluations/:id' element={<SoluationDetail />} />
      <Route path='/services/:type/:slug' element={<ServiceDetailScreen />} />
      <Route path='/profile' element={<ProfileScreen />} />
      <Route path='/cat' element={<CategoriesScreen />} />

      <Route path='/payment-status' element={<PaymentStatusScreen />} />



      <Route path='' element={<AdminRoute />}>
  <Route path='/admin/reviews' element={<ReviewsScreen />} />
  

</Route>
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <HelmetProvider>
    <Provider store={store}>
    <RouterProvider router={router} /> 
    </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

