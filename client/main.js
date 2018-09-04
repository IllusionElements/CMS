/**
 *
 *
 * @format
 */
/* globals document */
import React from 'react'
import { render } from 'react-dom'
import { App, Head } from './App'
document.getHead = function() {
  return this.getElementsByTagName('head')[0]
}
render(<Head />, document.getHead())
render(<App />, document.getElementById('root'))
