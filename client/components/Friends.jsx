/** @format */

import React from 'react'

const renderFriendsList = data =>
  data.map(({ id, gamertag, gamerscore }) => (
    <li key={id}>
      {`gamertag: ${gamertag},
      gs - ${gamerscore}
    `}
    </li>
  ))

const renderList = data => <ul>{renderFriendsList(data)}</ul>

export default renderList
