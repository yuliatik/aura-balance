
import './App.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import Slideshow from './Slideshow/Slideshow';
import AboutUs from './AboutUs/AboutUs';
import Footer from './Footer/Footer';
import Review from './Review/Review';


function App() {
  return  (
    <div className='App'>
      <Navbar />
      <Slideshow />
      <AboutUs />
      <Review />
      <Footer />
    </div>

  )
}

export default App;
