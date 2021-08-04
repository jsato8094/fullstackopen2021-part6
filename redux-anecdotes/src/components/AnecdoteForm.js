import { createNew } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
  const create = (event) => {
    event.preventDefault()
    const content = event.target.new.value
    event.target.new.value = ''
    props.createNew(content)
    props.setNotification(`you created ${content}`, 5)
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

const mapDispatchToProps = {
  createNew,
  setNotification
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm
