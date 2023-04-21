// This file simply renders the top-level entry React component in the div element in the HTML document:
import React from 'react'
import { render } from 'react-dom'
import HelloWorld from './HelloWorld'

render(<HelloWorld/>, document.getElementById('root'))