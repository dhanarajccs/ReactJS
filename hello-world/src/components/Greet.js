// Functional Component - syntax
/*
import React from 'react'

export default function Greet() {           // rfc
    return (
        <div>
            
        </div>
    )
}

// or

import React from 'react'                   // rfce

function Greet() {
    return (
        <div>
            
        </div>
    )
}

export default Greet
*/


// Functional Component - Normal function
/*
import React from 'react'                   // rfce

function Greet() {
    return (
        <div>
            <h1>Dhanaraj Narasimmareddy Prasanth</h1>
        </div>
    )
}

export default Greet
/*
// or

import React from 'react'                    // rfc

export default function Greet() {
    return (
        <div>
          <h1>Dhanaraj Narasimmareddy Prasanth</h1>
        </div>
    )
}
*/



// Functional Component - ES6 Arrow Function (Fat Arrow Function) - syntax
/*
// Creates a React Arrow Function Component with ES7 module system   
import React from 'react'                   // rafc

export const Greet = () => {
  return (
    <div>
      
    </div>
  )
}

// Creates a React Arrow Function Component with ES7 module system 
import React from 'react'                   // rafce

const Greet = () => {
  return (
    <div>
      
    </div>
  )
}

export default Greet


// Creates a React 17 Arrow Function Component with ES7 module system
export const Greet = () => {               // _rafc
  return (
    <div>
      
    </div>
  )
}

// Creates a React 17 Arrow Function Component with ES7 module system
const Greet = () => {                      // _rafce
  return (
    <div>
      
    </div>
  )
}

export default Greet
*/


// Functional Component - ES6 Arrow Function (fat Arrow Function)

// Default Export (export default)

import React from 'react'               // rafce

const Greet = () => {
    return (
        <div>
            <h1>Dhanaraj Narasimmareddy Prasanth</h1>
        </div>
    )
}

export default Greet

// or
/* 
import React from 'react'

const Greet = () => {
    return <h1>Dhanaraj Narasimmareddy Prasanth</h1>    
}

export default Greet

// or 

import React from 'react';

const Greet = () => <h1>Dhanaraj Narasimmareddy Prasanth</h1>

export default Greet
*/



// Named Export (export)
/*
import React from 'react';          // rafc

export const Greet = () => {
  return (
    <div>
      <h1>Dhanaraj Narasimmareddy Prasanth</h1>
    </div>
  );
}

// or

import React from 'react';

export const Greet = () => {
  return <h1>Dhanaraj Narasimmareddy Prasanth</h1>
}

// or 

import React from 'react';

export const Greet = () => <h1>Dhanaraj Narasimmareddy Prasanth</h1> // import as { Greet } in App.js
*/


