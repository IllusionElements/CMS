/** @format */
import React from 'react'
import { handler } from '/client/handler'
import GET_FRIENDS_LIST from './queries/friendsList.gql'
const handleSubmit = handler(GET_FRIENDS_LIST)

const Button = ({ btnName, onSubmit, onClick }) => (
  <>
    {console.log(onSubmit === undefined)}
    <button
      onClick={(onSubmit && handleSubmit(onSubmit)) || onClick}
      onKeyDown={onSubmit ? handleSubmit(onSubmit) : null}
      type="button"
      className="btn"
    >
      {btnName}
    </button>
  </>
)
export default Button
