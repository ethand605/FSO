import { useState, useEffect } from 'react'
// import Course from './components/course'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
// import axios from 'axios'
import {getAll, create, deleteEntry} from './services/phonebook'
import './index.css'

const Notification = ({message}) =>{
  if (message==null) return null;
  return <div className='notification'>{message}</div>
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [keyWord, setKeyWord] = useState('')
  const [addNoti, setAddNoti] = useState(null)

  useEffect(()=>{
    getAll()
    .then(data => setPersons(data))
  },[])

  const handleNewName = (event) =>{
    setNewName(event.target.value)
  }

  const handleNewNum = (event) => {
    setNewNum(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault();
    let person = { 
      name: newName,
      number: newNum,
      // id: persons.length+1
    }
    let found = false
    persons.forEach(p => {
      if (JSON.stringify(p.name) === JSON.stringify(person.name)){
        found=true
      }
    })
    if (found){
      window.alert(`${newName} is already defined`)
    }else{
      create(person)
        .then(persn=> setPersons(persons.concat(persn)))
        .catch(err=> console.log(err))
      setAddNoti(`succesfully added ${newName}`)
      setTimeout(()=>
        setAddNoti(null), 5000)
    }
  }

  const deletePerson = (id) => {
    deleteEntry(id)
    setPersons(persons.filter(person => person.id!==id))
  }

  const handleFilter = (event) => {
    let filter = event.target.value
    setKeyWord(filter)
    
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={addNoti} />
      <Filter value={keyWord} onChange={handleFilter}/>
      <h2>Add New</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNewName={handleNewName} newNum={newNum} handleNewNum={handleNewNum} />
      <h2>Numbers</h2>
      <Persons keyWord={keyWord} persons={persons} deletePerson={deletePerson}/>
    </div>
  )
}


export default App