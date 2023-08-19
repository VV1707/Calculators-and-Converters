import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from '../Home'
import BmiForm from '../bmi/BmiForm';
import CmToFtForm from '../cmToFt/CmToFtForm';
import InchToFtForm from '../inchToFt/InchToFtForm';
import FtToCmForm from '../ftToCm/FtToCmForm';
import FtToInchForm from '../ftToInch/FtToInch';
import SiForm from '../simpleInterest/SiForm';
import CiForm from '../compountInterest/CiForm'
import NavBar from './NavBar'

import './NavBar.css'

export class App extends Component {
  render() {
    return (
      <Router>
      <Routes>
        <Route exact path='/' element={<NavBar/>}>
          <Route path="home" element={<Home />} />
          <Route path="bmiCalculator" element={<BmiForm />} />
          <Route path="cmToFtConverter" element={<CmToFtForm />} />
          <Route path="inchToFtConverter" element={<InchToFtForm />} />
          <Route path="ftToCmConverter" element={<FtToCmForm />} />
          <Route path="ftToInchConverter" element={<FtToInchForm />} />
          <Route path="si" element={<SiForm />} />
          <Route path="ci" element={<CiForm />} />
        </Route>
      </Routes>
    </Router>
    );
  }
};

export default App;
