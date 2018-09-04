/** @format */

import { initialize } from 'meteor/cultofcoders:apollo'
import '../graphql'

initialize({
  context: async () => {
    const { api } = (await import('../settings.json')).private
    return { secrets: { api } }
  },
})
