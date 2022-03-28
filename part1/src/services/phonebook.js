import axios from "axios";

const baseURL = 'http://localhost:3001/persons';

const getAll = () => {
    return axios.get(baseURL).then(resp => resp.data);
}

const create = (newPerson) => {
    const request = axios.post(baseURL, newPerson)
    // console.log('here')
    return request.then(resp => {
        console.log(resp)
        return resp.data
    })
}

const deleteEntry = (id) => {
    axios
    .delete(`${baseURL}/${id}`)
}

// const exportIbh = ;

export {getAll, create, deleteEntry};