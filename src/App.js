import React from 'react';
import logo from './logo.svg';
import "@fortawesome/fontawesome-free/css/all.min.css"
import './App.scss';
import Navbar from '../src/components/Navbar'
import TourList from './TourList';


function App() {
  return (
    <>
     <Navbar></Navbar>
     <TourList></TourList>
    </>
  );
}

export default App;
