

const Person = ({personID, person, deletePerson}) => {
    return <div>
    <div>{person.name} {person.number} <button onClick={() => deletePerson(personID)} >delete</button> </div>
    <br/>
    </div>
  }

const Persons = ({persons, keyWord, deletePerson}) => {
    return <div>{persons.filter(p => p.name.toLowerCase().includes(keyWord)).map((p) => {
        return <Person key={p.id} personID={p.id} person={p} deletePerson={deletePerson}/>
      }
      )}
    </div>
}

export default Persons