import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import "./App.css"

import ClassDetails from "./pages/ClassDetails";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class/:id" element={<ClassDetails />} />
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
