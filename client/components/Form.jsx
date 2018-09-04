/** @format */

import React from 'react'
import gql from 'graphql-tag'
import { ApolloConsumer } from 'react-apollo'
import { SearchConsumer } from './Search'

const GET_FRIENDS_LIST = gql`
  query getFriendsList($gamertag: String!) {
    friendsList(gamertag: $gamertag) {
      id
      gamertag
      gamerscore
    }
  }
`
const Form = client => ({ onSubmit, onChange, gamertag }) => (
  <>
    <input id="gamertag" name="gamertag" onChange={onChange} value={gamertag} />
    <button onSubmit={onSubmit(GET_FRIENDS_LIST, client)} type="button">
      submit
    </button>
  </>
)

const withForm = client => <SearchConsumer>{Form(client)}</SearchConsumer>
export default () => <ApolloConsumer>{withForm}</ApolloConsumer>
