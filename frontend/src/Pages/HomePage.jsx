import React from 'react';
import Hero from '../Components/Hero';
import Popular from '../Components/Popular';
import Offers from '../Components/Offers';
import NewCollections from '../Components/NewCollections';
import NewsLetter from '../Components/NewsLetter';
import './HomePage.css';
import hero_image from '../Assets/p1_1.png';
import popular_image from '../Assets/p2_1.png';
import newin_image from '../Assets/p3_1.png';

const HomePage = () => {
  return (
    <div className="main" id="main">
      <div className="cards">
        <div className="panel-card" id="hero">
          <h2 className="panel-card-title">Dress up, make another story  </h2>
          <img className="panel-card-img" src={hero_image} alt="hero image" />
        </div>
        <div className="panel-card" id="popular">
          <h2 className="panel-card-title">Best Sellers </h2>
          <img className="panel-card-img" src={popular_image} alt="hero image" />
        </div>
        <div className="panel-card" id="popular">
          <h2 className="panel-card-title">New Collection </h2>
          <img className="panel-card-img" src={newin_image} alt="hero image" />
        </div>
      </div>
      {/* <Hero /> */}
      <Popular />
      {/* <Offers /> */}
      {/* <NewCollections /> */}
      <NewsLetter />
    </div >

  )
}

export default HomePage
