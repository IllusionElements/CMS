/** @format */

import React from 'react'

export default docs => Component => {
  const doc = JSON.parse(docs)

  return <Component document={doc} />
}

export class MongoDocument extends React.Component {
  async componentDidMount() {
    const { id, client } = this.props
    const{ data: {fields} } = client.query({
      query: gql`
        findMongoDoc($id: ID!) {
          fields
        }
      `,,
      variables: {
        id,
      }
    })

    this.setState({
      document: JSON.parse(fields)
    })
  }

  render() {
    const { children } = this.props
    return children(this.state)
  }
}
