import React from 'react';


const Course = ({course}) => {
    let total = course.parts.reduce(
      (previousValue, part) => previousValue+part.exercises,
      0
      )
    return <div>
      <h1>{course.name}</h1>
      <div>
      {course.parts.map(part => 
      <p key={part.id}>{part.name} {part.id}</p>
      )}
      </div>
      <p><strong>Total of {total} exercises</strong></p>
    </div>
}

export default Course;