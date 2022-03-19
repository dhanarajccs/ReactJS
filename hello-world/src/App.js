import React from 'react';
import './App.css';

// import Greet from './components/Greet';           // 5.functional component (Default Export)
// import { Greet }  from './components/Greet'       // 5.functional component (Named Export)

// import MyComponent from "./components/Greet";     // 5.functional component (rename for Greet) - works only for default export, not working for named export 
                                                     // default export - component with any name  // named export - component with exact name

// import Welcome from './components/Welcome';       // 6.class component

import Hello from './components/Hello';              // 8.JSX


function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <MyComponent /> */}

      {/* <Welcome /> */}

      <Hello />
    </div>
  );
}

export default App;