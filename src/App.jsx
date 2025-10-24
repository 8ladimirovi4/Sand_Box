import React from 'react';
import FlowDiagram from './components/FlowDiagram';
import './App.css';

function App() {
  return (
    <div className="app" style={{ margin: 0, padding: 0, height: '100vh', overflow: 'hidden' }}>
      <FlowDiagram />
    </div>
  );
}

export default App;