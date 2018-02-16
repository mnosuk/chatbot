import axios from 'axios'

const serviceUrl = 'http://localhost:8000'

export const getChatData = () => axios.get(`${serviceUrl}/chats`)

export const postChatData = obj => axios.post(`${serviceUrl}/chats`, obj)

