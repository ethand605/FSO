import { useState } from 'react'
// import Course from './components/course'

const Person = ({person}) => {
  return <p>{person.name} {person.number}</p>
}

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

  const addPeron = (event) => {
    event.preventDefault();
    let person = { 
      name: newName,
      number: newNum,
      id: persons.length+1
     }
    let found = false
    persons.forEach(p => {
      if (JSON.stringify(p) === JSON.stringify(person)){
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
      <form>
        <div>filter shown with<input value={keyWord} onChange={handleFilter}></input></div>
      </form>
      <h2>Add New</h2>
      <form onSubmit={addPeron}>
        <div>name: <input value={newName} onChange={handleNewName} /></div>
        <div>number: <input value={newNum} onChange={handleNewNum}/></div>
        <div><button  type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {/* <div>debug: {newName} {newNum}</div> */}
      <div>{persons.filter(p => p.name.toLowerCase().includes(keyWord)).map((p) => {
        return <Person key={p.name} person={p}/>
      }
        
      )}
      </div>
    </div>
  )
}


export default App