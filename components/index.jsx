/** @format */

import React from 'react'
import { ApolloProvider, ApolloConsumer } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import { SearchProvider } from './Search'
import Friends from './Friends'
import Form from './Form'
import config from '../client/config'

const Main = () => (
  <BrowserRouter>
    <ApolloProvider client={config}>
      <SearchProvider>
        <Form />
        <Friends />
      </SearchProvider>
    </ApolloProvider>
  </BrowserRouter>
)
export default Main
