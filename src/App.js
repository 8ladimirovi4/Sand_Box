import React from 'react';
import Home from './components/Home';
import {Routes, Route } from "react-router-dom";
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <Layout>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
      </Layout>
  </div>
  );
}

export default App;
