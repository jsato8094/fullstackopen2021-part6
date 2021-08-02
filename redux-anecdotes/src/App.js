import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch({
      type: 'VOTE',
      id: id
    })
  }

  const create = (event) => {
    event.preventDefault()
    const content = event.target.new.value
    event.target.new.value = ''
    dispatch({
      type: 'CREATE',
      content: content
    })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort((x, y) => y.votes - x.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={create}>
        <div><input name='new' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App