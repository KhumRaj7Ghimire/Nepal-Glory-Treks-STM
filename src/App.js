import React from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Pages/Home';
import Destination from '../src/components/Pages/Destination';
import AboutUs from '../src/components/Pages/AboutUs';
import ContactUs from '../src/components/Pages/ContactUs';
import SinglePackage from '../src/components/Single-Package/SinglePackage'
import DestinationCountry from '../src/components/Pages/DestinationCountry'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/destination' exact component={Destination} />
          <Route path='/aboutus' exact component={AboutUs} />
          <Route path='/contactus' exact component={ContactUs} />
          <Route path='/destination/:country_name' exact component={DestinationCountry} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
