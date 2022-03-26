const Person = ({person}) => {
    return <p>{person.name} {person.number}</p>
  }

const Persons = ({persons, keyWord}) => {
    return <div>{persons.filter(p => p.name.toLowerCase().includes(keyWord)).map((p) => {
        return <Person key={p.id} person={p}/>
      }
      )}
    </div>
}

export default Persons