import React from 'react';

import '../../styles/home.css'

import Header from './header'
import Footer from './footer'
import MainContent from './main_content'

function Countdown() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Countdown;
