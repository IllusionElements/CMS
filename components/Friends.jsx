/** @format */

import React from 'react'
import { SearchConsumer } from './Search'
import Button from './Button'
import FRIENDS_LIST from './queries/friendsList.gql'

const linkStyle = {
  border: 'none',
  background: 'none',
}
const renderFriendsList = (data, handleClick) => (
  <ul>
    {console.log(handleClick)}
    {data.map(({ id, gamertag, gamerscore }) => (
      <li key={id}>
        gamertag:
        <Button onClick={handleClick(gamertag)} btnName={gamertag} />
        {`gamerscore: ${gamerscore}`}
      </li>
    ))}
  </ul>
)

const renderList = ({ query: { friends: data, loading }, onClick }) => {
  if (!loading) {
    console.log(window.performance.now())
  }
  return (
    (loading && <h1> ...Loading</h1>) ||
    (data.length > 0 && renderFriendsList(data, onClick(FRIENDS_LIST)))
  )
}

export default () => <SearchConsumer>{renderList}</SearchConsumer>
