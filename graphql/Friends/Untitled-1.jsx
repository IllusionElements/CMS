/** @format */

import React from 'react'

class Collection extends Map {
  toObject() {
    return [...this.entries()].reduce(
      (obj, [K, V]) => ({
        ...obj,
        [K]: V,
      }),
      {}
    )
  }
}

const extend = (target, extensor) => Object.assign(target, extensor)

const getName = Component =>
  Component.displayName || Component.name || 'Component'

class Registration {
  static $componentStore = new Collection()

  static ComponentStore = () =>  this.$componentStore.toObject()

  static registerComponent = ({
    component: Component,
    componentName,
    defaultProps = {},
  } = {}) => {
    const WrappedComponent = props => <Component {...defaultProps} {...props} />

    WrappedComponent.displayName = componentName || getName(Component)

    this.componentStore.set(componentName, WrappedComponent)
  }

  static injectGlobals = fetcher => fetcher(this.componentStore.toObject())
}

extend(React, Registration)

const Button = () => <button type="button">h</button>

React.registerComponent({
  component: Button,
  componentName: 'ButtonBase'
})



