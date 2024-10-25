import './App.css';
//import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
{/*import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";*/}
import Container from './components/Container';
import SubContainer from './components/SubContainer';
import SectionImage from './components/SectionImage';
import ContentAbout from './components/ContentAbout';
import FAQ from './components/FAQ';
import ContentServices from './components/ContentServices';
//import { useState } from 'react';
//import { RouterProvider } from 'react-router-dom';


import Theme from './components/Theme';


function App() {
  

  return (
    <div >
    <Header></Header>
     {/* <Routes>
        {/*<Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>*/}
      <Container/>
      <SubContainer/>
      <SectionImage/>
      <ContentAbout/>
      <ContentServices />
      <FAQ />
     <Theme/>

    </div>
    
  );
}

export default App;
