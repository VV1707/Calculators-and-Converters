import React from 'react';
import './Home.css'

const Home = () => {
  let background="https://png.pngtree.com/thumb_back/fh260/background/20200703/pngtree-mathematics-education-calculator-ruler-hand-drawn-background-image_340649.jpg";
  return ( 
    <div className="text">
        <div>
          <img src = {background} alt = "Calculators and Converters"/>
        </div>
        <div class='text-on-image'>
          <h1>Calculators and Converters</h1>
        </div>
      </div>
  )
};

export default Home
