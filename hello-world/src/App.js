import React from 'react';
import './App.css';
// import Greet from './components/Greet';      // 5.functional component (Default Export)
import { Greet }  from './components/Greet'     // 5.functional component (Named Export)

function App() {
  return (
    <div className="App">
      <Greet />
    </div>
  );
}

export default App;
