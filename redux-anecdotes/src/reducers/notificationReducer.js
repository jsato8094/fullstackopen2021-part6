export const setNotification = (message, displayTimeInSec) => {
  return async dispatch => {
    setTimeout(dispatch, displayTimeInSec * 1000, clearNotification())
    dispatch({
      type: 'SET_NOTIFICATION',
      message: message
    })
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION'
  }
}

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.message
    case 'CLEAR_NOTIFICATION':
      return null
    default:
      return state
  }
}

export default reducer