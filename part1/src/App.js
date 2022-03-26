import { useState } from 'react'
// import Course from './components/course'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [keyWord, setKeyWord] = useState('')



  const handleNewName = (event) =>{
    setNewName(event.target.value)
  }

  const handleNewNum = (event) => {
    setNewNum(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault();
    console.log("works here");
    let person = { 
      name: newName,
      number: newNum,
      id: persons.length+1
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
      setPersons(persons.concat(person))
    }
  }

  const handleFilter = (event) => {
    let filter = event.target.value
    setKeyWord(filter)
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={keyWord} onChange={handleFilter}/>
      <h2>Add New</h2>
      {/* <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNewName} /></div>
        <div>number: <input value={newNum} onChange={handleNewNum}/></div>
        <div><button  type="submit">add</button></div>
      </form> */}
      <PersonForm addPerson={addPerson} newName={newName} handleNewName={handleNewName} newNum={newNum} handleNewNum={handleNewNum} />
      <h2>Numbers</h2>
      <Persons keyWord={keyWord} persons={persons} />
    </div>
  )
}


export default App