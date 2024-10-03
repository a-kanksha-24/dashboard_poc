// src/App.js
// import React, { useState } from 'react';
import ChartSettings from './components/ChartSettings';
import ChartDisplay from './components/ChartDisplay';

function App() {

  return (
    <div className="flex">
      <ChartSettings />
      <ChartDisplay  />
    </div>
  );
}

export default App;
