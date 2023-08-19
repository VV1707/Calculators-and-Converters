import React from 'react'
import { Outlet, Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/bmiCalculator">Bmi Calculator</Link>
          </li>
          <li>
            <Link to="/cmToFtConverter">Cm To Ft Converter</Link>
          </li>
          <li>
            <Link to="/inchToFtConverter">Inch To Ft Converter</Link>
          </li>
          <li>
            <Link to="/ftToCmConverter">Ft To Cm Converter</Link>
          </li>
          <li>
            <Link to="/ftToInchConverter">Ft to Inch Converter</Link>
          </li>
          <li>
            <Link to="/si">Simple Interest</Link>
          </li>
          <li>
            <Link to="/ci">Compound Interest</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      </>
  )
}

export default NavBar