import React from 'react';
import './App.css';
// import Greet from './components/Greet';           // 5.functional component (Default Export)
// import { Greet }  from './components/Greet'       // 5.functional component (Named Export)

import MyComponent from "./components/Greet";       // 5.functional component (rename for Greet) - works only for default export, not working for named export 
                                                    // default export - component with any name  // named export - component with exact name

function App() {
  return (
    <div className="App">
      {/* <Greet /> */}

      <MyComponent />
    </div>
  );
}

export default App;
