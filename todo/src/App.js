import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Body from './Components/Body';
import Error from './Components/Error';
import './App.css'
import CardDetails from './Components/CardDetails';

const App = () => {
  return (
    
      <Router>
       
        <Routes>
          <Route exact path="/" element={<Body/>} />
          <Route exact path="/carddetails/:id" element={<CardDetails/>} />
          <Route component={<Error/>} />
        </Routes>
      </Router>
  );
};

export default App;
