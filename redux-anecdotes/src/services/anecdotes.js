import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const get = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const post = async (obj) => {
  const response = await axios.post(baseUrl, obj)
  return response.data
}

const put = async (obj) => {
  const body = {
    content: obj.content,
    votes: obj.votes
  }
  const response = await axios.put(`${baseUrl}/${obj.id}`, body)
  return response.data
}

const anecdoteService = { getAll, get, post, put }

export default anecdoteService