import { createNew } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const create = (event) => {
    event.preventDefault()
    const content = event.target.new.value
    event.target.new.value = ''
    dispatch(createNew(content))
    dispatch(setNotification(`you created ${content}`, 5))
  }

  return (
    <div>
    <h2>create new</h2>
    <form onSubmit={create}>
      <div><input name='new' /></div>
      <button type='submit'>create</button>
    </form>
  </div>
  )
}

export default AnecdoteForm
