/** @format */

import React, { createContext } from 'react'

const { Provider, Consumer } = createContext(null)

export const SearchConsumer = Consumer

export class SearchProvider extends React.Component {
  state = {
    gamertag: '',
  }

  get value() {
    const { gamertag } = this.state
    return {
      onChange: this.onChange,
      onSubmit: this.onSubmit,
      gamertag,
    }
  }

  onChange = e => {
    this.setState({
      gamertag: e.target.value,
    })
  }

  onSubmit = (query, client) => () => {
    const { gamertag } = this.state
    client.query({
      query,
      variables: {
        gamertag,
      },
    })
  }

  render() {
    const { children } = this.props
    return <Provider value={this.value}>{children}</Provider>
  }
}
