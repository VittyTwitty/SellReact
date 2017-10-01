import axios from 'axios';

export function getUsers() {
  return axios.get('https://randomuser.me/api/?results=50')
    .then(response => {
      return response.data.results
    })
    .catch(error => {
      console.error('ERROR', error)
    })
}