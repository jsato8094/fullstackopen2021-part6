export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION'
  }
}

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'VOTE':
      return `you voted '${action.content}'`
    case 'CREATE':
      return `you created '${action.content}'`
    case 'REMOVE_NOTIFICATION':
      return null
    default:
      return state
  }
}

export default reducer