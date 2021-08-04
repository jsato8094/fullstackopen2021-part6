export const setNotification = (message, displayTimeInSec) => {
  return async dispatch => {
    const timeoutID = setTimeout(dispatch, displayTimeInSec * 1000, clearNotification())
    dispatch({
      type: 'SET_NOTIFICATION',
      message: message,
      timeoutID: timeoutID
    })
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION'
  }
}

const reducer = (state = {message: null, timeoutID: null}, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      if (state.timeoutID != null) {
        clearTimeout(state.timeoutID)
      }
      return {
        message: action.message,
        timeoutID: action.timeoutID
      }
    case 'CLEAR_NOTIFICATION':
      return {
        message: null,
        timeoutID: null
      }
    default:
      return state
  }
}

export default reducer