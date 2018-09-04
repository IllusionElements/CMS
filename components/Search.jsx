/** @format */

import React, { createContext } from 'react'
import ApolloClient from '/client/config'

const { Provider, Consumer } = createContext(null)

export const SearchConsumer = Consumer

export class SearchProvider extends React.Component {
  state = {
    gamertag: '',
    friends: [],
    loading: false,
  }

  get value() {
    const { gamertag, friends, loading } = this.state
    return {
      onChange: this.onChange,
      onSubmit: this.handleClick,
      onClick: this.onClick,
      gamertag,
      query: {
        loading,
        friends,
      },
    }
  }

  onChange = e => {
    this.setState({
      gamertag: e.target.value,
    })
  }

  onClick = query => gamertag => () => {
    this.setState({ loading: true })
    ApolloClient.query({
      query,
      variables: {
        gamertag: { gamertag },
      },
    })
      .then(({ data: { friendsList: friends } }) =>
        this.setState({ friends, gamertag, loading: false })
      )
      .catch(() => this.setState({ loading: false, friends: [], gamertag }))
  }

  handleClick = (query, client) => {
    this.query = query

    return e => {
      if (e.key === 'Enter' || e.key === 'ENTER' || !e.key) {
        this.setState({ loading: true })

        const { gamertag } = this.state

        client
          .query({
            query,
            variables: {
              gamertag: { gamertag },
            },
          })
          .then(({ data: { friendsList: friends } }) =>
            this.setState({ friends, loading: false })
          )
          .catch(() => null)
      }
    }
  }

  render() {
    const { children } = this.props
    return <Provider value={this.value}>{children}</Provider>
  }
}
