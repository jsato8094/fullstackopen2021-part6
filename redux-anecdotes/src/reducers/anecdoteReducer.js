const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const vote = (id, content) => {
  return {
    type: 'VOTE',
    id: id,
    content: content
  }
}

export const createNew = (content) => {
  return {
    type: 'CREATE',
    content: content
  }
}

export const initialize = (data) => {
  return {
    type: 'INIT',
    data: data
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
      const newAnec = asObject(action.content)
      return [...state, newAnec]
    case 'INIT':
      return action.data
    default:
      return state
  }
}

export default reducer