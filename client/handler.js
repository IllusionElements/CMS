/** @format */

import client from './config'

export const handler = query => onSubmit => onSubmit(query, client)
