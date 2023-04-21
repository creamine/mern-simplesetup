// This is the entry React component (HelloWorld):
// This file contains a basic HelloWorld React component, 
// which is hot-exported to enable hot reloading with react-hot-loader during development.

import React from 'react'
import { hot } from 'react-hot-loader'

const HelloWorld = () => {
  return (
    <div>
     <h1>Hello World!</h1>
    </div>
   )
}

export default hot(module)(HelloWorld) 