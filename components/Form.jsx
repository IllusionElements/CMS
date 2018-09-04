/** @format */

import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import { SearchConsumer } from './Search'
import GET_FRIENDS_LIST from './queries/friendsList.gql'
import Button from './Button'
import withRoute from './withRoute'
import '/public/css/main.css'

const handler = (onSubmit, client) => () => onSubmit(GET_FRIENDS_LIST, client)

const Form = client => ({ onSubmit, onChange, gamertag }) => (
  <>
    <input id="gamertag" name="gamertag" onChange={onChange} value={gamertag} />
    <Button onSubmit={handler(onSubmit, client)} btnName="submit" />
  </>
)

const withForm = client => <SearchConsumer>{Form(client)}</SearchConsumer>
export default withRoute(() => <ApolloConsumer>{withForm}</ApolloConsumer>)
