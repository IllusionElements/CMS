/** @format */

import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router'
import { SearchProvider } from './Search'
import client from '../config'
import Form from './Form'

console.log({ client })
const Main = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <SearchProvider>
        <Form />
      </SearchProvider>
    </BrowserRouter>
  </ApolloProvider>
)
export default Main
