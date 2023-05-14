import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PeopleList from './components/PeopleList';



function App() {
  return (
    <Router>
      <Routes>  
        {/* Define a route for the homepage */}      
        <Route exact path="/"  element={<PeopleList />} /> 
      </Routes>
    </Router>
  );
}

export default App;
