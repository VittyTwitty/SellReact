import axios from 'axios';

export function getPeoples() {
    return axios.get('https://randomuser.me/api/?results=5')
        .then(res => {
            return res.data.results;
        })
        .catch(error => {
            console.log(error)
        });
}
