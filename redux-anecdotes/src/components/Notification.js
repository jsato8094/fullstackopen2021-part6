import React from 'react'
import { removeNotification } from '../reducers/notificationReducer'
import { useSelector, useDispatch } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()
  if (notification == null) {
    return <div />
  }
  setTimeout(dispatch, 5000, removeNotification())
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification