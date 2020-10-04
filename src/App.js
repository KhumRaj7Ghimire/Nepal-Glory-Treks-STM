import React from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Pages/Home';
import Destination from '../src/components/Pages/Destination';
import AboutUs from '../src/components/Pages/AboutUs';
import ContactUs from '../src/components/Pages/ContactUs';

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
        </Switch>
      </Router>
    </>
  );
}

export default App;
