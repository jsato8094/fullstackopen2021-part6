import anecdoteService from "../services/anecdotes"

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const vote = (id, content) => {
  return async dispatch => {
    const objToVote = await anecdoteService.get(id)
    const voted = {...objToVote, votes: objToVote.votes + 1}
    await anecdoteService.put(voted)
    dispatch({
      type: 'VOTE',
      id: id,
      content: content
    })
  }
}

export const createNew = (content) => {
  return async dispatch => {
    const newAnec = await anecdoteService.post(asObject(content))
    dispatch({
      type: 'CREATE',
      content: content,
      obj: newAnec
    })
  }
}

export const initialize = (data) => {
  return async dispatch => {
    const data = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: data
    })
  }
}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      const newState = [...state]
      return newState.map(obj => obj.id === action.id ? {...obj, votes: obj.votes + 1} : obj)
    case 'CREATE':
      return [...state, action.obj]
    case 'INIT':
      return action.data
    default:
      return state
  }
}

export default reducer