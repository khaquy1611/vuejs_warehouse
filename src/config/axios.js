import axios from 'axios'

const apiClient = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: true, // required to handle the CSRF token
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export default apiClient
