/** @format */

import React from 'react'
import { Route } from 'react-router-dom'

export default (path, Component) => props => (
  <Route render={Component} path={path} {...props} />
)
