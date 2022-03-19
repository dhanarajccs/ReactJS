/*
import React from 'react'                       // rfc

export default function Hello() {
    return (
        <div>
            
        </div>
    )
}

// or 

import React from 'react'                       // rfce

function Hello() {
    return (
        <div>
            
        </div>
    )
}

export default Hello

// or

import React from 'react'                       // rafc

const Hello = () => {
    return (
        <div>
            
        </div>
    )
}

export default Hello

// or

import React from 'react'                       // rafce

export const Hello = () => {                    // import as { Hello } in App.js
    return (
        <div>
            
        </div>
    )
}
*/


/*
import React from 'react';                      // imr

const Hello = () => {                           // _rafce
    return (
        <div>
            
        </div>
    )
}

export default Hello

// or

import React from 'react';                      // imr

export const Hello = () => {                    // _rafc   // import as { Hello } in App.js
    return (
        <div>
            
        </div>
    )
}
*/



// Fat Arrow Function - Shorthand Property - Concise Syntax
/*
import React from 'react'               // rafce

const Hello = () => {
    return (
        <div>
            <h1>Dhanaraj</h1>
        </div>
    )
}

export default Hello

// or 

import React from 'react'               // rafce

const Hello = () => {
    return (
        <div>
            <h1>Dhanaraj</h1>
            <p>Miruthula</p>
        </div>
    )
}

export default Hello

// or

import React from 'react'               // rafce

const Hello = () => {
    return <h1>Dhanaraj</h1>
}

export default Hello

// or

import React from 'react'               // rafce

const Hello = () => (
    <h1>Dhanaraj</h1>
)

export default Hello

// or 

import React from 'react'               // rafce

const Hello = () => <h1>Dhanaraj</h1>

export default Hello

// or 

import React from 'react'               // rafc   // import as { Hello } in App.js

export const Hello = () => {
    return (
        <div>
            <h1>Dhanaraj</h1>
        </div>
    )
}
*/


// with JSX
/*
import React from 'react'

const Hello = () => {
    return (
        <div>
           <h1>Dhanaraj with JSX</h1>
        </div>
    )
}

export default Hello

// or
*/

import React from 'react'   

const Hello = () => {
    return (
        <div id='hello' className='dummyClass'>
           <h1>Dhanaraj with JSX</h1> 
        </div>
    )
}

export default Hello


// without JSX
/*
import React from 'react'

const Hello = () => {
    return React.createElement('div', null, 'dhanaraj');
}

const Hello = () => {
    return React.createElement('div', null, '<h1>dhanaraj</h1>');
}

const Hello = () => {
    return React.createElement('div', null, 'h1', 'dhanaraj');
}

const Hello = () => {
    return React.createElement('div', null, React.createElement('h1', null,'dhanaraj'));
}

export default Hello
*/



// without JSX with {id: ‘hello’, className: ‘dummyClass’}

// class (with warning in console)
/*
import React from 'react'

const Hello = () => {
    return React.createElement(
        'div', 
        {id: 'hello', class: 'dummyClass'},
        React.createElement('h1', null,'dhanaraj')
    );
}

export default Hello
*/


// className (without warning in console)
/*
import React from 'react'

const Hello = () => {
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null,'dhanaraj')
    );
}

export default Hello
*/

