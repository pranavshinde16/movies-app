// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import Billing from './components/Billing';

const App = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<ShowList shows={shows} />} />
        <Route path="/details/:id" element={<ShowDetails />}/>
        <Route path="/billing/:name" element={<Billing />}/>
      </Routes>
    </Router>
  );
};

export default App;
