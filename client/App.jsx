/** @format */

import React from 'react'

const getName = ({ displayName, name } = {}) =>
  displayName || name || 'component'
const DataLoader = ({ load, loading: Loading, error: OnError }) =>
  class Loader extends React.Component {
    state = {
      loaded: false,
      error: false,
    }

    async componentDidMount() {
      try {
        const component = await load()
        if (component.default) {
          this.Component = component.default
        } else if (component.Component) {
          this.Component = component.Component
        }
        Loader.displayName = `$withLoader(${getName(this.Component)})`
        this.setState({ loaded: true })
      } catch (e) {
        this.setState({ error: true })
        console.log(e)
      }
    }

    render() {
      if (!this.state.loaded || this.state.error) {
        return <h1>...Loading</h1>
      }

      const { Component } = this
      return <Component />
    }
  }
export const App = DataLoader({
  load: async () => import('/components/index.jsx'),
})

export const Head = () => (
  <>
    <link href="/public/css/index.css" type="text/css" rel="stylesheet" />
  </>
)
