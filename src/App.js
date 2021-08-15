import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      { process.env.DEV_MODE === 'true' && <h2>Em desenvolvimento</h2> }
      <StrangerThings />
    </div>
  );
}

export default App;
