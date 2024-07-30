import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </div>
  );
}

export default App;
