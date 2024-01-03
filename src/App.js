// App.js
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ToastContainer />
      <Header />
      <main className='py-3'>
        {/* Your Routes or Outlet here */}
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </I18nextProvider>
  );
}

export default App;